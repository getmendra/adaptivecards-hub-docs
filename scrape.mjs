import { chromium } from "playwright";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";
import { mkdir, writeFile } from "fs/promises";
import { join } from "path";

const BASE_URL = "https://adaptivecards.microsoft.com";
const OUTPUT_DIR = "./docs";

const turndown = new TurndownService({
  headingStyle: "atx",
  codeBlockStyle: "fenced",
  bulletListMarker: "-",
});

turndown.use(gfm);

// Preserve code blocks
turndown.addRule("pre", {
  filter: ["pre"],
  replacement(content, node) {
    const code = node.querySelector("code");
    let lang = code?.className?.match(/language-(\w+)/)?.[1] || "";
    const text = code?.textContent || node.textContent;
    // If no language was detected, check if the content looks like JSON
    if (!lang && /^\s*[\{\[]/.test(text)) {
      lang = "json";
    }
    return `\n\n\`\`\`${lang}\n${text.trim()}\n\`\`\`\n\n`;
  },
});

// Remove SVG noise
turndown.addRule("removeSvg", {
  filter: "svg",
  replacement() {
    return "";
  },
});

async function discoverTopics(page) {
  await page.goto(BASE_URL, { waitUntil: "networkidle", timeout: 60000 });
  await page.waitForTimeout(5000);

  const seen = new Set();
  const topics = [];

  // Keep clicking every treeitem until a full pass finds nothing new
  // and the tree hasn't expanded. Up to 15 passes.
  for (let pass = 0; pass < 15; pass++) {
    let foundNew = false;
    let expanded = false;
    const count = await page.locator('div[role="treeitem"]').count();

    for (let i = 0; i < count; i++) {
      try {
        const item = page.locator('div[role="treeitem"]').nth(i);
        await item.click();
        await page.waitForTimeout(600);

        // Press ArrowRight to expand collapsed tree nodes and reveal
        // nested children (e.g. LineChartData under Chart.Line).
        // Click alone only navigates; ArrowRight actually expands.
        await item.press("ArrowRight");
        await page.waitForTimeout(400);

        const url = page.url();
        const topic = new URL(url).searchParams.get("topic");

        if (topic && !seen.has(topic)) {
          seen.add(topic);
          const text = (await item.textContent())
            .trim()
            .replace(/Preview$/, "")
            .trim();
          topics.push({ topic, text, url });
          console.log(`  [pass ${pass}] "${text}" -> ${topic}`);
          foundNew = true;
        }
      } catch {}
    }

    const newCount = await page.locator('div[role="treeitem"]').count();
    if (newCount > count) {
      expanded = true;
      console.log(`  Tree expanded: ${count} -> ${newCount}`);
    }

    if (!foundNew && !expanded) {
      console.log(`  Pass ${pass}: nothing new, done.`);
      break;
    }
  }

  return topics;
}

async function extractPage(page, topic) {
  const url = `${BASE_URL}/?topic=${topic}`;
  await page.goto(url, { waitUntil: "networkidle", timeout: 30000 });
  await page.waitForTimeout(3000);

  // Click all "JSON" tabs so examples show source JSON instead of rendered cards
  const jsonTabs = page.locator('[role="tab"]').filter({ hasText: "JSON" });
  const tabCount = await jsonTabs.count();
  for (let i = 0; i < tabCount; i++) {
    try {
      await jsonTabs.nth(i).click();
    } catch {
      // ignore
    }
  }
  if (tabCount > 0) {
    await page.waitForTimeout(1000);
  }

  const result = await page.evaluate(() => {
    // The main content area - find the content panel (not the sidebar)
    const allDivs = document.querySelectorAll("div");
    let contentEl = null;
    let maxTextLen = 0;

    for (const div of allDivs) {
      // Skip the sidebar tree
      if (div.getAttribute("role") === "tree") continue;
      if (div.closest('[role="tree"]')) continue;

      const text = div.innerText || "";
      if (
        text.length > maxTextLen &&
        text.length > 200 &&
        div.children.length > 0
      ) {
        // Check it's not a parent of the sidebar
        const tree = div.querySelector('[role="tree"]');
        if (!tree) {
          maxTextLen = text.length;
          contentEl = div;
        }
      }
    }

    if (!contentEl) {
      contentEl = document.body;
    }

    // Remove rendered card previews (the hidden Card tab panels)
    // and tab navigation chrome to keep only the JSON + docs
    const clone = contentEl.cloneNode(true);

    // Remove the tab buttons themselves (Card/JSON labels)
    for (const tablist of clone.querySelectorAll('[role="tablist"]')) {
      tablist.remove();
    }

    // Remove hidden tab panels (the rendered card views)
    for (const panel of clone.querySelectorAll('[role="tabpanel"][hidden]')) {
      panel.remove();
    }

    // Convert CSS grid schema tables into real HTML tables.
    // Schema rows use data-type="property-descriptor-row" with CSS subgrid.
    // Each row has children: Name, [hidden], Type, [Default], Description, Version
    const schemaRows = clone.querySelectorAll(
      '[data-type="property-descriptor-row"]'
    );
    if (schemaRows.length > 0) {
      // Find the parent grid container
      const gridParent = schemaRows[0].parentElement;
      if (gridParent) {
        const table = document.createElement("table");
        const thead = document.createElement("thead");
        const tbody = document.createElement("tbody");
        table.appendChild(thead);
        table.appendChild(tbody);

        for (let r = 0; r < schemaRows.length; r++) {
          const row = schemaRows[r];
          const cells = [...row.children].filter(
            (c) => !c.hidden && c.getAttribute("hidden") === null
          );

          const tr = document.createElement("tr");

          if (r === 0) {
            // Header row
            for (const cell of cells) {
              const th = document.createElement("th");
              th.textContent = cell.textContent.trim();
              tr.appendChild(th);
            }
            thead.appendChild(tr);
          } else {
            // Data row - extract clean text for each cell
            for (const cell of cells) {
              const td = document.createElement("td");
              // Clean up the cell text
              let text = cell.textContent.trim();
              // Fix "One ofobjectstring" -> "One of: object, string"
              text = text.replace(
                /^One of([a-z])/,
                (_, first) => "One of: " + first
              );
              if (/^One of: /.test(text)) {
                const types = text.replace("One of: ", "").match(/[a-z]+/gi);
                if (types) text = "One of: " + types.join(", ");
              }
              // Fix "PreviewSomeText" -> "(Preview) SomeText"
              text = text.replace(/^Preview([A-Z])/, "(Preview) $1");
              // "Valid values:" lists get concatenated - format them
              if (text.includes("Valid values:")) {
                const parts = text.split("Valid values:");
                const desc = parts[0].trim();
                const vals = parts[1]
                  .trim()
                  .split(",")
                  .map((v) => v.trim().replace(/^"|"$/g, ""))
                  .filter(Boolean)
                  .map((v) => `\`${v}\``)
                  .join(", ");
                text = desc + " Valid values: " + vals;
              }
              td.textContent = text;
              tr.appendChild(td);
            }
            tbody.appendChild(tr);
          }
        }

        // Replace the grid container (and its separator divs) with the table
        gridParent.innerHTML = "";
        gridParent.appendChild(table);
      }
    }

    return { html: clone.innerHTML, text: clone.innerText };
  });

  const title = await page.title();
  return { title, html: result.html, text: result.text };
}

async function main() {
  console.log("Launching browser...");
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36",
  });
  const page = await context.newPage();

  console.log("Discovering topics from sidebar...\n");
  const topics = await discoverTopics(page);
  console.log(`\nTotal unique topics: ${topics.length}`);

  await mkdir(OUTPUT_DIR, { recursive: true });
  await writeFile(
    join(OUTPUT_DIR, "_index.json"),
    JSON.stringify(topics, null, 2)
  );

  console.log("\nExtracting pages...\n");
  let success = 0;
  let failed = 0;

  for (const { topic, text } of topics) {
    const fileName = topic.replace(/[^a-zA-Z0-9_-]/g, "_") + ".md";
    const fullPath = join(OUTPUT_DIR, fileName);
    console.log(`  Extracting: "${text}" (topic=${topic}) -> ${fileName}`);

    try {
      const result = await extractPage(page, topic);
      const markdown = turndown.turndown(result.html);

      const frontmatter = [
        "---",
        `title: "${text.replace(/"/g, '\\"')}"`,
        `source: "${BASE_URL}/?topic=${topic}"`,
        `topic: "${topic}"`,
        "---",
        "",
        "",
      ].join("\n");

      await writeFile(fullPath, frontmatter + markdown);
      success++;
      console.log(`    OK (${markdown.length} chars)`);
    } catch (err) {
      failed++;
      console.warn(`    FAILED: ${err.message.substring(0, 100)}`);
    }
  }

  console.log(`\nDone! Extracted ${success} pages, ${failed} failures.`);
  console.log(`Output in: ${OUTPUT_DIR}/`);

  await browser.close();
}

main().catch((err) => {
  console.error("Fatal error:", err);
  process.exit(1);
});

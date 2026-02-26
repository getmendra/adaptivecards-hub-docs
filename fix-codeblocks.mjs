import { readdir, readFile, writeFile } from "fs/promises";
import { join } from "path";

const DOCS_DIR = "./docs";

function looksLikeJson(code) {
  const trimmed = code.trim();
  // Starts with { or [ — typical JSON
  return /^[\{\[]/.test(trimmed);
}

async function main() {
  const files = (await readdir(DOCS_DIR)).filter((f) => f.endsWith(".md"));
  let totalFixed = 0;

  for (const file of files) {
    const filePath = join(DOCS_DIR, file);
    const content = await readFile(filePath, "utf-8");

    // Match untagged code blocks: ``` followed by a newline (no language tag)
    // and capture everything until the closing ```
    const result = content.replace(
      /^```\s*\n([\s\S]*?)^```/gm,
      (match, code) => {
        if (looksLikeJson(code)) {
          totalFixed++;
          return "```json\n" + code + "```";
        }
        return match;
      }
    );

    if (result !== content) {
      await writeFile(filePath, result);
      console.log(`  Fixed: ${file}`);
    }
  }

  console.log(`\nDone. Tagged ${totalFixed} code blocks with "json".`);
}

main().catch(console.error);

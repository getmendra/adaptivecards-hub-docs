#!/usr/bin/env node
/**
 * Validates all JSON examples in docs/*.md against the extended
 * Adaptive Card schema (with charts).
 *
 * Usage:
 *   node validate-examples.mjs                  # validate all docs
 *   node validate-examples.mjs docs/Chart_*.md  # validate specific files
 *   node validate-examples.mjs --quiet          # only show failures
 */

import { readFileSync, readdirSync } from "fs";
import { join, basename } from "path";
import Ajv from "ajv";

// ── Parse args ─────────────────────────────────────────────────────────────

const args = process.argv.slice(2);
const quiet = args.includes("--quiet");
const fileArgs = args.filter((a) => !a.startsWith("--"));

// ── Load & patch schema ────────────────────────────────────────────────────

const schema = JSON.parse(readFileSync("adaptive-card-with-charts.json", "utf8"));

// Fix pre-existing bugs in the official base schema
delete schema.definitions?.Media?.properties?.captionSources?.required;
delete schema.definitions?.MediaSource?.properties?.mimeType?.required;

// ajv8 needs draft-07; draft-06 is functionally equivalent
schema.$schema = "http://json-schema.org/draft-07/schema#";
if (schema.id) {
  schema.$id = schema.id;
  delete schema.id;
}

const ajv = new Ajv({ allErrors: true, strict: false, validateFormats: false });
const validate = ajv.compile(schema);

// ── Extract JSON code blocks from markdown ─────────────────────────────────

function extractJsonBlocks(markdown, filename) {
  const blocks = [];
  // Match fenced code blocks: ```json or ``` (or longer fences like ````) followed by JSON
  // Uses a backreference to ensure the closing fence matches the opening fence length
  const regex = /(`{3,})(?:json)?\s*\n([\s\S]*?)\1/g;
  let match;
  let blockIndex = 0;

  while ((match = regex.exec(markdown)) !== null) {
    const raw = match[2].trim();
    // Only consider blocks that look like AdaptiveCard JSON objects
    if (!raw.startsWith("{")) continue;

    blockIndex++;
    try {
      const parsed = JSON.parse(raw);
      // Only validate top-level AdaptiveCard objects
      if (parsed.type === "AdaptiveCard") {
        // Calculate line number of the block start
        const beforeBlock = markdown.slice(0, match.index);
        const line = beforeBlock.split("\n").length;
        blocks.push({ json: parsed, raw, line, index: blockIndex, filename });
      }
    } catch (e) {
      // Report JSON parse errors
      const beforeBlock = markdown.slice(0, match.index);
      const line = beforeBlock.split("\n").length;
      blocks.push({
        json: null,
        parseError: e.message,
        raw,
        line,
        index: blockIndex,
        filename,
      });
    }
  }

  return blocks;
}

// ── Collect files ──────────────────────────────────────────────────────────

const docsDir = join(process.cwd(), "docs");
let files;

if (fileArgs.length > 0) {
  files = fileArgs;
} else {
  files = readdirSync(docsDir)
    .filter((f) => f.endsWith(".md"))
    .map((f) => join(docsDir, f));
}

// ── Validate ───────────────────────────────────────────────────────────────

let totalBlocks = 0;
let passed = 0;
let failed = 0;
let parseErrors = 0;
const failures = [];

for (const filepath of files) {
  const content = readFileSync(filepath, "utf8");
  const fname = basename(filepath);
  const blocks = extractJsonBlocks(content, fname);

  for (const block of blocks) {
    totalBlocks++;

    if (block.parseError) {
      parseErrors++;
      failures.push({
        file: fname,
        line: block.line,
        type: "parse-error",
        message: block.parseError,
      });
      console.log(`  PARSE ERROR  ${fname}:${block.line} - ${block.parseError}`);
      continue;
    }

    const valid = validate(block.json);
    if (valid) {
      passed++;
      if (!quiet) {
        console.log(`  PASS  ${fname}:${block.line}`);
      }
    } else {
      failed++;
      // Collect the most relevant errors (skip the noisy anyOf wrapper errors)
      const errors = (validate.errors || [])
        .filter((e) => e.keyword !== "anyOf" && e.keyword !== "oneOf")
        .slice(0, 5);

      const summary = errors
        .map((e) => {
          let msg = `${e.instancePath} ${e.message}`;
          if (e.params?.additionalProperty) msg += ` (${e.params.additionalProperty})`;
          return msg;
        })
        .join("; ");

      failures.push({
        file: fname,
        line: block.line,
        type: "validation-error",
        message: summary,
        errors,
      });
      console.log(`  FAIL  ${fname}:${block.line} - ${summary}`);
    }
  }
}

// ── Summary ────────────────────────────────────────────────────────────────

console.log("\n" + "─".repeat(60));
console.log(
  `${totalBlocks} examples found, ${passed} passed, ${failed} failed, ${parseErrors} parse errors`
);

if (failures.length > 0) {
  console.log("\nFailures:");
  for (const f of failures) {
    console.log(`  ${f.file}:${f.line} [${f.type}]`);
    console.log(`    ${f.message}`);
  }
}

console.log();
process.exit(failed + parseErrors > 0 ? 1 : 0);

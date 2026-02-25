#!/usr/bin/env node

import { readdirSync, readFileSync, statSync, writeFileSync } from "node:fs";
import path from "node:path";

const DOCS_SEGMENTS = new Set(["reference", "wallets", "data", "rise"]);
const WRITE = process.argv.includes("--write");

const files = [];
const stack = ["content"];

while (stack.length > 0) {
  const dir = stack.pop();
  const entries = readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stats = statSync(fullPath);

    if (stats.isDirectory()) {
      stack.push(fullPath);
      continue;
    }

    if (fullPath.endsWith(".md") || fullPath.endsWith(".mdx")) {
      files.push(fullPath);
    }
  }
}

const shouldRewrite = (url) => {
  if (!url.startsWith("/")) return false;
  if (url.startsWith("//")) return false;
  if (url.startsWith("/docs/")) return false;

  const segment = url.slice(1).split("/")[0]?.split(/[?#]/)[0];
  return DOCS_SEGMENTS.has(segment);
};

let changedFiles = 0;
let totalRewrites = 0;

for (const file of files) {
  const original = readFileSync(file, "utf8");
  let rewritesInFile = 0;

  const updated = original
    // Markdown links: [label](/path)
    .replace(/(?<!!)\[[^\]]*?\]\((\/[^)\s]+)([^)]*)\)/g, (match, url, suffix) => {
      if (!shouldRewrite(url)) return match;
      rewritesInFile += 1;
      return match.replace(url, `/docs${url}`);
    })
    // JSX/HTML href attr: href="/path"
    .replace(/\bhref=(["'])(\/[^"']+)\1/g, (match, quote, url) => {
      if (!shouldRewrite(url)) return match;
      rewritesInFile += 1;
      return `href=${quote}/docs${url}${quote}`;
    });

  if (rewritesInFile === 0) continue;

  changedFiles += 1;
  totalRewrites += rewritesInFile;

  if (WRITE) {
    writeFileSync(file, updated, "utf8");
  }
}

const mode = WRITE ? "write" : "dry-run";
console.log(
  `[normalize-docs-link-basepath] ${mode}: ${totalRewrites} rewrites across ${changedFiles} files`,
);

if (!WRITE && totalRewrites > 0) {
  console.log(
    "Run with --write to apply changes:\nnode ./scripts/normalize-docs-link-basepath.mjs --write",
  );
}

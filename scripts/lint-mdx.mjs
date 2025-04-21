#!/usr/bin/env node
import { readFileSync, writeFileSync } from "fs";
import { glob } from "glob";
import { remark } from "remark";
import remarkFrontmatter from "remark-frontmatter";
import remarkMdx from "remark-mdx";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import { reporter } from "vfile-reporter";

const MDX_PATTERN = "fern/**/*.mdx";

const mdxFiles = glob.sync(MDX_PATTERN);

for (const file of mdxFiles) {
  const formattedFile = await remark()
    .use(remarkMdx)
    .use(remarkFrontmatter)
    .use(remarkPresetLintRecommended)
    .process(readFileSync(file));

  const warnings = reporter(formattedFile);
  if (warnings !== "no issues found") {
    console.warn(warnings);
  }

  writeFileSync(file, formattedFile.toString());
}

console.info("✓ MDX formatting complete");

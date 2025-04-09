import { existsSync, readFileSync } from "fs";

import { findFilesOfType } from "../src/utils/findFilesOfType";

const validateMarkdown = async (directory: string) => {
  if (!directory) {
    throw new Error("❌ Directory is required");
  }

  if (!existsSync(directory)) {
    throw new Error(`❌ Directory ${directory} does not exist`);
  }

  const { compile } = await import("@mdx-js/mdx"); // dynamic import to avoid commonjs issues

  const mdxFiles = findFilesOfType(directory, /\.mdx?$/);

  const errors: string[] = [];
  await Promise.all(
    mdxFiles.map(async (file) => {
      try {
        await compile(readFileSync(file));
      } catch (error) {
        if (error instanceof Error) {
          errors.push(`❌ Error validating ${file}: ${error.message}`);
        }
      }
    }),
  );

  if (errors.length > 0) {
    throw new Error(errors.join("\n"));
  }

  console.info("✅ Successfully validated all markdown files");
};

const directory = "fern";

validateMarkdown(directory);

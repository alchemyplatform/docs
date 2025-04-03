import { existsSync, readFileSync, readdirSync } from "fs";

/**
 * Recursively finds all MD and MDX files in a directory and its subdirectories
 * @param {string} dir - The directory path to search in
 * @returns {string[]} Array of full file paths to all found .md and .mdx files
 */
const findMdxFiles = (dir: string): string[] => {
  const files: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...findMdxFiles(fullPath));
    } else if (/\.(md|mdx)$/.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
};

const validateMarkdown = async (directory: string) => {
  if (!directory) {
    throw new Error("❌ Directory is required");
  }

  if (!existsSync(directory)) {
    throw new Error(`❌ Directory ${directory} does not exist`);
  }

  const { compile } = await import("@mdx-js/mdx"); // dynamic import to avoid commonjs issues

  const mdxFiles = findMdxFiles(directory);

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

const directory = "fern/docs";

validateMarkdown(directory);

import { promises as fs } from "fs";
import matter from "gray-matter";
import yaml from "js-yaml";
import path from "path";

import type { DocsYml } from "@/content-indexer/types/docsYaml";

/**
 * Reads a file from the local filesystem
 */
export const readLocalFile = async (
  filePath: string,
): Promise<string | null> => {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.warn(`Failed to read file: ${filePath}`, error);
    return null;
  }
};

/**
 * Reads and parses a local docs.yml file
 */
export const readLocalDocsYml = async (
  baseDir: string,
): Promise<DocsYml | null> => {
  try {
    const docsYmlPath = path.join(baseDir, "docs.yml");
    const content = await readLocalFile(docsYmlPath);

    if (!content) {
      throw new Error(`Failed to read docs.yml from ${docsYmlPath}`);
    }

    const docsYml = yaml.load(content) as DocsYml;
    return docsYml;
  } catch (error) {
    console.error(`Error reading/parsing docs.yml from ${baseDir}:`, error);
    return null;
  }
};

/**
 * Reads a local MDX file and parses its frontmatter
 */
export const readLocalMdxFile = async (
  filePath: string,
): Promise<{
  frontmatter: Record<string, unknown>;
  content: string;
} | null> => {
  try {
    const fileContent = await readLocalFile(filePath);

    if (!fileContent) {
      return null;
    }

    const { data, content } = matter(fileContent);

    return {
      frontmatter: data,
      content,
    };
  } catch (error) {
    console.warn(`Failed to parse MDX file: ${filePath}`, error);
    return null;
  }
};

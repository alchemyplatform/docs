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

/**
 * Checks if a file exists
 */
export const fileExists = async (filePath: string): Promise<boolean> => {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
};

/**
 * Reads all files in a directory (non-recursive)
 */
export const readDirectory = async (dirPath: string): Promise<string[]> => {
  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });
    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => path.join(dirPath, entry.name));
  } catch (error) {
    console.error(`Error reading directory ${dirPath}:`, error);
    return [];
  }
};

/**
 * Recursively reads all files in a directory with a specific extension
 */
export const readDirectoryRecursive = async (
  dirPath: string,
  extension?: string,
): Promise<string[]> => {
  const files: string[] = [];

  try {
    const entries = await fs.readdir(dirPath, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
        const subFiles = await readDirectoryRecursive(fullPath, extension);
        files.push(...subFiles);
      } else if (!extension || fullPath.endsWith(extension)) {
        files.push(fullPath);
      }
    }
  } catch (error) {
    console.error(`Error reading directory recursively ${dirPath}:`, error);
  }

  return files;
};

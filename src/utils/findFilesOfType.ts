import { readdirSync } from "fs";

/**
 * Recursively finds all files of a given type in a directory and its subdirectories
 * @param {string} dir - The directory path to search in
 * @param {RegExp} fileType - The file type to search for
 * @returns {string[]} Array of full file paths to all found files of the given type
 */
export const findFilesOfType = (dir: string, fileType: RegExp): string[] => {
  const files: string[] = [];
  const entries = readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = `${dir}/${entry.name}`;
    if (entry.isDirectory()) {
      files.push(...findFilesOfType(fullPath, fileType));
    } else if (fileType.test(entry.name)) {
      files.push(fullPath);
    }
  }

  return files;
};

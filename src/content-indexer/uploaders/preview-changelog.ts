import type { Redis } from "@upstash/redis";
import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";

import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

import { PREVIEW_TTL_SECONDS } from "./redis.ts";

/**
 * Uploads a single changelog file to Redis under a branch-scoped key.
 * Returns whether a reindex is needed (new or deleted file).
 *
 * @param filename - Changelog filename (e.g., "2025-11-20.md")
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadChangelogFile = async (
  filename: string,
  branch: string,
  redis: Redis,
): Promise<{ reindexNeeded: boolean }> => {
  const fullPath = path.join(process.cwd(), "content", "changelog", filename);
  const redisKey = `${branch}:changelog:${filename}`;

  let content: string;
  try {
    content = await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      // File deleted — remove branch key so previewGet falls back to main:
      await redis.del(redisKey);
      console.info(`  🗑️ ${filename} deleted -> removed ${redisKey}`);
      return { reindexNeeded: true };
    }
    throw error;
  }

  // Detect new files: no existing branch key or main key means this is new
  const existingBranchContent = await redis.get<string>(redisKey);
  const existingMainContent = await redis.get<string>(
    `main:changelog:${filename}`,
  );
  const isNew = existingBranchContent === null && existingMainContent === null;

  await redis.set(redisKey, content, { ex: PREVIEW_TTL_SECONDS });
  console.info(`  📄 ${filename} -> ${redisKey}`);

  // New files need reindex (to add the route to the index); content-only edits don't
  // because the changelog index only stores date + filePath, not content.
  return { reindexNeeded: isNew };
};

/**
 * Returns changelog filenames that differ from main.
 * Includes both committed changes (git diff) and untracked new files.
 */
const getChangedChangelogFiles = (): string[] => {
  // Committed/staged changes vs main
  const diffOutput = execSync(
    "git diff --name-only origin/main -- content/changelog/",
    { encoding: "utf-8" },
  );

  // Untracked new files not yet committed
  const untrackedOutput = execSync(
    "git ls-files --others --exclude-standard -- content/changelog/",
    { encoding: "utf-8" },
  );

  const allFiles = new Set([
    ...diffOutput.trim().split("\n"),
    ...untrackedOutput.trim().split("\n"),
  ]);

  return [...allFiles]
    .filter((line) => line.length > 0 && line.endsWith(".md"))
    .map((line) => path.basename(line));
};

/**
 * Uploads only changelog files that differ from main and exist in the path index.
 *
 * @param pathIndex - The changelog path index to validate against
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadChangedChangelogFiles = async (
  pathIndex: PathIndex,
  branch: string,
  redis: Redis,
): Promise<void> => {
  const changedFiles = getChangedChangelogFiles();

  // Only upload files that are in the path index
  const indexedFiles = new Set(
    Object.values(pathIndex)
      .filter((entry) => entry.type === "changelog")
      .map((entry) => entry.filePath),
  );

  const toUpload = changedFiles.filter((f) => indexedFiles.has(f));

  if (toUpload.length === 0) {
    console.info("\n📤 No changed changelog files to upload");
    return;
  }

  console.info(
    `\n📤 Uploading ${toUpload.length} changed changelog file${toUpload.length === 1 ? "" : "s"} to Redis...`,
  );

  await Promise.all(
    toUpload.map((filename) => uploadChangelogFile(filename, branch, redis)),
  );

  console.info(
    `✅ ${toUpload.length} changelog file${toUpload.length === 1 ? "" : "s"} uploaded`,
  );
};

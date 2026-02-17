import { execSync } from "child_process";
import fs from "fs/promises";
import path from "path";

import type { Redis } from "@upstash/redis";

import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

import { PREVIEW_TTL_SECONDS } from "./redis.ts";

/**
 * Uploads a single MDX file to Redis under a branch-scoped key.
 *
 * @param filePath - Path relative to fern/ (e.g., "pages/intro.mdx")
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadMdxFile = async (
  filePath: string,
  branch: string,
  redis: Redis,
): Promise<void> => {
  const fullPath = path.join(process.cwd(), "fern", filePath);
  const content = await fs.readFile(fullPath, "utf-8");
  const redisKey = `${branch}:mdx:${filePath}`;

  await redis.set(redisKey, content, { ex: PREVIEW_TTL_SECONDS });
  console.info(`  📄 ${filePath} -> ${redisKey}`);
};

/**
 * Returns MDX/MD file paths (relative to fern/) that differ from main.
 * Uses git diff to compare the current branch against main.
 */
const getChangedMdxFiles = (): string[] => {
  const output = execSync("git diff --name-only main -- fern/", {
    encoding: "utf-8",
  });

  return output
    .trim()
    .split("\n")
    .filter((line) => line.length > 0 && /\.(mdx|md)$/.test(line))
    .map((line) => line.replace(/^fern\//, ""));
};

/**
 * Uploads only MDX files that differ from main and exist in the path index.
 * Files unchanged from main are skipped — previewGet falls back to main: keys.
 *
 * @param pathIndex - The path index to validate against
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadChangedMdxFiles = async (
  pathIndex: PathIndex,
  branch: string,
  redis: Redis,
): Promise<void> => {
  const changedFiles = getChangedMdxFiles();

  // Only upload files that are in the path index (filters out deleted files)
  const indexedFiles = new Set(
    Object.values(pathIndex)
      .filter((entry) => entry.type === "mdx")
      .map((entry) => entry.filePath),
  );

  const toUpload = changedFiles.filter((f) => indexedFiles.has(f));

  if (toUpload.length === 0) {
    console.info("\n📤 No changed MDX files to upload");
    return;
  }

  console.info(
    `\n📤 Uploading ${toUpload.length} changed MDX file${toUpload.length === 1 ? "" : "s"} to Redis...`,
  );

  await Promise.all(
    toUpload.map((filePath) => uploadMdxFile(filePath, branch, redis)),
  );

  console.info(`✅ ${toUpload.length} file${toUpload.length === 1 ? "" : "s"} uploaded`);
};

import type { Redis } from "@upstash/redis";
import { execSync } from "child_process";
import fs from "fs/promises";
import matter from "gray-matter";
import path from "path";

import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

import { PREVIEW_TTL_SECONDS } from "./redis.ts";

/** Frontmatter fields that affect routing or nav structure. */
const ROUTING_FIELDS = ["slug", "hidden", "title", "description"] as const;

/**
 * Uploads a single MDX file to Redis under a branch-scoped key.
 * Returns true if routing-relevant frontmatter changed (caller should reindex).
 *
 * @param filePath - Path relative to content/ (e.g., "pages/intro.mdx")
 * @param branch - Branch identifier for Redis key prefix
 * @param redis - Redis client instance
 */
export const uploadMdxFile = async (
  filePath: string,
  branch: string,
  redis: Redis,
): Promise<{ reindexNeeded: boolean }> => {
  const baseDir = path.join(process.cwd(), "content");
  const fullPath = path.resolve(baseDir, filePath);

  // Prevent path traversal outside content/
  if (!fullPath.startsWith(baseDir + path.sep)) {
    console.warn(`  ⚠️ Skipping ${filePath}: path outside content/`);
    return { reindexNeeded: false };
  }

  const redisKey = `${branch}:mdx:${filePath}`;

  let content: string;
  try {
    content = await fs.readFile(fullPath, "utf-8");
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === "ENOENT") {
      // File deleted — remove branch key so previewGet falls back to main:
      await redis.del(redisKey);
      console.info(`  🗑️ ${filePath} deleted -> removed ${redisKey}`);
      return { reindexNeeded: true };
    }
    throw error;
  }

  // Check if routing-relevant frontmatter changed vs previous upload.
  // Falls back to main: if no branch key exists yet (first edit to this file).
  const previousContent =
    (await redis.get<string>(redisKey)) ??
    (await redis.get<string>(`main:mdx:${filePath}`));
  let reindexNeeded = false;

  if (previousContent) {
    const newFm = matter(content).data;
    const prevFm = matter(previousContent).data;
    reindexNeeded = ROUTING_FIELDS.some(
      (field) => String(newFm[field] ?? "") !== String(prevFm[field] ?? ""),
    );
  }

  await redis.set(redisKey, content, { ex: PREVIEW_TTL_SECONDS });
  console.info(`  📄 ${filePath} -> ${redisKey}`);

  return { reindexNeeded };
};

/**
 * Returns MDX/MD file paths (relative to content/) that differ from main.
 * Includes both committed changes (git diff) and untracked new files
 * so previews work without requiring a commit first.
 */
const getChangedMdxFiles = (): string[] => {
  // Committed/staged changes vs main
  const diffOutput = execSync("git diff --name-only origin/main -- content/", {
    encoding: "utf-8",
  });

  // Untracked new files not yet committed
  const untrackedOutput = execSync(
    "git ls-files --others --exclude-standard -- content/",
    { encoding: "utf-8" },
  );

  const allFiles = new Set([
    ...diffOutput.trim().split("\n"),
    ...untrackedOutput.trim().split("\n"),
  ]);

  return [...allFiles]
    .filter((line) => line.length > 0 && /\.(mdx|md)$/.test(line))
    .map((line) => line.replace(/^content\//, ""));
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

  console.info(
    `✅ ${toUpload.length} file${toUpload.length === 1 ? "" : "s"} uploaded`,
  );
};

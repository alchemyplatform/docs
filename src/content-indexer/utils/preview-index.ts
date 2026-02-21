import path from "path";

import { buildChangelogIndex } from "@/content-indexer/indexers/changelog.ts";
import { buildDocsContentIndex } from "@/content-indexer/indexers/main.ts";
import { uploadChangedChangelogFiles } from "@/content-indexer/uploaders/preview-changelog.ts";
import { uploadChangedMdxFiles } from "@/content-indexer/uploaders/preview-mdx.ts";
import { uploadSpecs } from "@/content-indexer/uploaders/preview-specs.ts";
import { storeToRedis } from "@/content-indexer/uploaders/redis.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

/**
 * Runs the content indexer in preview mode and uploads changed MDX files + specs.
 * Stores path index + nav trees under branch-scoped Redis keys,
 * then uploads MDX files that differ from main, and all specs.
 */
export const runIndexAndUpload = async (branch: string): Promise<void> => {
  console.info("\n🔍 Indexing...");

  const { pathIndex, navigationTrees, specs } = await buildDocsContentIndex({
    source: {
      type: "filesystem",
      basePath: path.join(process.cwd(), "fern"),
      specsDir: path.join(process.cwd(), "fern", "api-specs"),
    },
    branchId: branch,
    indexerType: "docs",
    mode: "preview",
  });

  await storeToRedis(pathIndex, navigationTrees, {
    branchId: branch,
    indexerType: "docs",
    quiet: true,
  });

  const redis = getRedis();
  await Promise.all([
    uploadChangedMdxFiles(pathIndex, branch, redis),
    specs && specs.size > 0
      ? uploadSpecs(specs, branch, redis)
      : Promise.resolve(),
  ]);

  await runChangelogIndexAndUpload(branch);
};

/**
 * Runs the changelog indexer in preview mode and uploads changed changelog files.
 * Stores the changelog path index under a branch-scoped Redis key,
 * then uploads only changelog files that differ from main.
 */
export const runChangelogIndexAndUpload = async (
  branch: string,
): Promise<void> => {
  console.info("\n🔍 Running changelog indexer (preview mode)...\n");

  const { pathIndex } = await buildChangelogIndex({
    localBasePath: path.join(process.cwd(), "fern/changelog"),
    branchId: branch,
  });

  await storeToRedis(pathIndex, undefined, {
    branchId: branch,
    indexerType: "changelog",
    quiet: true,
  });

  const redis = getRedis();
  await uploadChangedChangelogFiles(pathIndex, branch, redis);
};

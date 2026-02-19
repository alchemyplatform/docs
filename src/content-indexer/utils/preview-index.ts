import path from "path";

import { buildDocsContentIndex } from "@/content-indexer/indexers/main.ts";
import { uploadChangedMdxFiles } from "@/content-indexer/uploaders/preview-mdx.ts";
import { storeToRedis } from "@/content-indexer/uploaders/redis.ts";
import { getRedis } from "@/content-indexer/utils/redis.ts";

/**
 * Runs the content indexer in preview mode and uploads changed MDX files.
 * Stores path index + nav trees under branch-scoped Redis keys,
 * then uploads only MDX files that differ from main.
 */
export const runIndexAndUpload = async (branch: string): Promise<void> => {
  console.info("\n🔍 Running content indexer (preview mode)...\n");

  const { pathIndex, navigationTrees } = await buildDocsContentIndex({
    source: {
      type: "filesystem",
      basePath: path.join(process.cwd(), "fern"),
    },
    branchId: branch,
    indexerType: "docs",
    mode: "preview",
  });

  await storeToRedis(pathIndex, navigationTrees, {
    branchId: branch,
    indexerType: "docs",
  });

  const redis = getRedis();
  await uploadChangedMdxFiles(pathIndex, branch, redis);
};

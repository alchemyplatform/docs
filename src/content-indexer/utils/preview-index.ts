import path from "path";

import { buildDocsContentIndex } from "@/content-indexer/indexers/main.ts";
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
  console.info("\n🔍 Running content indexer (preview mode)...\n");

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
  });

  const redis = getRedis();
  await Promise.all([
    uploadChangedMdxFiles(pathIndex, branch, redis),
    specs && specs.size > 0
      ? uploadSpecs(specs, branch, redis)
      : Promise.resolve(),
  ]);
};

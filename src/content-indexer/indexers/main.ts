import {
  batchFetchContent,
  type ContentSource,
} from "@/content-indexer/core/batch-fetcher.js";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs.ts";
import { scanDocsYml } from "@/content-indexer/core/scanner.ts";
import type { IndexerResult } from "@/content-indexer/types/indexer.ts";
import { readLocalDocsYml } from "@/content-indexer/utils/filesystem.ts";

export interface DocsIndexerConfig {
  source: ContentSource;
  stripPathPrefix?: string;
  branchId: string;
  indexerType: "docs" | "sdk";
  mode?: "preview" | "production"; // Only relevant for logging
}

/**
 * Unified docs content indexer.
 * Reads from local filesystem and processes docs.yml through 3 phases:
 * 1. SCAN - Parse docs.yml to discover all paths and specs
 * 2. BATCH FETCH - Read all content from filesystem
 * 3. PROCESS - Build path index, navigation trees, and Algolia records
 */
export const buildDocsContentIndex = async (
  config: DocsIndexerConfig,
): Promise<IndexerResult> => {
  console.info(`🔍 Building content index (branch: ${config.branchId})...`);

  // Read docs.yml from local filesystem
  const docsYml = await readLocalDocsYml(config.source.basePath);
  if (!docsYml) {
    throw new Error(`Failed to read docs.yml from ${config.source.basePath}`);
  }

  // PHASE 1: SCAN
  console.info("📋 Phase 1: Scanning docs.yml...");
  const scanResult = scanDocsYml(docsYml);
  console.info(
    `   Found ${scanResult.mdxPaths.size} MDX files, ${scanResult.specNames.size} specs`,
  );

  // PHASE 2: BATCH FETCH
  console.info("📥 Phase 2: Fetching content...");
  const contentCache = await batchFetchContent(scanResult, config.source);

  // PHASE 3: PROCESS
  console.info("⚙️  Phase 3: Processing...");
  const outputs = buildAllOutputs(
    docsYml,
    contentCache,
    config.indexerType,
    config.stripPathPrefix,
  );

  console.info(
    `📊 Generated ${Object.keys(outputs.pathIndex).length} routes, ${outputs.algoliaRecords.length} Algolia records`,
  );

  return {
    ...outputs,
    specs: contentCache.getAllSpecs(),
  };
};

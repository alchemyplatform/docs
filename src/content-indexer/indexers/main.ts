import yaml from "js-yaml";

import {
  batchFetchContent,
  type ContentSource,
} from "@/content-indexer/core/batch-fetcher.js";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs.js";
import { scanDocsYml } from "@/content-indexer/core/scanner.js";
import type { DocsYml } from "@/content-indexer/types/docsYaml.js";
import type { IndexerResult } from "@/content-indexer/types/indexer.js";
import { readLocalDocsYml } from "@/content-indexer/utils/filesystem.js";
import {
  fetchFileFromGitHub,
  type RepoConfig,
} from "@/content-indexer/utils/github.js";

export interface DocsIndexerConfig {
  source: ContentSource; // filesystem or github
  repoConfig: RepoConfig;
  branchId: string;
  mode?: "preview" | "production"; // Only relevant for logging
}

/**
 * Unified docs content indexer.
 * Handles both main docs (local filesystem) and SDK refs (GitHub API).
 *
 * Processes docs.yml through 3 phases:
 * 1. SCAN - Parse docs.yml to discover all paths and specs
 * 2. BATCH FETCH - Read all content (filesystem or GitHub)
 * 3. PROCESS - Build path index, navigation trees, and Algolia records
 */
export const buildDocsContentIndex = async (
  config: DocsIndexerConfig,
): Promise<IndexerResult> => {
  console.info(`🔍 Building content index (branch: ${config.branchId})...`);

  // Read docs.yml based on source type
  let docsYml: DocsYml;
  if (config.source.type === "filesystem") {
    const result = await readLocalDocsYml(config.source.basePath);
    if (!result) {
      throw new Error(`Failed to read docs.yml from ${config.source.basePath}`);
    }
    docsYml = result;
  } else {
    const docsYmlPath = `${config.repoConfig.docsPrefix}/docs.yml`;
    const content = await fetchFileFromGitHub(docsYmlPath, config.repoConfig);
    if (!content) {
      throw new Error(`Failed to fetch ${docsYmlPath} from GitHub`);
    }
    docsYml = yaml.load(content) as DocsYml;
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
  const outputs = buildAllOutputs(docsYml, contentCache, config.repoConfig);

  console.info(
    `📊 Generated ${Object.keys(outputs.pathIndex).length} routes, ${outputs.algoliaRecords.length} Algolia records`,
  );

  return outputs;
};

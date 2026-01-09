import type { BuildAllOutputsResult } from "@/content-indexer/collectors/processing-context";
import {
  batchFetchContent,
  type ContentSource,
} from "@/content-indexer/core/batch-fetcher";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs";
import { scanDocsYml } from "@/content-indexer/core/scanner";
import { readLocalDocsYml } from "@/content-indexer/utils/filesystem";
import type { RepoConfig } from "@/content-indexer/utils/github";

export interface MainIndexerConfig {
  mode: "preview" | "production";
  localBasePath: string; // Path to fern/ directory
  branchId: string; // For branch-scoped Redis keys (e.g., "main" or "branch-abc123")
  repoConfig: RepoConfig; // Needed for path-building
}

/**
 * Main content indexer for docs repo.
 * Processes docs.yml and all manual content (main docs + manual wallet pages).
 *
 * - Preview mode: 100% local filesystem (zero GitHub API calls)
 * - Production mode: Same as preview (local only)
 *
 * Updates:
 * - {branch}/path-index:main
 * - {branch}/nav-tree:* (all tabs including wallets with manual sections)
 * - alchemy_docs Algolia index
 */
export const buildMainContentIndex = async (
  config: MainIndexerConfig,
): Promise<BuildAllOutputsResult> => {
  const source: ContentSource = {
    type: "filesystem",
    basePath: config.localBasePath,
  };

  console.info(
    `🔍 Building main content index (${config.mode} mode, branch: ${config.branchId})...`,
  );

  // Read and parse local docs.yml
  const docsYml = await readLocalDocsYml(config.localBasePath);
  if (!docsYml) {
    throw new Error(`Failed to read docs.yml from ${config.localBasePath}`);
  }

  // PHASE 1: SCAN
  console.info("📋 Phase 1: Scanning docs.yml for all paths and specs...");
  const scanResult = scanDocsYml(docsYml);
  console.info(
    `   Found ${scanResult.mdxPaths.size} MDX files, ${scanResult.specNames.size} specs`,
  );

  // PHASE 2: BATCH READ (all from filesystem)
  console.info("📥 Phase 2: Reading all content from filesystem...");
  const contentCache = await batchFetchContent(scanResult, source);

  // PHASE 3: PROCESS
  console.info("⚙️  Phase 3: Processing with cached content...");
  const { pathIndex, navigationTrees, algoliaRecords } = buildAllOutputs(
    docsYml,
    contentCache,
    config.repoConfig,
  );

  console.info(
    `📊 Generated ${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} Algolia records`,
  );

  return { pathIndex, navigationTrees, algoliaRecords };
};

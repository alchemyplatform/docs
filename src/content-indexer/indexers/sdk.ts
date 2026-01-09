import yaml from "js-yaml";

import {
  batchFetchContent,
  type ContentSource,
} from "@/content-indexer/core/batch-fetcher";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs";
import { scanDocsYml } from "@/content-indexer/core/scanner";
import type { AlgoliaRecord } from "@/content-indexer/types/algolia";
import type { DocsYml } from "@/content-indexer/types/docsYaml";
import type { NavItem } from "@/content-indexer/types/navigation";
import type { PathIndex } from "@/content-indexer/types/pathIndex";
import {
  fetchFileFromGitHub,
  type RepoConfig,
} from "@/content-indexer/utils/github";

export interface SDKIndexerConfig {
  sdkRepoConfig: RepoConfig; // aa-sdk repo config
  branchId: string; // Usually "main" for production
}

/**
 * SDK references indexer for aa-sdk repo.
 * Fetches SDK refs from aa-sdk via GitHub API and merges into wallets nav tree.
 *
 * Uses read-modify-write pattern:
 * 1. Read existing {branch}/nav-tree:wallets from Redis
 * 2. Extract and keep manual content sections
 * 3. Fetch and process SDK refs from aa-sdk
 * 4. Generate new SDK Reference section
 * 5. Merge manual sections + SDK section
 * 6. Write back complete tree
 *
 * Updates:
 * - {branch}/path-index:sdk-refs
 * - {branch}/nav-tree:wallets (read-modify-write)
 * - alchemy_docs_wallets Algolia index
 */
export const buildSDKContentIndex = async (
  config: SDKIndexerConfig,
): Promise<{
  pathIndex: PathIndex;
  walletsNavTree: NavItem[];
  algoliaRecords: AlgoliaRecord[];
}> => {
  const source: ContentSource = {
    type: "github",
    repoConfig: config.sdkRepoConfig,
  };

  console.info(`🔍 Building SDK content index (branch: ${config.branchId})...`);

  // Fetch and parse aa-sdk docs.yml
  const docsYmlPath = `${config.sdkRepoConfig.docsPrefix}/docs.yml`;
  const docsYmlContent = await fetchFileFromGitHub(
    docsYmlPath,
    config.sdkRepoConfig,
  );
  if (!docsYmlContent) {
    throw new Error(
      `Failed to fetch ${docsYmlPath} from ${config.sdkRepoConfig.repo}`,
    );
  }
  const docsYml = yaml.load(docsYmlContent) as DocsYml;

  // PHASE 1: SCAN
  console.info("📋 Phase 1: Scanning aa-sdk docs.yml for SDK refs...");
  const scanResult = scanDocsYml(docsYml);
  console.info(
    `   Found ${scanResult.mdxPaths.size} MDX files (SDK refs), ${scanResult.specNames.size} specs`,
  );

  // PHASE 2: BATCH FETCH (from GitHub)
  console.info("📥 Phase 2: Fetching SDK refs from GitHub...");
  const contentCache = await batchFetchContent(scanResult, source);

  // PHASE 3: PROCESS
  console.info("⚙️  Phase 3: Processing SDK refs...");
  const { pathIndex, navigationTrees, algoliaRecords } = buildAllOutputs(
    docsYml,
    contentCache,
    config.sdkRepoConfig,
  );

  // TODO: Implement read-modify-write for wallets nav tree
  // For now, return the SDK nav tree as-is
  // In Phase 3 completion, we'll add Redis read/merge logic

  console.info(
    `📊 Generated ${Object.keys(pathIndex).length} SDK ref routes, ${algoliaRecords.length} Algolia records`,
  );

  return {
    pathIndex,
    walletsNavTree: navigationTrees.wallets || [],
    algoliaRecords,
  };
};

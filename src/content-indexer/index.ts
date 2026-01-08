import yaml from "js-yaml";

import type { BuildAllOutputsResult } from "@/content-indexer/collectors/processing-context";
import {
  batchFetchContent,
  type ContentSource,
} from "@/content-indexer/core/batch-fetcher";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs";
import { scanDocsYml } from "@/content-indexer/core/scanner";
import type { DocsYml } from "@/content-indexer/types/docsYaml";
import { readLocalDocsYml } from "@/content-indexer/utils/filesystem";
import {
  fetchFileFromGitHub,
  type RepoConfig,
} from "@/content-indexer/utils/github";

/**
 * Main content indexer function using 3-phase architecture.
 * Phase 1: Scan docs.yml for all file paths and spec names
 * Phase 2: Batch fetch/read all content in parallel
 * Phase 3: Process with cached content to build index, nav trees, and Algolia records
 *
 * @param source - Content source (filesystem or GitHub)
 * @param repoConfig - Repository configuration (needed for path-building even in filesystem mode)
 */
export const buildContentIndex = async (
  source: ContentSource,
  repoConfig: RepoConfig,
): Promise<BuildAllOutputsResult> => {
  const sourceName =
    source.type === "filesystem" ? "local filesystem" : repoConfig.repo;
  console.info(
    `🔍 Building content index from ${sourceName}. This may take a few minutes...`,
  );

  // Read/fetch and parse docs.yml
  let docsYml: DocsYml;

  if (source.type === "filesystem") {
    const result = await readLocalDocsYml(source.basePath);
    if (!result) {
      throw new Error(`Failed to read docs.yml from ${source.basePath}`);
    }
    docsYml = result;
  } else {
    const docsYmlPath = `${source.repoConfig.docsPrefix}/docs.yml`;
    const docsYmlContent = await fetchFileFromGitHub(
      docsYmlPath,
      source.repoConfig,
    );
    if (!docsYmlContent) {
      throw new Error(
        `Failed to fetch ${docsYmlPath} from ${source.repoConfig.repo}`,
      );
    }
    docsYml = yaml.load(docsYmlContent) as DocsYml;
  }

  // PHASE 1: SCAN
  console.info("📋 Phase 1: Scanning docs.yml for all paths and specs...");
  const scanResult = scanDocsYml(docsYml);
  console.info(
    `   Found ${scanResult.mdxPaths.size} MDX files, ${scanResult.specNames.size} specs`,
  );

  // PHASE 2: BATCH FETCH/READ
  console.info(
    `📥 Phase 2: ${source.type === "filesystem" ? "Reading" : "Fetching"} all content in parallel...`,
  );
  const contentCache = await batchFetchContent(scanResult, source);

  // PHASE 3: PROCESS
  console.info("⚙️  Phase 3: Processing with cached content...");
  const { pathIndex, navigationTrees, algoliaRecords } = buildAllOutputs(
    docsYml,
    contentCache,
    repoConfig,
  );

  console.info(
    `📊 Generated ${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} Algolia records`,
  );

  // Count sources and types for debugging
  const sources = Object.values(pathIndex).reduce(
    (acc, entry) => {
      acc[entry.source] = (acc[entry.source] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  const types = Object.values(pathIndex).reduce(
    (acc, entry) => {
      acc[entry.type] = (acc[entry.type] || 0) + 1;
      return acc;
    },
    {} as Record<string, number>,
  );
  console.info(`   Sources: ${JSON.stringify(sources)}`);
  console.info(`   Types: ${JSON.stringify(types)}`);

  return { pathIndex, navigationTrees, algoliaRecords };
};

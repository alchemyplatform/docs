import matter from "gray-matter";
import path from "path";

import { fetchApiSpec } from "@/content-indexer/utils/apiSpecs.js";
import { readLocalMdxFile } from "@/content-indexer/utils/filesystem.js";
import {
  fetchFileFromGitHub,
  type RepoConfig,
} from "@/content-indexer/utils/github.js";

import { ContentCache } from "./content-cache.js";
import type { ScanResult } from "./scanner.js";

/**
 * Content source configuration - either filesystem or GitHub API
 */
export type ContentSource =
  | { type: "filesystem"; basePath: string }
  | { type: "github"; repoConfig: RepoConfig };

/**
 * Fetches all MDX files and API specs in parallel and populates the cache.
 * This is the core optimization: all I/O happens upfront in parallel.
 *
 * Supports two modes:
 * - filesystem: Reads from local filesystem (for preview mode)
 * - github: Fetches from GitHub API (for production/SDK indexer)
 *
 * @param scanResult - Result from scanDocsYml containing all paths and spec names
 * @param source - Content source (filesystem or GitHub)
 * @returns Populated ContentCache ready for processing
 */
export const batchFetchContent = async (
  scanResult: ScanResult,
  source: ContentSource,
): Promise<ContentCache> => {
  const cache = new ContentCache();

  const sourceType = source.type;
  console.info(
    `   ${sourceType === "filesystem" ? "Reading" : "Fetching"} ${scanResult.mdxPaths.size} MDX files and ${scanResult.specNames.size} specs...`,
  );

  // Fetch/read all MDX files in parallel
  const mdxPromises = Array.from(scanResult.mdxPaths).map(async (mdxPath) => {
    try {
      if (source.type === "filesystem") {
        // Read from local filesystem
        const fullPath = path.join(source.basePath, mdxPath);
        const result = await readLocalMdxFile(fullPath);

        if (result) {
          cache.setMdxContent(mdxPath, {
            frontmatter: result.frontmatter,
            content: result.content,
          });
        }
      } else {
        // Fetch from GitHub API
        const actualPath = mdxPath.replace(
          source.repoConfig.stripPathPrefix || "",
          "",
        );
        const fullPath = `${source.repoConfig.docsPrefix}/${actualPath}`;

        const content = await fetchFileFromGitHub(fullPath, source.repoConfig);
        if (content) {
          const { data, content: body } = matter(content);
          cache.setMdxContent(mdxPath, {
            frontmatter: data,
            content: body,
          });
        }
      }
    } catch (error) {
      console.warn(
        `   ⚠️  Failed to ${source.type === "filesystem" ? "read" : "fetch"} MDX file: ${mdxPath}`,
        error,
      );
    }
  });

  // Fetch all API specs in parallel (always from remote)
  const specPromises = Array.from(scanResult.specNames).map(async (apiName) => {
    try {
      const result = await fetchApiSpec(apiName);
      if (result) {
        cache.setSpec(apiName, result);
      }
    } catch (error) {
      console.warn(`   ⚠️  Failed to fetch spec: ${apiName}`, error);
    }
  });

  // Wait for all fetches to complete
  await Promise.all([...mdxPromises, ...specPromises]);

  const stats = cache.getStats();
  console.info(
    `   ✓ ${sourceType === "filesystem" ? "Read" : "Fetched"} ${stats.mdxCount}/${scanResult.mdxPaths.size} MDX files and ${stats.specCount}/${scanResult.specNames.size} specs`,
  );

  return cache;
};

import fs from "fs";
import path from "path";

import { readApiSpec } from "@/content-indexer/utils/apiSpecs.ts";
import { readLocalMdxFile } from "@/content-indexer/utils/filesystem.ts";

import { ContentCache } from "./content-cache.ts";
import type { ScanResult } from "./scanner.ts";

/**
 * Content source configuration for filesystem reads
 */
export type ContentSource = {
  type: "filesystem";
  basePath: string;
  stripPathPrefix?: string;
  specsDir?: string;
};

/**
 * Fetches all MDX files and API specs in parallel and populates the cache.
 * Reads from local filesystem with optional path prefix stripping.
 *
 * @param scanResult - Result from scanDocsYml containing all paths and spec names
 * @param source - Content source (filesystem with optional stripPathPrefix)
 * @returns Populated ContentCache ready for processing
 */
export const batchFetchContent = async (
  scanResult: ScanResult,
  source: ContentSource,
): Promise<ContentCache> => {
  const cache = new ContentCache();

  // Fail fast if specsDir is set but doesn't exist (forgot to run generate?)
  if (source.specsDir && !fs.existsSync(source.specsDir)) {
    throw new Error(
      `specsDir is set but ${source.specsDir} does not exist. Run "pnpm generate" first.`,
    );
  }

  console.info(
    `   Reading ${scanResult.mdxPaths.size} MDX files and ${scanResult.specNames.size} specs...`,
  );

  // Read all MDX files in parallel
  const mdxPromises = Array.from(scanResult.mdxPaths).map(async (mdxPath) => {
    try {
      // Strip path prefix if configured (e.g., "wallets/" from aa-sdk docs.yml)
      const actualPath = mdxPath.replace(source.stripPathPrefix || "", "");
      const fullPath = path.join(source.basePath, actualPath);
      const result = await readLocalMdxFile(fullPath);

      if (result) {
        cache.setMdxContent(mdxPath, {
          frontmatter: result.frontmatter,
          content: result.content,
        });
      }
    } catch (error) {
      console.warn(`   ⚠️  Failed to read MDX file: ${mdxPath}`, error);
    }
  });

  // Read all API specs in parallel
  const { specsDir } = source;
  const specPromises = specsDir
    ? Array.from(scanResult.specNames).map(async (apiName) => {
        try {
          const result = await readApiSpec(apiName, specsDir);
          if (result) {
            cache.setSpec(apiName, result);
          }
        } catch (error) {
          console.warn(`   ⚠️  Failed to read spec: ${apiName}`, error);
        }
      })
    : [];

  // Wait for all reads to complete
  await Promise.all([...mdxPromises, ...specPromises]);

  const stats = cache.getStats();
  console.info(
    `   ✓ Read ${stats.mdxCount}/${scanResult.mdxPaths.size} MDX files and ${stats.specCount}/${scanResult.specNames.size} specs`,
  );

  return cache;
};

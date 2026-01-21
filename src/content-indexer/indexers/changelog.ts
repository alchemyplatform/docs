import { createHash } from "crypto";
import { promises as fs } from "fs";
import path from "path";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";
import type { IndexerResult } from "@/content-indexer/types/indexer.ts";
import type {
  ChangelogPathIndexEntry,
  PathIndex,
} from "@/content-indexer/types/pathIndex.ts";
import { readLocalFile } from "@/content-indexer/utils/filesystem.ts";
import { truncateRecord } from "@/content-indexer/utils/truncate-record.ts";

export interface ChangelogIndexerConfig {
  localBasePath: string; // Path to fern/changelog/ directory
  branchId: string;
}

/**
 * Parse a changelog filename (e.g., "2025-11-20.md") into date components
 */
const parseChangelogFilename = (
  filename: string,
): {
  date: string;
  year: string;
  month: string;
  day: string;
} | null => {
  const match = filename.match(/^(\d{4})-(\d{2})-(\d{2})\.md$/);
  if (!match) return null;

  const [, year, month, day] = match;
  return {
    date: `${year}-${month}-${day}`,
    year,
    month,
    day,
  };
};

/**
 * Changelog indexer for changelog entries.
 * Simpler than main indexer - no nav trees, just path index and Algolia.
 *
 * Updates:
 * - {branch}/path-index:changelog
 * - {branch}_alchemy_docs_changelog Algolia index
 */
export const buildChangelogIndex = async (
  config: ChangelogIndexerConfig,
): Promise<IndexerResult> => {
  console.info(`🔍 Building changelog index (branch: ${config.branchId})...`);

  // Read all files from changelog directory
  const files = await fs.readdir(config.localBasePath);

  // Filter and parse changelog files
  const changelogFiles = files
    .map((filename) => {
      const parsed = parseChangelogFilename(filename);
      if (!parsed) {
        // Silently skip dotfiles (.gitkeep, .DS_Store, etc.)
        if (!filename.startsWith(".")) {
          console.warn(`   ⚠️  Skipping non-date file: ${filename}`);
        }
        return null;
      }
      return { filename, ...parsed };
    })
    .filter((entry): entry is NonNullable<typeof entry> => entry !== null);

  // Sort by date descending (newest first)
  changelogFiles.sort((a, b) => b.date.localeCompare(a.date));

  console.info(`   📄 Found ${changelogFiles.length} changelog entries`);

  const resultPromises = changelogFiles.map(
    async ({ filename, date, year, month, day }) => {
      const filePath = path.join(config.localBasePath, filename);
      const content = await readLocalFile(filePath);

      if (!content) {
        console.warn(`   ⚠️  Failed to read: ${filename}`);
        return null;
      }

      // Build route: e.g., "2025/11/20"
      const route = `${year}/${Number(month)}/${Number(day)}`;
      const fullPath = `changelog/${route}`;

      // Create path index entry
      const pathIndexEntry: ChangelogPathIndexEntry = {
        type: "changelog",
        date, // ISO date string like "2025-12-11"
        filePath: filename, // Filename like "2025-12-11.md"
      };

      // Generate hash-based objectID from path (consistent with docs/SDK)
      const objectID = createHash("sha256")
        .update(fullPath)
        .digest("hex")
        .substring(0, 16);

      // Create Algolia record
      const algoliaRecord = truncateRecord({
        objectID,
        indexerType: "changelog",
        title: `Changelog - ${date}`,
        content, // Raw markdown - truncateRecord will clean it
        path: fullPath,
        pageType: "Changelog" as const,
        breadcrumbs: ["Changelog", date],
      });

      return { route, pathIndexEntry, algoliaRecord };
    },
  );

  const results = await Promise.all(resultPromises);

  // Build final outputs from results
  const { pathIndex, algoliaRecords } = results.reduce<{
    pathIndex: PathIndex;
    algoliaRecords: AlgoliaRecord[];
  }>(
    (acc, result) => {
      if (result) {
        acc.pathIndex[result.route] = result.pathIndexEntry;
        acc.algoliaRecords.push(result.algoliaRecord);
      }
      return acc;
    },
    { pathIndex: {}, algoliaRecords: [] },
  );

  console.info(
    `\n📊 Changelog index complete: ${Object.keys(pathIndex).length} routes, ${algoliaRecords.length} Algolia records`,
  );

  return {
    pathIndex,
    algoliaRecords,
    navigationTrees: undefined, // changelog has no sidebar nav
  };
};

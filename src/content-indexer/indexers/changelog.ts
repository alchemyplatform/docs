import { promises as fs } from "fs";
import path from "path";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.js";
import { readLocalFile } from "@/content-indexer/utils/filesystem.js";
import { truncateRecord } from "@/content-indexer/utils/truncate-record.js";

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
 * Extract text content from markdown for Algolia indexing.
 * Strips markdown syntax to get plain text.
 */
const extractTextFromMarkdown = (markdown: string): string => {
  return (
    markdown
      // Remove headings markdown
      .replace(/^#{1,6}\s+/gm, "")
      // Remove links but keep text
      .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
      // Remove bold/italic
      .replace(/[*_]{1,2}([^*_]+)[*_]{1,2}/g, "$1")
      // Remove inline code
      .replace(/`([^`]+)`/g, "$1")
      // Collapse multiple spaces/newlines
      .replace(/\s+/g, " ")
      .trim()
  );
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
): Promise<{
  pathIndex: PathIndex;
  algoliaRecords: AlgoliaRecord[];
}> => {
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

  // Process each changelog file in parallel
  const results = await Promise.all(
    changelogFiles.map(async ({ filename, date, year, month, day }) => {
      const filePath = path.join(config.localBasePath, filename);
      const content = await readLocalFile(filePath);

      if (!content) {
        console.warn(`   ⚠️  Failed to read: ${filename}`);
        return null;
      }

      // Build route: e.g., "2025/11/20"
      const route = `${year}/${Number(month)}/${Number(day)}`;

      // Create path index entry
      const pathIndexEntry = {
        type: "mdx" as const,
        filePath: `fern/changelog/${filename}`,
        source: "changelog" as const,
        tab: "changelog",
      };

      // Create Algolia record
      const plainText = extractTextFromMarkdown(content);
      const algoliaRecord = truncateRecord({
        objectID: `changelog-${date}`,
        title: `Changelog - ${date}`,
        content: plainText,
        path: `changelog/${route}`,
        pageType: "Changelog" as const,
        breadcrumbs: ["Changelog", date],
      });

      return { route, pathIndexEntry, algoliaRecord };
    }),
  );

  // Build final outputs from results in a single pass
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
  };
};

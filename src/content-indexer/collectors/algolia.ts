import { createHash } from "crypto";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia";
import type { NavItem } from "@/content-indexer/types/navigation";

/**
 * Extracts breadcrumb titles from NavItems for Algolia.
 * Returns only the titles in hierarchical order.
 */
const extractBreadcrumbTitles = (navItems: NavItem[]): string[] => {
  return navItems
    .filter((item) => item.type !== "link") // Skip links
    .map((item) => item.title);
};

type AddRecordBaseParams = {
  path: string;
  title: string;
  content: string;
  breadcrumbs: NavItem[];
};

type AddGuideRecordParams = AddRecordBaseParams & {
  pageType: "Guide";
  httpMethod?: never; // Not allowed for Guide
};

type AddApiMethodRecordParams = AddRecordBaseParams & {
  pageType: "API Method";
  httpMethod: string; // Required for API Method
};
export type AddRecordParams = AddGuideRecordParams | AddApiMethodRecordParams;

/**
 * Collector for Algolia search records during content processing.
 * Records are built with all required data including breadcrumbs.
 */
export class AlgoliaCollector {
  private records: AlgoliaRecord[] = [];

  /**
   * Add a search record for either MDX pages or API methods.
   *
   * ObjectID strategy:
   * Uses hash of last breadcrumb + title for relatively stable, content-based identification.
   * If we change the title or the last breadcrumb, the objectID will change,
   * but this shouldn't matter as long as we continue to replace the entire index on each run.
   */
  addRecord(params: AddRecordParams): void {
    const breadcrumbTitles = extractBreadcrumbTitles(params.breadcrumbs);

    // Generate stable objectID from last breadcrumb (most specific section) + title
    const lastBreadcrumb = breadcrumbTitles.at(-1) || "unknown";
    const stableId = `${lastBreadcrumb}:${params.title}`;
    const objectID = this.generateHash(stableId);

    this.records.push({
      objectID,
      path: params.path,
      pageType: params.pageType,
      title: params.title,
      content: params.content,
      breadcrumbs: breadcrumbTitles,
      ...(params.httpMethod && { httpMethod: params.httpMethod }),
    });
  }

  /**
   * Get all built records.
   */
  getRecords(): AlgoliaRecord[] {
    return this.records;
  }

  /**
   * Generate a stable hash-based objectID from a source string.
   * Returns first 16 characters of SHA-256 hash for a clean ID format.
   */
  private generateHash(source: string): string {
    return createHash("sha256").update(source).digest("hex").substring(0, 16);
  }
}

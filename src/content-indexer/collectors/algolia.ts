import { createHash } from "crypto";

import type { AlgoliaRecord } from "@/content-indexer/types/algolia.ts";
import type { NavItem } from "@/content-indexer/types/navigation.ts";

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
  description?: string;
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
   * Uses hash of the URL path for stable, unique identification.
   * - Uniqueness: URLs are guaranteed unique by the routing system
   * - Stability: Paths are designed to be stable (SEO, bookmarks, external links)
   * - Enables incremental index updates in the future
   */
  addRecord(params: AddRecordParams): void {
    const breadcrumbTitles = extractBreadcrumbTitles(params.breadcrumbs);
    const objectID = this.generateHash(params.path);

    this.records.push({
      objectID,
      path: params.path,
      pageType: params.pageType,
      title: params.title,
      content: params.content,
      breadcrumbs: breadcrumbTitles,
      ...(params.httpMethod && { httpMethod: params.httpMethod }),
      ...(params.description && { description: params.description }),
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

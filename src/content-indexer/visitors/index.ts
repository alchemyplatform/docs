import type { ProcessingContext } from "@/content-indexer/collectors/processing-context";
import type { ContentCache } from "@/content-indexer/core/content-cache";
import type { PathBuilder } from "@/content-indexer/core/path-builder";
import {
  isApiConfig,
  isChangelogConfig,
  isLinkConfig,
  isPageConfig,
  isSectionConfig,
  type NavigationItem,
} from "@/content-indexer/types/docsYaml";
import type { NavItem } from "@/content-indexer/types/navigation";
import type { PathIndex } from "@/content-indexer/types/pathIndex";
import type { RepoConfig } from "@/content-indexer/utils/github";

import { visitApiReference } from "./visit-api-reference";
import { visitLink } from "./visit-link";
import { visitPage } from "./visit-page";
import { visitSection } from "./visit-section";

export interface VisitorConfigBase {
  parentPath: PathBuilder;
  tab: string;
  repo: RepoConfig;
  contentCache: ContentCache;
  context: ProcessingContext;
  navigationAncestors: NavItem[];
}

export interface VisitorConfig extends VisitorConfigBase {
  item: NavigationItem;
}

export interface VisitorResult {
  indexEntries: PathIndex;
  navItem?: NavItem | NavItem[];
}

/**
 * Dispatcher that routes navigation items to the appropriate visitor.
 *
 * Uses type guards to determine item type and delegates to specialized visitors:
 * - Pages → visitPage
 * - Sections → visitSection (recursive)
 * - API references → visitApiReference
 * - Links → visitLink
 * - Changelog → skip (no processing needed)
 */
export const visitNavigationItem = (config: VisitorConfig): VisitorResult => {
  const { item } = config;

  // Skip changelog items
  if (isChangelogConfig(item)) {
    return { indexEntries: {}, navItem: undefined };
  }

  // Delegate to appropriate visitor based on item type
  if (isLinkConfig(item)) {
    return visitLink({ ...config, item });
  }

  if (isPageConfig(item)) {
    return visitPage({ ...config, item });
  }

  if (isSectionConfig(item)) {
    return visitSection({ ...config, item }, visitNavigationItem);
  }

  if (isApiConfig(item)) {
    return visitApiReference({ ...config, item });
  }

  // Unknown item type - skip
  return { indexEntries: {}, navItem: undefined };
};

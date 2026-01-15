import { kebabCase } from "lodash-es";

import {
  ProcessingContext,
  type BuildAllOutputsResult,
} from "@/content-indexer/collectors/processing-context.js";
import type { ContentCache } from "@/content-indexer/core/content-cache.ts";
import type { DocsYml } from "@/content-indexer/types/docsYaml.ts";
import { visitNavigationItem } from "@/content-indexer/visitors/index.ts";

import { PathBuilder } from "./path-builder.ts";

/**
 * Phase 3 of the content indexing pipeline.
 * Builds path index, navigation trees, and Algolia records in a single traversal.
 *
 * Uses visitor pattern to process each navigation item type and accumulates
 * results in ProcessingContext. Maintains navigation hierarchy and breadcrumb
 * context during traversal.
 */
export const buildAllOutputs = (
  docsYml: DocsYml,
  contentCache: ContentCache,
  stripPathPrefix?: string,
): BuildAllOutputsResult => {
  const context = new ProcessingContext();

  // Process each tab in docs.yml
  docsYml.navigation.forEach((navItem) => {
    // Skip navigation items without a tab or layout
    if (!navItem.tab || !navItem.layout) {
      return;
    }

    // Tab identifier for the index entries
    const tab = kebabCase(navItem.tab);

    // Build base path for this tab
    let basePathBuilder = PathBuilder.init();

    // Apply tab slug to path (use slug from tab config if available)
    const tabConfig = docsYml.tabs?.[navItem.tab];
    if (tabConfig) {
      const tabSlugForPath = tabConfig.slug ?? tab;
      const skipTabSlug = tabConfig["skip-slug"] ?? false;

      basePathBuilder = basePathBuilder.apply({
        urlSlug: tabSlugForPath,
        skipUrlSlug: skipTabSlug,
      });
    }

    // Visit all layout items using visitor pattern
    const results = navItem.layout.map((layoutItem) =>
      visitNavigationItem({
        item: layoutItem,
        parentPath: basePathBuilder,
        tab,
        stripPathPrefix,
        contentCache,
        context,
        navigationAncestors: [], // Empty ancestors at top level
      }),
    );

    // Add results to context
    results.forEach((result) => {
      // Add path index entries
      Object.entries(result.indexEntries).forEach(([path, entry]) => {
        context.addPathIndexEntry(path, entry);
      });

      // Add navigation items
      if (result.navItem) {
        const items = Array.isArray(result.navItem)
          ? result.navItem
          : [result.navItem];
        items.forEach((item) => context.addNavigationItem(tab, item));
      }
    });
  });

  return context.getResults();
};

import { kebabCase } from "lodash-es";

import type { SectionConfig } from "@/content-indexer/types/docsYaml.ts";
import type { NavItem } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";
import {
  normalizeFilePath,
  normalizeSlug,
} from "@/content-indexer/utils/normalization.js";

import type {
  VisitorConfig,
  VisitorConfigBase,
  VisitorResult,
} from "./index.js";

export interface SectionVisitorConfig extends VisitorConfigBase {
  item: SectionConfig;
}

/**
 * Visits a section item from docs.yml.
 *
 * Builds:
 * - Path index entry for overview page (if exists)
 * - Hierarchical navigation with children
 * - Algolia record for overview page (if exists)
 * - Recursively processes all child items
 */
export const visitSection = (
  config: SectionVisitorConfig,
  visitNavigationItem: (config: VisitorConfig) => VisitorResult,
): VisitorResult => {
  const {
    item: sectionItem,
    parentPath,
    tab,
    repo,
    contentCache,
    context,
    navigationAncestors,
  } = config;
  const sectionUrlSlug = sectionItem.slug ?? kebabCase(sectionItem.section);
  const skipSlug = sectionItem["skip-slug"] ?? false;

  let sectionFullSlug: string[] | undefined;
  let sectionPath: string | undefined;
  const indexEntries: PathIndex = {};

  // If there's an overview page, look up cached content
  if (sectionItem.path) {
    const cached = contentCache.getMdxContent(sectionItem.path);
    const normalizedSlug = normalizeSlug(cached?.frontmatter.slug as string);
    sectionFullSlug = normalizedSlug?.split("/");

    const sectionPathBuilder = parentPath.apply({
      fullSlug: sectionFullSlug,
      urlSlug: sectionUrlSlug,
      skipUrlSlug: skipSlug,
    });

    const finalPath = sectionPathBuilder.get();
    sectionPath = `/${finalPath}`;

    // Add overview page to index
    indexEntries[finalPath] = {
      type: "mdx",
      filePath: normalizeFilePath(sectionItem.path, repo),
      source: normalizedSlug ? "frontmatter" : "docs-yml",
      tab,
    };

    // Build Algolia record for section overview page (if content available)
    if (cached) {
      const title = (cached.frontmatter.title as string) || sectionItem.section;
      const descriptionRaw =
        cached.frontmatter.description || cached.frontmatter.subtitle;
      const description =
        typeof descriptionRaw === "string" ? descriptionRaw : undefined;
      context.addAlgoliaRecord({
        pageType: "Guide",
        path: finalPath,
        title,
        content: cached.content,
        breadcrumbs: navigationAncestors, // Excludes current section
        description,
      });
    }
  }

  // Create path builder for children
  const childPathBuilder = parentPath.apply({
    fullSlug: sectionFullSlug,
    urlSlug: sectionUrlSlug,
    skipUrlSlug: skipSlug,
  });

  // Build section nav item first (for navigation tree)
  const sectionNavItem: NavItem = {
    title: sectionItem.section,
    path: sectionPath,
    type: "section",
    children: [], // Will be populated below
  };

  // Create breadcrumb (simple copy, no path computation needed)
  // If section has no overview page, path will be undefined - this is OK
  const sectionBreadcrumb: NavItem = {
    title: sectionItem.section,
    path: sectionPath, // undefined if no overview page
    type: "section",
    children: [],
  };

  // Update ancestors to include current section (using breadcrumb copy)
  const childAncestors = sectionItem.hidden
    ? navigationAncestors // Don't include hidden sections in breadcrumbs
    : [...navigationAncestors, sectionBreadcrumb];

  // Process all children with correct breadcrumbs
  const childResults = sectionItem.contents.map((childItem) =>
    visitNavigationItem({
      ...config,
      item: childItem,
      parentPath: childPathBuilder,
      navigationAncestors: childAncestors,
    }),
  );

  // Merge child index entries
  childResults.forEach((result) => {
    Object.assign(indexEntries, result.indexEntries);
  });

  // Build children nav items (flatten arrays from API refs)
  const children: NavItem[] = childResults
    .map((result) => result.navItem)
    .flat()
    .filter((child): child is NavItem => child !== undefined);

  // Only include section in nav if it has children and is not hidden
  if (children.length === 0 || sectionItem.hidden) {
    return { indexEntries, navItem: undefined };
  }

  // Update section nav item with children
  sectionNavItem.children = children;

  return { indexEntries, navItem: sectionNavItem };
};

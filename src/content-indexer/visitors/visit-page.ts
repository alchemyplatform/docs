import { kebabCase } from "lodash-es";

import type { PageConfig } from "@/content-indexer/types/docsYaml";
import type { NavItem } from "@/content-indexer/types/navigation";
import {
  normalizeFilePath,
  normalizeSlug,
} from "@/content-indexer/utils/normalization";

import type { VisitorConfigBase, VisitorResult } from ".";

export interface PageVisitorConfig extends VisitorConfigBase {
  item: PageConfig;
}

/**
 * Visits a page item from docs.yml.
 *
 * Builds:
 * - Path index entry for URL routing
 * - Navigation item for sidebar (unless hidden)
 * - Algolia record for search (unless hidden)
 */
export const visitPage = ({
  item: pageItem,
  parentPath,
  tab,
  repo,
  contentCache,
  context,
  navigationAncestors,
}: PageVisitorConfig): VisitorResult => {
  // Look up cached MDX content
  const cached = contentCache.getMdxContent(pageItem.path);
  const frontmatterSlug = normalizeSlug(cached?.frontmatter.slug);
  const urlSlug = pageItem.slug ?? kebabCase(pageItem.page);

  const pagePathBuilder = parentPath.apply({
    fullSlug: frontmatterSlug?.split("/"),
    urlSlug,
  });

  const finalPath = pagePathBuilder.get();

  // Build index entry
  const indexEntries = {
    [finalPath]: {
      type: "mdx" as const,
      filePath: normalizeFilePath(pageItem.path, repo),
      source: frontmatterSlug
        ? ("frontmatter" as const)
        : ("docs-yml" as const),
      tab,
    },
  };

  // Build nav item (skip if hidden)
  const navItem: NavItem | undefined = pageItem.hidden
    ? undefined
    : {
        title: pageItem.page,
        path: `/${finalPath}`,
        type: "page",
      };

  // Build Algolia record (if content available and not hidden)
  if (cached && navItem) {
    const title = cached.frontmatter.title || pageItem.page;
    context.addAlgoliaRecord({
      pageType: "Guide",
      path: finalPath,
      title,
      content: cached.content,
      breadcrumbs: navigationAncestors, // Excludes current page
    });
  }

  return { indexEntries, navItem };
};

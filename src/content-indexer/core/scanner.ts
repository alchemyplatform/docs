import {
  isApiConfig,
  isChangelogConfig,
  isLinkConfig,
  isPageConfig,
  isSectionConfig,
  type DocsYml,
  type NavigationItem,
} from "@/content-indexer/types/docsYaml.js";

/**
 * Result of scanning docs.yml for all file paths and API specs.
 */
export interface ScanResult {
  mdxPaths: Set<string>; // All unique MDX file paths
  specNames: Set<string>; // All unique api-name values
}

/**
 * Recursively scans a navigation item to collect MDX paths and spec names.
 */
const scanNavigationItem = (item: NavigationItem, result: ScanResult): void => {
  // Skip changelog items
  if (isChangelogConfig(item)) {
    return;
  }

  // Skip external links
  if (isLinkConfig(item)) {
    return;
  }

  // Collect API spec names
  if (isApiConfig(item)) {
    result.specNames.add(item["api-name"]);
    return;
  }

  // Collect page paths
  if (isPageConfig(item)) {
    result.mdxPaths.add(item.path);
    return;
  }

  // Collect section overview paths and recurse into contents
  if (isSectionConfig(item)) {
    if (item.path) {
      result.mdxPaths.add(item.path);
    }

    // Recursively scan all child items
    item.contents.forEach((childItem) => {
      scanNavigationItem(childItem, result);
    });
  }
};

/**
 * Scans the entire docs.yml to collect all MDX file paths and API spec names.
 * This enables batch fetching all content in parallel.
 *
 * @param docsYml - The parsed docs.yml configuration
 * @returns Object with Sets of unique MDX paths and spec names
 */
export const scanDocsYml = (docsYml: DocsYml): ScanResult => {
  if (!docsYml.navigation) {
    throw new Error("Can't find navigation section in docs.yml");
  }

  const result: ScanResult = {
    mdxPaths: new Set(),
    specNames: new Set(),
  };

  // Scan all navigation items across all tabs
  docsYml.navigation.forEach((navItem) => {
    if (navItem.layout) {
      navItem.layout.forEach((layoutItem) => {
        scanNavigationItem(layoutItem, result);
      });
    }
  });

  return result;
};

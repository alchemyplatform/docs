import type { NavItem } from "@/content-indexer/types/navigation.ts";

/**
 * Creates breadcrumb-safe navigation item (without populated children).
 * Prevents circular references in breadcrumb trails by creating a shallow copy.
 */
export const createBreadcrumbNavItem = (
  title: string,
  type: "api-section",
): NavItem => ({
  title,
  type,
  children: [],
});

/**
 * When indexing content under the `chains` tab, each chain lives as its own
 * top-level section (e.g. `Ethereum`, `Base`, `Solana`, `Bitcoin`) in
 * `content/docs.yml`. API methods rendered by the OpenRPC / OpenAPI processors
 * receive that section as the first entry of `navigationAncestors`.
 *
 * This helper resolves the enclosing chain name for those API methods so the
 * Algolia search title can be disambiguated as `{methodName} - {chainName}`.
 * Returns `undefined` for any non-chains tab, or when no ancestor is available.
 */
export const getChainNameFromAncestors = (
  tab: string,
  navigationAncestors: NavItem[],
): string | undefined => {
  if (tab !== "chains") return undefined;
  const firstAncestor = navigationAncestors[0];
  return firstAncestor?.title;
};

import type { NavItem } from "@/content-indexer/types/navigation";

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

/**
 * Represents a single item in the breadcrumb trail
 */
export interface BreadcrumbItem {
  title: string;
  path: string;
  type: "tab" | "section" | "page" | "endpoint";
}

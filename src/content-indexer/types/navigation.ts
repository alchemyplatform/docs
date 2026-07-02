// Types for navigation tree structure stored in Redis

interface BaseNavItem {
  title: string;
  hidden?: boolean;
}

interface PageNavItem extends BaseNavItem {
  type: "page";
  path: string;
  description?: string;
}

interface EndpointNavItem extends BaseNavItem {
  type: "endpoint";
  path: string;
  method: string;
  description?: string;
}

interface SectionNavItem extends BaseNavItem {
  type: "section" | "api-section";
  path?: string;
  children: NavItem[];
  /** True for skip-slug sections: structural groupings that contribute no URL segment. */
  skipSlug?: boolean;
}

interface LinkNavItem extends BaseNavItem {
  type: "link";
  href: string;
}

export type NavItem =
  | PageNavItem
  | EndpointNavItem
  | SectionNavItem
  | LinkNavItem;

export type NavigationTree = NavItem[];

export type NavigationTreesByTab = Record<string, NavigationTree>;

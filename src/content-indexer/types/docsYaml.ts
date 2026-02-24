// Types for parsing the docs.yml navigation structure

export interface PageConfig {
  page: string;
  path: string;
  slug?: string;
  hidden?: boolean;
  noindex?: boolean;
}

export interface SectionConfig {
  section: string;
  slug?: string;
  "skip-slug"?: boolean;
  hidden?: boolean;
  contents: NavigationItem[];
  path?: string; // Optional overview page
}

export interface LinkConfig {
  link: string;
  href: string;
}

export interface ApiConfig {
  api: string;
  "api-name": string;
  slug?: string;
  "skip-slug"?: boolean;
  hidden?: boolean;
  flattened?: boolean;
  paginated?: boolean;
}

export interface ChangelogConfig {
  changelog: string;
  slug?: string;
}

export type NavigationItem =
  | PageConfig
  | SectionConfig
  | LinkConfig
  | ApiConfig
  | ChangelogConfig;

export interface TabConfig {
  "display-name": string;
  slug?: string;
  "skip-slug"?: boolean;
}

export interface DocsYml {
  tabs?: Record<string, TabConfig>;
  navigation: Array<{
    tab: string;
    layout: NavigationItem[];
  }>;
}

// ============================================================================
// Type Guards
// ============================================================================

export const isPageConfig = (item: NavigationItem): item is PageConfig => {
  return item && typeof item === "object" && "page" in item && "path" in item;
};

export const isSectionConfig = (
  item: NavigationItem,
): item is SectionConfig => {
  return (
    item && typeof item === "object" && "section" in item && "contents" in item
  );
};

export const isLinkConfig = (item: NavigationItem): item is LinkConfig => {
  return item && typeof item === "object" && "link" in item && "href" in item;
};

export const isApiConfig = (item: NavigationItem): item is ApiConfig => {
  return (
    item && typeof item === "object" && "api" in item && "api-name" in item
  );
};

export const isChangelogConfig = (
  item: NavigationItem,
): item is ChangelogConfig => {
  return item && typeof item === "object" && "changelog" in item;
};

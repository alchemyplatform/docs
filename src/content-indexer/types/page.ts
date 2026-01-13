/**
 * Frontmatter for a documentation page
 * @see https://buildwithfern.com/learn/docs/configuration/page-level-settings
 */
export interface DocPageFrontmatter {
  title?: string;
  "sidebar-title"?: string;
  subtitle?: string;
  slug?: string;
  description?: string;
  "edit-this-page-url"?: string;
  image?: string;

  "hide-toc"?: boolean;
  "max-toc-depth"?: number;

  "hide-nav-links"?: boolean;
  "hide-feedback"?: boolean;

  logo?: {
    light: string;
    dark: string;
  };
  layout?: "guide" | "overview" | "reference" | "page" | "custom";
  headline?: string;
  "canonical-url"?: string;
  keywords?: string;

  "og:site_name"?: string;
  "og:title"?: string;
  "og:description"?: string;
  "og:url"?: string;
  "og:image"?: string;
  "og:image:width"?: number;
  "og:image:height"?: number;
  "og:locale"?: string;
  "og:logo"?: string;

  // SEO - Twitter properties
  "twitter:title"?: string;
  "twitter:description"?: string;
  "twitter:handle"?: string;
  "twitter:image"?: string;
  "twitter:site"?: string;
  "twitter:url"?: string;
  "twitter:card"?: "summary" | "summary_large_image" | "app" | "player";

  noindex?: boolean;
  nofollow?: boolean;
  tags?: string[];
}

export interface DocPage {
  slug: string[];
  frontmatter: DocPageFrontmatter;
  content: string;
}

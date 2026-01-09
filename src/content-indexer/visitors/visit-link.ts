import type { LinkConfig } from "@/content-indexer/types/docsYaml.js";

import type { VisitorConfigBase, VisitorResult } from "./index.js";

export interface LinkVisitorConfig extends VisitorConfigBase {
  item: LinkConfig;
}

/**
 * Visits a link item from docs.yml.
 *
 * Links are external URLs - they only appear in navigation, not in path index.
 */
export const visitLink = (config: LinkVisitorConfig): VisitorResult => {
  const { item: linkItem } = config;

  return {
    indexEntries: {},
    navItem: {
      title: linkItem.link,
      href: linkItem.href,
      type: "link",
    },
  };
};

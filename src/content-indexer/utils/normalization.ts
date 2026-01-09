import type { RepoConfig } from "@/content-indexer/utils/github.js";

/**
 * Normalizes a frontmatter slug by removing the "docs/" prefix.
 * This prefix is used in some legacy frontmatter from the main docs repo
 * but should be stripped when generating URL paths.
 */
export const normalizeSlug = (slug: string | undefined): string | undefined => {
  if (!slug) return undefined;
  return slug.replace(/^docs\//, "");
};

/**
 * Normalizes a file path by stripping the repo's configured prefix.
 * This ensures the stored filePath can be used directly with the repo's docsPrefix.
 */
export const normalizeFilePath = (
  filePath: string,
  repo: RepoConfig,
): string => {
  return filePath.replace(repo.stripPathPrefix || "", "");
};

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
 * Normalizes a file path by stripping a configured prefix.
 * This ensures the stored filePath matches the actual file location.
 */
export const normalizeFilePath = (
  filePath: string,
  stripPathPrefix?: string,
): string => {
  return filePath.replace(stripPathPrefix || "", "");
};

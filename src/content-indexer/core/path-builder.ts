/**
 * PathBuilder mimics Fern's slug generation logic to build full URL paths.
 * Maintains an array of path segments and provides methods to build paths hierarchically.
 * @note Fern incorrectly refers to full paths as "slugs" in their terminology
 * @see https://buildwithfern.com/learn/docs/seo/configuring-slugs
 */
export class PathBuilder {
  private segments: string[];

  private constructor(segments: string[]) {
    this.segments = segments;
  }

  /**
   * Creates a new PathBuilder instance with optional base path segments.
   */
  static init(basePath: string = ""): PathBuilder {
    const segments = basePath ? basePath.split("/").filter(Boolean) : [];
    return new PathBuilder(segments);
  }

  /**
   * Applies slug generation rules to create a new PathBuilder.
   * Supports three modes:
   * - fullSlug: Completely replaces the path (used for frontmatter overrides)
   * - skipUrlSlug: Returns unchanged path (used for skip-slug sections)
   * - urlSlug: Appends to existing path (default behavior)
   */
  apply(options: {
    fullSlug?: string[];
    urlSlug?: string;
    skipUrlSlug?: boolean;
  }): PathBuilder {
    // If fullSlug is provided (from frontmatter), it completely overrides the path
    if (options.fullSlug) {
      return new PathBuilder(options.fullSlug.filter(Boolean));
    }

    // If skipUrlSlug is true, don't add anything to the path
    if (options.skipUrlSlug) {
      return new PathBuilder([...this.segments]);
    }

    // Otherwise, add the urlSlug to the path
    if (options.urlSlug) {
      return new PathBuilder([...this.segments, options.urlSlug]);
    }

    return new PathBuilder([...this.segments]);
  }

  /**
   * Returns the full path as a string by joining all segments with "/".
   */
  get(): string {
    return this.segments.filter(Boolean).join("/");
  }
}

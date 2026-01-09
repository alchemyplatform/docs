import type {
  OpenApiSpec,
  OpenRpcSpec,
} from "@/content-indexer/types/specs.js";

/**
 * Cached MDX content with parsed frontmatter and body.
 */
export interface MdxCacheEntry {
  frontmatter: {
    slug?: string;
    title?: string;
    sidebarTitle?: string;
    [key: string]: unknown;
  };
  content: string; // Raw MDX body (without frontmatter)
}

/**
 * Cached API spec with type information.
 */
export interface SpecCacheEntry {
  specType: "openrpc" | "openapi";
  spec: OpenRpcSpec | OpenApiSpec;
  specUrl: string;
}

/**
 * Cache statistics returned by getStats().
 */
export interface CacheStats {
  mdxCount: number;
  specCount: number;
}

/**
 * In-memory cache for all fetched content.
 * Provides O(1) lookup for MDX files and API specs.
 */
export class ContentCache {
  private mdxCache: Map<string, MdxCacheEntry>;
  private specCache: Map<string, SpecCacheEntry>;

  constructor() {
    this.mdxCache = new Map();
    this.specCache = new Map();
  }

  /**
   * Store MDX content by normalized file path.
   */
  setMdxContent(filePath: string, entry: MdxCacheEntry): void {
    this.mdxCache.set(filePath, entry);
  }

  /**
   * Retrieve MDX content by file path.
   */
  getMdxContent(filePath: string): MdxCacheEntry | undefined {
    return this.mdxCache.get(filePath);
  }

  /**
   * Store API spec by api-name.
   */
  setSpec(apiName: string, entry: SpecCacheEntry): void {
    this.specCache.set(apiName, entry);
  }

  /**
   * Retrieve API spec by api-name.
   */
  getSpec(apiName: string): SpecCacheEntry | undefined {
    return this.specCache.get(apiName);
  }

  /**
   * Get cache statistics for debugging.
   */
  getStats(): CacheStats {
    return {
      mdxCount: this.mdxCache.size,
      specCount: this.specCache.size,
    };
  }
}

import { describe, expect, test } from "vitest";

import {
  openApiSpecFactory,
  openRpcSpecFactory,
} from "@/content-indexer/utils/test-factories.js";

import { ContentCache } from "../content-cache.ts";

describe("ContentCache", () => {
  test("should initialize with empty caches", () => {
    const cache = new ContentCache();
    const stats = cache.getStats();

    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(0);
  });

  test("should store and retrieve MDX content", () => {
    const cache = new ContentCache();
    const mdxEntry = {
      frontmatter: { title: "Quickstart", slug: "guides/quickstart" },
      content: "# Quickstart\n\nContent here",
    };

    cache.setMdxContent("content/guides/quickstart.mdx", mdxEntry);
    const retrieved = cache.getMdxContent("content/guides/quickstart.mdx");

    expect(retrieved).toEqual(mdxEntry);
    expect(retrieved?.frontmatter.title).toBe("Quickstart");
  });

  test("should return undefined for non-existent MDX", () => {
    const cache = new ContentCache();
    const retrieved = cache.getMdxContent("non-existent.mdx");

    expect(retrieved).toBeUndefined();
  });

  test("should store and retrieve OpenAPI spec", () => {
    const cache = new ContentCache();
    const spec = openApiSpecFactory();
    const specEntry = {
      specType: "openapi" as const,
      spec: spec,
      specId: "https://example.com/spec.json",
    };

    cache.setSpec("ethereum-api", specEntry);
    const retrieved = cache.getSpec("ethereum-api");

    expect(retrieved).toEqual(specEntry);
    expect(retrieved?.specType).toBe("openapi");
  });

  test("should store and retrieve OpenRPC spec", () => {
    const cache = new ContentCache();
    const spec = openRpcSpecFactory();
    const specEntry = {
      specType: "openrpc" as const,
      spec: spec,
      specId: "https://example.com/rpc-spec.json",
    };

    cache.setSpec("solana-das-api", specEntry);
    const retrieved = cache.getSpec("solana-das-api");

    expect(retrieved).toEqual(specEntry);
    expect(retrieved?.specType).toBe("openrpc");
  });

  test("should return undefined for non-existent spec", () => {
    const cache = new ContentCache();
    const retrieved = cache.getSpec("non-existent-api");

    expect(retrieved).toBeUndefined();
  });

  test("should handle multiple MDX entries", () => {
    const cache = new ContentCache();

    cache.setMdxContent("file1.mdx", {
      frontmatter: { title: "Page 1" },
      content: "Content 1",
    });
    cache.setMdxContent("file2.mdx", {
      frontmatter: { title: "Page 2" },
      content: "Content 2",
    });

    expect(cache.getMdxContent("file1.mdx")?.frontmatter.title).toBe("Page 1");
    expect(cache.getMdxContent("file2.mdx")?.frontmatter.title).toBe("Page 2");
  });

  test("should handle multiple spec entries", () => {
    const cache = new ContentCache();

    cache.setSpec("api1", {
      specType: "openapi",
      spec: openApiSpecFactory(),
      specId: "url1",
    });
    cache.setSpec("api2", {
      specType: "openrpc",
      spec: openRpcSpecFactory(),
      specId: "url2",
    });

    expect(cache.getSpec("api1")?.specType).toBe("openapi");
    expect(cache.getSpec("api2")?.specType).toBe("openrpc");
  });

  test("should return correct stats with mixed content", () => {
    const cache = new ContentCache();

    cache.setMdxContent("file1.mdx", {
      frontmatter: {},
      content: "Content 1",
    });
    cache.setMdxContent("file2.mdx", {
      frontmatter: {},
      content: "Content 2",
    });
    cache.setSpec("api1", {
      specType: "openapi",
      spec: openApiSpecFactory(),
      specId: "url1",
    });

    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(2);
    expect(stats.specCount).toBe(1);
  });

  test("should overwrite existing MDX entry", () => {
    const cache = new ContentCache();

    cache.setMdxContent("file.mdx", {
      frontmatter: { title: "Old Title" },
      content: "Old content",
    });
    cache.setMdxContent("file.mdx", {
      frontmatter: { title: "New Title" },
      content: "New content",
    });

    const retrieved = cache.getMdxContent("file.mdx");
    expect(retrieved?.frontmatter.title).toBe("New Title");
  });

  test("should overwrite existing spec entry", () => {
    const cache = new ContentCache();

    cache.setSpec("api", {
      specType: "openapi",
      spec: openApiSpecFactory({ info: { title: "API", version: "1.0.0" } }),
      specId: "url1",
    });
    cache.setSpec("api", {
      specType: "openrpc",
      spec: openRpcSpecFactory({ info: { title: "API", version: "2.0.0" } }),
      specId: "url2",
    });

    const retrieved = cache.getSpec("api");
    expect(retrieved?.specType).toBe("openrpc");
    expect(retrieved?.specId).toBe("url2");
  });
});

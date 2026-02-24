import { describe, expect, test } from "vitest";

import { PathIndexCollector } from "../path-index.ts";

describe("PathIndexCollector", () => {
  test("should initialize with empty index", () => {
    const collector = new PathIndexCollector();
    expect(collector.getIndex()).toEqual({});
  });

  test("should add MDX entry to index", () => {
    const collector = new PathIndexCollector();
    collector.add("guides/quickstart", {
      type: "mdx",
      filePath: "content/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });

    const index = collector.getIndex();
    expect(index["guides/quickstart"]).toEqual({
      type: "mdx",
      filePath: "content/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });
  });

  test("should add OpenAPI entry to index", () => {
    const collector = new PathIndexCollector();
    collector.add("reference/eth-getbalance", {
      type: "openapi",
      specUrl: "https://example.com/spec.json",
      operationId: "eth_getBalance",
      source: "docs-yml",
      tab: "reference",
    });

    const index = collector.getIndex();
    expect(index["reference/eth-getbalance"]).toEqual({
      type: "openapi",
      specUrl: "https://example.com/spec.json",
      operationId: "eth_getBalance",
      source: "docs-yml",
      tab: "reference",
    });
  });

  test("should add OpenRPC entry to index", () => {
    const collector = new PathIndexCollector();
    collector.add("reference/getAsset", {
      type: "openrpc",
      specUrl: "https://example.com/spec.json",
      methodName: "getAsset",
      source: "docs-yml",
      tab: "reference",
    });

    const index = collector.getIndex();
    expect(index["reference/getAsset"]).toEqual({
      type: "openrpc",
      specUrl: "https://example.com/spec.json",
      methodName: "getAsset",
      source: "docs-yml",
      tab: "reference",
    });
  });

  test("should handle multiple entries", () => {
    const collector = new PathIndexCollector();
    collector.add("guides/quickstart", {
      type: "mdx",
      filePath: "content/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });
    collector.add("guides/advanced", {
      type: "mdx",
      filePath: "content/guides/advanced.mdx",
      source: "frontmatter",
      tab: "guides",
    });

    const index = collector.getIndex();
    expect(Object.keys(index)).toHaveLength(2);
    expect(index["guides/quickstart"]).toBeDefined();
    expect(index["guides/advanced"]).toBeDefined();
  });

  test("should overwrite existing path", () => {
    const collector = new PathIndexCollector();
    collector.add("guides/quickstart", {
      type: "mdx",
      filePath: "content/guides/quickstart.mdx",
      source: "docs-yml",
      tab: "guides",
    });
    collector.add("guides/quickstart", {
      type: "mdx",
      filePath: "content/guides/quickstart-v2.mdx",
      source: "frontmatter",
      tab: "guides",
    });

    const index = collector.getIndex();
    const entry = index["guides/quickstart"];
    if (entry && "filePath" in entry) {
      expect(entry.filePath).toBe("content/guides/quickstart-v2.mdx");
      if ("source" in entry) {
        expect(entry.source).toBe("frontmatter");
      }
    }
  });

  test("should return correct stats", () => {
    const collector = new PathIndexCollector();
    collector.add("path1", {
      type: "mdx",
      filePath: "file1.mdx",
      source: "docs-yml",
      tab: "tab1",
    });
    collector.add("path2", {
      type: "openapi",
      specUrl: "spec.json",
      operationId: "op1",
      source: "docs-yml",
      tab: "tab1",
    });
    collector.add("path3", {
      type: "openrpc",
      specUrl: "spec.json",
      methodName: "method1",
      source: "docs-yml",
      tab: "tab1",
    });

    const stats = collector.getStats();
    expect(stats.total).toBe(3);
    expect(stats.byType.mdx).toBe(1);
    expect(stats.byType.openapi).toBe(1);
    expect(stats.byType.openrpc).toBe(1);
  });
});

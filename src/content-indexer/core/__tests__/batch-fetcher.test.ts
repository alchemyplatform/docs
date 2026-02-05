import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import type { OpenApiSpec } from "@/content-indexer/types/specs.ts";
import { fetchApiSpec } from "@/content-indexer/utils/apiSpecs.ts";
import { readLocalMdxFile } from "@/content-indexer/utils/filesystem.ts";
import { openApiSpecFactory } from "@/content-indexer/utils/test-factories.js";

import { batchFetchContent } from "../batch-fetcher.ts";

// Mock dependencies
vi.mock("@/content-indexer/utils/filesystem", () => ({
  readLocalMdxFile: vi.fn(),
}));

vi.mock("@/content-indexer/utils/apiSpecs", () => ({
  fetchApiSpec: vi.fn(),
}));

describe("batchFetchContent", () => {
  let consoleInfoSpy: ReturnType<typeof vi.spyOn>;
  let consoleWarnSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
    consoleWarnSpy = vi.spyOn(console, "warn").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleInfoSpy.mockRestore();
    consoleWarnSpy.mockRestore();
    vi.clearAllMocks();
  });

  test("should read MDX files and populate cache", async () => {
    const scanResult = {
      mdxPaths: new Set(["quickstart.mdx", "guides/intro.mdx"]),
      specNames: new Set<string>(),
    };

    vi.mocked(readLocalMdxFile).mockResolvedValue({
      frontmatter: { title: "Test Page" },
      content: "# Content",
    });

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    // Verify reads were made
    expect(readLocalMdxFile).toHaveBeenCalledTimes(2);

    // Verify cache was populated
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(2);
    expect(stats.specCount).toBe(0);

    // Verify cache entries
    const entry = cache.getMdxContent("quickstart.mdx");
    expect(entry).toBeDefined();
    expect(entry?.frontmatter.title).toBe("Test Page");
    expect(entry?.content).toContain("# Content");
  });

  test("should fetch API specs and populate cache", async () => {
    const scanResult = {
      mdxPaths: new Set<string>(),
      specNames: new Set(["ethereum-api", "solana-api"]),
    };

    const mockSpec = {
      specType: "openapi" as const,
      spec: openApiSpecFactory({
        openapi: "3.0.0",
        info: { title: "Test", version: "1.0" },
      }),
      specUrl: "https://example.com/spec.json",
    };

    vi.mocked(fetchApiSpec).mockResolvedValue(mockSpec);

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    // Verify fetches were made
    expect(fetchApiSpec).toHaveBeenCalledTimes(2);
    expect(fetchApiSpec).toHaveBeenCalledWith("ethereum-api");
    expect(fetchApiSpec).toHaveBeenCalledWith("solana-api");

    // Verify cache was populated
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(2);
  });

  test("should handle stripPathPrefix configuration", async () => {
    const scanResult = {
      mdxPaths: new Set(["wallets/guides/intro.mdx"]),
      specNames: new Set<string>(),
    };

    vi.mocked(readLocalMdxFile).mockResolvedValue({
      frontmatter: {},
      content: "Content",
    });

    await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
      stripPathPrefix: "wallets/",
    });

    // Verify path was transformed (strip "wallets/" prefix)
    expect(readLocalMdxFile).toHaveBeenCalledWith(
      "/test/path/guides/intro.mdx",
    );
  });

  test("should handle read failures gracefully", async () => {
    const scanResult = {
      mdxPaths: new Set(["missing.mdx"]),
      specNames: new Set(["missing-api"]),
    };

    vi.mocked(readLocalMdxFile).mockRejectedValue(new Error("File not found"));
    vi.mocked(fetchApiSpec).mockRejectedValue(new Error("Spec not found"));

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    // Verify warnings were logged
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to read MDX file"),
      expect.any(Error),
    );
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch spec"),
      expect.any(Error),
    );

    // Verify cache is empty
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(0);
  });

  test("should handle null responses from readers", async () => {
    const scanResult = {
      mdxPaths: new Set(["missing.mdx"]),
      specNames: new Set(["missing-api"]),
    };

    vi.mocked(readLocalMdxFile).mockResolvedValue(null);
    vi.mocked(fetchApiSpec).mockResolvedValue(undefined);

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    // Cache should be empty
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(0);
  });

  test("should log progress information", async () => {
    const scanResult = {
      mdxPaths: new Set(["test.mdx"]),
      specNames: new Set(["test-api"]),
    };

    vi.mocked(readLocalMdxFile).mockResolvedValue({
      frontmatter: {},
      content: "Content",
    });
    vi.mocked(fetchApiSpec).mockResolvedValue({
      specType: "openapi",
      spec: {} as OpenApiSpec,
      specUrl: "url",
    });

    await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Reading 1 MDX files and 1 specs"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Read 1/1 MDX files and 1/1 specs"),
    );
  });
});

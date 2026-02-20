import fs from "fs";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import type { OpenApiSpec } from "@/content-indexer/types/specs.ts";
import {
  buildSpecFileMap,
  readApiSpec,
} from "@/content-indexer/utils/apiSpecs.ts";
import { readLocalMdxFile } from "@/content-indexer/utils/filesystem.ts";
import { openApiSpecFactory } from "@/content-indexer/utils/test-factories.js";

import { batchFetchContent } from "../batch-fetcher.ts";

// Mock dependencies
vi.mock("@/content-indexer/utils/filesystem", () => ({
  readLocalMdxFile: vi.fn(),
}));

vi.mock("@/content-indexer/utils/apiSpecs", () => ({
  buildSpecFileMap: vi.fn().mockResolvedValue(new Map()),
  readApiSpec: vi.fn(),
}));

vi.spyOn(fs, "existsSync").mockReturnValue(true);

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

  test("should read API specs and populate cache", async () => {
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

    vi.mocked(readApiSpec).mockResolvedValue(mockSpec);

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
      specsDir: "/test/specs",
    });

    // Verify reads were made with the spec file map
    expect(buildSpecFileMap).toHaveBeenCalledWith("/test/specs");
    expect(readApiSpec).toHaveBeenCalledTimes(2);
    expect(readApiSpec).toHaveBeenCalledWith(
      "ethereum-api",
      "/test/specs",
      expect.any(Map),
    );
    expect(readApiSpec).toHaveBeenCalledWith(
      "solana-api",
      "/test/specs",
      expect.any(Map),
    );

    // Verify cache was populated
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(2);
  });

  test("should skip spec reading when specsDir is not set", async () => {
    const scanResult = {
      mdxPaths: new Set<string>(),
      specNames: new Set(["ethereum-api"]),
    };

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
    });

    expect(readApiSpec).not.toHaveBeenCalled();

    const stats = cache.getStats();
    expect(stats.specCount).toBe(0);
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
    vi.mocked(readApiSpec).mockRejectedValue(new Error("Spec not found"));

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
      specsDir: "/test/specs",
    });

    // Verify warnings were logged
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to read MDX file"),
      expect.any(Error),
    );
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to read spec"),
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
    vi.mocked(readApiSpec).mockResolvedValue(undefined);

    const cache = await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
      specsDir: "/test/specs",
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
    vi.mocked(readApiSpec).mockResolvedValue({
      specType: "openapi",
      spec: {} as OpenApiSpec,
      specUrl: "url",
    });

    await batchFetchContent(scanResult, {
      type: "filesystem",
      basePath: "/test/path",
      specsDir: "/test/specs",
    });

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Reading 1 MDX files and 1 specs"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Read 1/1 MDX files and 1/1 specs"),
    );
  });
});

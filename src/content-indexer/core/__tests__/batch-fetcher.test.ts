import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import type { OpenApiSpec } from "@/content-indexer/types/specs";
import { fetchApiSpec } from "@/content-indexer/utils/apiSpecs";
import { fetchFileFromGitHub } from "@/content-indexer/utils/github";
import {
  openApiSpecFactory,
  repoConfigFactory,
} from "@/content-indexer/utils/test-factories";

import { batchFetchContent } from "../batch-fetcher";

// Mock dependencies
vi.mock("@/content-indexer/utils/github", async () => {
  const actual = await vi.importActual("@/content-indexer/utils/github");
  return {
    ...actual,
    fetchFileFromGitHub: vi.fn(),
  };
});

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

  test("should fetch MDX files and populate cache", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const scanResult = {
      mdxPaths: new Set(["quickstart.mdx", "guides/intro.mdx"]),
      specNames: new Set<string>(),
    };

    const mdxContent = `---
title: Test Page
---
# Content`;

    vi.mocked(fetchFileFromGitHub).mockResolvedValue(mdxContent);

    const cache = await batchFetchContent(scanResult, {
      type: "github",
      repoConfig,
    });

    // Verify fetches were made
    expect(fetchFileFromGitHub).toHaveBeenCalledTimes(2);
    expect(fetchFileFromGitHub).toHaveBeenCalledWith(
      "docs/quickstart.mdx",
      repoConfig,
    );
    expect(fetchFileFromGitHub).toHaveBeenCalledWith(
      "docs/guides/intro.mdx",
      repoConfig,
    );

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
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
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
      type: "github",
      repoConfig,
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
    const repoConfig = repoConfigFactory({
      docsPrefix: "docs",
      stripPathPrefix: "fern/",
    });
    const scanResult = {
      mdxPaths: new Set(["fern/guides/intro.mdx"]),
      specNames: new Set<string>(),
    };

    vi.mocked(fetchFileFromGitHub).mockResolvedValue("---\n---\nContent");

    await batchFetchContent(scanResult, {
      type: "github",
      repoConfig,
    });

    // Verify path was transformed (strip "fern/" prefix)
    expect(fetchFileFromGitHub).toHaveBeenCalledWith(
      "docs/guides/intro.mdx",
      repoConfig,
    );
  });

  test("should handle fetch failures gracefully", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const scanResult = {
      mdxPaths: new Set(["missing.mdx"]),
      specNames: new Set(["missing-api"]),
    };

    vi.mocked(fetchFileFromGitHub).mockRejectedValue(
      new Error("File not found"),
    );
    vi.mocked(fetchApiSpec).mockRejectedValue(new Error("Spec not found"));

    const cache = await batchFetchContent(scanResult, {
      type: "github",
      repoConfig,
    });

    // Verify warnings were logged
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      expect.stringContaining("Failed to fetch MDX file"),
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

  test("should handle null responses from fetchers", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const scanResult = {
      mdxPaths: new Set(["missing.mdx"]),
      specNames: new Set(["missing-api"]),
    };

    vi.mocked(fetchFileFromGitHub).mockResolvedValue(null);
    vi.mocked(fetchApiSpec).mockResolvedValue(undefined);

    const cache = await batchFetchContent(scanResult, {
      type: "github",
      repoConfig,
    });

    // Cache should be empty
    const stats = cache.getStats();
    expect(stats.mdxCount).toBe(0);
    expect(stats.specCount).toBe(0);
  });

  test("should log progress information", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const scanResult = {
      mdxPaths: new Set(["test.mdx"]),
      specNames: new Set(["test-api"]),
    };

    vi.mocked(fetchFileFromGitHub).mockResolvedValue("---\n---\nContent");
    vi.mocked(fetchApiSpec).mockResolvedValue({
      specType: "openapi",
      spec: {} as OpenApiSpec,
      specUrl: "url",
    });

    await batchFetchContent(scanResult, {
      type: "github",
      repoConfig,
    });

    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Fetching 1 MDX files and 1 specs"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Fetched 1/1 MDX files and 1/1 specs"),
    );
  });
});

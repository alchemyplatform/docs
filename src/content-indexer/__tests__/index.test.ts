import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { batchFetchContent } from "@/content-indexer/core/batch-fetcher";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs";
import { ContentCache } from "@/content-indexer/core/content-cache";
import { scanDocsYml } from "@/content-indexer/core/scanner";
import type { AlgoliaRecord } from "@/content-indexer/types/algolia";
import { fetchFileFromGitHub } from "@/content-indexer/utils/github";
import { repoConfigFactory } from "@/content-indexer/utils/test-factories";

import { buildContentIndex } from "../index";

// Mock dependencies
vi.mock("@/content-indexer/utils/github", async () => {
  const actual = await vi.importActual("@/content-indexer/utils/github");
  return {
    ...actual,
    fetchFileFromGitHub: vi.fn(),
  };
});

vi.mock("@/content-indexer/core/scanner", () => ({
  scanDocsYml: vi.fn(),
}));

vi.mock("@/content-indexer/core/batch-fetcher", () => ({
  batchFetchContent: vi.fn(),
}));

vi.mock("@/content-indexer/core/build-all-outputs", () => ({
  buildAllOutputs: vi.fn(),
}));

describe("buildContentIndex", () => {
  let consoleInfoSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleInfoSpy.mockRestore();
    vi.clearAllMocks();
  });

  test("should orchestrate all 3 phases successfully", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const docsYmlContent = `
navigation:
  - tab: guides
    layout:
      - page: quickstart.mdx
`;

    // Mock Phase 0: Fetch docs.yml
    vi.mocked(fetchFileFromGitHub).mockResolvedValue(docsYmlContent);

    // Mock Phase 1: Scan
    const mockScanResult = {
      mdxPaths: new Set(["quickstart.mdx"]),
      specNames: new Set(["ethereum-api"]),
    };
    vi.mocked(scanDocsYml).mockReturnValue(mockScanResult);

    // Mock Phase 2: Batch fetch
    const mockCache = new ContentCache();
    vi.mocked(batchFetchContent).mockResolvedValue(mockCache);

    // Mock Phase 3: Process
    const mockResult = {
      pathIndex: {
        "guides/quickstart": {
          type: "mdx" as const,
          source: "docs-yml" as const,
          filePath: "quickstart.mdx",
          tab: "guides",
        },
      },
      navigationTrees: {
        guides: [],
      },
      algoliaRecords: [],
    };
    vi.mocked(buildAllOutputs).mockReturnValue(mockResult);

    const result = await buildContentIndex(repoConfig);

    // Verify all phases were called
    expect(fetchFileFromGitHub).toHaveBeenCalledWith(
      "docs/docs.yml",
      repoConfig,
    );
    expect(scanDocsYml).toHaveBeenCalled();
    expect(batchFetchContent).toHaveBeenCalledWith(mockScanResult, repoConfig);
    expect(buildAllOutputs).toHaveBeenCalledWith(
      expect.any(Object),
      mockCache,
      repoConfig,
    );

    // Verify result
    expect(result).toEqual(mockResult);

    // Verify console logs
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Building content index"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Phase 1"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Phase 2"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Phase 3"),
    );
  });

  test("should throw error if docs.yml fetch fails", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });

    vi.mocked(fetchFileFromGitHub).mockResolvedValue(null);

    await expect(buildContentIndex(repoConfig)).rejects.toThrow(
      "Failed to fetch docs/docs.yml",
    );
  });

  test("should log statistics about generated content", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });

    vi.mocked(fetchFileFromGitHub).mockResolvedValue("navigation: []");
    vi.mocked(scanDocsYml).mockReturnValue({
      mdxPaths: new Set(),
      specNames: new Set(),
    });
    vi.mocked(batchFetchContent).mockResolvedValue(new ContentCache());
    vi.mocked(buildAllOutputs).mockReturnValue({
      pathIndex: {
        "guides/quickstart": {
          type: "mdx",
          source: "docs-yml",
          filePath: "quickstart.mdx",
          tab: "guides",
        },
        "reference/api": {
          type: "openapi",
          source: "docs-yml",
          operationId: "getBalance",
          specUrl: "https://example.com/spec.json",
          tab: "reference",
        },
      },
      navigationTrees: {},
      algoliaRecords: [{ objectID: "1" }] as AlgoliaRecord[],
    });

    await buildContentIndex(repoConfig);

    // Verify statistics are logged
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Generated 2 routes, 1 Algolia records"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Sources:"),
    );
    expect(consoleInfoSpy).toHaveBeenCalledWith(
      expect.stringContaining("Types:"),
    );
  });
});

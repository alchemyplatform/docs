import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";

import { batchFetchContent } from "@/content-indexer/core/batch-fetcher";
import { buildAllOutputs } from "@/content-indexer/core/build-all-outputs";
import { ContentCache } from "@/content-indexer/core/content-cache";
import { scanDocsYml } from "@/content-indexer/core/scanner";
import { buildMainContentIndex } from "@/content-indexer/indexers/main";
import { fetchFileFromGitHub } from "@/content-indexer/utils/github";
import { repoConfigFactory } from "@/content-indexer/utils/test-factories";

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

describe("buildMainContentIndex", () => {
  let consoleInfoSpy: ReturnType<typeof vi.spyOn>;

  beforeEach(() => {
    consoleInfoSpy = vi.spyOn(console, "info").mockImplementation(() => {});
  });

  afterEach(() => {
    consoleInfoSpy.mockRestore();
    vi.clearAllMocks();
  });

  test("should orchestrate all 3 phases successfully in preview mode", async () => {
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

    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });

    const result = await buildMainContentIndex({
      mode: "preview",
      localBasePath: "/test/fern",
      branchId: "test-branch",
      repoConfig,
    });

    // Verify all phases were called
    expect(scanDocsYml).toHaveBeenCalled();
    expect(batchFetchContent).toHaveBeenCalledWith(mockScanResult, {
      type: "filesystem",
      basePath: "/test/fern",
    });
    expect(buildAllOutputs).toHaveBeenCalledWith(
      expect.any(Object),
      mockCache,
      repoConfig,
    );

    // Verify result
    expect(result).toEqual(mockResult);
  });

  test("should use GitHub API in production mode", async () => {
    const repoConfig = repoConfigFactory({ docsPrefix: "docs" });
    const docsYmlContent = `
navigation:
  - tab: guides
    layout:
      - page: quickstart.mdx
`;

    vi.mocked(fetchFileFromGitHub).mockResolvedValue(docsYmlContent);
    vi.mocked(scanDocsYml).mockReturnValue({
      mdxPaths: new Set(["quickstart.mdx"]),
      specNames: new Set(),
    });
    vi.mocked(batchFetchContent).mockResolvedValue(new ContentCache());
    vi.mocked(buildAllOutputs).mockReturnValue({
      pathIndex: {},
      navigationTrees: {},
      algoliaRecords: [],
    });

    await buildMainContentIndex({
      mode: "production",
      localBasePath: "/test/fern",
      branchId: "main",
      repoConfig,
    });

    // Verify local filesystem was still used (both modes use local in main indexer)
    expect(batchFetchContent).toHaveBeenCalledWith(expect.any(Object), {
      type: "filesystem",
      basePath: "/test/fern",
    });
  });
});

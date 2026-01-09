import { beforeEach, describe, expect, test, vi } from "vitest";

import type { NavigationTreesByTab } from "@/content-indexer/types/navigation.js";
import type { PathIndex } from "@/content-indexer/types/pathIndex.js";

import { storeToRedis } from "../redis.js";

// Mock Redis
const mockSet = vi.fn().mockResolvedValue("OK");
const mockGet = vi.fn();

vi.mock("@/content-indexer/utils/redis", () => ({
  getRedis: vi.fn(() => ({
    set: mockSet,
    get: mockGet,
  })),
}));

describe("storeToRedis", () => {
  beforeEach(() => {
    mockSet.mockClear();
  });

  test("should store path index to Redis", async () => {
    const pathIndex: PathIndex = {
      "guides/quickstart": {
        type: "mdx",
        filePath: "fern/guides/quickstart.mdx",
        source: "docs-yml",
        tab: "guides",
      },
    };

    await storeToRedis(pathIndex, undefined, {
      branchId: "main",
      indexerType: "main",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main/path-index:main",
      JSON.stringify(pathIndex, null, 2),
    );
  });

  test("should store navigation trees to Redis", async () => {
    const navigationTrees: NavigationTreesByTab = {
      guides: [
        {
          title: "Quickstart",
          path: "/guides/quickstart",
          type: "page",
        },
      ],
    };

    await storeToRedis({}, navigationTrees, {
      branchId: "main",
      indexerType: "main",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main/nav-tree:guides",
      JSON.stringify(navigationTrees.guides, null, 2),
    );
  });

  test("should store multiple navigation trees", async () => {
    const navigationTrees: NavigationTreesByTab = {
      guides: [
        {
          title: "Guide1",
          path: "/guides/guide1",
          type: "page",
        },
      ],
      reference: [
        {
          title: "Ref1",
          path: "/reference/ref1",
          type: "page",
        },
      ],
    };

    await storeToRedis({}, navigationTrees, {
      branchId: "main",
      indexerType: "main",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main/nav-tree:guides",
      JSON.stringify(navigationTrees.guides, null, 2),
    );
    expect(mockSet).toHaveBeenCalledWith(
      "main/nav-tree:reference",
      JSON.stringify(navigationTrees.reference, null, 2),
    );
  });

  test("should use sdk suffix for SDK indexer", async () => {
    const pathIndex: PathIndex = {
      "wallets/metamask": {
        type: "mdx",
        filePath: "wallets/metamask.mdx",
        source: "docs-yml",
        tab: "wallets",
      },
    };

    await storeToRedis(pathIndex, undefined, {
      branchId: "main",
      indexerType: "sdk",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main/path-index:sdk",
      JSON.stringify(pathIndex, null, 2),
    );
  });

  test("should store all data in parallel", async () => {
    const pathIndex: PathIndex = {
      "guides/quickstart": {
        type: "mdx",
        filePath: "file.mdx",
        source: "docs-yml",
        tab: "guides",
      },
    };

    const navigationTrees: NavigationTreesByTab = {
      guides: [{ title: "Guide", path: "/guides", type: "page" }],
      reference: [{ title: "Ref", path: "/reference", type: "page" }],
    };

    await storeToRedis(pathIndex, navigationTrees, {
      branchId: "main",
      indexerType: "main",
    });

    // Should have called set 3 times (1 pathIndex + 2 nav trees)
    expect(mockSet).toHaveBeenCalledTimes(3);
  });
});

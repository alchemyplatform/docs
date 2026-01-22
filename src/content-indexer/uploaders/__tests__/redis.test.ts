import { beforeEach, describe, expect, test, vi } from "vitest";

import type { NavigationTreesByTab } from "@/content-indexer/types/navigation.ts";
import type { PathIndex } from "@/content-indexer/types/pathIndex.ts";

import { storeToRedis } from "../redis.ts";

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

  test("should store path index to Redis without TTL for main branch", async () => {
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
      indexerType: "docs",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main:index:docs.json",
      JSON.stringify(pathIndex, null, 2),
      {}, // No TTL for main branch
    );
  });

  test("should store path index to Redis with 30-day TTL for preview branches", async () => {
    const pathIndex: PathIndex = {
      "guides/quickstart": {
        type: "mdx",
        filePath: "fern/guides/quickstart.mdx",
        source: "docs-yml",
        tab: "guides",
      },
    };

    await storeToRedis(pathIndex, undefined, {
      branchId: "feature-abc",
      indexerType: "docs",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "feature-abc:index:docs.json",
      JSON.stringify(pathIndex, null, 2),
      { ex: 2592000 }, // 30 days in seconds
    );
  });

  test("should store navigation trees to Redis without TTL for main branch", async () => {
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
      indexerType: "docs",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main:nav:guides.json",
      JSON.stringify(navigationTrees.guides, null, 2),
      {}, // No TTL for main branch
    );
  });

  test("should store multiple navigation trees with correct TTL", async () => {
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
      indexerType: "docs",
    });

    expect(mockSet).toHaveBeenCalledWith(
      "main:nav:guides.json",
      JSON.stringify(navigationTrees.guides, null, 2),
      {}, // No TTL for main branch
    );
    expect(mockSet).toHaveBeenCalledWith(
      "main:nav:reference.json",
      JSON.stringify(navigationTrees.reference, null, 2),
      {}, // No TTL for main branch
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
      "main:index:sdk.json",
      JSON.stringify(pathIndex, null, 2),
      {}, // No TTL for main branch
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
      indexerType: "docs",
    });

    // Should have called set 3 times (1 pathIndex + 2 nav trees)
    expect(mockSet).toHaveBeenCalledTimes(3);
  });
});

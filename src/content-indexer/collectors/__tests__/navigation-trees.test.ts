import { describe, expect, test } from "vitest";

import { NavigationTreesCollector } from "../navigation-trees";

describe("NavigationTreesCollector", () => {
  test("should initialize with empty trees", () => {
    const collector = new NavigationTreesCollector();
    expect(collector.getTrees()).toEqual({});
  });

  test("should add item to new tab", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("guides", {
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });

    const trees = collector.getTrees();
    expect(trees.guides).toHaveLength(1);
    expect(trees.guides[0]).toEqual({
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });
  });

  test("should add multiple items to same tab", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("guides", {
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });
    collector.addItem("guides", {
      title: "Advanced",
      path: "/guides/advanced",
      type: "page",
    });

    const trees = collector.getTrees();
    expect(trees.guides).toHaveLength(2);
  });

  test("should handle items with children", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("reference", {
      title: "NFT API",
      type: "section",
      children: [
        {
          title: "getNFTs",
          path: "/reference/getnfts",
          method: "POST",
          type: "endpoint",
        },
      ],
    });

    const trees = collector.getTrees();
    const firstItem = trees.reference[0];
    expect(firstItem.type).toBe("section");
    if (firstItem.type === "section" || firstItem.type === "api-section") {
      expect(firstItem.children).toHaveLength(1);
    }
  });

  test("should handle multiple tabs", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("guides", {
      title: "Quickstart",
      path: "/guides/quickstart",
      type: "page",
    });
    collector.addItem("reference", {
      title: "API Reference",
      path: "/reference",
      type: "page",
    });

    const trees = collector.getTrees();
    expect(Object.keys(trees)).toHaveLength(2);
    expect(trees.guides).toBeDefined();
    expect(trees.reference).toBeDefined();
  });

  test("should return correct stats", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("guides", {
      title: "Page1",
      path: "/guides/page1",
      type: "page",
    });
    collector.addItem("guides", {
      title: "Page2",
      path: "/guides/page2",
      type: "page",
    });
    collector.addItem("reference", {
      title: "Page3",
      path: "/reference/page3",
      type: "page",
    });

    const stats = collector.getStats();
    expect(stats.tabCount).toBe(2);
    expect(stats.itemCounts.guides).toBe(2);
    expect(stats.itemCounts.reference).toBe(1);
  });

  test("should count nested items in stats", () => {
    const collector = new NavigationTreesCollector();
    collector.addItem("reference", {
      title: "API Section",
      type: "section",
      children: [
        {
          title: "Method1",
          path: "/reference/method1",
          method: "POST",
          type: "endpoint",
        },
        {
          title: "Method2",
          path: "/reference/method2",
          method: "GET",
          type: "endpoint",
        },
      ],
    });

    const stats = collector.getStats();
    expect(stats.tabCount).toBe(1);
    expect(stats.itemCounts.reference).toBe(3); // 1 section + 2 children
  });
});

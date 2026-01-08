import { describe, expect, test } from "vitest";

import { PathBuilder } from "../path-builder";

describe("PathBuilder", () => {
  test("should initialize with empty parts", () => {
    const builder = PathBuilder.init();
    expect(builder.get()).toBe("");
  });

  test("should initialize with base path", () => {
    const builder = PathBuilder.init("guides/getting-started");
    expect(builder.get()).toBe("guides/getting-started");
  });

  test("should build path with single urlSlug", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder.apply({ urlSlug: "guides" });
    expect(newBuilder.get()).toBe("guides");
  });

  test("should chain multiple urlSlug applications", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder
      .apply({ urlSlug: "guides" })
      .apply({ urlSlug: "quickstart" });
    expect(newBuilder.get()).toBe("guides/quickstart");
  });

  test("should handle fullSlug override", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder
      .apply({ urlSlug: "guides" })
      .apply({ fullSlug: ["reference", "ethereum", "getbalance"] });
    expect(newBuilder.get()).toBe("reference/ethereum/getbalance");
  });

  test("should build immutable path - original unchanged", () => {
    const builder1 = PathBuilder.init();
    const builder2 = builder1.apply({ urlSlug: "guides" });
    const builder3 = builder2.apply({ urlSlug: "quickstart" });

    expect(builder1.get()).toBe("");
    expect(builder2.get()).toBe("guides");
    expect(builder3.get()).toBe("guides/quickstart");
  });

  test("should handle empty fullSlug array", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder.apply({ fullSlug: [] });
    expect(newBuilder.get()).toBe("");
  });

  test("should handle fullSlug with single element", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder.apply({ fullSlug: ["guides"] });
    expect(newBuilder.get()).toBe("guides");
  });

  test("should prefer fullSlug over urlSlug when both provided", () => {
    const builder = PathBuilder.init();
    const newBuilder = builder.apply({
      urlSlug: "ignored",
      fullSlug: ["reference", "ethereum"],
    });
    expect(newBuilder.get()).toBe("reference/ethereum");
  });

  test("should handle skipUrlSlug flag", () => {
    const builder = PathBuilder.init();
    const step1 = builder.apply({ urlSlug: "guides" });
    const step2 = step1.apply({ skipUrlSlug: true });
    expect(step2.get()).toBe("guides");
  });

  test("should handle complex path building scenario", () => {
    const builder = PathBuilder.init();
    const step1 = builder.apply({ urlSlug: "reference" });
    const step2 = step1.apply({ urlSlug: "nft-api" });
    const step3 = step2.apply({ urlSlug: "getnfts" });

    expect(step3.get()).toBe("reference/nft-api/getnfts");
  });

  test("should handle path replacement mid-chain", () => {
    const builder = PathBuilder.init();
    const step1 = builder.apply({ urlSlug: "guides" });
    const step2 = step1.apply({ urlSlug: "advanced" });
    const step3 = step2.apply({ fullSlug: ["reference", "api"] });

    expect(step3.get()).toBe("reference/api");
  });
});

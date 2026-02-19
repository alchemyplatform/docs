import crypto from "crypto";
import { describe, expect, test } from "vitest";

import { buildPreviewUrl } from "../preview-url.ts";

describe("buildPreviewUrl", () => {
  const secret = "test-secret";
  const baseUrl = "https://docs-alchemy-dot-com.vercel.app";

  test("generates URL with branch and valid HMAC signature", () => {
    const url = buildPreviewUrl("ds/feature", baseUrl, secret);
    const parsed = new URL(url);

    expect(parsed.pathname).toBe("/api/preview/start");
    expect(parsed.searchParams.get("branch")).toBe("ds/feature");

    const sig = parsed.searchParams.get("sig");
    const expected = crypto
      .createHmac("sha256", secret)
      .update("ds/feature")
      .digest("hex");
    expect(sig).toBe(expected);
  });

  test("encodes branch names with special characters", () => {
    const url = buildPreviewUrl("feat/add+stuff", baseUrl, secret);
    expect(url).toContain("branch=feat%2Fadd%2Bstuff");
  });

  test("produces different signatures for different branches", () => {
    const url1 = buildPreviewUrl("branch-a", baseUrl, secret);
    const url2 = buildPreviewUrl("branch-b", baseUrl, secret);

    const sig1 = new URL(url1).searchParams.get("sig");
    const sig2 = new URL(url2).searchParams.get("sig");
    expect(sig1).not.toBe(sig2);
  });
});

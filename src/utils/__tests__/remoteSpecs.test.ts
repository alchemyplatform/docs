import { mkdtempSync, rmSync, writeFileSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

import {
  filterRemoteSpecsByType,
  getOverriddenNames,
  parseRemoteSpecs,
  readRemoteSpecs,
} from "../remoteSpecs.ts";

describe("remoteSpecs", () => {
  describe("parseRemoteSpecs", () => {
    test("defaults omitted type to openapi", () => {
      const specs = parseRemoteSpecs([
        { name: "admin-api", url: "https://example.com/openapi.yaml" },
      ]);

      expect(specs).toEqual([
        {
          name: "admin-api",
          url: "https://example.com/openapi.yaml",
          type: "openapi",
        },
      ]);
    });

    test("preserves explicit openapi and openrpc types", () => {
      const specs = parseRemoteSpecs([
        {
          name: "rest-api",
          url: "https://example.com/a.yaml",
          type: "openapi",
        },
        {
          name: "wallet-api",
          url: "https://example.com/b.yaml",
          type: "openrpc",
        },
      ]);

      expect(specs.map((spec) => spec.type)).toEqual(["openapi", "openrpc"]);
    });

    test("throws when the registry is not an array", () => {
      expect(() => parseRemoteSpecs({})).toThrow(/must be an array/);
    });

    test("throws when name is missing", () => {
      expect(() =>
        parseRemoteSpecs([{ url: "https://example.com/a.yaml" }]),
      ).toThrow(/missing a non-empty "name"/);
    });

    test("throws when url is missing", () => {
      expect(() => parseRemoteSpecs([{ name: "no-url" }])).toThrow(
        /missing a non-empty "url"/,
      );
    });

    test("throws on an unknown type", () => {
      expect(() =>
        parseRemoteSpecs([
          { name: "bad", url: "https://example.com/a.yaml", type: "graphql" },
        ]),
      ).toThrow(/invalid type "graphql"/);
    });
  });

  describe("filterRemoteSpecsByType", () => {
    test("returns only entries of the requested type", () => {
      const specs = parseRemoteSpecs([
        { name: "rest", url: "https://example.com/a.yaml" },
        { name: "rpc", url: "https://example.com/b.yaml", type: "openrpc" },
      ]);

      expect(filterRemoteSpecsByType(specs, "openrpc")).toEqual([
        { name: "rpc", url: "https://example.com/b.yaml", type: "openrpc" },
      ]);
      expect(filterRemoteSpecsByType(specs, "openapi")).toEqual([
        { name: "rest", url: "https://example.com/a.yaml", type: "openapi" },
      ]);
    });
  });

  describe("getOverriddenNames", () => {
    test("collects names so matching local specs are skipped", () => {
      const specs = parseRemoteSpecs([
        {
          name: "wallet-api",
          url: "https://example.com/b.yaml",
          type: "openrpc",
        },
      ]);

      const overridden = getOverriddenNames(specs);
      const localSpecs = ["wallet-api", "token", "trace"];

      expect(overridden.has("wallet-api")).toBe(true);
      expect(localSpecs.filter((name) => !overridden.has(name))).toEqual([
        "token",
        "trace",
      ]);
    });
  });

  describe("readRemoteSpecs", () => {
    let dir: string;

    beforeEach(() => {
      dir = mkdtempSync(join(tmpdir(), "remote-specs-"));
    });

    afterEach(() => {
      rmSync(dir, { recursive: true, force: true });
    });

    test("reads and parses a registry file", () => {
      const path = join(dir, "remote-specs.json");
      writeFileSync(
        path,
        JSON.stringify([
          {
            name: "wallet-api",
            url: "https://example.com/b.yaml",
            type: "openrpc",
          },
        ]),
      );

      expect(readRemoteSpecs(path)).toEqual([
        {
          name: "wallet-api",
          url: "https://example.com/b.yaml",
          type: "openrpc",
        },
      ]);
    });

    test("returns an empty array when the registry file is missing", () => {
      expect(readRemoteSpecs(join(dir, "does-not-exist.json"))).toEqual([]);
    });
  });
});

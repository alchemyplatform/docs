import { mkdtempSync, readFileSync, rmSync } from "fs";
import { tmpdir } from "os";
import { dirname, join } from "path";
import { fileURLToPath } from "url";
import { afterEach, beforeEach, describe, expect, test } from "vitest";

import type { DerefedOpenRpcDoc } from "../../types/openRpc.ts";
import { generateRemoteOpenRpcSpec } from "../generateRpcSpecs.ts";
import { validateRpcSpec } from "../validateRpcSpec.ts";

const FIXTURE = join(
  dirname(fileURLToPath(import.meta.url)),
  "__fixtures__",
  "remote-openrpc.yaml",
);

describe("generateRemoteOpenRpcSpec", () => {
  let outputDir: string;

  beforeEach(() => {
    outputDir = mkdtempSync(join(tmpdir(), "rpc-spec-"));
  });

  afterEach(() => {
    rmSync(outputDir, { recursive: true, force: true });
  });

  test("dereferences a source spec and writes {name}.json", async () => {
    await generateRemoteOpenRpcSpec(FIXTURE, outputDir, "wallet-api");

    const written = JSON.parse(
      readFileSync(join(outputDir, "wallet-api.json"), "utf-8"),
    ) as DerefedOpenRpcDoc;

    expect(written.info.title).toBe("Test Remote OpenRPC API");
    // components are stripped during formatting once dereferenced
    expect(written).not.toHaveProperty("components");

    // the $ref param schema was dereferenced inline
    const param = written.methods[0].params[0];
    expect(param.schema).toMatchObject({
      type: "string",
      pattern: "^0x[a-fA-F0-9]{40}$",
    });
  });

  test("produces a valid OpenRPC document", async () => {
    await generateRemoteOpenRpcSpec(FIXTURE, outputDir, "token");

    const written = JSON.parse(
      readFileSync(join(outputDir, "token.json"), "utf-8"),
    ) as DerefedOpenRpcDoc;

    expect(() => validateRpcSpec(written)).not.toThrow();
  });
});

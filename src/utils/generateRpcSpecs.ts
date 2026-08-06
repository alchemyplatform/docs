import { dereference } from "@apidevtools/json-schema-ref-parser";

import type { DerefedOpenRpcDoc } from "../types/openRpc.ts";
import { formatOpenRpcDoc, writeOpenRpcDoc } from "./generationHelpers.ts";
import { validateRpcSpec } from "./validateRpcSpec.ts";

/** Extension: when true, server URL is already final (no apiKey path param). Do not add x-auth-params. */
const SERVER_URL_FINAL_KEY = "x-alchemy-server-url-final" as const;

/**
 * Generates an OpenRPC specification from a source (local file path or remote URL)
 * and writes it to `{outputDir}/{name}.json`.
 * @param source - Path or URL to the OpenRPC schema to dereference
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param name - The output spec name; wallet-api preserves its curated method order
 */
const generateOpenRpcSpecFromSource = async (
  source: string,
  outputDir: string,
  name: string,
) => {
  const spec = (await dereference(source, {
    dereference: {
      preservedProperties: ["title", "description", "type", "pattern"],
    },
    continueOnError: true,
  })) as DerefedOpenRpcDoc & { [SERVER_URL_FINAL_KEY]?: boolean };

  const skipApiKeyParam = spec[SERVER_URL_FINAL_KEY] === true;
  const hasCustomAuthParams =
    Array.isArray((spec as Record<string, unknown>)["x-auth-params"]) &&
    ((spec as Record<string, unknown>)["x-auth-params"] as unknown[]).length >
      0;
  const { [SERVER_URL_FINAL_KEY]: _skipKey, ...specWithoutKey } = spec;
  const fullSpec = {
    ...specWithoutKey,
    ...(skipApiKeyParam || hasCustomAuthParams
      ? {}
      : {
          "x-auth-params": [
            {
              name: "apiKey",
              in: "path",
              schema: {
                type: "string",
                default: "docs-demo",
                description:
                  "For higher throughput, [create your own API key](https://dashboard.alchemy.com/signup)",
              },
              required: true,
            },
          ],
        }),
  };

  // wallet-api's source order is curated by method popularity, so preserve it.
  const shouldSort = !name.includes("wallet-api");

  const formattedSpec = await formatOpenRpcDoc(fullSpec, shouldSort);

  validateRpcSpec(formattedSpec);

  writeOpenRpcDoc(outputDir, name, formattedSpec);
};

/**
 * Generates an OpenRPC specification for a local Alchemy JSON-RPC schema.
 * @param srcDir - The source directory containing the Alchemy OpenRPC schema
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param filename - The name of the Alchemy OpenRPC schema file (also the output name)
 */
export const generateOpenRpcSpec = async (
  srcDir: string,
  outputDir: string,
  filename: string,
) => {
  const schemaDir = `${srcDir}/${filename}`;
  await generateOpenRpcSpecFromSource(
    `${schemaDir}/${filename}.yaml`,
    outputDir,
    filename,
  );
};

/**
 * Generates an OpenRPC specification from a remote URL.
 * @param url - URL to the remote OpenRPC schema
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param name - The output spec name (used for the filename)
 */
export const generateRemoteOpenRpcSpec = async (
  url: string,
  outputDir: string,
  name: string,
) => {
  await generateOpenRpcSpecFromSource(url, outputDir, name);
};

import { dereference } from "@apidevtools/json-schema-ref-parser";

import type { DerefedOpenRpcDoc } from "../types/openRpc.ts";
import { formatOpenRpcDoc, writeOpenRpcDoc } from "./generationHelpers.ts";
import { validateRpcSpec } from "./validateRpcSpec.ts";

/** Extension: when true, server URL is already final (no apiKey path param). Do not add x-auth-params. */
const SERVER_URL_FINAL_KEY = "x-alchemy-server-url-final" as const;

/**
 * Generates an OpenRPC specification for the Alchemy JSON-RPC API.
 * @param srcDir - The source directory containing the Alchemy OpenRPC schema
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param filename - The name of the Alchemy OpenRPC schema file
 */
export const generateOpenRpcSpec = async (
  srcDir: string,
  outputDir: string,
  filename: string,
) => {
  const schemaDir = `${srcDir}/${filename}`;

  const spec = (await dereference(`${schemaDir}/${filename}.yaml`, {
    dereference: {
      preservedProperties: ["title", "description", "type", "pattern"],
    },
    continueOnError: true,
  })) as DerefedOpenRpcDoc & { [SERVER_URL_FINAL_KEY]?: boolean };

  const skipApiKeyParam = spec[SERVER_URL_FINAL_KEY] === true;
  const { [SERVER_URL_FINAL_KEY]: _skipKey, ...specWithoutKey } = spec;
  const fullSpec = {
    ...specWithoutKey,
    ...(skipApiKeyParam
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

  // wallet api sorts by method popularity
  const shouldSort = !schemaDir.includes("wallet-api");

  const formattedSpec = await formatOpenRpcDoc(fullSpec, shouldSort);

  validateRpcSpec(formattedSpec);

  writeOpenRpcDoc(outputDir, filename, formattedSpec);
};

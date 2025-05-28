import { dereference } from "@apidevtools/json-schema-ref-parser";

import type { DerefedOpenRpcDoc } from "../types/openRpc";
import { formatOpenRpcDoc, writeOpenRpcDoc } from "./generationHelpers";
import { validateRpcSpec } from "./validateRpcSpec";

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
  })) as DerefedOpenRpcDoc;

  const fullSpec = {
    "x-generated-warning":
      "⚠️ This file is auto-generated. Do not edit manually",
    "x-fern-parameters": [
      {
        name: "apiKey",
        in: "path",
        schema: {
          type: "string",
          default: "docs-demo",
          description:
            "For higher throughput, [create your own API key](https://alchemy.com/?a=docs-demo)",
        },
        required: true,
      },
    ],
    ...spec,
  };

  // wallet api sorts by method popularity
  const shouldSort = !schemaDir.includes("wallet-api");

  const formattedSpec = await formatOpenRpcDoc(fullSpec, shouldSort);

  validateRpcSpec(formattedSpec);

  writeOpenRpcDoc(outputDir, filename, formattedSpec);
};

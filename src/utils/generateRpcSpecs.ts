import { dereference } from "@apidevtools/json-schema-ref-parser";
import type { OpenrpcDocument } from "@open-rpc/meta-schema";

import {
  formatOpenRpcDoc,
  getComponentsFromDir,
  getMethodsFromDir,
  getOpenRpcBase,
  writeOpenRpcDoc,
} from "./generationHelpers";

/**
 * Generates an OpenRPC specification for a supported chain.
 * @param srcDir - The source directory containing the chain's OpenRPC schema
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param filename - The name of the chain's OpenRPC schema file
 */
export const generateChainRpcSpec = async (
  srcDir: string,
  outputDir: string,
  filename: string,
) => {
  const schemaDir = `${srcDir}/${filename}`;
  const componentsDir = `${schemaDir}/components`;
  const methodsDir = `${schemaDir}/methods`;

  const components = getComponentsFromDir(componentsDir);
  const methods = getMethodsFromDir(methodsDir);

  const base = getOpenRpcBase(schemaDir);

  const doc: OpenrpcDocument = {
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
    $schema: "https://meta.open-rpc.org/",
    // openrpc: "1.2.4",
    ...base,
    methods,
    components,
  };

  const spec = await formatOpenRpcDoc(doc);

  writeOpenRpcDoc(outputDir, filename, spec);
};

/**
 * Generates an OpenRPC specification for the Alchemy JSON-RPC API.
 * @param srcDir - The source directory containing the Alchemy OpenRPC schema
 * @param outputDir - The output directory where the generated OpenRPC specification will be saved
 * @param filename - The name of the Alchemy OpenRPC schema file
 */
export const generateAlchemyRpcSpec = async (
  srcDir: string,
  outputDir: string,
  filename: string,
) => {
  const schemaDir = `${srcDir}/${filename}`;

  try {
    const spec = (await dereference(
      `${schemaDir}/base.yaml`,
    )) as OpenrpcDocument;

    const openRpcSpec = {
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

    writeOpenRpcDoc(outputDir, filename, openRpcSpec);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to dereference ${filename}`);
  }
};

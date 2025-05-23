import type { OpenrpcDocument } from "@open-rpc/meta-schema";

import {
  formatOpenRpcDoc,
  getComponentsFromDir,
  getComponentsFromFile,
  getMethodsFromDir,
  getMethodsFromFile,
  getOpenRpcBase,
  writeOpenRpcDoc,
} from "./generationHelpers";

const sharedChainRpcComponentsDir = "src/openrpc/chains/_shared/components";
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

  const components = getComponentsFromDir(
    componentsDir,
    sharedChainRpcComponentsDir,
  );
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
    openrpc: "1.2.4",
    ...base,
    methods,
    components,
  };

  const spec = await formatOpenRpcDoc(doc);

  writeOpenRpcDoc(outputDir, filename, spec);
};

const componentsFile = "src/openrpc/alchemy/_shared/components.yaml";
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
  const methodsFile = `${schemaDir}/methods.yaml`;

  const methods = getMethodsFromFile(methodsFile);

  const components = getComponentsFromFile(componentsFile);

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
    openrpc: "1.2.4",
    ...base,
    methods,
    components,
  };

  const spec = await formatOpenRpcDoc(doc, !schemaDir.includes("wallet-api"));

  writeOpenRpcDoc(outputDir, filename, spec);
};

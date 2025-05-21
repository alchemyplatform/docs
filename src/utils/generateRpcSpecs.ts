import defaultResolver from "@json-schema-tools/reference-resolver";
import type { OpenrpcDocument } from "@open-rpc/meta-schema";
import { dereferenceDocument } from "@open-rpc/schema-utils-js";
import type { JSONSchema } from "@open-rpc/schema-utils-js/build/parse-open-rpc-document";
import { readFileSync } from "fs";
import yaml from "js-yaml";
import path from "path";

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
  const base = getOpenRpcBase(schemaDir);

  const spec: OpenrpcDocument = {
    "x-generated-warning":
      "⚠️ This file is auto-generated. Do not edit manually",
    ...base,
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
  };

  // Must override default resolver
  // dereferenceDocument second argument doesn't work because OpenRPC was coded by brain-dead monkeys
  // @see https://github.com/open-rpc/schema-utils-js/issues/971
  const defaultFileResolver = defaultResolver.protocolHandlerMap.file;
  defaultResolver.protocolHandlerMap.file = async (
    uri: string,
    root: JSONSchema,
  ) => {
    if (!uri.startsWith(".")) {
      return defaultFileResolver(uri, root);
    }
    // Resolve the ref path relative to the schema directory instead of root
    const fullPath = path.resolve(schemaDir, uri);
    const content = yaml.load(readFileSync(fullPath, "utf8")) as JSONSchema;
    return content;
  };

  try {
    const resolvedSpec = (await dereferenceDocument(spec)) as OpenrpcDocument;

    writeOpenRpcDoc(outputDir, filename, resolvedSpec);
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to dereference ${filename}`);
  }
};

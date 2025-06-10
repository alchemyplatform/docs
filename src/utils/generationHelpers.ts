import type { JSONSchema, OpenrpcDocument } from "@open-rpc/meta-schema";
import { writeFileSync } from "fs";
import mergeAllOf from "json-schema-merge-allof";

import type { DerefedOpenRpcDoc } from "../types/openRpc";

/**
 * Formats an OpenRPC document by removing components, merging allOf schemas, and sorting methods
 * @param doc - The OpenRPC document to format
 * @returns Formatted OpenRPC document with merged allOf schemas
 */
export const formatOpenRpcDoc = async (
  spec: DerefedOpenRpcDoc,
  sort = true,
) => {
  delete spec.components; // once dereferenced, components are no longer needed

  spec.methods.forEach((method) => {
    method.params.forEach((param) => {
      if (typeof param.schema !== "boolean") {
        param.schema = mergeAllOf(param.schema) as JSONSchema;
      }
    });

    if (method.result && typeof method.result.schema !== "boolean") {
      method.result.schema = mergeAllOf(method.result.schema) as JSONSchema;
    }
  });

  if (sort) {
    spec.methods.sort((a, b) => {
      if (a.name && b.name) {
        return a.name.localeCompare(b.name);
      }
      return 0;
    });
  }

  return spec;
};

/**
 * Writes an OpenRPC document to a JSON file.
 * @param outputDir - Path to the directory where the file will be written
 * @param filename - Name of the file to write
 * @param spec - The OpenRPC document to write
 */
export const writeOpenRpcDoc = (
  outputDir: string,
  filename: string,
  spec: OpenrpcDocument,
) =>
  writeFileSync(
    `${outputDir}/${filename}.json`,
    JSON.stringify(spec, null, "\t"),
  );

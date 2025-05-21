import type {
  Components,
  JSONSchema,
  Methods,
  OpenrpcDocument,
  SchemaComponents,
} from "@open-rpc/meta-schema";
import { dereferenceDocument } from "@open-rpc/schema-utils-js";
import { readFileSync, readdirSync, writeFileSync } from "fs";
import yaml from "js-yaml";
import mergeAllOf from "json-schema-merge-allof";

import type { DerefedOpenRpcDoc } from "../types/openRpc";
import { validateRpcSpec } from "./validateRpcSpec";

/**
 * Retrieves components (schemas) from a YAML file and returns them in OpenRPC Components format.
 * @param componentsFile - Path to the YAML file containing component schemas
 * @returns Components object containing parsed schemas for use in OpenRPC documents
 */
export const getComponentsFromFile = (componentsFile: string): Components => {
  const rawMethods = readFileSync(componentsFile).toString();
  const parsedMethods = yaml.load(rawMethods) as SchemaComponents;
  const schemas = { ...parsedMethods };

  return { schemas };
};

/**
 * Retrieves components (schemas) from all files in a directory and returns them in OpenRPC Components format.
 * @param componentsDir - Path to the directory containing component schemas
 * @returns Components object containing parsed schemas for use in OpenRPC documents
 */
export const getComponentsFromDir = (componentsDir: string): Components => {
  const componentsFiles = readdirSync(componentsDir);

  const schemas = componentsFiles.reduce<SchemaComponents>((acc, file) => {
    const { schemas: innerSchemas } = getComponentsFromFile(
      `${componentsDir}/${file}`,
    );

    return { ...acc, ...innerSchemas };
  }, {});

  return { schemas };
};

/**
 * Retrieves methods from a YAML file and returns them in OpenRPC Methods format.
 * @param methodsFile - Path to the YAML file containing method definitions
 * @returns Methods object containing parsed methods from the file
 */
export const getMethodsFromFile = (methodsFile: string): Methods => {
  const rawMethods = readFileSync(methodsFile).toString();
  const documents = yaml.loadAll(rawMethods);
  const unsortedMethods = documents.flat() as Methods;

  // TODO: add this as a config param to base.yaml
  if (methodsFile.includes("wallet-api")) {
    return unsortedMethods;
  }

  return unsortedMethods.sort((a, b) => {
    if ("name" in a && "name" in b) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
};

/**
 * Retrieves methods from all files in a directory and returns them in OpenRPC Methods format.
 * @param methodsDir - Path to the directory containing method definitions
 * @returns Methods object containing parsed methods from all files in the directory
 */
export const getMethodsFromDir = (methodsDir: string): Methods => {
  const methodsFiles = readdirSync(methodsDir);

  const unsortedMethods = methodsFiles.reduce<Methods>((acc, file) => {
    const raw = readFileSync(`${methodsDir}/${file}`).toString();
    const parsed = yaml.load(raw) as Methods;

    return [...acc, ...parsed];
  }, []);

  return unsortedMethods.sort((a, b) => {
    if ("name" in a && "name" in b) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
};

// type OpenRpcBase = Pick<OpenrpcDocument, "info" | "externalDocs" | "servers">;
/**
 * Retrieves the base OpenRPC document from a YAML file and returns it in OpenRPC Base format.
 * @param schemaDir - Path to the directory containing the base OpenRPC document
 * @returns Base OpenRPC document containing the base information for the OpenRPC document
 */
export const getOpenRpcBase = (schemaDir: string) => {
  const baseRaw = readFileSync(`${schemaDir}/base.yaml`).toString();

  return yaml.load(baseRaw) as OpenrpcDocument;
};

/**
 * Formats an OpenRPC document by dereferencing it and merging allOf schemas. Validates the document after formatting.
 * @param doc - The OpenRPC document to format
 * @returns Formatted OpenRPC document with merged allOf schemas
 */
export const formatOpenRpcDoc = async (doc: OpenrpcDocument) => {
  const spec = (await dereferenceDocument(doc)) as DerefedOpenRpcDoc;

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

  validateRpcSpec(spec);

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

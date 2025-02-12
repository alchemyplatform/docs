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
import { DerefedOpenRpcDoc } from "../types/openRpc";

export const getComponentsFromFile = (componentsFile: string): Components => {
  const rawMethods = readFileSync(componentsFile).toString();
  const parsedMethods = yaml.load(rawMethods) as SchemaComponents;
  const schemas = { ...parsedMethods };

  return { schemas };
};

export const getComponentsFromDir = (componentsDir: string): Components => {
  const componentsFiles = readdirSync(componentsDir);

  const schemas = componentsFiles.reduce<SchemaComponents>((acc, file) => {
    const { schemas: innerSchemas } = getComponentsFromFile(
      `${componentsDir}/${file}`
    );

    return { ...acc, ...innerSchemas };
  }, {});

  return { schemas };
};

export const getMethodsFromFile = (methodsFile: string): Methods => {
  const rawMethods = readFileSync(methodsFile).toString();
  const unsortedMethods = yaml.load(rawMethods) as Methods;

  return unsortedMethods.sort((a, b) => {
    if ("name" in a && "name" in b) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });
};

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

type OpenRpcBase = Pick<OpenrpcDocument, "info" | "externalDocs" | "servers">;
export const getOpenRpcBase = (schemaDir: string): OpenRpcBase => {
  const baseRaw = readFileSync(`${schemaDir}/base.yaml`).toString();

  return yaml.load(baseRaw) as OpenRpcBase;
};

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

  return spec;
};

export const writeOpenRpcDoc = (
  outputDir: string,
  filename: string,
  spec: OpenrpcDocument
) =>
  writeFileSync(
    `${outputDir}/${filename}.json`,
    JSON.stringify(spec, null, "\t")
  );

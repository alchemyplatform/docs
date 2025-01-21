import type {
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

export const generateRpcSpec = async (
  srcDir: string,
  outputDir: string,
  filename: string
) => {
  const schemaDir = `${srcDir}/${filename}`;
  const componentsDir = `${schemaDir}/components`;
  const methodsDir = `${schemaDir}/methods`;

  const componentsFiles = readdirSync(componentsDir);
  const methodsFiles = readdirSync(methodsDir);

  const unsortedMethods = methodsFiles.reduce<Methods>((acc, file) => {
    const raw = readFileSync(`${methodsDir}/${file}`).toString();
    const parsed = yaml.load(raw) as Methods;

    return [...acc, ...parsed];
  }, []);

  const methods = unsortedMethods.sort((a, b) => {
    if ("name" in a && "name" in b) {
      return a.name.localeCompare(b.name);
    }
    return 0;
  });

  const schemas = componentsFiles.reduce<SchemaComponents>((acc, file) => {
    const raw = readFileSync(`${componentsDir}/${file}`).toString();
    const parsed = yaml.load(raw) as SchemaComponents;

    return { ...acc, ...parsed };
  }, {});

  const baseRaw = readFileSync(`${schemaDir}/base.yaml`).toString();
  const base = yaml.load(baseRaw) as Pick<
    OpenrpcDocument,
    "info" | "externalDocs" | "servers"
  >;

  const doc: OpenrpcDocument = {
    openrpc: "1.2.4",
    ...base,
    methods,
    components: {
      schemas,
    },
  };

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

  writeFileSync(
    `${outputDir}/${filename}.json`,
    JSON.stringify(spec, null, "\t")
  );
};

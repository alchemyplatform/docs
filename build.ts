import {
  InfoObject,
  JSONSchema,
  Methods,
  OpenrpcDocument,
  SchemaComponents,
} from "@open-rpc/meta-schema";
import { dereferenceDocument } from "@open-rpc/schema-utils-js";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "fs";
import yaml from "js-yaml";
import mergeAllOf from "json-schema-merge-allof";

const allChainsBase = "openrpc-schemas";
const allChainFiles = readdirSync(allChainsBase);

const outputDir = "docs/api-specs";

mkdirSync(outputDir, { recursive: true });

const generateChainSpec = async (chainFile: string) => {
  const chainBase = `${allChainsBase}/${chainFile}`;
  const componentsBase = `${chainBase}/components`;
  const methodsBase = `${chainBase}/methods`;

  const infoRaw = readFileSync(`${chainBase}/info.yaml`).toString();
  const info = yaml.load(infoRaw) as InfoObject;

  const componentsFiles = readdirSync(componentsBase);
  const methodsFiles = readdirSync(methodsBase);

  const unsortedMethods = methodsFiles.reduce<Methods>((acc, file) => {
    const raw = readFileSync(`${methodsBase}/${file}`).toString();
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
    const raw = readFileSync(`${componentsBase}/${file}`).toString();
    const parsed = yaml.load(raw) as SchemaComponents;

    return { ...acc, ...parsed };
  }, {});

  const doc: OpenrpcDocument = {
    openrpc: "1.2.4",
    info,
    methods,
    components: {
      schemas,
    },
  };

  const spec = await dereferenceDocument(doc);

  delete spec.components; // once dereferenced, components are no longer needed

  spec.methods.forEach((method, i) => {
    if ("params" in method) {
      method.params.forEach((param, j) => {
        if ("schema" in param && typeof param.schema !== "boolean") {
          param.schema = mergeAllOf(param.schema) as JSONSchema;
        }
      });
    }

    if (
      "result" in method &&
      method.result &&
      "schema" in method.result &&
      typeof method.result.schema !== "boolean"
    ) {
      method.result.schema = mergeAllOf(method.result.schema) as JSONSchema;
    }
  });

  writeFileSync(
    `${outputDir}/${chainFile}.json`,
    JSON.stringify(spec, null, "\t")
  );
};

allChainFiles.forEach(generateChainSpec);

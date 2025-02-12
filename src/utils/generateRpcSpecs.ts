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
    openrpc: "1.2.4",
    ...base,
    methods,
    components,
  };

  const spec = await formatOpenRpcDoc(doc);

  writeOpenRpcDoc(outputDir, filename, spec);
};

const componentsFile = "src/openrpc-schemas/alchemy/_shared/components.yaml";
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
    openrpc: "1.2.4",
    ...base,
    methods,
    components,
  };

  const spec = await formatOpenRpcDoc(doc);

  writeOpenRpcDoc(outputDir, filename, spec);
};

import { mkdirSync, readdirSync } from "fs";

import { generateAlchemyRpcSpec } from "../src/utils/generateRpcSpecs";

const isHiddenDir = (file: string) =>
  !file.startsWith("_") && !file.startsWith(".");

const schemasRoot = "src/openrpc";
const outputRoot = "build/api-specs";

// generate chains OpenRPC specs
const allChainsDir = `${schemasRoot}/chains`;
const outputDir = `${outputRoot}/chains`;
const allChainFiles = readdirSync(allChainsDir).filter(isHiddenDir);

mkdirSync(outputDir, { recursive: true });

allChainFiles.forEach((chain) =>
  generateAlchemyRpcSpec(allChainsDir, outputDir, chain).catch((err) => {
    console.error(err);
    throw err;
  }),
);

// generate alchemy API OpenRPC specs
const alchemyApisDir = `${schemasRoot}/alchemy`;
const alchemyOutputDir = `${outputRoot}/alchemy/json-rpc`;
const allAlchemyFiles = readdirSync(alchemyApisDir).filter(isHiddenDir);

mkdirSync(alchemyOutputDir, { recursive: true });

allAlchemyFiles.forEach((api) =>
  generateAlchemyRpcSpec(alchemyApisDir, alchemyOutputDir, api).catch((err) => {
    console.error(err);
    throw err;
  }),
);

import { mkdirSync } from "fs";

import { generateAlchemyRpcSpec } from "../src/utils/generateRpcSpecs";

const schemasRoot = "src/openrpc";
const outputRoot = "build/api-specs";

// generate chains OpenRPC specs
// const allChainsDir = `${schemasRoot}/chains`;
// const outputDir = `${outputRoot}/chains`;
// const allChainFiles = readdirSync(allChainsDir);

// mkdirSync(outputDir, { recursive: true });

// allChainFiles.forEach((chain) =>
//   generateChainRpcSpec(allChainsDir, outputDir, chain),
// );

// generate alchemy API OpenRPC specs
const alchemyApisDir = `${schemasRoot}/alchemy`;
const alchemyOutputDir = `${outputRoot}/alchemy/json-rpc`;
// const allAlchemyFiles = readdirSync(alchemyApisDir).filter(
//   (file) => !file.startsWith("_") && !file.startsWith("."),
// );

mkdirSync(alchemyOutputDir, { recursive: true });

["bundler"].forEach((api) =>
  generateAlchemyRpcSpec(alchemyApisDir, alchemyOutputDir, api),
);

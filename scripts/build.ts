import { cp, mkdirSync, readdirSync } from "fs";

import {
  generateAlchemyRpcSpec,
  generateChainRpcSpec,
} from "../src/utils/generateRpcSpecs";

const schemasRoot = "src/openrpc";
const outputRoot = "docs/api-specs";

// generate chains OpenRPC specs
const allChainsDir = `${schemasRoot}/chains`;
const outputDir = `${outputRoot}/chains`;
const allChainFiles = readdirSync(allChainsDir);

mkdirSync(outputDir, { recursive: true });

allChainFiles.forEach((chain) =>
  generateChainRpcSpec(allChainsDir, outputDir, chain),
);

// generate alchemy API OpenRPC specs
const alchemyApisDir = `${schemasRoot}/alchemy`;
const alchemyOutputDir = `${outputRoot}/alchemy`;
const allAlchemyFiles = readdirSync(alchemyApisDir).filter(
  (file) => !file.startsWith("_") && file !== ".DS_Store",
);

mkdirSync(alchemyOutputDir, { recursive: true });

allAlchemyFiles.forEach((api) =>
  generateAlchemyRpcSpec(alchemyApisDir, alchemyOutputDir, api),
);

// Copy markdown files to docs dir
cp("src/markdown", "docs/markdown", { recursive: true }, (e) => {
  if (e) {
    console.error(e);
  }
});

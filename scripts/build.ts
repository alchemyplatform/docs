import { cp, mkdirSync, readdirSync } from "fs";

import {
  generateAlchemyRpcSpec,
  generateRpcSpec,
} from "../src/utils/generateRpcSpec";

const allChainsDir = "src/openrpc-schemas/chains";
const allChainFiles = readdirSync(allChainsDir);

const outputDir = "docs/api-specs/chains";

mkdirSync(outputDir, { recursive: true });

allChainFiles.forEach((chain) =>
  generateRpcSpec(allChainsDir, outputDir, chain),
);

const alchemyAPIsDir = "src/openrpc-schemas/alchemy";
const allAlchemyFiles = readdirSync(alchemyAPIsDir).filter(
  // Filter out components.yaml and any other non-API spec files
  (file) => file !== "components.yaml" && !file.startsWith("."),
);

const alchemyOutputDir = "docs/api-specs/alchemy";

// Create output directory for Alchemy specs
mkdirSync(alchemyOutputDir, { recursive: true });

// Process each Alchemy API spec
allAlchemyFiles.forEach((api) =>
  generateAlchemyRpcSpec(alchemyAPIsDir, alchemyOutputDir, api),
);

cp("src/markdown", "docs/markdown", { recursive: true }, (e) => {
  if (e) {
    console.error(e);
  }
});

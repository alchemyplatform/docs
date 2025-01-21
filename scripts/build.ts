import { cp, mkdirSync, readdirSync } from "fs";
import { generateRpcSpec } from "../src/utils/generateRpcSpec";

const allChainsDir = "src/openrpc-schemas/chains";
const allChainFiles = readdirSync(allChainsDir);

const outputDir = "docs/api-specs/chains";

mkdirSync(outputDir, { recursive: true });

allChainFiles.forEach((chain) =>
  generateRpcSpec(allChainsDir, outputDir, chain)
);

cp("src/markdown", "docs/markdown", { recursive: true }, (e) => {
  if (e) {
    console.error(e);
  }
});

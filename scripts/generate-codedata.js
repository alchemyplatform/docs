#!/usr/bin/env node

/**
 * Generate codeData.ts with all imports and CODE_SAMPLES structure
 * Run: node scripts/generate-codedata.js
 */

const fs = require("fs");
const path = require("path");

const SAMPLES_DIR = path.join(
  __dirname,
  "../fern/components/CodeConsole/code-samples",
);
const OUTPUT_FILE = path.join(
  __dirname,
  "../fern/components/CodeConsole/codeData.ts",
);

console.log("🔨 Generating codeData.ts...\n");

// Scan all code samples
const samples = {};
const methods = fs
  .readdirSync(SAMPLES_DIR, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .map((dirent) => dirent.name);

for (const method of methods) {
  const methodDir = path.join(SAMPLES_DIR, method);
  const files = fs.readdirSync(methodDir);

  samples[method] = {};

  for (const file of files) {
    const match = file.match(/^(.+)-(request|response)\.ts$/);
    if (match) {
      const [, chain, type] = match;
      if (!samples[method][chain]) {
        samples[method][chain] = {};
      }
      samples[method][chain][type] = true;
    }
  }
}

// Generate imports
let output =
  "// Auto-generated file - run: node scripts/generate-codedata.js\n\n";

const imports = [];
for (const method of Object.keys(samples).sort()) {
  for (const chain of Object.keys(samples[method]).sort()) {
    const varName = `${method}_${chain}`;
    const safeVarName = varName.replace(/_([a-z])/g, (m, p1) =>
      p1.toUpperCase(),
    );
    imports.push({
      varNameReq: `${safeVarName}Request`,
      varNameRes: `${safeVarName}Response`,
      pathReq: `./code-samples/${method}/${chain}-request`,
      pathRes: `./code-samples/${method}/${chain}-response`,
      method,
      chain,
    });
  }
}

for (const imp of imports) {
  output += `import ${imp.varNameReq} from "${imp.pathReq}";\n`;
  output += `import ${imp.varNameRes} from "${imp.pathRes}";\n`;
}

// Generate CODE_SAMPLES object (chain-first structure)
// First, reorganize data by chain
const byChain = {};
for (const method of Object.keys(samples)) {
  for (const chain of Object.keys(samples[method])) {
    if (!byChain[chain]) {
      byChain[chain] = {};
    }
    byChain[chain][method] = samples[method][chain];
  }
}

output += "\nexport const CODE_SAMPLES = {\n";
for (const chain of Object.keys(byChain).sort()) {
  output += `  ${chain}: {\n`;
  for (const method of Object.keys(byChain[chain]).sort()) {
    const varName = `${method}_${chain}`;
    const safeVarName = varName.replace(/_([a-z])/g, (m, p1) =>
      p1.toUpperCase(),
    );
    output += `    ${method}: {\n`;
    output += `      request: ${safeVarName}Request,\n`;
    output += `      response: ${safeVarName}Response,\n`;
    output += `    },\n`;
  }
  output += `  },\n`;
}
output += "};\n\n";

// Generate options and types
output += `export const CHAIN_OPTIONS = [
  { value: "ethereum", label: "Ethereum" },
  { value: "arbitrum", label: "Arbitrum" },
  { value: "base", label: "Base" },
  { value: "optimism", label: "Optimism" },
  { value: "polygon", label: "Polygon PoS" },
  { value: "solana", label: "Solana" },
];

export type Chain = 
  | "ethereum" 
  | "arbitrum" 
  | "base" 
  | "optimism" 
  | "polygon" 
  | "solana";
`;

fs.writeFileSync(OUTPUT_FILE, output);
console.log(`✅ Generated codeData.ts with ${imports.length} imports`);
console.log(`📦 Total methods: ${Object.keys(samples).length}`);
console.log(`🔗 Total chain combinations: ${imports.length / 2}`);

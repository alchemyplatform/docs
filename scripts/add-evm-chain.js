#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const readline = require("readline");

// Create readline interface for user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Helper function to prompt user for input
function prompt(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

// Helper function to copy directory recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });

  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Helper function to validate chain name
function validateChainName(name) {
  if (!name) {
    return "Chain name cannot be empty";
  }
  if (!/^[a-z0-9-]+$/.test(name)) {
    return "Chain name must contain only lowercase letters, numbers, and hyphens";
  }
  return null;
}

// Helper function to validate URL
function validateUrl(url) {
  try {
    new URL(url);
    return null;
  } catch {
    return "Invalid URL format";
  }
}

// Helper function to format chain name for display
function formatChainName(chainName) {
  return chainName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Main function
async function main() {
  console.log("🚀 Adding new EVM chain to API references\n");

  try {
    // Get chain name
    let chainName;
    while (true) {
      chainName = await prompt(
        'Enter the chain name (lowercase, use hyphens for spaces, e.g., "polygon-zkevm"): ',
      );
      const nameError = validateChainName(chainName);
      if (nameError) {
        console.log(`❌ ${nameError}`);
        continue;
      }

      // Check if chain already exists
      const chainDir = path.join(
        __dirname,
        "..",
        "src",
        "openrpc",
        "chains",
        chainName,
      );
      if (fs.existsSync(chainDir)) {
        console.log(`❌ Chain "${chainName}" already exists`);
        continue;
      }

      break;
    }

    const displayName = formatChainName(chainName);
    console.log(`✅ Chain name: ${chainName} (${displayName})`);

    // Get server URLs
    const servers = [];
    console.log(
      "\nEnter server URLs (press Enter with empty input to finish):",
    );

    while (true) {
      const serverName = await prompt(
        `Enter server name (e.g., "${displayName} Mainnet"): `,
      );
      if (!serverName) break;

      let serverUrl;
      while (true) {
        serverUrl = await prompt("Enter server URL: ");
        if (!serverUrl) {
          console.log("❌ Server URL cannot be empty");
          continue;
        }
        const urlError = validateUrl(serverUrl);
        if (urlError) {
          console.log(`❌ ${urlError}`);
          continue;
        }
        break;
      }

      servers.push({ name: serverName, url: serverUrl });
      console.log(`✅ Added server: ${serverName} - ${serverUrl}`);
    }

    if (servers.length === 0) {
      console.log("❌ At least one server is required");
      process.exit(1);
    }

    // Create directory structure
    console.log("\n📁 Creating directory structure...");
    const chainDir = path.join(
      __dirname,
      "..",
      "src",
      "openrpc",
      "chains",
      chainName,
    );
    const methodsDir = path.join(chainDir, "methods");

    fs.mkdirSync(chainDir, { recursive: true });
    fs.mkdirSync(methodsDir, { recursive: true });

    // Copy methods from eth chain
    console.log("📋 Copying methods from Ethereum chain...");
    const ethMethodsDir = path.join(
      __dirname,
      "..",
      "src",
      "openrpc",
      "chains",
      "eth",
      "methods",
    );
    copyDir(ethMethodsDir, methodsDir);

    // Create base.yaml
    console.log("📝 Creating base.yaml...");
    const baseYamlContent = `info:
  title: Alchemy ${displayName} JSON-RPC Specification
  description: A specification of the standard JSON-RPC methods for ${displayName}.
  version: 0.0.0
servers:
${servers
  .map(
    (server) => `  - url: ${server.url}
    name: ${server.name}`,
  )
  .join("\n")}

`;

    const baseYamlPath = path.join(chainDir, "base.yaml");
    fs.writeFileSync(baseYamlPath, baseYamlContent);

    console.log("\n🎉 Successfully created new EVM chain!");
    console.log(`📍 Location: src/openrpc/chains/${chainName}/`);
    console.log("📋 Files created:");
    console.log(`   - base.yaml`);
    console.log(`   - methods/ (copied from eth chain)`);

    console.log("\n💡 Next steps:");
    console.log("1. Review the generated files");
    console.log("2. Remove any methods that are not supported by this chain");
    console.log("3. Add any chain-specific methods if needed");
    console.log("4. Run validation: npm run validate:rpc");
  } catch (error) {
    console.error("❌ Error:", error.message);
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Handle Ctrl+C gracefully
process.on("SIGINT", () => {
  console.log("\n👋 Goodbye!");
  rl.close();
  process.exit(0);
});

// Run the script
main();

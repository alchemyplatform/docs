#!/usr/bin/env node
import readline from "readline";

import {
  type ChainConfig,
  type Server,
  checkIfChainExists,
  createDirectoryStructure,
  formatChainName,
  normalizeUrl,
  updateChainApisOverview,
  updateDocsYml,
  validateChainName,
  validateUrl,
  writeChainFiles,
} from "../src/utils/addEvmChainHelpers";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Handle Ctrl+C gracefully
rl.on("SIGINT", () => {
  console.info("\n👋 Goodbye!");
  rl.close();
  process.exit(0);
});

function prompt(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function collectChainName(): Promise<string> {
  while (true) {
    const chainName = await prompt(
      'Enter the chain name (lowercase, use hyphens for spaces, e.g., "polygon-zkevm"): ',
    );

    const nameError = validateChainName(chainName);
    if (nameError) {
      console.error(`❌ ${nameError}`);
      continue;
    }

    if (checkIfChainExists(chainName)) {
      console.error(`❌ Chain "${chainName}" already exists`);
      continue;
    }

    return chainName;
  }
}

async function collectIntroText(): Promise<string> {
  console.info("\n📝 Please provide a brief introduction for the chain:");
  return await prompt("Introduction text: ");
}

async function collectServers(displayName: string): Promise<Server[]> {
  const servers: Server[] = [];
  console.info("\nEnter server URLs (press Enter with empty input to finish):");

  while (true) {
    const serverName = await prompt(
      `Enter server name (e.g., "${displayName} Mainnet"): `,
    );
    if (!serverName) break;

    let serverUrl: string;
    while (true) {
      serverUrl = await prompt("Enter server URL: ");
      if (!serverUrl) {
        console.error("❌ Server URL cannot be empty");
        continue;
      }

      const urlError = validateUrl(serverUrl);
      if (urlError) {
        console.error(`❌ ${urlError}`);
        continue;
      }

      serverUrl = normalizeUrl(serverUrl);
      break;
    }

    servers.push({ name: serverName, url: serverUrl });
    console.info(`✅ Added server: ${serverName} - ${serverUrl}`);
  }

  if (servers.length === 0) {
    console.error("❌ At least one server is required");
    process.exit(1);
  }

  return servers;
}

function createChainConfig(
  chainName: string,
  displayName: string,
  introText: string,
  servers: Server[],
): ChainConfig {
  return {
    chainName,
    displayName,
    introText,
    servers,
  };
}

function logSuccess(chainName: string): void {
  console.info("\n🎉 Successfully created new EVM chain!");
  console.info("📍 Locations:");
  console.info(
    `   - OpenRPC: src/openrpc/chains/${chainName}/${chainName}.yaml`,
  );
  console.info(`   - Quickstart: fern/api-reference/${chainName}/`);
  console.info(`   - Generators: fern/apis/${chainName}/`);
  console.info("   - Sidebar: Updated in fern/docs.yml");
  console.info("\n📋 Files created:");
  console.info(`   - ${chainName}.yaml (copied and modified from eth.yaml)`);
  console.info(`   - ${chainName}-api-quickstart.mdx`);
  console.info(`   - ${chainName}-api-faq.mdx`);
  console.info("   - generators.yaml");
  console.info("\n💡 Next steps:");
  console.info("1. Review the generated files");
  console.info("2. Remove any methods that are not supported by this chain");
  console.info("3. Add any chain-specific methods if needed");
  console.info("4. Customize the FAQ content with chain-specific information");
  console.info("5. Customize the emoji for chain section in docs.yml");
  console.info("6. Run the generation script: pnpm run generate");
  console.info("7. Run the docs locally to preview: pnpm run dev");
}

async function main(): Promise<void> {
  console.info("🚀 Adding new EVM chain to API references\n");

  try {
    // Collect user input
    const chainName = await collectChainName();
    const displayName = formatChainName(chainName);
    console.info(`✅ Chain name: ${chainName} (${displayName})`);

    const introText = await collectIntroText();
    const servers = await collectServers(displayName);

    // Create configuration object
    const config = createChainConfig(
      chainName,
      displayName,
      introText,
      servers,
    );

    // Create directory structure
    console.info("\n📁 Creating directory structure...");
    const directories = createDirectoryStructure(chainName);

    // Write all files
    console.info("📝 Creating files...");
    writeChainFiles(config, directories);

    // Update documentation
    console.info("📝 Updating documentation...");
    updateDocsYml(chainName, displayName);
    updateChainApisOverview(chainName, displayName);

    // Log success
    logSuccess(chainName);
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Error:", error.message);
    } else {
      console.error("❌ An unknown error occurred");
    }
    process.exit(1);
  } finally {
    rl.close();
  }
}

// Run the script
main().catch((error) => {
  console.error("❌ Unhandled error:", error);
  process.exit(1);
});

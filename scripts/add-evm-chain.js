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

// Helper function to normalize URL (remove trailing slash)
function normalizeUrl(url) {
  return url.replace(/\/$/, "");
}

// Helper function to format chain name for display
function formatChainName(chainName) {
  return chainName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Helper function to generate quickstart markdown
function generateQuickstartMarkdown(
  introText,
  chainName,
  displayName,
  requestUrl,
) {
  const markdown = `---
title: ${displayName} API Quickstart
description: How to get started building on ${displayName} and using the JSON-RPC API
subtitle: How to get started building on ${displayName} and using the JSON-RPC API
url: https://docs.alchemy.com/reference/${chainName}-api-quickstart
slug: reference/${chainName}-api-quickstart
---

*To use the ${displayName} API you'll need to [create a free Alchemy account](https://dashboard.alchemy.com/) first!*

## Introduction

${introText}

## What is the ${displayName} API?

The ${displayName} API allows interaction with the ${displayName} network through a set of JSON-RPC methods. Its design is familiar to developers who have worked with Ethereum's JSON-RPC APIs, making it intuitive and straightforward to use.

## Getting Started Instructions

### 1. Choose a Package Manager (npm or yarn)

Select a package manager to manage your project's dependencies. Choose between \`npm\` and \`yarn\` based on your preference or project requirements.

<CodeGroup>
  \`\`\`shell npm
  # Begin with npm by following the npm documentation
  # https://docs.npmjs.com/downloading-and-installing-node-js-and-npm
  \`\`\`

  \`\`\`shell yarn
  # For yarn, refer to yarn's installation guide
  # https://classic.yarnpkg.com/lang/en/docs/install
  \`\`\`
</CodeGroup>

### 2. Set Up Your Project

Open your terminal and execute the following commands to create and initialize your project:

<CodeGroup>
  \`\`\`shell npm
  mkdir ${chainName}-api-quickstart
  cd ${chainName}-api-quickstart
  npm init --yes
  \`\`\`

  \`\`\`shell yarn
  mkdir ${chainName}-api-quickstart
  cd ${chainName}-api-quickstart
  yarn init --yes
  \`\`\`
</CodeGroup>

This creates a new directory named \`${chainName}-api-quickstart\` and initializes a Node.js project within it.

### 3. Make Your First Request

Install Axios, a popular HTTP client, to make API requests:

<CodeGroup>
  \`\`\`shell npm
  npm install axios
  \`\`\`

  \`\`\`shell yarn
  yarn add axios
  \`\`\`
</CodeGroup>

Create an \`index.js\` file in your project directory and paste the following code:

<CodeGroup>
  \`\`\`javascript index.js
  const axios = require('axios');

  const url = '${requestUrl}/\${your-api-key}';

  const payload = {
    jsonrpc: '2.0',
    id: 1,
    method: 'eth_blockNumber',
    params: []
  };

  axios.post(url, payload)
    .then(response => {
      console.log('Latest Block:', response.data.result);
    })
    .catch(error => {
      console.error(error);
    });
  \`\`\`
</CodeGroup>

Remember to replace \`your-api-key\` with your actual Alchemy API key that you can get from your [Alchemy dashboard](https://dashboard.alchemy.com/).

### 4. Run Your Script

Execute your script to make a request to the ${displayName} network:

<CodeGroup>
  \`\`\`shell shell
  node index.js
  \`\`\`
</CodeGroup>

You should see the latest block information from ${displayName}'s network outputted to your console:

<CodeGroup>
  \`\`\`shell shell
  Latest Block: 0x...
  \`\`\`
</CodeGroup>

## Next Steps

Congratulations! You've made your first request to the ${displayName} network. You can now explore the various JSON-RPC methods available on ${displayName} and start building your dApps on this innovative platform.
`;
  return markdown;
}

// Helper function to update docs.yml
function updateDocsYml(chainName, displayName) {
  const docsYmlPath = path.join(__dirname, "..", "fern", "docs.yml");
  const docsContent = fs.readFileSync(docsYmlPath, "utf8");

  // Find the analytics section
  const analyticsIndex = docsContent.indexOf("analytics:");
  if (analyticsIndex === -1) {
    throw new Error("Could not find analytics section in docs.yml");
  }

  // Create the new section for the chain
  const newSection = `      - section: ${displayName}
        contents:
          - page: ${displayName} API Quickstart
            path: api-reference/${chainName}/${chainName}-api-quickstart.mdx
          - page: ${displayName} API FAQ
            path: api-reference/${chainName}/${chainName}-api-faq.mdx
          - api: ${displayName} API Endpoints
            api-name: ${chainName}
        slug: ${chainName}
`;

  // Insert the new section before analytics
  const beforeAnalytics = docsContent.substring(0, analyticsIndex);
  const afterAnalytics = docsContent.substring(analyticsIndex);

  const updatedContent = beforeAnalytics + newSection + "\n" + afterAnalytics;

  fs.writeFileSync(docsYmlPath, updatedContent);
}

// Helper function to create FAQ template
function generateFaqMarkdown(displayName, chainName) {
  return `---
title: ${displayName} API FAQ
description: Frequently asked questions about the ${displayName} API
subtitle: Frequently asked questions about the ${displayName} API
url: https://docs.alchemy.com/reference/${chainName}-api-faq
slug: reference/${chainName}-api-faq
---

## What is ${displayName}?

${displayName} is an EVM-compatible blockchain that provides developers with a familiar environment for building decentralized applications.

## What methods are supported on ${displayName}?

${displayName} supports standard Ethereum JSON-RPC methods. Some chain-specific methods may vary. Please check the ${displayName} API endpoints documentation for a complete list.

## How do I get started with ${displayName}?

Check out our [${displayName} API Quickstart guide](./${chainName}-api-quickstart) to get started building on ${displayName}.
`;
}

// Helper function to create generators.yaml
function generateGeneratorsYaml(chainName) {
  return `api:
  specs:
    - openrpc: ../../api-specs/chains/${chainName}.json
`;
}

// Helper function to convert method name to URL format
function methodToUrlFormat(method) {
  // Remove eth_ prefix and convert to kebab case
  let urlPart = method.replace(/^(eth_|net_|web3_)/, "");

  // Special cases
  if (method === "eth_simulateV1") {
    return "eth-simulate-v-1";
  }

  // Convert camelCase to kebab-case
  urlPart = urlPart.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  // Add appropriate prefix back
  if (method.startsWith("net_")) {
    return "net-" + urlPart;
  } else if (method.startsWith("web3_")) {
    return "web-3-" + urlPart;
  } else {
    return "eth-" + urlPart;
  }
}

// Update chain-apis-overview.mdx file
function updateChainApisOverview(chainName, displayName) {
  const overviewPath = path.join(
    __dirname,
    "..",
    "fern",
    "api-reference",
    "introduction",
    "alchemy-api-reference-overview",
    "chain-apis-overview.mdx",
  );
  const overviewContent = fs.readFileSync(overviewPath, "utf8");

  // Find the Debug and Trace APIs section
  const debugSectionIndex = overviewContent.indexOf("## Debug and Trace APIs");
  if (debugSectionIndex === -1) {
    throw new Error(
      "Could not find 'Debug and Trace APIs' section in chain-apis-overview.mdx",
    );
  }

  // Define all the methods
  const methods = [
    "eth_accounts",
    "eth_blockNumber",
    "eth_call",
    "eth_chainId",
    "eth_createAccessList",
    "eth_estimateGas",
    "eth_feeHistory",
    "eth_gasPrice",
    "eth_getBalance",
    "eth_getBlockByHash",
    "eth_getBlockByNumber",
    "eth_getBlockReceipts",
    "eth_getBlockTransactionCountByHash",
    "eth_getBlockTransactionCountByNumber",
    "eth_getCode",
    "eth_getFilterChanges",
    "eth_getFilterLogs",
    "eth_getLogs",
    "eth_getProof",
    "eth_getStorageAt",
    "eth_getTransactionByBlockHashAndIndex",
    "eth_getTransactionByBlockNumberAndIndex",
    "eth_getTransactionByHash",
    "eth_getTransactionCount",
    "eth_getTransactionReceipt",
    "eth_getUncleByBlockHashAndIndex",
    "eth_getUncleByBlockNumberAndIndex",
    "eth_getUncleCountByBlockHash",
    "eth_getUncleCountByBlockNumber",
    "eth_maxPriorityFeePerGas",
    "eth_newBlockFilter",
    "eth_newFilter",
    "eth_newPendingTransactionFilter",
    "eth_protocolVersion",
    "eth_sendRawTransaction",
    "eth_simulateV1",
    "eth_syncing",
    "eth_uninstallFilter",
    "net_listening",
    "net_version",
    "web3_clientVersion",
    "web3_sha3",
  ];

  // Create the table rows (two columns)
  const tableRows = [];
  for (let i = 0; i < methods.length; i += 2) {
    const method1 = methods[i];
    const urlPart1 = methodToUrlFormat(method1);
    const url1 = `https://www.alchemy.com/docs/node/${chainName}/${chainName}-api-endpoints/${urlPart1}`;

    let row = `| [${method1}](${url1}) |`;

    // Add second column if there's another method
    if (i + 1 < methods.length) {
      const method2 = methods[i + 1];
      const urlPart2 = methodToUrlFormat(method2);
      const url2 = `https://www.alchemy.com/docs/node/${chainName}/${chainName}-api-endpoints/${urlPart2}`;
      row += ` [${method2}](${url2}) |`;
    } else {
      row += ` |`; // Empty cell for odd number of methods
    }

    tableRows.push(row);
  }

  // Create the new section
  const newSection = `## ${displayName} APIs

📙 Get started with our [${displayName} API Quickstart](https://www.alchemy.com/docs/reference/${chainName}-api-quickstart)

| Method | Method |
| ------ | ------ |
${tableRows.join("\n")}

`;

  // Insert the new section before Debug and Trace APIs
  const updatedContent =
    overviewContent.slice(0, debugSectionIndex) +
    newSection +
    overviewContent.slice(debugSectionIndex);

  fs.writeFileSync(overviewPath, updatedContent);
  console.log(`✅ Updated chain-apis-overview.mdx with ${displayName} section`);
}

// Helper function to copy and modify the eth.yaml file for a new chain
function createChainYaml(chainName, displayName, servers) {
  const ethYamlPath = path.join(
    __dirname,
    "..",
    "src",
    "openrpc",
    "chains",
    "eth",
    "eth.yaml",
  );

  if (!fs.existsSync(ethYamlPath)) {
    throw new Error("eth.yaml template file not found");
  }

  // Read the eth.yaml content
  let ethYamlContent = fs.readFileSync(ethYamlPath, "utf8");

  // Replace the title and description
  ethYamlContent = ethYamlContent.replace(
    "title: Alchemy Ethereum JSON-RPC Specification",
    `title: Alchemy ${displayName} JSON-RPC Specification`,
  );
  ethYamlContent = ethYamlContent.replace(
    "description: A specification of the standard JSON-RPC methods for Ethereum.",
    `description: A specification of the standard JSON-RPC methods for ${displayName}.`,
  );

  // Replace the servers section
  const serversSection = servers
    .map(
      (server) => `  - url: ${server.url}
    name: ${server.name}`,
    )
    .join("\n");

  // Find and replace the servers section
  const serversRegex = /servers:\n( {2}- url: .*\n {4}name: .*\n?)+/;
  ethYamlContent = ethYamlContent.replace(
    serversRegex,
    `servers:\n${serversSection}\n`,
  );

  return ethYamlContent;
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

    // Get introduction text for the chain
    console.log("\n📝 Please provide a brief introduction for the chain:");
    const introText = await prompt("Introduction text: ");

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
        // Normalize the URL to remove trailing slash
        serverUrl = normalizeUrl(serverUrl);
        break;
      }

      servers.push({ name: serverName, url: serverUrl });
      console.log(`✅ Added server: ${serverName} - ${serverUrl}`);
    }

    if (servers.length === 0) {
      console.log("❌ At least one server is required");
      process.exit(1);
    }

    // Create directory structure for OpenRPC
    console.log("\n📁 Creating OpenRPC directory structure...");
    const chainDir = path.join(
      __dirname,
      "..",
      "src",
      "openrpc",
      "chains",
      chainName,
    );

    fs.mkdirSync(chainDir, { recursive: true });

    // Create the chain YAML file by copying and modifying eth.yaml
    console.log("📝 Creating chain YAML file...");
    const chainYamlContent = createChainYaml(chainName, displayName, servers);
    const chainYamlPath = path.join(chainDir, `${chainName}.yaml`);
    fs.writeFileSync(chainYamlPath, chainYamlContent);

    // Create quickstart guide directory
    console.log("\n📁 Creating quickstart guide directory...");
    const quickstartDir = path.join(
      __dirname,
      "..",
      "fern",
      "api-reference",
      chainName,
    );
    fs.mkdirSync(quickstartDir, { recursive: true });

    // Generate and save quickstart guide
    console.log("📝 Creating quickstart guide...");
    const quickstartContent = generateQuickstartMarkdown(
      introText,
      chainName,
      displayName,
      servers[0].url, // Use the first server URL as the main one
    );
    const quickstartPath = path.join(
      quickstartDir,
      `${chainName}-api-quickstart.mdx`,
    );
    fs.writeFileSync(quickstartPath, quickstartContent);

    // Generate and save FAQ
    console.log("📝 Creating FAQ template...");
    const faqContent = generateFaqMarkdown(displayName, chainName);
    const faqPath = path.join(quickstartDir, `${chainName}-api-faq.mdx`);
    fs.writeFileSync(faqPath, faqContent);

    // Create generators.yaml
    console.log("📝 Creating generators.yaml...");
    const generatorsDir = path.join(__dirname, "..", "fern", "apis", chainName);
    fs.mkdirSync(generatorsDir, { recursive: true });

    const generatorsContent = generateGeneratorsYaml(chainName);
    const generatorsPath = path.join(generatorsDir, "generators.yaml");
    fs.writeFileSync(generatorsPath, generatorsContent);

    // Update docs.yml
    console.log("📝 Updating docs.yml sidebar...");
    updateDocsYml(chainName, displayName);

    // Update chain-apis-overview.mdx
    updateChainApisOverview(chainName, displayName);

    console.log("\n🎉 Successfully created new EVM chain!");
    console.log(`📍 Locations:`);
    console.log(
      `   - OpenRPC: src/openrpc/chains/${chainName}/${chainName}.yaml`,
    );
    console.log(`   - Quickstart: fern/api-reference/${chainName}/`);
    console.log(`   - Generators: fern/apis/${chainName}/`);
    console.log(`   - Sidebar: Updated in fern/docs.yml`);
    console.log("\n📋 Files created:");
    console.log(`   - ${chainName}.yaml (copied and modified from eth.yaml)`);
    console.log(`   - ${chainName}-api-quickstart.mdx`);
    console.log(`   - ${chainName}-api-faq.mdx`);
    console.log(`   - generators.yaml`);

    console.log("\n💡 Next steps:");
    console.log("1. Review the generated files");
    console.log("2. Remove any methods that are not supported by this chain");
    console.log("3. Add any chain-specific methods if needed");
    console.log("4. Customize the FAQ content with chain-specific information");
    console.log("5. Customize the emoji for chain section in docs.yml");
    console.log("6. Run validation: npm run validate:rpc");
    console.log("7. Run the docs locally to preview: npm run dev");
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

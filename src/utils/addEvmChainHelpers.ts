import fs from "fs";
import path from "path";

export interface Server {
  name: string;
  url: string;
}

export interface ChainConfig {
  chainName: string;
  displayName: string;
  introText: string;
  servers: Server[];
}

export function validateChainName(name: string): string | null {
  if (!name) {
    return "Chain name cannot be empty";
  }
  if (!/^[a-z0-9-]+$/.test(name)) {
    return "Chain name must contain only lowercase letters, numbers, and hyphens";
  }
  return null;
}

export function validateUrl(url: string): string | null {
  try {
    new URL(url);
    return null;
  } catch {
    return "Invalid URL format";
  }
}

export function normalizeUrl(url: string): string {
  return url.replace(/\/$/, "");
}

export function formatChainName(chainName: string): string {
  return chainName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function generateQuickstartMarkdown(
  introText: string,
  chainName: string,
  displayName: string,
  requestUrl: string,
): string {
  return `---
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
}

export function generateFaqMarkdown(
  displayName: string,
  chainName: string,
): string {
  return `---
title: ${displayName} API FAQ
description: Frequently asked questions about the ${displayName} API
subtitle: Frequently asked questions about the ${displayName} API
url: https://docs.alchemy.com/reference/${chainName}-api-faq
slug: reference/${chainName}-api-faq
---

# ${displayName} API FAQ

## What is ${displayName}?

${displayName} is an EVM-compatible blockchain that provides developers with a familiar environment for building decentralized applications.

## What methods are supported on ${displayName}?

${displayName} supports standard Ethereum JSON-RPC methods. Some chain-specific methods may vary. Please check the ${displayName} API endpoints documentation for a complete list.

## How do I get started with ${displayName}?

Check out our [${displayName} API Quickstart guide](./${chainName}-api-quickstart) to get started building on ${displayName}.
`;
}

export function generateGeneratorsYaml(chainName: string): string {
  return `api:
  specs:
    - openrpc: ../../api-specs/chains/${chainName}.json
`;
}

export function createChainYaml(
  chainName: string,
  displayName: string,
  servers: Server[],
): string {
  const ethYamlPath = path.join(
    process.cwd(),
    "src",
    "openrpc",
    "chains",
    "eth",
    "eth.yaml",
  );

  if (!fs.existsSync(ethYamlPath)) {
    throw new Error("eth.yaml template file not found");
  }

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
    .map((server) => `  - url: ${server.url}\n    name: ${server.name}`)
    .join("\n");

  const serversRegex = /servers:\n( {2}- url: .*\n {4}name: .*\n?)+/;
  ethYamlContent = ethYamlContent.replace(
    serversRegex,
    `servers:\n${serversSection}\n`,
  );

  return ethYamlContent;
}

export function updateDocsYml(chainName: string, displayName: string): void {
  const docsYmlPath = path.join(process.cwd(), "fern", "docs.yml");
  const docsContent = fs.readFileSync(docsYmlPath, "utf8");

  const analyticsIndex = docsContent.indexOf("analytics:");
  if (analyticsIndex === -1) {
    throw new Error("Could not find analytics section in docs.yml");
  }

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

  const beforeAnalytics = docsContent.substring(0, analyticsIndex);
  const afterAnalytics = docsContent.substring(analyticsIndex);
  const updatedContent = beforeAnalytics + newSection + "\n" + afterAnalytics;

  fs.writeFileSync(docsYmlPath, updatedContent);
}

function methodToUrlFormat(method: string): string {
  let urlPart = method.replace(/^(eth_|net_|web3_)/, "");

  if (method === "eth_simulateV1") {
    return "eth-simulate-v-1";
  }

  urlPart = urlPart.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();

  if (method.startsWith("net_")) {
    return "net-" + urlPart;
  } else if (method.startsWith("web3_")) {
    return "web-3-" + urlPart;
  } else {
    return "eth-" + urlPart;
  }
}

export function updateChainApisOverview(
  chainName: string,
  displayName: string,
): void {
  const overviewPath = path.join(
    process.cwd(),
    "fern",
    "api-reference",
    "introduction",
    "alchemy-api-reference-overview",
    "chain-apis-overview.mdx",
  );
  const overviewContent = fs.readFileSync(overviewPath, "utf8");

  const debugSectionIndex = overviewContent.indexOf("## Debug and Trace APIs");
  if (debugSectionIndex === -1) {
    throw new Error(
      "Could not find 'Debug and Trace APIs' section in chain-apis-overview.mdx",
    );
  }

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

  const tableRows: string[] = [];
  for (let i = 0; i < methods.length; i += 2) {
    const method1 = methods[i];
    const urlPart1 = methodToUrlFormat(method1);
    const url1 = `https://www.alchemy.com/docs/node/${chainName}/${chainName}-api-endpoints/${urlPart1}`;

    let row = `| [${method1}](${url1}) |`;

    if (i + 1 < methods.length) {
      const method2 = methods[i + 1];
      const urlPart2 = methodToUrlFormat(method2);
      const url2 = `https://www.alchemy.com/docs/node/${chainName}/${chainName}-api-endpoints/${urlPart2}`;
      row += ` [${method2}](${url2}) |`;
    } else {
      row += ` |`;
    }

    tableRows.push(row);
  }

  const newSection = `## ${displayName} APIs

📙 Get started with our [${displayName} API Quickstart](https://www.alchemy.com/docs/reference/${chainName}-api-quickstart)

| Method | Method |
| ------ | ------ |
${tableRows.join("\n")}

`;

  const updatedContent =
    overviewContent.slice(0, debugSectionIndex) +
    newSection +
    overviewContent.slice(debugSectionIndex);

  fs.writeFileSync(overviewPath, updatedContent);
  console.info(
    `✅ Updated chain-apis-overview.mdx with ${displayName} section`,
  );
}

export function createDirectoryStructure(chainName: string): {
  chainDir: string;
  quickstartDir: string;
  generatorsDir: string;
} {
  const chainDir = path.join(
    process.cwd(),
    "src",
    "openrpc",
    "chains",
    chainName,
  );
  const quickstartDir = path.join(
    process.cwd(),
    "fern",
    "api-reference",
    chainName,
  );
  const generatorsDir = path.join(process.cwd(), "fern", "apis", chainName);

  fs.mkdirSync(chainDir, { recursive: true });
  fs.mkdirSync(quickstartDir, { recursive: true });
  fs.mkdirSync(generatorsDir, { recursive: true });

  return { chainDir, quickstartDir, generatorsDir };
}

export function writeChainFiles(
  config: ChainConfig,
  directories: {
    chainDir: string;
    quickstartDir: string;
    generatorsDir: string;
  },
): void {
  const { chainName, displayName, introText, servers } = config;
  const { chainDir, quickstartDir, generatorsDir } = directories;

  // Create chain YAML file
  const chainYamlContent = createChainYaml(chainName, displayName, servers);
  const chainYamlPath = path.join(chainDir, `${chainName}.yaml`);
  fs.writeFileSync(chainYamlPath, chainYamlContent);

  // Create quickstart guide
  const quickstartContent = generateQuickstartMarkdown(
    introText,
    chainName,
    displayName,
    servers[0].url,
  );
  const quickstartPath = path.join(
    quickstartDir,
    `${chainName}-api-quickstart.mdx`,
  );
  fs.writeFileSync(quickstartPath, quickstartContent);

  // Create FAQ
  const faqContent = generateFaqMarkdown(displayName, chainName);
  const faqPath = path.join(quickstartDir, `${chainName}-api-faq.mdx`);
  fs.writeFileSync(faqPath, faqContent);

  // Create generators.yaml
  const generatorsContent = generateGeneratorsYaml(chainName);
  const generatorsPath = path.join(generatorsDir, "generators.yaml");
  fs.writeFileSync(generatorsPath, generatorsContent);
}

export function checkIfChainExists(chainName: string): boolean {
  const chainDir = path.join(
    process.cwd(),
    "src",
    "openrpc",
    "chains",
    chainName,
  );
  return fs.existsSync(chainDir);
}

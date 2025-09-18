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

*To use the ${displayName} API you'll need to [create a free Alchemy account](https://dashboard.alchemy.com/signup) first!*

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

Remember to replace \`your-api-key\` with your actual Alchemy API key that you can get from your [Alchemy dashboard](https://dashboard.alchemy.com/signup).

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
  introText: string,
): string {
  return `---
title: ${displayName} API FAQ
description: Frequently asked questions about the ${displayName} API
subtitle: Frequently asked questions about the ${displayName} API
url: https://docs.alchemy.com/reference/${chainName}-api-faq
slug: reference/${chainName}-api-faq
---

## What is ${displayName}?
${introText}

## How do I get started with ${displayName}?
Check out our [${displayName} API Quickstart guide](./${chainName}-api-quickstart) to get started building on ${displayName}.

## What is the ${displayName} API?
The ${displayName} API allows developers to interface with the ${displayName} mainnet. With this API, developers can execute transactions, query on-chain data, and interact with the ${displayName} network, relying on a JSON-RPC standard.

## Is ${displayName} EVM compatible?
Yes, ${displayName} is EVM compatible.

## What API does ${displayName} use?
${displayName} uses the JSON-RPC API standard. This API is crucial for any blockchain interaction on the ${displayName} network, allowing users to read block/transaction data, query chain information, execute smart contracts, and store data on-chain.

## What methods are supported on ${displayName}?
${displayName} supports standard Ethereum JSON-RPC methods. Some chain-specific methods may vary. Please check the ${displayName} API endpoints documentation for a complete list.

## What is a ${displayName} API key?
When accessing the ${displayName} network via a node provider like Alchemy, ${displayName} developers use an API key to send transactions and retrieve data from the network. For the best development experience, we recommend that you [sign up for a free API key](https://dashboard.alchemy.com/signup)!

## Which libraries support ${displayName}?
Common Ethereum libraries like [ethers.js](https://docs.ethers.org/v5/) should be compatible with ${displayName}, given its EVM nature.

## My question isn’t here, where can I get help?
If you have any questions or feedback, please contact us at support@alchemy.com or open a ticket in the dashboard.
`;
}

export function generateGeneratorsYaml(chainName: string): string {
  return `api:
  specs:
    - openrpc: ../../api-specs/chains/${chainName}.json
`;
}

export function updateDocsYml(chainName: string, displayName: string): void {
  const docsYmlPath = path.join(process.cwd(), "fern", "docs.yml");
  const docsContent = fs.readFileSync(docsYmlPath, "utf8");

  const indexToPutNewSectionIn = docsContent.indexOf("- tab: data");
  if (indexToPutNewSectionIn === -1) {
    throw new Error("Could not find analytics section in docs.yml");
  }

  const newSection = `    - section: ${displayName}
        contents:
          - page: ${displayName} API Quickstart
            path: api-reference/${chainName}/${chainName}-api-quickstart.mdx
          - page: ${displayName} API FAQ
            path: api-reference/${chainName}/${chainName}-api-faq.mdx
          - api: ${displayName} API Endpoints
            api-name: ${chainName}
        slug: ${chainName}
`;

  const beforeAnalytics = docsContent.substring(0, indexToPutNewSectionIn);
  const afterAnalytics = docsContent.substring(indexToPutNewSectionIn);
  const updatedContent =
    beforeAnalytics + newSection + "\n" + "  " + afterAnalytics;

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
  quickstartDir: string;
} {
  const quickstartDir = path.join(
    process.cwd(),
    "fern",
    "api-reference",
    chainName,
  );

  // Only create the quickstart directory since we're only creating quickstart and FAQ files
  fs.mkdirSync(quickstartDir, { recursive: true });

  return { quickstartDir };
}

export function writeChainFiles(
  config: ChainConfig,
  directories: {
    quickstartDir: string;
  },
): void {
  const { chainName, displayName, introText, servers } = config;
  const { quickstartDir } = directories;

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
  const faqContent = generateFaqMarkdown(displayName, chainName, introText);
  const faqPath = path.join(quickstartDir, `${chainName}-api-faq.mdx`);
  fs.writeFileSync(faqPath, faqContent);
}

export function checkIfChainExists(chainName: string): boolean {
  // Check if documentation files already exist instead of OpenRPC chain files
  const quickstartDir = path.join(
    process.cwd(),
    "fern",
    "api-reference",
    chainName,
  );
  const quickstartFile = path.join(
    quickstartDir,
    `${chainName}-api-quickstart.mdx`,
  );
  return fs.existsSync(quickstartFile);
}

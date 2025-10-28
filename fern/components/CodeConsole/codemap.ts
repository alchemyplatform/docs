export enum CodeBlockLanguage {
  CLI = "bash",
  JavaScript = "javascript",
  Python = "python",
  JSON = "json",
}

export const languageOptions = [
  { value: CodeBlockLanguage.CLI as string, label: "curl" },
  // { value: CodeBlockLanguage.JavaScript as string, label: 'JavaScript' },
  // { value: CodeBlockLanguage.Python as string, label: 'Python' },
  { value: CodeBlockLanguage.JSON as string, label: "JSON" },
];

export enum Chains {
  ethereumMainnet = "ethereum-mainnet",
  arbitrumMainnet = "arb-mainnet",
  baseMainnet = "base-mainnet",
  optimismMainnet = "opt-mainnet",
  solanaMainnet = "solana-mainnet",
  polygonMainnet = "polygon-mainnet",
}

export const chainOptions = [
  { value: Chains.ethereumMainnet as string, label: "Ethereum" },
  { value: Chains.arbitrumMainnet as string, label: "Arbitrum" },
  { value: Chains.baseMainnet as string, label: "Base" },
  { value: Chains.optimismMainnet as string, label: "Optimism" },
  { value: Chains.polygonMainnet as string, label: "Polygon PoS" },
  { value: Chains.solanaMainnet as string, label: "Solana" },
];

export enum ApiFunction {
  alchemy_getAssetTransfers = "alchemy_getAssetTransfers",
  alchemy_getTokenBalances = "alchemy_getTokenBalances",
  eth_blockNumber = "eth_blockNumber",
  eth_chainId = "eth_chainId",
  eth_estimateGas = "eth_estimateGas",
  eth_gasPrice = "eth_gasPrice",
  eth_getBalance = "eth_getBalance",
  eth_getBlockByNumber = "eth_getBlockByNumber",
  eth_getBlockReceipts = "eth_getBlockReceipts",
  eth_getLogs = "eth_getLogs",
  eth_getTransactionByHash = "eth_getTransactionByHash",
  eth_getTransactionCount = "eth_getTransactionCount",
  eth_getTransactionReceipt = "eth_getTransactionReceipt",
  getAccountInfo = "getAccountInfo",
  getBalance = "getBalance",
  getLatestBlockhash = "getLatestBlockhash",
  getSignaturesForAddress = "getSignaturesForAddress",
  getTokenAccountBalance = "getTokenAccountBalance",
  getTokenAccountsByOwner = "getTokenAccountsByOwner",
  getTransaction = "getTransaction",
}

export const solanaApiFunctions = [
  ApiFunction.getTokenAccountsByOwner,
  ApiFunction.getTokenAccountBalance,
  ApiFunction.getLatestBlockhash,
  ApiFunction.getSignaturesForAddress,
  ApiFunction.getTransaction,
  ApiFunction.getAccountInfo,
  ApiFunction.getBalance,
];

export const ethereumApiFunctions = [
  ApiFunction.eth_getBlockByNumber,
  ApiFunction.eth_getTransactionByHash,
  ApiFunction.eth_getTransactionCount,
  ApiFunction.eth_getTransactionReceipt,
  ApiFunction.eth_getBlockReceipts,
  ApiFunction.eth_getLogs,
  ApiFunction.eth_getBalance,
  ApiFunction.eth_estimateGas,
  ApiFunction.eth_gasPrice,
  ApiFunction.eth_chainId,
  ApiFunction.eth_blockNumber,
];

export const ethMainnetOnlyApiFunctions = [
  ApiFunction.alchemy_getAssetTransfers,
  ApiFunction.alchemy_getTokenBalances,
];

// Map of which chains each API function supports
const API_FUNCTION_CHAINS: Record<ApiFunction, Chains[]> = {
  [ApiFunction.alchemy_getAssetTransfers]: [Chains.ethereumMainnet],
  [ApiFunction.alchemy_getTokenBalances]: [Chains.ethereumMainnet],
  [ApiFunction.eth_blockNumber]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_chainId]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_estimateGas]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_gasPrice]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getBalance]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getBlockByNumber]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getBlockReceipts]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getLogs]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getTransactionByHash]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getTransactionCount]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.eth_getTransactionReceipt]: [
    Chains.ethereumMainnet,
    Chains.arbitrumMainnet,
    Chains.baseMainnet,
    Chains.optimismMainnet,
    Chains.polygonMainnet,
  ],
  [ApiFunction.getAccountInfo]: [Chains.solanaMainnet],
  [ApiFunction.getBalance]: [Chains.solanaMainnet],
  [ApiFunction.getLatestBlockhash]: [Chains.solanaMainnet],
  [ApiFunction.getSignaturesForAddress]: [Chains.solanaMainnet],
  [ApiFunction.getTokenAccountBalance]: [Chains.solanaMainnet],
  [ApiFunction.getTokenAccountsByOwner]: [Chains.solanaMainnet],
  [ApiFunction.getTransaction]: [Chains.solanaMainnet],
};

export async function loadCodeExamples() {
  const codeMap: Record<
    ApiFunction,
    Partial<
      Record<
        CodeBlockLanguage,
        Partial<Record<Chains, { request: string; response: string }>>
      >
    >
  > = {} as Record<
    ApiFunction,
    Partial<
      Record<
        CodeBlockLanguage,
        Partial<Record<Chains, { request: string; response: string }>>
      >
    >
  >;

  // Iterate through all API functions and their supported chains
  for (const [apiFunction, chains] of Object.entries(API_FUNCTION_CHAINS)) {
    const apiFn = apiFunction as ApiFunction;

    for (const chain of chains) {
      // Currently we only support CLI/bash language
      const language = CodeBlockLanguage.CLI;

      try {
        // Dynamic imports for request and response
        const requestModule = await import(
          `./code-samples/${apiFn}/bash/${chain}/request?raw`
        );
        const responseModule = await import(
          `./code-samples/${apiFn}/bash/${chain}/response?raw`
        );

        // Initialize nested structure if needed
        if (!codeMap[apiFn]) codeMap[apiFn] = {};
        if (!codeMap[apiFn]![language]) codeMap[apiFn]![language] = {};

        // Assign the imported content
        codeMap[apiFn]![language]![chain] = {
          request: requestModule.default,
          response: responseModule.default,
        };
      } catch (error) {
        console.warn(
          `Failed to load code sample for ${apiFn}/${language}/${chain}:`,
          error,
        );
      }
    }
  }

  return codeMap;
}

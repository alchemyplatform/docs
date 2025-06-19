export enum CodeBlockLanguage {
  CLI = 'bash',
  JavaScript = 'javascript',
  Python = 'python',
  JSON = 'json',
}

export const languageOptions = [
  { value: CodeBlockLanguage.CLI as string, label: 'curl' },
  // { value: CodeBlockLanguage.JavaScript as string, label: 'JavaScript' },
  // { value: CodeBlockLanguage.Python as string, label: 'Python' },
  { value: CodeBlockLanguage.JSON as string, label: 'JSON' },
]

export enum Chains {
  ethereumMainnet = 'ethereum-mainnet',
  arbitrumMainnet = 'arb-mainnet',
  baseMainnet = 'base-mainnet',
  optimismMainnet = 'opt-mainnet',
  solanaMainnet = 'solana-mainnet',
  polygonMainnet = 'polygon-mainnet',
}

export const chainOptions = [
  { value: Chains.ethereumMainnet as string, label: 'Ethereum' },
  { value: Chains.arbitrumMainnet as string, label: 'Arbitrum' },
  { value: Chains.baseMainnet as string, label: 'Base' },
  { value: Chains.optimismMainnet as string, label: 'Optimism' },
  { value: Chains.solanaMainnet as string, label: 'Solana' },
  { value: Chains.polygonMainnet as string, label: 'Polygon PoS' },
]

export enum ApiFunction {
  alchemy_getAssetTransfers = 'alchemy_getAssetTransfers',
  alchemy_getTokenBalances = 'alchemy_getTokenBalances',
  eth_blockNumber = 'eth_blockNumber',
  eth_chainId = 'eth_chainId',
  eth_estimateGas = 'eth_estimateGas',
  eth_gasPrice = 'eth_gasPrice',
  eth_getBalance = 'eth_getBalance',
  eth_getBlockByNumber = 'eth_getBlockByNumber',
  eth_getBlockReceipts = 'eth_getBlockReceipts',
  eth_getLogs = 'eth_getLogs',
  eth_getTransactionByHash = 'eth_getTransactionByHash',
  eth_getTransactionCount = 'eth_getTransactionCount',
  eth_getTransactionReceipt = 'eth_getTransactionReceipt',
  getAccountInfo = 'getAccountInfo',
  getBalance = 'getBalance',
  getLatestBlockhash = 'getLatestBlockhash',
  getSignaturesForAddress = 'getSignaturesForAddress',
  getTokenAccountBalance = 'getTokenAccountBalance',
  getTokenAccountsByOwner = 'getTokenAccountsByOwner',
  getTransaction = 'getTransaction',
}

export const solanaApiFunctions = [
  ApiFunction.getTokenAccountsByOwner,
  ApiFunction.getTokenAccountBalance,
  ApiFunction.getLatestBlockhash,
  ApiFunction.getSignaturesForAddress,
  ApiFunction.getTransaction,
  ApiFunction.getAccountInfo,
  ApiFunction.getBalance,
]

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
]

export const ethMainnetOnlyApiFunctions = [
  ApiFunction.alchemy_getAssetTransfers,
  ApiFunction.alchemy_getTokenBalances,
]

// This will import all request and response files under code-samples recursively as raw text
const requestModules = import.meta.glob<Record<string, string>>(
  './code-samples/**/request',
  {
    eager: true,
    query: 'raw',
  },
)
const responseModules = import.meta.glob<Record<string, string>>(
  './code-samples/**/response',
  {
    eager: true,
    query: 'raw',
  },
)

export function loadCodeExamples() {
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
  >

  // Helper to extract keys from file path
  function extractKeys(filePath: string) {
    // filePath: './code-samples/getNFTsForCollection/bash/base-mainnet/request'
    const parts = filePath.replace('./code-samples/', '').split('/')
    // parts: [apiFunction, language, chain, 'request']
    const [apiFunction, language, chain] = parts
    return {
      apiKey: apiFunction as ApiFunction,
      langKey: language as CodeBlockLanguage,
      chainKey: chain as Chains,
    }
  }

  // First, fill in requests
  for (const filePath in requestModules) {
    const { apiKey, langKey, chainKey } = extractKeys(filePath)
    if (!codeMap[apiKey]) codeMap[apiKey] = {}
    if (!codeMap[apiKey]![langKey]) codeMap[apiKey]![langKey] = {}
    if (!codeMap[apiKey]![langKey]![chainKey])
      codeMap[apiKey]![langKey]![chainKey] = { request: '', response: '' }
    codeMap[apiKey]![langKey]![chainKey]!.request = requestModules[filePath]
      .default as string
  }

  // Then, fill in responses
  for (const filePath in responseModules) {
    const { apiKey, langKey, chainKey } = extractKeys(filePath)
    if (!codeMap[apiKey]) codeMap[apiKey] = {}
    if (!codeMap[apiKey]![langKey]) codeMap[apiKey]![langKey] = {}
    if (!codeMap[apiKey]![langKey]![chainKey])
      codeMap[apiKey]![langKey]![chainKey] = { request: '', response: '' }
    codeMap[apiKey]![langKey]![chainKey]!.response = responseModules[filePath]
      .default as string
  }

  return codeMap
}

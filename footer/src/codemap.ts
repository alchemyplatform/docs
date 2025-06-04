export enum CodeBlockLanguage {
  CLI = 'bash',
  JavaScript = 'javascript',
  Python = 'python',
  JSON = 'json',
}

export const languageOptions = [
  { value: CodeBlockLanguage.CLI as string, label: 'curl' },
  { value: CodeBlockLanguage.JavaScript as string, label: 'JavaScript' },
  { value: CodeBlockLanguage.Python as string, label: 'Python' },
  { value: CodeBlockLanguage.JSON as string, label: 'JSON' },
]

export enum Chains {
  ethereumMainnet = 'ethereum-mainnet',
  ethSepolia = 'eth-sepolia',
  baseMainnet = 'base-mainnet',
  avalancheMainnet = 'avalanche-mainnet',
}

export const chainOptions = [
  { value: Chains.ethereumMainnet as string, label: 'Ethereum' },
  { value: Chains.baseMainnet as string, label: 'Base' },
  { value: Chains.avalancheMainnet as string, label: 'Avalanche' },
]

export enum ApiFunction {
  getNFTsForCollection = 'getNFTsForCollection',
  getNFTsForOwner = 'getNFTsForOwner',
  getNFTMetadata = 'getNFTMetadata',
  getNFTsForOwnerAndBlockchain = 'getNFTsForOwnerAndBlockchain',
}

// This will import all request and response files under code-samples recursively as raw text
const requestModules = import.meta.glob('./code-samples/**/request', {
  eager: true,
  query: 'raw',
})
const responseModules = import.meta.glob('./code-samples/**/response', {
  eager: true,
  query: 'raw',
})

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
    codeMap[apiKey]![langKey]![chainKey]!.request = requestModules[
      filePath
    ] as string
  }

  // Then, fill in responses
  for (const filePath in responseModules) {
    const { apiKey, langKey, chainKey } = extractKeys(filePath)
    if (!codeMap[apiKey]) codeMap[apiKey] = {}
    if (!codeMap[apiKey]![langKey]) codeMap[apiKey]![langKey] = {}
    if (!codeMap[apiKey]![langKey]![chainKey])
      codeMap[apiKey]![langKey]![chainKey] = { request: '', response: '' }
    codeMap[apiKey]![langKey]![chainKey]!.response = responseModules[
      filePath
    ] as string
  }

  return codeMap
}

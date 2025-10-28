// Import all code samples
import ethGetBalanceArbitrumRequest from "./code-samples/eth_getBalance/arbitrum-request";
import ethGetBalanceArbitrumResponse from "./code-samples/eth_getBalance/arbitrum-response";
import ethGetBalanceEthereumRequest from "./code-samples/eth_getBalance/ethereum-request";
import ethGetBalanceEthereumResponse from "./code-samples/eth_getBalance/ethereum-response";
import ethGetBlockByNumberArbitrumRequest from "./code-samples/eth_getBlockByNumber/arbitrum-request";
import ethGetBlockByNumberArbitrumResponse from "./code-samples/eth_getBlockByNumber/arbitrum-response";
import ethGetBlockByNumberEthereumRequest from "./code-samples/eth_getBlockByNumber/ethereum-request";
import ethGetBlockByNumberEthereumResponse from "./code-samples/eth_getBlockByNumber/ethereum-response";

export const CODE_SAMPLES = {
  eth_getBlockByNumber: {
    ethereum: {
      request: ethGetBlockByNumberEthereumRequest,
      response: ethGetBlockByNumberEthereumResponse,
    },
    arbitrum: {
      request: ethGetBlockByNumberArbitrumRequest,
      response: ethGetBlockByNumberArbitrumResponse,
    },
  },
  eth_getBalance: {
    ethereum: {
      request: ethGetBalanceEthereumRequest,
      response: ethGetBalanceEthereumResponse,
    },
    arbitrum: {
      request: ethGetBalanceArbitrumRequest,
      response: ethGetBalanceArbitrumResponse,
    },
  },
};

export const CHAIN_OPTIONS = [
  { value: "ethereum", label: "Ethereum" },
  { value: "arbitrum", label: "Arbitrum" },
];

export const METHOD_OPTIONS = [
  { value: "eth_getBlockByNumber", label: "eth_getBlockByNumber" },
  { value: "eth_getBalance", label: "eth_getBalance" },
];

export type Chain = "ethereum" | "arbitrum";
export type Method = "eth_getBlockByNumber" | "eth_getBalance";

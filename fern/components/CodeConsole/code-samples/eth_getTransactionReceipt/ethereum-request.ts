export default `curl -X POST https://eth-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0xf8b955c1b95e0ce539ded4baf94a54035d36020decb904fce95b33707217d02a"
  ],
  "id": 1
}'`;

export default `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x1058fd1f920b95591f7d937b03d6e66c5d88bdf606284c51e42e5c4b7efb2b73"
  ],
  "id": 1
}'`;

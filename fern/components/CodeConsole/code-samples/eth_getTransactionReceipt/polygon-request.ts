export default `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionReceipt",
  "params": [
    "0x9a05c39f9d682f5660ccc0feda8f8d1ff233e67b2bdb5550a9faf0ae50330e4b"
  ],
  "id": 1
}'`;

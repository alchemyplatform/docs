export default `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionByHash",
  "params": [
    "0x4400d8e9c86da035f9a4fc5a2c4a0b7b3b0fc79540c705fe92abd08b10078866"
  ],
  "id": 1
}'`;

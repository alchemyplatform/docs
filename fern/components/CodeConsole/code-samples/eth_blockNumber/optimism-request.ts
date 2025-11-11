export default `curl -X POST https://opt-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_blockNumber",
  "params": [],
  "id": 1
}'`;

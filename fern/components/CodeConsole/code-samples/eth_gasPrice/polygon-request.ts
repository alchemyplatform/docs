export default `curl -X POST https://polygon-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_gasPrice",
  "params": [],
  "id": 1
}'`;

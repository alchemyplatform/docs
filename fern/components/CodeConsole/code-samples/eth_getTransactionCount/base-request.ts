export default `curl -X POST https://base-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x2b9d5Ee187892AF23Ddd328ce0774dE81465800d",
    "latest"
  ],
  "id": 1
}'`;

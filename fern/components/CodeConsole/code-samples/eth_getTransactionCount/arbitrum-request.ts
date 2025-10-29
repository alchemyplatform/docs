export default `curl -X POST https://arb-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "eth_getTransactionCount",
  "params": [
    "0x28452B38064b1DC5E5e2AE4C1BE5D4C392f38dCF",
    "latest"
  ],
  "id": 1
}'`;

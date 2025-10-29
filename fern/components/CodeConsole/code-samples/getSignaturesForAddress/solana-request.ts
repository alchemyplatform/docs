export default `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "getSignaturesForAddress",
  "params": [
    "Lowq9dkpY43VpjfYeRjtKfGA6JtB7HaMmwQgXkjHLvN",
    {
      "limit": 1
    }
  ],
  "id": 1
}'`;

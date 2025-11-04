export default `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \\
     -H "Content-Type: application/json" \\
     -d '{
  "jsonrpc": "2.0",
  "method": "getTokenAccountBalance",
  "params": [
    "4acnoRQj96CkGWHp5uzgF67fRJCUtdFR66ZAHh2mohNB"
  ],
  "id": 1
}'`;

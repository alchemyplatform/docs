export default `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "getBalance",
  "params": [
    "5s749uxx2gcdUL9WaDRhLt3Du2KUREhPT1H8QAXrBZzm"
  ],
  "id": 1
}'`;

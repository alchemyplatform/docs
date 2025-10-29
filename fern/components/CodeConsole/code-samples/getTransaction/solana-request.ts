export default `curl -X POST https://solana-mainnet.g.alchemy.com/v2/{apiKey} \
     -H "Content-Type: application/json" \
     -d '{
  "jsonrpc": "2.0",
  "method": "getTransaction",
  "params": [
    "4MHz27QAFhn6hTpssCgBBFs2fK7a4MfU1rV5XccMxgCALACDVavDtF3JgLPAtuC8aNGBfdHDALbGvX1fL7cdqokt",
    {
      "maxSupportedTransactionVersion": 0
    }
  ],
  "id": 1
}'`;

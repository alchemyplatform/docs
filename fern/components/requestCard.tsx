import React, { useState } from "react";

const languageOptions = ["curl", "JavaScript", "Python"];
const chainOptions = ["Ethereum", "Polygon", "Arbitrum"];
const methodOptions = [
  "getNFTsForCollection",
  "getNFTMetadata",
  "getTokenBalances",
];

export const RequestCard: React.FC = () => {
  const [language, setLanguage] = useState<string>(languageOptions[0]);
  const [chain, setChain] = useState<string>(chainOptions[0]);
  const [method, setMethod] = useState<string>(methodOptions[0]);

  const handleRun = () => {
    console.log(`Run clicked with: ${language}, ${chain}, ${method}`);
  };

  // Example code block content (could be dynamic later)
  const codeBlock = `curl 'https://eth-mainnet.g.alchemy.com/nft/v3/{alchemy_api_key}/${method}?chain=${chain}'`;

  return (
    <div className="bg-gray-900 rounded-2xl p-6 w-full max-w-2xl mx-auto shadow-lg relative">
      <div className="flex items-center justify-between mb-4">
        <div className="flex gap-2">
          <select
            className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none border border-gray-700"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languageOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none border border-gray-700"
            value={chain}
            onChange={(e) => setChain(e.target.value)}
          >
            {chainOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
          <select
            className="bg-gray-800 text-white px-3 py-1 rounded focus:outline-none border border-gray-700"
            value={method}
            onChange={(e) => setMethod(e.target.value)}
          >
            {methodOptions.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
        <button
          className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-1 rounded transition-colors"
          onClick={handleRun}
        >
          Run
        </button>
      </div>
      <pre className="bg-gray-800 text-green-200 rounded-lg p-4 font-mono text-sm overflow-x-auto whitespace-pre mb-2">
        {codeBlock}
      </pre>
    </div>
  );
};

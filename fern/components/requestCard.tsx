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
    <div
      style={{
        backgroundColor: "#1a202c", // bg-gray-900
        borderRadius: "1rem", // rounded-2xl
        padding: "1.5rem", // p-6
        width: "100%", // w-full
        maxWidth: "42rem", // max-w-2xl
        margin: "0 auto", // mx-auto
        boxShadow:
          "0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -4px rgba(0,0,0,0.1)", // shadow-lg
        position: "relative", // relative
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "1rem",
        }}
      >
        <div style={{ display: "flex", gap: "0.5rem" }}>
          <select
            style={{
              backgroundColor: "#2d3748", // bg-gray-800
              color: "white", // text-white
              padding: "0.25rem 0.75rem", // px-3 py-1
              borderRadius: "0.375rem", // rounded
              outline: "none", // focus:outline-none
              border: "1px solid #4a5568", // border border-gray-700
            }}
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
            style={{
              backgroundColor: "#2d3748",
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "0.375rem",
              outline: "none",
              border: "1px solid #4a5568",
            }}
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
            style={{
              backgroundColor: "#2d3748",
              color: "white",
              padding: "0.25rem 0.75rem",
              borderRadius: "0.375rem",
              outline: "none",
              border: "1px solid #4a5568",
            }}
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
          style={{
            backgroundColor: "#374151", // bg-gray-700
            color: "white", // text-white
            padding: "0.25rem 1rem", // px-4 py-1
            borderRadius: "0.375rem", // rounded
            transition: "background-color 0.2s", // transition-colors
            border: "none",
            cursor: "pointer",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#4b5563")
          } // hover:bg-gray-600
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#374151")
          }
          onClick={handleRun}
        >
          Run
        </button>
      </div>
      <pre
        style={{
          backgroundColor: "#2d3748", // bg-gray-800
          color: "#bbf7d0", // text-green-200
          borderRadius: "0.5rem", // rounded-lg
          padding: "1rem", // p-4
          fontFamily: "monospace", // font-mono
          fontSize: "0.875rem", // text-sm
          overflowX: "auto", // overflow-x-auto
          whiteSpace: "pre", // whitespace-pre
          marginBottom: "0.5rem", // mb-2
        }}
      >
        {codeBlock}
      </pre>
    </div>
  );
};

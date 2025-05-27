import React, { useState, useEffect } from "react";

import { codeMap } from "./codemap";

const languageOptions = ["curl", "JavaScript", "Python"];
const chainOptions = ["Ethereum", "Polygon", "Arbitrum"];

export const RequestCard = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.target === document.documentElement &&
          mutation.attributeName === "class"
        ) {
          setIsDark(document.documentElement.classList.contains("dark"));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const [language, setLanguage] = useState<string>(languageOptions[0]);
  const [chain, setChain] = useState<string>(chainOptions[0]);
  const [method, setMethod] = useState<string>(Object.keys(codeMap)[0]);

  const [runButtonDisabled, setRunButtonDisabled] = useState<boolean>(false);

  const handleRun = () => {
    console.log(`Run clicked with: ${language}, ${chain}, ${method}`);
    setCode(codeMap[method].response);
    setRunButtonDisabled(true);
  };

  const [code, setCode] = useState<string>(
    codeMap[Object.keys(codeMap)[0]][language],
  );

  return (
    <div
      style={{
        backgroundColor: isDark ? "#121212" : "#FAFAFA",
        borderRadius: "24px",
        border: `1px solid ${isDark ? "#383838" : "#EAEAEA"}`,

        width: "100%",
      }}
    >
      <div style={{ padding: "24px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              gap: "8px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <span
              style={{
                color: isDark ? "#EDEDED" : "#94A3B8",
                marginRight: "16px",
              }}
            >
              Request
            </span>
            <select
              style={{
                backgroundColor: isDark ? "#383838" : "#F1F1F1",
                color: isDark ? "#EDEDED" : "#111111",
                padding: "6px",
                borderRadius: "6px",
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: "14px",
                borderRight: "4px solid transparent",
              }}
              value={language}
              onChange={(e) => {
                setLanguage(e.target.value);
                setCode(codeMap[method][e.target.value]);
                setRunButtonDisabled(false);
              }}
            >
              {languageOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <select
              style={{
                backgroundColor: isDark ? "#383838" : "#F1F1F1",
                color: isDark ? "#EDEDED" : "#111111",
                padding: "6px",
                borderRadius: "6px",
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: "14px",
                borderRight: "4px solid transparent",
              }}
              value={chain}
              onChange={(e) => {
                setChain(e.target.value);
                setCode(codeMap[method][language]);
                setRunButtonDisabled(false);
              }}
            >
              {chainOptions.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
            <select
              style={{
                backgroundColor: isDark ? "#383838" : "#F1F1F1",
                color: isDark ? "#EDEDED" : "#111111",
                padding: "6px",
                borderRadius: "6px",
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: "14px",
                borderRight: "4px solid transparent",
              }}
              value={method}
              onChange={(e) => {
                setMethod(e.target.value);
                setCode(codeMap[e.target.value][language]);
                setRunButtonDisabled(false);
              }}
            >
              {Object.keys(codeMap).map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <button
            style={{
              backgroundColor: isDark ? "#1C1C1C" : "#383838",
              color: "#EDEDED",
              padding: "6px 12px",
              borderRadius: "100px",
              border: "none",
              cursor: runButtonDisabled ? "not-allowed" : "pointer",
              fontFamily: "monospace",
              display: "flex",
              alignItems: "center",
              alignSelf: "flex-start",
              gap: 8,
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#4b5563")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#374151")
            }
            onClick={handleRun}
            disabled={runButtonDisabled}
          >
            RUN{" "}
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.07199 5.43326C9.77475 5.83939 9.77732 6.35029 9.07199 6.80944L3.62211 10.6211C2.93734 11.0001 2.47226 10.7763 2.42344 9.95629L2.40032 1.97858C2.3849 1.22324 2.98487 1.00982 3.55659 1.37198L9.07199 5.43326Z"
                stroke="#EDEDED"
              />
            </svg>
          </button>
        </div>
        <pre
          style={{
            color: isDark ? "#EDEDED" : "#383838",
            margin: "16px",
            fontSize: "16px",
            overflowX: "auto",
            height: "300px",
            whiteSpace: "break-spaces",
            paddingRight: "64px",
          }}
        >
          {code}
        </pre>
      </div>
      <div
        style={{
          backgroundColor: isDark ? "#131313" : "#fbfbfb",
          borderRadius: "0 0 24px 24px",
          padding: "0px 32px 24px",
          color: isDark ? "#EDEDED" : "#111111",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div style={{ color: isDark ? "#EDEDED" : "#111111" }}>
          <p
            style={{
              fontWeight: 600,
              fontSize: "20px",
              marginBottom: "8px",
            }}
          >
            Quickstart
          </p>
          <span style={{ fontSize: "14px" }}>
            Guides for 500+ endpoints on 80+ networks
          </span>
        </div>
        <div style={{ display: "flex", alignSelf: "end" }}>
          <span>
            <a
              href="https://www.alchemy.com/docs/tutorials-overview"
              style={{
                color: isDark ? "#EDEDED" : "#383838",
                textDecoration: "none",
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.color = isDark
                  ? "rgba(237, 237, 237, 0.6)"
                  : "rgba(56, 56, 56, 0.6)")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.color = isDark ? "#EDEDED" : "#383838")
              }
            >
              Get started&nbsp;{" "}
              <svg
                style={{
                  display: "inline",
                }}
                width="8"
                height="9"
                viewBox="0 0 8 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.63872 1.22041L7.32005 1.22033M7.32005 1.22033L7.32005 6.82086M7.32005 1.22033L0.720385 7.81999"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

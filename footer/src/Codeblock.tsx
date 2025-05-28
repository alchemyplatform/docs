import React from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter'
import javascript from 'react-syntax-highlighter/dist/esm/languages/prism/javascript'
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python'
import bash from 'react-syntax-highlighter/dist/esm/languages/prism/bash'
import json from 'react-syntax-highlighter/dist/esm/languages/prism/json'
import oneDark from 'react-syntax-highlighter/dist/esm/styles/prism/one-dark'
import oneLight from 'react-syntax-highlighter/dist/esm/styles/prism/one-light'

import {
  codeMap,
  chainOptions,
  CodeBlockLanguage,
  languageOptions,
} from './codemap.ts'

SyntaxHighlighter.registerLanguage(CodeBlockLanguage.CLI, bash)
SyntaxHighlighter.registerLanguage(CodeBlockLanguage.JavaScript, javascript)
SyntaxHighlighter.registerLanguage(CodeBlockLanguage.Python, python)
SyntaxHighlighter.registerLanguage(CodeBlockLanguage.JSON, json)

export const Codeblock: React.FC = () => {
  const [isDark, setIsDark] = React.useState(
    document.documentElement.classList.contains('dark'),
  )

  React.useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.target === document.documentElement &&
          mutation.attributeName === 'class'
        ) {
          setIsDark(document.documentElement.classList.contains('dark'))
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  const theme: DefaultTheme = {
    mode: isDark ? 'dark' : 'light',
  }

  const [language, setLanguage] = React.useState<string>(languageOptions[0])
  const [chain, setChain] = React.useState<string>(chainOptions[0])
  const [method, setMethod] = React.useState<string>(Object.keys(codeMap)[0])

  const [runButtonDisabled, setRunButtonDisabled] =
    React.useState<boolean>(false)

  const handleRun = () => {
    // TODO: Add analytics events when clicked.
    // console.log(`Run clicked with: ${language}, ${chain}, ${method}`)
    setCode(codeMap[method][CodeBlockLanguage.JSON])
    setRunButtonDisabled(true)
    setLanguage(CodeBlockLanguage.JSON)
  }

  const [code, setCode] = React.useState<string>(
    codeMap[Object.keys(codeMap)[0]][language],
  )

  React.useEffect(() => {
    setCode(codeMap[method][language])
  }, [language, chain, method])

  return (
    <StyledThemeProvider theme={theme}>
      <h3 className="mb-6">Query the blockchain in seconds</h3>
      <div
        style={{
          backgroundColor: isDark ? '#121212' : '#FAFAFA',
          borderRadius: '24px',
          border: isDark ? '1px solid #383838' : '1px solid #EAEAEA',
        }}
      >
        <div style={{ padding: '24px 24px 0px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <span
                style={{
                  color: isDark ? '#EDEDED' : '#94A3B8',
                  marginRight: '16px',
                }}
              >
                Request
              </span>
              <select
                style={{
                  backgroundColor: isDark ? '#383838' : '#F1F1F1',
                  color: isDark ? '#EDEDED' : '#111111',
                  padding: '6px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  borderRight: '4px solid transparent',
                }}
                value={language}
                onChange={(e) => {
                  setLanguage(e.target.value)
                  setCode(codeMap[method][e.target.value])
                  setRunButtonDisabled(false)
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
                  backgroundColor: isDark ? '#383838' : '#F1F1F1',
                  color: isDark ? '#EDEDED' : '#111111',
                  padding: '6px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  borderRight: '4px solid transparent',
                }}
                value={chain}
                onChange={(e) => {
                  setChain(e.target.value)
                  setCode(codeMap[method][language])
                  setRunButtonDisabled(false)
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
                  backgroundColor: isDark ? '#383838' : '#F1F1F1',
                  color: isDark ? '#EDEDED' : '#111111',
                  padding: '6px',
                  borderRadius: '6px',
                  textAlign: 'center',
                  fontFamily: 'monospace',
                  fontSize: '14px',
                  borderRight: '4px solid transparent',
                }}
                value={method}
                onChange={(e) => {
                  setMethod(e.target.value)
                  setCode(codeMap[e.target.value][language])
                  setRunButtonDisabled(false)
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
                backgroundColor: isDark ? '#1C1C1C' : '#383838',
                color: '#EDEDED',
                padding: '6px 12px',
                borderRadius: '100px',
                border: 'none',
                cursor: runButtonDisabled ? 'not-allowed' : 'pointer',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                alignSelf: 'flex-start',
                gap: 8,
              }}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor = isDark
                  ? '#4b5563'
                  : '#4b5563')
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = isDark
                  ? '#1C1C1C'
                  : '#383838')
              }
              onClick={handleRun}
              disabled={runButtonDisabled}
            >
              RUN{' '}
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
          <SyntaxHighlighter
            style={isDark ? oneDark : oneLight}
            wrapLongLines={true}
            showLineNumbers={true}
            language={language}
            customStyle={{
              fontSize: '14px',
              backgroundColor: isDark ? '#121212' : '#FAFAFA',
              height: '300px',
            }}
            codeTagProps={{
              style: {
                boxShadow: 'none',
                background: 'none',
              },
            }}
          >
            {code}
          </SyntaxHighlighter>
        </div>
        <div
          style={{
            backgroundColor: isDark ? '#131313' : '#fbfbfb',
            borderRadius: '0 0 24px 24px',
            padding: '24px 32px',
            color: isDark ? '#EDEDED' : '#111111',
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <div style={{ color: isDark ? '#EDEDED' : '#111111' }}>
            <p
              style={{
                fontWeight: 600,
                fontSize: '20px',
                marginBottom: '8px',
              }}
            >
              Quickstart
            </p>
            <span style={{ fontSize: '14px' }}>
              Guides for 500+ endpoints on 80+ networks
            </span>
          </div>
          <div style={{ display: 'flex', alignSelf: 'end' }}>
            <span>
              <a
                href="https://www.alchemy.com/docs/tutorials-overview"
                style={{
                  color: isDark ? '#EDEDED' : '#383838',
                  textDecoration: 'none',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = isDark
                    ? 'rgba(237, 237, 237, 0.6)'
                    : 'rgba(56, 56, 56, 0.6)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = isDark ? '#EDEDED' : '#383838')
                }
              >
                Get started&nbsp;{' '}
                <svg
                  style={{
                    display: 'inline',
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
    </StyledThemeProvider>
  )
}

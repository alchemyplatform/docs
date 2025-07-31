import React from 'react'
import type { HighlighterCore } from 'shiki/core'
import { createHighlighterCore } from 'shiki/core'
import { createJavaScriptRawEngine } from 'shiki/engine/javascript'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import { CodeblockSelect } from './CodeblockSelect'

import {
  ApiFunction,
  chainOptions,
  Chains,
  CodeBlockLanguage,
  ethereumApiFunctions,
  ethMainnetOnlyApiFunctions,
  languageOptions,
  loadCodeExamples,
  solanaApiFunctions,
} from './codemap.ts'

const CODE_MAP = loadCodeExamples()

const CodeBlockContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#121212' : '#FAFAFA'};
  border-radius: 24px;
  border: ${({ theme }) =>
    theme.mode === 'dark' ? '1px solid #383838' : '1px solid #EAEAEA'};
`

const ShikiCodeBlock = styled.div`
  margin-top: 24px;
  overflow-x: auto;
  height: 300px;

  .shiki {
    background-color: ${({ theme }) =>
      theme.mode === 'dark' ? '#121212' : '#FAFAFA'} !important;
  }

  html.dark .shiki,
  html.dark .shiki span {
    color: var(--shiki-dark) !important;
    background-color: var(--shiki-dark-bg) !important;
  }

  code {
    counter-reset: step;
    counter-increment: step 0;
    box-shadow: none;
    background-color: transparent;
    white-space: unset;
    padding-inline: 0px;
  }

  code .line::before {
    content: counter(step);
    counter-increment: step;
    width: 1rem;
    margin-right: 1.5rem;
    display: inline-block;
    text-align: right;
    color: rgba(115, 138, 148, 0.4);
  }
`

const RunButton = styled.button`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#1C1C1C' : '#383838'};
  color: ${({ theme }) => (theme.mode === 'dark' ? '#EDEDED' : '#EDEDED')};
  padding: 6px 12px;
  border-radius: 100px;
  border: none;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  font-family: monospace;
  display: flex;
  align-items: center;
  align-self: flex-start;
  gap: 8px;
`

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  height: 300px;
  width: 100%;
`

const LoaderSpinner = styled.div`
  width: 16px;
  height: 16px;
  border: 2px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#EDEDED' : '#111111')};
  border-top: 2px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`

const QuickstartContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#131313' : '#fbfbfb'};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#EDEDED' : '#111111')};
  display: flex;
  justify-content: space-between;
`

const getMethodOptions = (chain: Chains) => {
  if (chain === Chains.solanaMainnet) {
    return solanaApiFunctions.map((selectedMethod) => ({
      value: selectedMethod,
      label: selectedMethod,
    }))
  }

  const baseFunctions =
    chain === Chains.ethereumMainnet
      ? [...ethMainnetOnlyApiFunctions, ...ethereumApiFunctions]
      : ethereumApiFunctions

  return baseFunctions.map((selectedMethod) => ({
    value: selectedMethod,
    label: selectedMethod,
  }))
}

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

  const [language, setLanguage] = React.useState<CodeBlockLanguage>(
    CodeBlockLanguage.CLI,
  )
  const [chain, setChain] = React.useState<Chains>(Chains.ethereumMainnet)
  const [method, setMethod] = React.useState<ApiFunction>(
    ApiFunction.eth_getBlockByNumber,
  )
  const [languageDropdownOption, setLanguageDropdownOption] =
    React.useState<CodeBlockLanguage>(language)

  const [runButtonDisabled, setRunButtonDisabled] =
    React.useState<boolean>(false)

  const handleRun = () => {
    // TODO: Add analytics events when clicked.
    setLanguage(CodeBlockLanguage.JSON)
    showLoader()
    setCode(CODE_MAP[method]?.[language]?.[chain]?.response ?? '')
    setRunButtonDisabled(true)
  }

  const [code, setCode] = React.useState<string>(
    CODE_MAP[method]?.[language]?.[chain]?.request ?? 'Something went wrong',
  )

  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const showLoader = () => {
    setIsLoading(true)
    setTimeout(
      () => {
        setIsLoading(false)
      },
      Math.floor(Math.random() * 300) + 100,
    )
  }

  const updateCode = (
    chain_: Chains,
    method_: ApiFunction,
    language_ = languageDropdownOption,
  ) => {
    setLanguage(language_)
    setChain(chain_)
    setMethod(method_)
    setCode(
      CODE_MAP[method_]?.[language_]?.[chain_]?.request ??
        'Something went wrong',
    )
    setRunButtonDisabled(false)
  }

  const [codeHtml, setCodeHtml] = React.useState<string>('')
  const [highlighter, setHighlighter] = React.useState<HighlighterCore | null>(
    null,
  )

  React.useEffect(() => {
    const initHighlighter = async () => {
      const highlighterCore = await createHighlighterCore({
        langs: [import('@shikijs/langs/bash'), import('@shikijs/langs/json')],
        themes: [
          import('@shikijs/themes/github-light'),
          import('@shikijs/themes/material-theme-darker'),
        ],
        engine: createJavaScriptRawEngine(),
      })
      setHighlighter(highlighterCore)
    }

    initHighlighter()
  }, [])

  React.useEffect(() => {
    const generateCodeHtml = async () => {
      if (!highlighter) return // Wait for highlighter to be ready

      try {
        const html = await highlighter.codeToHtml(code, {
          lang: language,
          themes: {
            light: 'github-light',
            dark: 'material-theme-darker',
          },
        })
        setCodeHtml(html)
      } catch (error) {
        console.error('Error generating code HTML:', error)
        setCodeHtml(`<pre><code>${code}</code></pre>`) // Fallback
      }
    }
    generateCodeHtml()
  }, [code, language, isDark, highlighter])

  return (
    <StyledThemeProvider theme={theme}>
      <h3 className="mb-6">Query the blockchain instantly</h3>
      <CodeBlockContainer>
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
                marginRight: '8px',
              }}
            >
              <span
                style={{
                  color: isDark ? '#EDEDED' : '#94A3B8',
                  minWidth: '9ch',
                  display: 'inline-block',
                }}
              >
                {runButtonDisabled ? 'Response' : 'Request'}
              </span>
              {/* Language */}
              <CodeblockSelect
                isDark={isDark}
                options={languageOptions.filter((opt) => {
                  const entry =
                    CODE_MAP[method]?.[opt.value as CodeBlockLanguage]?.[chain]
                  return entry && entry.request && entry.response
                })}
                selectedOption={languageDropdownOption}
                onChange={(value) => {
                  setLanguageDropdownOption(value as CodeBlockLanguage)
                  updateCode(chain, method, value as CodeBlockLanguage)
                }}
              />
              {/* Chain */}
              <CodeblockSelect
                isDark={isDark}
                options={chainOptions}
                selectedOption={chain}
                onChange={(value) => {
                  // If we switch between Solana and Ethereum, we need to update
                  // the currently selected method to a valid default.
                  if (value === Chains.solanaMainnet && value !== chain) {
                    updateCode(
                      value as Chains,
                      ApiFunction.getTokenAccountsByOwner,
                    )
                  } else if (value !== chain) {
                    updateCode(
                      value as Chains,
                      ApiFunction.eth_getBlockByNumber,
                    )
                  }
                }}
              />
              {/* Method */}
              <CodeblockSelect
                isDark={isDark}
                options={getMethodOptions(chain)}
                selectedOption={method}
                onChange={(value) => {
                  updateCode(chain, value as ApiFunction)
                }}
              />
            </div>
            <RunButton
              onMouseOver={(e) => {
                e.currentTarget.style.backgroundColor = isDark
                  ? '#4b5563'
                  : '#4b5563'
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.backgroundColor = isDark
                  ? '#1C1C1C'
                  : '#383838'
              }}
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
            </RunButton>
          </div>
          {isLoading ? (
            <LoaderContainer>
              <LoaderSpinner />
            </LoaderContainer>
          ) : (
            <ShikiCodeBlock dangerouslySetInnerHTML={{ __html: codeHtml }} />
          )}
        </div>
        <QuickstartContainer>
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
                href="https://www.alchemy.com/docs/alchemy-quickstart-guide"
                style={{
                  color: isDark ? '#EDEDED' : '#383838',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                }}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = isDark
                    ? 'rgba(81, 103, 255, 1)'
                    : 'rgba(81, 103, 255, 1)')
                }
                onMouseOut={(e) =>
                  (e.currentTarget.style.color = isDark ? '#EDEDED' : '#383838')
                }
              >
                Get started&nbsp;
                <svg
                  style={{
                    marginLeft: '4px',
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
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </span>
          </div>
        </QuickstartContainer>
      </CodeBlockContainer>
    </StyledThemeProvider>
  )
}

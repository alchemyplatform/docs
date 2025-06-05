import React from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import SyntaxHighlighter from 'react-syntax-highlighter'
import dark from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-dark'
import light from 'react-syntax-highlighter/dist/esm/styles/hljs/atom-one-light'
import { CodeblockSelect } from './CodeblockSelect'

import {
  CodeBlockLanguage,
  Chains,
  ApiFunction,
  languageOptions,
  chainOptions,
  loadCodeExamples,
} from './codemap.ts'

const CODE_MAP = loadCodeExamples()

const CodeBlockContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#121212' : '#FAFAFA'};
  border-radius: 24px;
  border: ${({ theme }) =>
    theme.mode === 'dark' ? '1px solid #383838' : '1px solid #EAEAEA'};
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

const QuickstartContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#131313' : '#fbfbfb'};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#EDEDED' : '#111111')};
  display: flex;
  justify-content: space-between;
`

const CodeBlockContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#121212' : '#FAFAFA'};
  border-radius: 24px;
  border: ${({ theme }) =>
    theme.mode === 'dark' ? '1px solid #383838' : '1px solid #EAEAEA'};
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

const QuickstartContainer = styled.div`
  background-color: ${({ theme }) =>
    theme.mode === 'dark' ? '#131313' : '#fbfbfb'};
  border-radius: 0 0 24px 24px;
  padding: 24px 32px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#EDEDED' : '#111111')};
  display: flex;
  justify-content: space-between;
`

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
    ApiFunction.getNFTsForCollection,
  )
  const [languageDropdownOption, setLanguageDropdownOption] =
    React.useState<CodeBlockLanguage>(CodeBlockLanguage.CLI)

  const [runButtonDisabled, setRunButtonDisabled] =
    React.useState<boolean>(false)

  const handleRun = () => {
    // TODO: Add analytics events when clicked.
    setLanguage(CodeBlockLanguage.JSON)
    setCode(CODE_MAP[method]?.[language]?.[chain]?.response ?? '')
    setRunButtonDisabled(true)
  }

  const [code, setCode] = React.useState<string>(
    CODE_MAP[method]?.[language]?.[chain]?.request ?? 'Something went wrong',
  )

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

  return (
    <StyledThemeProvider theme={theme}>
      <h3 className="mb-6">Query the blockchain in seconds</h3>
      <CodeBlockContainer>
        <div style={{ padding: '24px 24px 0px' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
            }}>
            <div
              style={{
                display: 'flex',
                gap: '8px',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}>
              <span
                style={{
                  color: isDark ? '#EDEDED' : '#94A3B8',
                  marginRight: '16px',
                }}>
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
                options={
                  language === CodeBlockLanguage.JSON
                    ? chainOptions.filter(
                        (opt) =>
                          CODE_MAP[method]?.[languageDropdownOption] &&
                          CODE_MAP[method][languageDropdownOption]?.[
                            opt.value as Chains
                          ],
                      )
                    : chainOptions.filter(
                        (opt) =>
                          CODE_MAP[method]?.[language] &&
                          CODE_MAP[method][language]?.[opt.value as Chains],
                      )
                }
                selectedOption={chain}
                onChange={(value) => {
                  updateCode(value as Chains, method)
                }}
              />
              {/* Method */}
              <CodeblockSelect
                isDark={isDark}
                options={Object.values(ApiFunction)
                  .filter((selectedMethod) => {
                    const entry =
                      language === CodeBlockLanguage.JSON
                        ? CODE_MAP[selectedMethod]?.[languageDropdownOption]?.[
                            chain
                          ]
                        : CODE_MAP[selectedMethod]?.[language]?.[chain]
                    return entry && entry.request && entry.response
                  })
                  .map((selectedMethod) => ({
                    value: selectedMethod,
                    label: selectedMethod,
                  }))}
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
              disabled={runButtonDisabled}>
              RUN{' '}
              <svg
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.07199 5.43326C9.77475 5.83939 9.77732 6.35029 9.07199 6.80944L3.62211 10.6211C2.93734 11.0001 2.47226 10.7763 2.42344 9.95629L2.40032 1.97858C2.3849 1.22324 2.98487 1.00982 3.55659 1.37198L9.07199 5.43326Z"
                  stroke="#EDEDED"
                />
              </svg>
            </RunButton>
          </div>
          <SyntaxHighlighter
            style={isDark ? dark : light}
            showLineNumbers={true}
            language={language}
            customStyle={{
              fontSize: '16px',
              background: 'transparent',
              height: '300px',
              marginTop: '8px',
              textWrap: 'initial',
            }}
            codeTagProps={{
              style: {
                boxShadow: 'none',
                background: 'transparent',
                whiteSpace: 'unset',
                paddingInline: '0px',
              },
            }}>
            {code}
          </SyntaxHighlighter>
        </div>
        <QuickstartContainer>
          <div style={{ color: isDark ? '#EDEDED' : '#111111' }}>
            <p
              style={{
                fontWeight: 600,
                fontSize: '20px',
                marginBottom: '8px',
              }}>
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
                }>
                Get started&nbsp;
                <svg
                  style={{
                    display: 'inline',
                  }}
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
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

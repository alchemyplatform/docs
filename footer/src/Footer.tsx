import React from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import ChangelogIcon from './assets/ChangelogIcon.js'
import CommunityIcon from './assets/CommunityIcon.js'
import LogoDark from './assets/LogoDark.js'
import LogoLight from './assets/LogoLight.js'
import StatusIcon from './assets/StatusIcon.js'

const FooterContainer = styled.section`
  padding-block: 44px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Inter', sans-serif;
  gap: 1rem;
  width: 100%;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#e2e8f0' : '#475569')};
  font-weight: 400;
`

const CommunityLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#1f2937' : '#e2e8f0')};
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#1f2937' : '#e2e8f0')};
  padding-block: 36px;
  a {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#CBD5E0' : '#94a3b8')};
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 50px;
    padding: 24px 16px;
  }
`

const FooterLeftSide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const FooterLeftSideLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

const FooterRightSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    align-items: center;
    padding: 8px;
  }
`

const SubscribeForm = styled.form`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

const FooterAlchemyCopyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  width: 100%;
  max-width: 800px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`

export const CustomFooter: React.FC = () => {
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

  return (
    <StyledThemeProvider theme={theme}>
      <FooterContainer>
        <CommunityLinks>
          <FooterLeftSide>
            <FooterLeftSideLinks>
              <ChangelogIcon />
              <span>
                View the <a href="https://www.alchemy.com/blog">changelog</a>
              </span>
            </FooterLeftSideLinks>
            <FooterLeftSideLinks>
              <CommunityIcon />
              <span>
                Join our <a href="https://discord.gg/9GnAcXQYZ6">community</a>
              </span>
            </FooterLeftSideLinks>
            <FooterLeftSideLinks>
              <StatusIcon />
              <span>
                Check our <a href="https://status.alchemy.com">status</a>
              </span>
            </FooterLeftSideLinks>
          </FooterLeftSide>
          <FooterRightSide>
            <SubscribeForm>
              <iframe
                title="Substack form"
                src="https://alchemysupercharged.substack.com/embed"
                width="320"
                height="280"
              ></iframe>
            </SubscribeForm>
          </FooterRightSide>
        </CommunityLinks>
        <FooterAlchemyCopyright>
          {isDark ? <LogoDark /> : <LogoLight />}
          <p>
            <span>
              &copy; {new Date().getFullYear()} Alchemy Insights, Inc. ·{' '}
            </span>
            <a href="https://www.alchemy.com/terms-conditions/terms/">
              Terms of Service
            </a>
          </p>
        </FooterAlchemyCopyright>
      </FooterContainer>
    </StyledThemeProvider>
  )
}

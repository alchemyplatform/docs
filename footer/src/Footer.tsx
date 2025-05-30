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
  margin-top: 80px;
  width: 60%;
  padding-block: 36px;
  gap: 16px;
  a {
    color: ${({ theme }) => (theme.mode === 'dark' ? '#CBD5E0' : '#94a3b8')};
    text-decoration: underline;
  }
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
    width: 100%;
    margin-top: 0;
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

const FooterAlchemyCopyrightContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  width: 60%;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }
`

const FooterCopyrightTextContainer = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
  justify-content: center;

  @media screen and (max-width: 768px) {
    margin-top: 12px;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`

const FooterCopyrightText = styled.p`
  white-space: nowrap;
  margin: 0;
  padding: 0;
`

const Separator = styled.span`
  align-self: center;

  @media screen and (max-width: 768px) {
    display: none;
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
        <FooterAlchemyCopyrightContainer>
          {isDark ? <LogoDark /> : <LogoLight />}
          <FooterCopyrightTextContainer>
            <FooterCopyrightText>
              &copy; {new Date().getFullYear()} Alchemy Insights, Inc.
            </FooterCopyrightText>
            <Separator>·</Separator>
            <FooterCopyrightText>
              <a href="https://www.alchemy.com/terms-conditions/terms/">
                Terms of Service
              </a>
            </FooterCopyrightText>
          </FooterCopyrightTextContainer>
        </FooterAlchemyCopyrightContainer>
      </FooterContainer>
    </StyledThemeProvider>
  )
}

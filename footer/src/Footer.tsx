import { useEffect, useState, type FC } from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import AlchemyLogo from './assets/AlchemyLogo.js'
import AlchemyUniversityIcon from './assets/AlchemyUniversityIcon.js'
import DiscordIcon from './assets/DiscordIcon.js'
import EmailIcon from './assets/EmailIcon.js'
import NewsletterIcon from './assets/NewsletterIcon.js'
import RobotIcon from './assets/RobotIcon.js'
import StatusIcon from './assets/StatusIcon.js'
import SupportHubIcon from './assets/SupportHubIcon.js'
import XIcon from './assets/XIcon.js'

const columns = [
  {
    title: 'Support & Platform',
    links: [
      {
        href: 'https://www.alchemy.com/support',
        text: 'Get help on our support hub',
        Icon: SupportHubIcon,
      },
      {
        href: 'https://www.alchemy.com/contact-sales',
        text: 'Questions? Contact sales',
        Icon: EmailIcon,
      },
      {
        href: 'https://status.alchemy.com',
        text: 'Checkout our platform status',
        Icon: StatusIcon,
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        href: 'https://www.alchemy.com/docs/llms.txt',
        text: 'Using AI? View our llms.txt',
        Icon: RobotIcon,
      },
      {
        href: 'https://www.alchemy.com/university',
        text: 'Learn more on Alchemy University',
        Icon: AlchemyUniversityIcon,
      },
    ],
  },
  {
    title: 'Stay updated',
    links: [
      {
        href: 'https://alchemysupercharged.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed',
        text: 'Subscribe to our Newsletter',
        Icon: NewsletterIcon,
      },
      {
        href: 'https://x.com/alchemy',
        text: 'Follow us on X',
        Icon: XIcon,
      },
      {
        href: 'https://discord.gg/9GnAcXQYZ6',
        text: 'Join our discord',
        Icon: DiscordIcon,
      },
    ],
  },
]

const FooterContainer = styled.div`
  padding: 48px 24px;
  font-family: 'Inter', sans-serif;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FBFDFF' : '#020617')};
`

const FooterWrapper = styled.div`
  max-width: 1010px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`

const TopSection = styled.div`
  display: flex;
  gap: 32px;
  padding-bottom: 48px;
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#383838' : '#E2E8F0')};

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`

const LinksColumns = styled.div`
  display: flex;
  column-gap: 36px;
  flex: 1;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    column-gap: 64px;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`

const ColumnTitle = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#0F172A')};
  margin: 0;
`

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`

const BottomSection = styled.div`
  padding-top: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 24px;
  }
`

const Copyright = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
  }
`

const TermsLink = styled.a`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`

export const CustomFooter: FC = () => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark'),
  )

  useEffect(() => {
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
        <FooterWrapper>
          <TopSection>
            <LinksColumns>
              {columns.map(({ title, links }) => (
                <Column key={title}>
                  <ColumnTitle>{title}</ColumnTitle>
                  {links.map(({ href, text, Icon }) => (
                    <FooterLink key={text} href={href}>
                      <Icon isDark={isDark} />
                      <span>{text}</span>
                    </FooterLink>
                  ))}
                </Column>
              ))}
            </LinksColumns>
          </TopSection>
          <BottomSection>
            <AlchemyLogo isDark={isDark} />
            <Copyright>
              <TermsLink href="https://legal.alchemy.com/#contract-kduihkaqm">
                Terms & Conditions
              </TermsLink>
              <span>© {new Date().getFullYear()} Alchemy Insights, Inc</span>
            </Copyright>
          </BottomSection>
        </FooterWrapper>
      </FooterContainer>
    </StyledThemeProvider>
  )
}

import { useEffect, useState, type FC } from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import AlchemyLogo from './assets/AlchemyLogo.js'
import AlchemyUniversityIcon from './assets/AlchemyUniversityIcon.js'
import { BuiltByFern } from './assets/BuiltByFern.js'
import DiscordIcon from './assets/DiscordIcon.js'
import EmailIcon from './assets/EmailIcon.js'
import NewsletterIcon from './assets/NewsletterIcon.js'
import RobotIcon from './assets/RobotIcon.js'
import StatusIcon from './assets/StatusIcon.js'
import SupportHubIcon from './assets/SupportHubIcon.js'
import XIcon from './assets/XIcon.js'

const columns = [
  {
    title: 'Support & platform',
    links: [
      {
        href: 'https://www.alchemy.com/support',
        text: 'FAQs and support',
        Icon: SupportHubIcon,
      },
      {
        href: 'https://status.alchemy.com',
        text: 'Platform status',
        Icon: StatusIcon,
      },
      {
        href: 'https://www.alchemy.com/contact-sales',
        text: 'Contact sales',
        Icon: EmailIcon,
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        href: 'https://www.alchemy.com/docs/llms.txt',
        text: 'llms.txt for AI builders',
        Icon: RobotIcon,
      },
      {
        href: 'https://www.alchemy.com/university',
        text: 'Alchemy University',
        Icon: AlchemyUniversityIcon,
      },
    ],
  },
  {
    title: 'Stay updated',
    links: [
      {
        href: 'https://alchemysupercharged.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed',
        text: 'Subscribe to our newsletter',
        Icon: NewsletterIcon,
      },
      {
        href: 'https://x.com/alchemy',
        text: 'Follow us on X',
        Icon: XIcon,
      },
      {
        href: 'https://discord.gg/alchemy-builders',
        text: 'Join our discord',
        Icon: DiscordIcon,
      },
    ],
  },
]

const FooterContainer = styled.div`
  padding: 48px 24px 54px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FBFDFF' : '#020617')};
`

const FooterWrapper = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
`

const TopSection = styled.div`
  padding: 48px 0px;
  border-top: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#3f3f40' : '#d4d4e8')};
  border-bottom: 1px solid
    ${({ theme }) => (theme.mode === 'dark' ? '#3f3f40' : '#d4d4e8')};
  display: flex;
`

const LinksColumns = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    column-gap: 64px;
    justify-content: space-between;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;
`

const ColumnTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  line-height: 1.25;
  letter-spacing: -0.32px;
  color: ${({ theme }) => (theme.mode === 'dark' ? '#FFFFFF' : '#000000')};
  margin: 0;
`

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  &:hover {
    color: #5167ff;

    svg {
      /* Add hover effect to icon paths depending on if they use fill or stroke */
      path[fill] {
        fill: #5167ff;
      }
      path[stroke] {
        stroke: #5167ff;
      }
    }
  }
`

const BottomSection = styled.div`
  justify-content: center;
  padding-top: 18px;
  font-size: 14px;
  font-weight: 500;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 28px;
  margin-top: 36px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    margin-top: 0;
  }
`

const CopyrightTerms = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.5;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 24px;
    width: 100%;
    justify-content: space-between;
  }
`

const LeftTerms = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
    gap: 24px;
  }
`

const RightTerms = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 12px;

  @media screen and (min-width: 768px) {
    margin-top: 0;
    justify-content: flex-end;
  }
`

const TermsLink = styled.a`
  text-decoration: none;
  &:hover {
    color: #5167ff;
  }
`

const LogoColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-size: 14px;

  @media screen and (max-width: 768px) {
    margin-bottom: 12px;
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
              <LogoColumn>
                <AlchemyLogo isDark={isDark} />
              </LogoColumn>
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
            <CopyrightTerms>
              <LeftTerms>
                <TermsLink href="https://legal.alchemy.com/#contract-kduihkaqm">
                  Terms & Conditions
                </TermsLink>
                <span>© {new Date().getFullYear()} Alchemy Insights, Inc</span>
              </LeftTerms>
              <RightTerms>
                <BuiltByFern />
              </RightTerms>
            </CopyrightTerms>
          </BottomSection>
        </FooterWrapper>
      </FooterContainer>
    </StyledThemeProvider>
  )
}

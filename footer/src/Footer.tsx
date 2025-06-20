import { useEffect, useState, type FC } from 'react'
import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import type { DefaultTheme } from 'styled-components/dist/types.js'
import CommunityIcon from './assets/CommunityIcon.js'
import LogoDark from './assets/LogoDark.js'
import LogoLight from './assets/LogoLight.js'
import StatusIcon from './assets/StatusIcon.js'

// Placeholder Icons
const SupportHubIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M6 8H10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 6V10"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const ContactSalesIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2 5L8 9L14 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M14 11V5C14 4.44772 13.5523 4 13 4H3C2.44772 4 2 4.44772 2 5V11C2 11.5523 2.44772 12 3 12H13C13.5523 12 14 11.5523 14 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const LLMsIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 2H4C3.44772 2 3 2.44772 3 3V13C3 13.5523 3.44772 14 4 14H12C12.5523 14 13 13.5523 13 13V6L10 2Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10 2V6H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const UniversityIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 8L8 4L13 8L8 12L3 8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 8V12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5 9.5V12C5 12.5523 6.34315 13 8 13C9.65685 13 11 12.5523 11 12V9.5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const NewsletterIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 5L8 9L13 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 11V5C13 4.44772 12.5523 4 12 4H4C3.44772 4 3 4.44772 3 5V11C3 11.5523 3.44772 12 4 12H12C12.5523 12 13 11.5523 13 11Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
  </svg>
)

const XIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 4L12 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 4L4 12"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

const columns = [
  {
    title: 'Support & Platform',
    links: [
      {
        href: '#',
        text: 'Get help on our support hub',
        Icon: SupportHubIcon,
      },
      {
        href: '#',
        text: 'Questions? Contact sales',
        Icon: ContactSalesIcon,
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
        href: '#',
        text: 'Using AI? View our llms.txt',
        Icon: LLMsIcon,
      },
      {
        href: '#',
        text: 'Learn more on Alchemy University',
        Icon: UniversityIcon,
      },
    ],
  },
  {
    title: 'Stay updated',
    links: [
      {
        href: '#',
        text: 'Subscribe to our Newsletter',
        Icon: NewsletterIcon,
      },
      {
        href: '#',
        text: 'Follow us on X',
        Icon: XIcon,
      },
      {
        href: 'https://discord.gg/9GnAcXQYZ6',
        text: 'Join our discord',
        Icon: CommunityIcon,
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
                      <Icon />
                      <span>{text}</span>
                    </FooterLink>
                  ))}
                </Column>
              ))}
            </LinksColumns>
          </TopSection>
          <BottomSection>
            {isDark ? <LogoDark /> : <LogoLight />}
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

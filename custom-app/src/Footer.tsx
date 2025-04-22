import styled, { ThemeProvider as StyledThemeProvider } from 'styled-components'
import ChangelogIcon from './assets/ChangelogIcon.tsx'
import CommunityIcon from './assets/CommunityIcon.tsx'
import StatusIcon from './assets/StatusIcon.tsx'
import LogoLight from './assets/LogoLight.tsx'
import LogoDark from './assets/LogoDark.tsx'
import SuperchargedDark from './assets/SuperchargedDark.tsx'
import SuperchargedLight from './assets/SuperchargedLight'
import EnvelopeThin from './assets/EnvelopeThin.tsx'
import React from 'react'

const FooterContainer = styled.section`
  padding-block: 44px;
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  color: ${(props) => (props.theme.mode === 'dark' ? '#e2e8f0' : '#475569')};
  font-weight: 400;
`

const CommunityLinks = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 800px;
  border-top: 1px solid
    ${(props) => (props.theme.mode === 'dark' ? '#1f2937' : '#e2e8f0')};
  border-bottom: 1px solid
    ${(props) => (props.theme.mode === 'dark' ? '#1f2937' : '#e2e8f0')};
  padding-block: 36px;
  a {
    color: ${(props) => (props.theme.mode === 'dark' ? '#CBD5E0' : '#94a3b8')};
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

const InputWrapper = styled.div`
  display: inline-block;
  position: relative;
  &:after {
    font-family: 'FontAwesome';
    font-weight: 100;
    content: url(${(props) =>
      EnvelopeThin(props.theme.mode === 'dark' ? '#e2e8f0' : '#475569')});
    position: absolute;
    left: 14px;
    top: 50%;
    transform: translateY(-34%);
    pointer-events: none;
  }
`

const EmailInput = styled.input`
  width: 280px;
  padding: 10px 10px 10px 40px;
  border-radius: 8px;
  border: 1px solid
    ${(props) => (props.theme.mode === 'dark' ? '#1f2937' : '#e2e8f0')};
  background-color: ${(props) =>
    props.theme.mode === 'dark' ? '#050d20' : '#fbfdff'};
  &::placeholder {
    color: ${(props) => (props.theme.mode === 'dark' ? '#e2e8f0' : '#475569')};
  }
`

const SubscribeButton = styled.button`
  height: 44px;
  padding: 12px;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 8px;
  border: none;
  background: linear-gradient(126deg, #05f 26.26%, #21d6ef 108.32%);
  font-weight: 600;
  line-height: 100%;
  color: #fff;
  @media screen and (max-width: 768px) {
    width: 100%;
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

  const theme = {
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
                View the <a href="https://www.alchemy.com/blog/">changelog</a>
              </span>
            </FooterLeftSideLinks>
            <FooterLeftSideLinks>
              <CommunityIcon />
              <span>
                Join our <a href="https://discord.gg/9GnAcXQYZ6/">community</a>
              </span>
            </FooterLeftSideLinks>
            <FooterLeftSideLinks>
              <StatusIcon />
              <span>
                Check our <a href="https://status.alchemy.com/">status</a>
              </span>
            </FooterLeftSideLinks>
          </FooterLeftSide>
          <FooterRightSide>
            {isDark ? <SuperchargedDark /> : <SuperchargedLight />}
            <span>Sign up for our developer newsletter.</span>
            <SubscribeForm>
              <form
                action="https://www.alchemy.com/api/v1/free?nojs=true"
                method="post"
              >
                <input
                  type="hidden"
                  name="first_url"
                  value="https://alchemysupercharged.substack.com/embed"
                />
                <input
                  type="hidden"
                  name="first_referrer"
                  value="https://www.alchemy.com/"
                />
                <input
                  type="hidden"
                  name="current_url"
                  value="https://alchemysupercharged.substack.com/embed"
                />
                <input
                  type="hidden"
                  name="current_referrer"
                  value="https://www.alchemy.com/"
                />
                <input
                  type="hidden"
                  name="first_session_url"
                  value="https://alchemysupercharged.substack.com/embed"
                />
                <input
                  type="hidden"
                  name="first_session_referrer"
                  value="https://www.alchemy.com/"
                />
                <input type="hidden" name="referral_code" />
                <input type="hidden" name="source" value="embed" />
                <input type="hidden" name="referring_pub_id" />
                <input type="hidden" name="additional_referring_pub_ids" />
                <InputWrapper>
                  <EmailInput
                    name="email"
                    type="email"
                    placeholder="Email address"
                  />
                </InputWrapper>
                <SubscribeButton type="submit">Subscribe</SubscribeButton>
              </form>
            </SubscribeForm>
          </FooterRightSide>
        </CommunityLinks>
        <FooterAlchemyCopyright>
          {isDark ? <LogoDark /> : <LogoLight />}
          <p>
            <span>2025 Alchemy Insights, Inc. · </span>
            <a href="https://www.alchemy.com/terms-conditions/terms/">
              Terms of Service
            </a>
          </p>
        </FooterAlchemyCopyright>
      </FooterContainer>
    </StyledThemeProvider>
  )
}

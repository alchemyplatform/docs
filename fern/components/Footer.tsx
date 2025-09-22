import BuiltByFern from "./BuiltWithFern";
import AlchemyLogo from "./icons/AlchemyLogo";
import AlchemyUniversityIcon from "./icons/AlchemyUniversityIcon";
import DiscordIcon from "./icons/DiscordIcon";
import EmailIcon from "./icons/EmailIcon";
import NewsletterIcon from "./icons/NewsletterIcon";
import RobotIcon from "./icons/RobotIcon";
import StatusIcon from "./icons/StatusIcon";
import SupportHubIcon from "./icons/SupportHubIcon";
import XIcon from "./icons/XIcon";

/**
 * CONFIG
 */

const columns = [
  {
    title: "Support & platform",
    links: [
      {
        href: "https://www.alchemy.com/support",
        text: "FAQs and support",
        Icon: SupportHubIcon,
      },
      {
        href: "https://status.alchemy.com",
        text: "Platform status",
        Icon: StatusIcon,
      },
      {
        href: "https://www.alchemy.com/contact-sales",
        text: "Contact sales",
        Icon: EmailIcon,
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        href: "https://www.alchemy.com/docs/llms.txt",
        text: "llms.txt for AI builders",
        Icon: RobotIcon,
      },
      {
        href: "https://www.alchemy.com/university",
        text: "Alchemy University",
        Icon: AlchemyUniversityIcon,
      },
    ],
  },
  {
    title: "Stay updated",
    links: [
      {
        href: "https://alchemysupercharged.substack.com/subscribe?just_signed_up=true&skip_redirect_check=true&utm_medium=web&utm_source=embed",
        text: "Subscribe to our newsletter",
        Icon: NewsletterIcon,
      },
      {
        href: "https://x.com/alchemy",
        text: "Follow us on X",
        Icon: XIcon,
      },
      {
        href: "https://discord.gg/alchemy-builders",
        text: "Join our discord",
        Icon: DiscordIcon,
      },
    ],
  },
];

/**
 * COMPONENT
 */

export const AlchemyFooter = () => (
  <div id="AlchemyFooter">
    <div className="FooterContainer">
      <div className="FooterWrapper">
        <div className="TopSection">
          <div className="LinksColumns">
            <div className="LogoColumn">
              <AlchemyLogo />
            </div>
            {columns.map(({ title, links }) => (
              <div className="Column" key={title}>
                <div className="ColumnTitle">{title}</div>
                {links.map(({ href, text, Icon }) => (
                  <a className="FooterLink" key={text} href={href}>
                    <Icon />
                    <span>{text}</span>
                  </a>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="BottomSection">
          <div className="CopyrightTerms">
            <div className="LeftTerms">
              <a
                className="TermsLink"
                href="https://legal.alchemy.com/#contract-kduihkaqm"
              >
                Terms & Conditions
              </a>
              <span>© {new Date().getFullYear()} Alchemy Insights, Inc</span>
            </div>
            <div className="RightTerms">
              <BuiltByFern />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

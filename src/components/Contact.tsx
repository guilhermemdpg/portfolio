import { useState } from "react";
import { ArrowUpRight, Check, Copy, Download, Github, Gitlab, Linkedin, Mail } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Contact = () => {
  const { content } = useLanguage();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(portfolioConfig.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2200);
    } catch {
      window.location.href = `mailto:${portfolioConfig.email}`;
    }
  };

  const socials = [
    { label: "GitHub", href: portfolioConfig.social.github, icon: Github },
    { label: "LinkedIn", href: portfolioConfig.social.linkedin, icon: Linkedin },
    { label: "GitLab", href: portfolioConfig.social.gitlab, icon: Gitlab },
  ];

  return (
    <section id="contact" className="section contact-section">
      <div className="page-width">
        <Reveal>
          <div className="contact-panel">
            <div className="contact-main">
              <p className="section-eyebrow">{content.contact.eyebrow}</p>
              <h2>{content.contact.title}</h2>
              <p>{content.contact.description}</p>

              <div className="contact-actions">
                <a className="button button-light" href={`mailto:${portfolioConfig.email}`}>
                  <Mail size={18} />{content.contact.emailCta}<ArrowUpRight size={18} />
                </a>
                <button type="button" className="copy-email" onClick={copyEmail}>
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                  {copied ? content.contact.copied : content.contact.copyEmail}
                </button>
              </div>

              <a className="email-display" href={`mailto:${portfolioConfig.email}`}>{portfolioConfig.email}</a>
              <div className="social-row">
                {socials.map(({ label, href, icon: Icon }) => (
                  <a href={href} target="_blank" rel="noreferrer" key={label} aria-label={label}>
                    <Icon size={17} />{label}<ArrowUpRight size={13} />
                  </a>
                ))}
              </div>
            </div>

            <aside className="resume-card">
              <span className="resume-icon"><Download /></span>
              <h3>{content.contact.resumeTitle}</h3>
              <p>{content.contact.resumeDescription}</p>
              <div className="resume-links">
                <a href={portfolioConfig.resumePT} target="_blank" rel="noreferrer">
                  <span>PT</span>{content.contact.resumePT}<ArrowUpRight size={16} />
                </a>
                <a href={portfolioConfig.resumeEN} target="_blank" rel="noreferrer">
                  <span>EN</span>{content.contact.resumeEN}<ArrowUpRight size={16} />
                </a>
              </div>
            </aside>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

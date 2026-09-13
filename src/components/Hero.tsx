import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { SystemCanvas } from "@/components/SystemCanvas";

export const Hero = () => {
  const { content, language } = useLanguage();

  return (
    <section id="top" className="hero-section">
      <div className="hero-grid page-width">
        <div className="hero-copy">
          <div className="hero-eyebrow entrance entrance-one">
            <span className="live-dot" />
            {content.hero.eyebrow}
          </div>

          <h1 className="hero-title entrance entrance-two">
            <span>{content.hero.titleLead}</span>
            <em>{content.hero.titleAccent}</em>
          </h1>

          <p className="hero-description entrance entrance-three">
            {content.hero.description}
          </p>

          <div className="hero-actions entrance entrance-four">
            <a className="button button-primary" href="#work">
              {content.hero.primaryCta}<ArrowDownRight size={19} />
            </a>
            <a
              className="button button-secondary"
              href={language === "pt" ? portfolioConfig.resumePT : portfolioConfig.resumeEN}
              target="_blank"
              rel="noreferrer"
            >
              <Download size={18} />{content.hero.secondaryCta}
            </a>
          </div>

          <div className="hero-meta entrance entrance-five">
            <span><i className="availability-dot" />{content.hero.status}</span>
            <span><MapPin size={14} />{content.hero.locationLabel}</span>
          </div>
        </div>

        <div className="hero-art entrance entrance-three">
          <SystemCanvas />
        </div>
      </div>

      <div className="signals page-width entrance entrance-five" aria-label={language === "pt" ? "Destaques profissionais" : "Professional highlights"}>
        {content.signals.map((signal) => (
          <div className="signal" key={signal.label}>
            <strong>{signal.value}</strong>
            <span>{signal.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

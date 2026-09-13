import { Quote } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const About = () => {
  const { content, language } = useLanguage();

  return (
    <section id="about" className="section about-section">
      <div className="page-width about-grid">
        <Reveal className="portrait-column">
          <div className="portrait-frame">
            <div className="portrait-grid" aria-hidden="true" />
            <img
              className="portrait-original"
              src={portfolioConfig.portraitOriginal}
              alt=""
              aria-hidden="true"
            />
            <img
              className="portrait-stylized"
              src={portfolioConfig.portrait}
              alt={portfolioConfig.name}
            />
            <span className="portrait-index">02 / ABOUT</span>
          </div>
          <div className="portrait-caption">
            <span>São Paulo, BR</span>
            <span>{language === "pt" ? "Ciência da Computação" : "Computer Science"}</span>
          </div>
        </Reveal>

        <div className="about-copy">
          <Reveal>
            <p className="section-eyebrow">{content.about.eyebrow}</p>
            <h2 className="section-title">{content.about.title}</h2>
            <p className="about-lead">{content.about.intro}</p>
          </Reveal>

          <div className="about-paragraphs">
            {content.about.paragraphs.map((paragraph, index) => (
              <Reveal key={paragraph} delay={100 + index * 80}>
                <p>{paragraph}</p>
              </Reveal>
            ))}
          </div>

          <Reveal delay={220}>
            <blockquote className="principle">
              <Quote size={22} />
              <p>{content.about.principle}</p>
            </blockquote>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

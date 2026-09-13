import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Experience = () => {
  const { content } = useLanguage();

  return (
    <section id="experience" className="section experience-section">
      <div className="page-width experience-layout">
        <Reveal className="experience-intro">
          <p className="section-eyebrow">{content.experience.eyebrow}</p>
          <h2 className="section-title">{content.experience.title}</h2>
          <p className="section-description">{content.experience.description}</p>
        </Reveal>

        <div className="timeline">
          {content.experience.items.map((item, index) => (
            <Reveal key={item.company} delay={index * 80}>
              <article className="timeline-item">
                <div className="timeline-marker">
                  <span className={index === 0 ? "is-current" : ""} />
                </div>
                <div className="timeline-period">
                  {index === 0 && <small>{content.experience.present}</small>}
                  <time>{item.period}</time>
                </div>
                <div className="timeline-content">
                  <h3>{item.company}</h3>
                  <p className="timeline-role">{item.role}</p>
                  <p>{item.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

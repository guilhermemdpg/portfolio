import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Skills = () => {
  const { content } = useLanguage();

  return (
    <section id="skills" className="section skills-section">
      <div className="page-width">
        <Reveal className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">{content.skills.eyebrow}</p>
            <h2 className="section-title">{content.skills.title}</h2>
          </div>
          <p>{content.skills.description}</p>
        </Reveal>

        <div className="capability-grid">
          {content.skills.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 70}>
              <article className="capability-card">
                <span className="capability-number">{group.number}</span>
                <h3>{group.title}</h3>
                <p>{group.description}</p>
                <div className="capability-tags">
                  {group.items.map((item) => <span key={item}>{item}</span>)}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

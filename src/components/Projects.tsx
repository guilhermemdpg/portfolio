import { ArrowUpRight, Check, LockKeyhole } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Projects = () => {
  const { content, language } = useLanguage();

  return (
    <section id="work" className="section work-section">
      <div className="page-width">
        <Reveal className="section-heading section-heading-split">
          <div>
            <p className="section-eyebrow">{content.work.eyebrow}</p>
            <h2 className="section-title">{content.work.title}</h2>
          </div>
          <p>{content.work.description}</p>
        </Reveal>

        <div className="work-list">
          {content.work.items.map((project, index) => (
            <Reveal key={project.title} delay={index * 70}>
              <article className={`work-card tone-${project.tone}`}>
                <div className="work-card-accent" aria-hidden="true">
                  <span>{project.number}</span>
                  <div className="technical-lines"><i /><i /><i /><i /></div>
                </div>

                <div className="work-card-main">
                  <div className="work-meta">
                    <span>{project.company}</span>
                    <span>{project.category}</span>
                    <time>{project.period}</time>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="work-summary">{project.summary}</p>

                  <div className="work-detail-grid">
                    <div>
                      <span className="detail-label">{language === "pt" ? "Contexto" : "Context"}</span>
                      <p>{project.challenge}</p>
                    </div>
                    <div>
                      <span className="detail-label">{language === "pt" ? "Contribuições" : "Contributions"}</span>
                      <ul>
                        {project.contribution.map((item) => (
                          <li key={item}><Check size={14} />{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="work-footer">
                    <div className="tag-list">
                      {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                    </div>
                    {"link" in project ? (
                      <a href={project.link} target="_blank" rel="noreferrer">
                        {project.linkLabel}<ArrowUpRight size={16} />
                      </a>
                    ) : (
                      <span className="confidential"><LockKeyhole size={13} />{content.work.confidential}</span>
                    )}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

import { ArrowUpRight, Award, GraduationCap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Reveal } from "@/components/Reveal";

export const Courses = () => {
  const { content } = useLanguage();

  return (
    <section id="learning" className="section learning-section">
      <div className="page-width">
        <Reveal>
          <p className="section-eyebrow">{content.learning.eyebrow}</p>
          <h2 className="section-title learning-title">{content.learning.title}</h2>
        </Reveal>

        <div className="learning-layout">
          <Reveal className="degree-card">
            <div className="degree-icon"><GraduationCap /></div>
            <span className="detail-label">{content.learning.eyebrow.startsWith("Formação") ? "Graduação / 01" : "Degree / 01"}</span>
            <h3>{content.learning.degree.title}</h3>
            <p>{content.learning.degree.institution}</p>
            <time>{content.learning.degree.period}</time>
            <div className="degree-orbit" aria-hidden="true"><i /><i /><i /></div>
          </Reveal>

          <div className="certificate-column">
            <Reveal><p className="certificate-label">{content.learning.certificatesLabel}</p></Reveal>
            <div className="certificate-list">
              {content.learning.items.map((course, index) => (
                <Reveal key={course.title} delay={index * 50}>
                  <article className="certificate-row">
                    <Award size={18} />
                    <div>
                      <h3>{course.title}</h3>
                      <p>{course.issuer} <span>•</span> {course.year}</p>
                    </div>
                    <span className="course-status">{course.status}</span>
                    {"url" in course ? (
                      <a href={course.url} target="_blank" rel="noreferrer" aria-label={`${content.learning.viewCertificate}: ${course.title}`}>
                        <ArrowUpRight size={18} />
                      </a>
                    ) : <span className="certificate-spacer" />}
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

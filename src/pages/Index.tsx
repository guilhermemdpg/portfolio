import { useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Courses } from "@/components/Courses";
import { ScrollProgress } from "@/components/ScrollProgress";
import { useLanguage } from "@/context/LanguageContext";

const Index = () => {
  const { language } = useLanguage();
  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      document.documentElement.style.setProperty("--pointer-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--pointer-y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">{language === "pt" ? "Pular para o conteúdo" : "Skip to content"}</a>
      <ScrollProgress />
      <Navigation />
      <main id="main-content">
        <Hero />
        <Projects />
        <About />
        <Experience />
        <Skills />
        <Courses />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

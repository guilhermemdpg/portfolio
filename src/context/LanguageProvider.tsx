import { useEffect, useMemo, useState } from "react";
import { Language, portfolioConfig } from "@/config/portfolio";
import { LanguageContext } from "@/context/LanguageContext";

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const savedLanguage = window.localStorage.getItem("portfolio-language");
    return savedLanguage === "en" ? "en" : "pt";
  });

  useEffect(() => {
    const metadata = portfolioConfig.locales[language].meta;
    document.documentElement.lang = language === "pt" ? "pt-BR" : "en";
    document.title = metadata.title;
    document
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", metadata.description);
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => {
        const scrollPosition = window.scrollY;
        setLanguage((current) => (current === "pt" ? "en" : "pt"));
        window.requestAnimationFrame(() => window.scrollTo({ top: scrollPosition }));
      },
      content: portfolioConfig.locales[language],
    }),
    [language],
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

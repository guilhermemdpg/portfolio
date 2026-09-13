import { createContext, useContext } from "react";
import { Language, portfolioConfig } from "@/config/portfolio";

export type LanguageContextValue = {
  language: Language;
  setLanguage: (language: Language) => void;
  toggleLanguage: () => void;
  content: (typeof portfolioConfig.locales)[Language];
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("useLanguage must be used inside LanguageProvider");
  }

  return context;
};

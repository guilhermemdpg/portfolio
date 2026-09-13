import { ArrowUp } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export const Footer = () => {
  const { content } = useLanguage();

  return (
    <footer className="footer">
      <div className="page-width footer-inner">
        <p>© {new Date().getFullYear()} {portfolioConfig.shortName}</p>
        <p>{content.footer.line}</p>
        <a href="#top">{content.footer.backToTop}<ArrowUp size={15} /></a>
      </div>
    </footer>
  );
};

import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";
import { useLanguage } from "@/context/LanguageContext";

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { content, language, toggleLanguage } = useLanguage();
  const navItems = [
    { label: content.navigation.work, href: "#work" },
    { label: content.navigation.about, href: "#about" },
    { label: content.navigation.experience, href: "#experience" },
    { label: content.navigation.stack, href: "#skills" },
    { label: content.navigation.learning, href: "#learning" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEscape);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header className={`navigation ${isScrolled ? "is-scrolled" : ""}`}>
      <div className="nav-inner page-width">
        <a href="#top" className="brand" aria-label={`${portfolioConfig.shortName} — ${language === "pt" ? "início" : "home"}`}>
          <span className="brand-mark">{portfolioConfig.initials}</span>
          <span className="brand-name">{portfolioConfig.shortName}</span>
        </a>

        <nav className="desktop-nav" aria-label={language === "pt" ? "Navegação principal" : "Main navigation"}>
          {navItems.map((item) => (
            <a href={item.href} key={item.href}>{item.label}</a>
          ))}
        </nav>

        <div className="nav-actions">
          <button
            type="button"
            className="language-switch"
            onClick={toggleLanguage}
            aria-label={content.navigation.language}
          >
            <span className={language === "pt" ? "active" : ""}>PT</span>
            <i />
            <span className={language === "en" ? "active" : ""}>EN</span>
          </button>
          <a href="#contact" className="nav-contact">
            {content.navigation.contact}<ArrowUpRight size={15} />
          </a>
          <button
            type="button"
            className="menu-button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? content.navigation.close : content.navigation.menu}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      <nav id="mobile-navigation" className={`mobile-nav ${isOpen ? "is-open" : ""}`} aria-label={language === "pt" ? "Navegação móvel" : "Mobile navigation"}>
        <div className="page-width">
          {navItems.map((item, index) => (
            <a href={item.href} key={item.href} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setIsOpen(false)}>
            <span>06</span>{content.navigation.contact}
          </a>
        </div>
      </nav>
    </header>
  );
};

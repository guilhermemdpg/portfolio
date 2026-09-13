import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <main className="not-found">
      <span>404 / LOST SIGNAL</span>
      <h1>{language === "pt" ? "Essa rota não existe." : "This route does not exist."}</h1>
      <p>{language === "pt" ? "O sistema está operacional — o endereço é que tomou outro caminho." : "The system is operational — the address simply took another path."}</p>
      <a className="button button-primary" href="/"><ArrowLeft size={18} />{language === "pt" ? "Voltar ao início" : "Back home"}</a>
    </main>
  );
};

export default NotFound;

import { portfolioConfig } from "@/config/portfolio";

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t py-8">
      <div className="container mx-auto px-4">
        <div className="text-center text-muted-foreground">
          <p>© {currentYear} {portfolioConfig.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

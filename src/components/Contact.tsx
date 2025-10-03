import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Github, Linkedin, Gitlab } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const Contact = () => {
  const socialLinks = [
    { icon: Github, url: portfolioConfig.contact.social.github, label: "GitHub" },
    { icon: Linkedin, url: portfolioConfig.contact.social.linkedin, label: "LinkedIn" },
    { icon: Gitlab, url: portfolioConfig.contact.social.gitlab, label: "Gitlab" }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            {portfolioConfig.contact.title}
          </h2>
          <p className="text-muted-foreground mb-12">
            {portfolioConfig.contact.description}
          </p>
          
          <Card className="p-8 space-y-6" style={{ background: "var(--gradient-card)" }}>
            <Button asChild size="lg" className="w-full sm:w-auto">
              <a href={`mailto:${portfolioConfig.contact.email}`}>
                <Mail className="mr-2" />
                {portfolioConfig.contact.email}
              </a>
            </Button>
            
            <div className="flex justify-center gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  asChild
                  variant="outline"
                  size="icon"
                  className="hover:scale-110 transition-transform"
                >
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                </Button>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { portfolioConfig } from "@/config/portfolio";

export const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      
      {/* Animated Circles */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse delay-700" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4 animate-fade-in">
            <p className="text-muted-foreground text-lg">
              {portfolioConfig.hero.greeting}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                {portfolioConfig.name}
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-muted-foreground">
              {portfolioConfig.title}
            </p>
          </div>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-delay">
            {portfolioConfig.hero.description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-2">
            <Button asChild size="lg" className="group">
              <a href={portfolioConfig.hero.ctaLink}>
                {portfolioConfig.hero.ctaText}
                <ArrowDown className="ml-2 group-hover:translate-y-1 transition-transform" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={portfolioConfig.hero.secondaryCtaLink}>
                {portfolioConfig.hero.secondaryCtaText}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ArrowDown className="text-muted-foreground" />
      </a>
    </section>
  );
};

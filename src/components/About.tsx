import { portfolioConfig } from "@/config/portfolio";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {portfolioConfig.about.title}
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              {portfolioConfig.about.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg">
                <img
                  src={portfolioConfig.about.image}
                  alt={portfolioConfig.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl -z-10 blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

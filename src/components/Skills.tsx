import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { portfolioConfig } from "@/config/portfolio";

export const Skills = () => {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">
            {portfolioConfig.skills.title}
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            {portfolioConfig.skills.categories.map((category, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50"
                style={{
                  background: "var(--gradient-card)"
                }}
              >
                <h3 className="text-xl font-semibold mb-4 text-primary">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="px-3 py-1"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

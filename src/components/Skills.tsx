import { Code2, Palette, Database, Globe, Users, Zap, BookOpen, MessageSquare } from "lucide-react";

const Skills = () => {
  const technicalSkills = [
    { name: "React", icon: Code2, color: "text-accent" },
    { name: "JavaScript", icon: Code2, color: "text-primary" },
    { name: "HTML/CSS", icon: Palette, color: "text-accent" },
    { name: "Sass", icon: Palette, color: "text-primary" },
    { name: "Responsive Design", icon: Globe, color: "text-accent" },
    { name: "SEO", icon: Globe, color: "text-primary" },
    { name: "Git/GitHub", icon: Database, color: "text-accent" },
    { name: "API REST", icon: Database, color: "text-primary" },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare },
    { name: "Gestion de projet", icon: Users },
    { name: "Autonomie", icon: Zap },
    { name: "Apprentissage rapide", icon: BookOpen },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
          Compétences
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Compétences techniques */}
          <div className="animate-slide-up">
            <h3 className="text-2xl font-display font-semibold mb-8 text-primary">
              Compétences techniques
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {technicalSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-3 p-4 bg-background rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <skill.icon className={`h-6 w-6 ${skill.color} group-hover:scale-110 transition-transform`} />
                  <span className="font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Soft skills */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-2xl font-display font-semibold mb-8 text-primary">
              Soft skills
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-4 p-6 bg-background rounded-lg shadow-card hover:shadow-elegant transition-all duration-300 group"
                  style={{ animationDelay: `${(index + 8) * 50}ms` }}
                >
                  <div className="p-3 bg-accent/10 rounded-full group-hover:bg-accent/20 transition-colors">
                    <skill.icon className="h-6 w-6 text-accent" />
                  </div>
                  <span className="text-lg font-medium text-foreground">{skill.name}</span>
                </div>
              ))}
            </div>

            {/* Note sur l'anglais */}
            <div className="mt-6 p-4 bg-accent/10 rounded-lg">
              <p className="text-foreground">
                <span className="font-semibold text-accent">Anglais :</span> Niveau professionnel
              </p>
            </div>
          </div>
        </div>

        {/* Curiosité et veille technologique */}
        <div className="mt-12 text-center p-8 bg-background rounded-lg shadow-card animate-fade-in">
          <p className="text-lg text-foreground">
            Toujours curieuse et en veille constante sur les nouvelles technologies et 
            les meilleures pratiques du développement web moderne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;

import { GraduationCap, Briefcase } from "lucide-react";

const Parcours = () => {
  const education = [
    {
      year: "2024",
      title: "Formation Développeur Web",
      institution: "OpenClassrooms",
      description: "Spécialisation en développement front-end avec React, JavaScript, et méthodologies agiles.",
    },
    {
      year: "2023",
      title: "Formation Intégrateur Web",
      institution: "OpenClassrooms",
      description: "Maîtrise de HTML5, CSS3, Sass, et des principes de responsive design.",
    },
  ];

  const experience = [
    {
      year: "2024",
      title: "Projets Portfolio",
      company: "Freelance",
      description: "Développement de plusieurs applications web avec React, gestion de projets en méthode agile.",
    },
    {
      year: "2023-2024",
      title: "Développeuse Web Junior",
      company: "Projets d'étude",
      description: "Création de sites web responsive, optimisation SEO, et débogage d'applications React.",
    },
  ];

  return (
    <section id="parcours" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
          Parcours
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Formation */}
          <div className="animate-slide-up">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-full">
                <GraduationCap className="h-8 w-8 text-accent" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary">
                Formation
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0 group"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent group-hover:scale-125 transition-transform" />
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-accent font-medium mb-3">{item.institution}</p>
                    <p className="text-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Expérience */}
          <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-full">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-display font-semibold text-primary">
                Expérience
              </h3>
            </div>

            <div className="space-y-6">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 group"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary group-hover:scale-125 transition-transform" />
                  <div className="bg-card p-6 rounded-lg shadow-card hover:shadow-elegant transition-all duration-300">
                    <span className="inline-block px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-semibold mb-3">
                      {item.year}
                    </span>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {item.title}
                    </h4>
                    <p className="text-accent font-medium mb-3">{item.company}</p>
                    <p className="text-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CV Download */}
        <div className="mt-12 text-center animate-fade-in">
          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold shadow-card hover:shadow-elegant transition-all duration-300"
          >
            <GraduationCap className="h-5 w-5" />
            Télécharger mon CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default Parcours;

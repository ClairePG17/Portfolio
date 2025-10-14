import { GraduationCap, Briefcase } from "lucide-react";

const Parcours = () => {
  const education = [
    {
      year: "2025",
      title: "Intégrateur Web (RNCP 38145)",
      institution: "OpenClassrooms, Toulouse",
      description:
        "Conception d'applications web responsives avec React et Redux. Gestion des appels API, dynamisation des pages en HTML, CSS et JavaScript, optimisation des performances et du référencement SEO. Acquisition de compétences en gestion de projet web et rédaction des spécifications techniques.",
    },
    {
      year: "2021-2023",
      title: "Master Innovative and Sustainable Energy Engineering",
      institution: "KTH, Stockholm",
      description:
        "Expertise en énergies conventionnelles et renouvelables, modélisation, gestion de projet, maîtrise des SIG (QGIS, ArcGIS) et des bases de données SQL.",
    },
  ];
  
  const experience = [
    {
      year: "2024-2025",
      title: "Chargée d'études Éolien",
      company: "Volkswind, Montpellier",
      description:
        "Analyse et traitement de données géographiques (QGIS, SQL), rédaction de documents techniques, collaboration avec partenaires et collectivités.",
    },
    {
      year: "2023",
      title: "Chargée de développement territorial éolien (Stage)",
      company: "Valeco, Montpellier",
      description:
        "Utilisation de SIG pour l'identification des zones favorables, analyse de données, présentation de résultats et gestion de projet.",
    },
    {
      year: "2022",
      title: "Part time HSE student",
      company: "Nordex, Stockholm",
      description:
        "Gestion de données, reporting Excel, organisation de réunions, développement de compétences en gestion de projet et adaptabilité.",
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
                    <p className="text-mutted-foreground font-medium mb-3">{item.institution}</p>
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
                    <p className="text-mutted-foreground font-medium mb-3">{item.company}</p>
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
            href="/CV_2025_Claire_PRIN-GUENON_dev_front.pdf"
            target="_blank"
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

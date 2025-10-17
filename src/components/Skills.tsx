import {
  Code2,
  Braces,
  Palette,
  Feather,
  Cloud,
  GitMerge,
  Github,
  Figma,
  CalendarCheck,
  MessageSquare,
  UserCheck,
  Zap,
  Users,
  Lightbulb,
  FolderCheck,
  Search,
  Smartphone
} from "lucide-react";


const technicalSkills = [
  { name: "React", icon: Code2 },             // remplace FaReact
  { name: "JavaScript", icon: Braces },       // remplace FaJs
  { name: "HTML5", icon: Code2 },              // remplace FaHtml5
  { name: "CSS3", icon: Palette },            // remplace FaCss3Alt
  { name: "Sass", icon: Feather },            // remplace FaSass
  { name: "TailwindCSS", icon: Palette },     // équivalent moderne
  { name: "Redux", icon: Cloud },             // Redux = state/cloud
  { name: "API REST", icon: Cloud },          // API = cloud/lien/network
  { name: "Responsive Design", icon: Smartphone },
  { name: "SEO", icon: Search },
  { name: "Git", icon: GitMerge },
  { name: "GitHub", icon: Github },
  { name: "Figma", icon: Figma },
  { name: "Jira", icon: CalendarCheck }
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Gestion de projet", icon: CalendarCheck },
  { name: "Autonomie et Adaptabilité", icon: UserCheck },
  { name: "Apprentissage rapide", icon: Zap },
  { name: "Travail en équipe", icon: Users },
  { name: "Résolution de problèmes", icon: Lightbulb },
  { name: "Organisation et Rigueur", icon: FolderCheck },
  { name: "Curiosité et Esprit analytique", icon: Search }
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-card">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
        Mes Compétences
      </h2>
      <div className="grid md:grid-cols-2 gap-12">
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
                <skill.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="animate-slide-up" style={{ animationDelay: "200ms" }}>
          <h3 className="text-2xl font-display font-semibold mb-8 text-primary">Soft skills</h3>
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
          <div className="mt-6 p-4 bg-primary rounded-lg">
            <p className="text-primary-foreground">
              <span className="font-semibold text-primary-foreground">Anglais :</span> Niveau professionnel
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center p-8 bg-background rounded-lg shadow-card animate-fade-in">
        <p className="text-lg text-foreground">
          Passionnée par l’innovation numérique, je me tiens en permanence informée des dernières technologies 
          et des meilleures pratiques en développement web afin de garantir la qualité, 
          la performance, la sécurité et l’accessibilité des projets réalisés.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;

import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaGithub, FaJira, FaFigma } from "react-icons/fa";
import { SiRedux, SiTailwindcss } from "react-icons/si";
import { VscJson } from "react-icons/vsc";
import { BsPhone } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { MessageSquare, CalendarCheck, UserCheck, Zap, Users, Lightbulb, FolderCheck, Search} from "lucide-react";

const technicalSkills = [
  { name: "React", icon: FaReact },
  { name: "JavaScript", icon: FaJs },
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "Sass", icon: FaSass },
  { name: "TailwindCSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "API REST", icon: VscJson },
  { name: "Responsive Design", icon: BsPhone },
  { name: "SEO", icon: FaSearch },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Figma", icon: FaFigma },
  { name: "Jira", icon: FaJira },
];

const softSkills = [
  { name: "Communication", icon: MessageSquare },
  { name: "Gestion de projet", icon: CalendarCheck },
  { name: "Autonomie et Adaptabilité", icon: UserCheck },
  { name: "Apprentissage rapide", icon: Zap },
  { name: "Travail en équipe", icon: Users },
  { name: "Résolution de problèmes", icon: Lightbulb },
  { name: "Organisation et Rigueur", icon: FolderCheck },
  { name: "Curiosité et Esprit analytique", icon: Search },,
];

const Skills = () => (
  <section id="skills" className="py-20 px-4 bg-card">
    <div className="container mx-auto max-w-6xl">
      <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
        Compétences
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
          <div className="mt-6 p-4 bg-primary rounded-lg">
            <p className="text-primary-foreground">
              <span className="font-semibold text-primary-foreground">Anglais :</span> Niveau professionnel
            </p>
          </div>
        </div>
      </div>
      <div className="mt-12 text-center p-8 bg-background rounded-lg shadow-card animate-fade-in">
        <p className="text-lg text-foreground">
        Passionnée par l’innovation numérique, je me tiens continuellement informée des dernières technologies 
        et des meilleures pratiques en développement web afin de garantir la qualité, 
        la performance et l’accessibilité des projets réalisés.
        </p>
      </div>
    </div>
  </section>
);

export default Skills;

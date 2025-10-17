import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import ProjectModal from "./ProjectModal";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

// Interfaces Typescript
interface ProjectImage {
  src: string;
  alt: string;
}

interface Project {
  id: number;
  title: string;
  date: string;
  category: string[];
  description: string;
  technologies: string[];
  github: string;
  images: ProjectImage[];
  featured: boolean;
}

interface ProjectsProps {
  projects: Project[];
}

// Hook personnalisé interne pour media query
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(() => window.matchMedia(query).matches);
  useEffect(() => {
    const media = window.matchMedia(query);
    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [query]);
  return matches;
}

// Composant Project
const Projects = ({ projects }: ProjectsProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = [
    "Tous",
    "React & Redux",
    "HTML",
    "CSS & Sass",
    "Tailwind CSS",
    "JS",
    "Responsive",
    "Animations",
    "SEO",
  ];

  const filteredProjects =
    selectedFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter));

  const showDropdown = useMediaQuery("(max-width: 1023px)");

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary animate-fade-in">
          Mes Projets
        </h2>
        {/* Filtres */}
        <div className="mb-12 animate-slide-up">
          {showDropdown ? (
            <Select value={selectedFilter} onValueChange={setSelectedFilter}>
              <SelectTrigger className="w-full max-w-xs mx-auto rounded-full bg-card text-card-foreground border border-border shadow-card focus:ring-2 focus:ring-accent transition-all">
                <SelectValue placeholder="Catégorie" />
              </SelectTrigger>
              <SelectContent className="bg-card rounded-lg shadow-card">
                {filters.map((filter) => (
                  <SelectItem
                    key={filter}
                    value={filter}
                    className="px-4 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground font-medium flex items-center"
                  >
                    <span className="ml-4">{filter}</span>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          ) : (
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                    selectedFilter === filter
                      ? "bg-accent text-accent-foreground shadow-card"
                      : "bg-card text-card-foreground hover:bg-accent/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Grille de projets */}
        <div
          key={selectedFilter}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden shadow-xl bg-card hover:shadow-elegant transition-all duration-300 animate-scale-fade-in"
            >
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  loading="lazy"
                  src={project.images[0].src}
                  alt={project.images[0].alt}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-6">
                <h3 className="text-2xl font-display font-bold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/90">{project.date}</p>
                <div className="flex flex-wrap gap-2 mt-4 justify-center">
                  {project.category.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-accent-foreground/20 text-accent-foreground rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Modale */}
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </div>
    </section>
  );
};

export default Projects;

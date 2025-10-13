import { useState } from "react";
import { Card } from "./ui/card";
import ProjectModal from "./ProjectModal";

interface Project {
  id: number;
  title: string;
  date: string;
  category: string[];
  description: string;
  technologies: string[];
  github: string;
  images: string[];
}

interface ProjectsProps {
  projects: Project[];
}

const Projects = ({ projects }: ProjectsProps) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("Tous");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters = ["Tous", "React", "HTML", "CSS", "Sass", "SEO", "JS"];

  const filteredProjects =
    selectedFilter === "Tous"
      ? projects
      : projects.filter((p) => p.category.includes(selectedFilter));

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-12 text-primary animate-fade-in">
          Mes Projets
        </h2>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-slide-up">
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

        {/* Grille de projets */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer overflow-hidden bg-card hover:shadow-elegant transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Container with fixed aspect ratio */}
              <div className="relative w-full aspect-video overflow-hidden">
                <img
                  src={project.images[0]}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
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

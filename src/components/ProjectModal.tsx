import { useState } from "react";
import { X, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "./ui/dialog";

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

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-card">
        <DialogHeader>
          <DialogTitle className="text-3xl font-display font-bold text-primary">
            {project.title}
          </DialogTitle>
        </DialogHeader>

        {/* Carrousel d'images/vidéos */}
        {project.images.length > 0 && (
          <div className="flex justify-center">
            <div className="relative rounded-lg overflow-hidden bg-muted group w-full md:w-7/8">
              <div className="relative w-full aspect-video">
                {project.images.map((media, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      index === currentImage ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    {media.endsWith(".mp4") || media.endsWith(".webm") ? (
                      <video
                        src={media}
                        className="w-full h-full object-cover"
                        controls
                        loop
                        muted
                        preload="none" 
                      />
                    ) : (
                      <img
                        src={media}
                        loading="lazy"
                        alt={`${project.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              {project.images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity shadow-card"
                    aria-label="Image précédente"
                  >
                    <ChevronLeft className="h-6 w-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-background/90 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity shadow-card"
                    aria-label="Image suivante"
                  >
                    <ChevronRight className="h-6 w-6" />
                  </Button>
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-background/80 px-3 py-2 rounded-full backdrop-blur-sm">
                    {project.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImage(index)}
                        className={`transition-all duration-300 rounded-full ${
                          index === currentImage
                            ? "bg-accent w-8 h-3"
                            : "bg-muted hover:bg-accent/50 w-3 h-3"
                        }`}
                        aria-label={`Aller à l'image ${index + 1}`}
                      />
                    ))}
                  </div>
                  <div className="absolute top-4 right-4 bg-background/90 px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm">
                    {currentImage + 1} / {project.images.length}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Contenu */}
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Description</h3>
            <p className="text-foreground leading-relaxed">{project.description}</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3 text-primary">Technologies utilisées</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-accent/20 text-secondary-foreground rounded-full font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.github && (
            <div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-secondary-foreground hover:text-accent/80 transition-colors font-medium"
              >
                <ExternalLink className="h-5 w-5" />
                Voir sur GitHub
              </a>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;

import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative bg-popover from-background via-card to-muted"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          <p className="text-muted-foreground tracking-wider uppercase text-sm">Bienvenue sur mon portfolio,</p>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-primary leading-tight">
            Je suis Développeuse Front-end React
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Passionnée par <span className="text-primary font-semibold">React</span> et le développement front-end moderne.
            Curieuse et créative je conçois des interfaces web modernes, performantes et accessibles. 
            Basée à Toulouse, ouverte au télétravail, je cherche un nouveau défi dans le développement web.
          </p>
          <div className="flex gap-4 justify-center pt-4">
            <Button
              size="lg"
              onClick={scrollToProjects}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Voir mes projets
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => window.open("/cv.pdf", "_blank")}
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Télécharger mon CV
            </Button>
          </div>
        </div>

        <button
          onClick={scrollToProjects}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown className="text-primary" size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;

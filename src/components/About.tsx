const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
          À propos de moi
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-slide-up">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-elegant">
              <img
                src="/assets/images/photo_Claire_Prin-Guenon.png"
                alt="Développeuse web"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-display font-semibold text-primary">
            Bienvenue sur mon portfolio !
            </h3>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
            <p>
                  Après une carrière dans l’ingénierie durable, 
                  j’ai choisi de me reconvertir dans le <strong className="text-foreground"> développement web </strong>
                  via la formation Intégrateur Web d’OpenClassrooms.
                </p>
                <p>
                  Aujourd’hui, je maîtrise <strong className="text-foreground"> HTML5</strong>, 
                  <strong className="text-foreground"> CSS3</strong>, 
                  <strong className="text-foreground"> JavaScript moderne</strong>, 
                  <strong className="text-foreground"> React/Redux</strong> et 
                  <strong className="text-foreground"> l’optimisation SEO</strong>. 
                </p>
                <p>
                  Mon parcours scientifique me rend rigoureuse et proactive, avec une vraie envie de collaborer 
                  et d’apprendre dans un environnement <strong className="text-foreground"> agile</strong> et avec une équipe tech ambitieuse.
                  Ma curiosité naturelle me pousse à explorer continuellement les dernières 
                  technologies du web.
                </p>
              </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React & Redux", "Gestion de projet agile", "SEO", "TailwindCss"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/20 text-primary rounded-full font-medium"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

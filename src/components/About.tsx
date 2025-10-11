const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-card">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-16 text-primary animate-fade-in">
          À propos
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="animate-slide-up">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-lg overflow-hidden shadow-elegant">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=600&fit=crop"
                alt="Développeuse web"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Texte */}
          <div className="space-y-6 animate-fade-in">
            <h3 className="text-3xl font-display font-semibold text-primary">
              Développeuse passionnée
            </h3>
            <div className="space-y-4 text-lg text-foreground leading-relaxed">
              <p>
                Bienvenue sur mon portfolio ! Je suis une développeuse web passionnée, 
                spécialisée dans la création d'expériences web modernes et performantes.
              </p>
              <p>
                Ma stack favorite ? <span className="font-semibold text-accent">React</span> pour 
                créer des interfaces dynamiques et intuitives. J'aime particulièrement travailler 
                avec des méthodologies agiles qui favorisent la collaboration et l'itération rapide.
              </p>
              <p>
                Basée à <span className="font-semibold">Toulouse</span> et disponible en 
                <span className="font-semibold"> full remote</span>, je suis toujours à la 
                recherche de nouveaux défis techniques stimulants.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              {["React", "Sass", "JavaScript", "Gestion de projet agile"].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-accent/20 text-accent rounded-full font-medium"
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

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Accueil" },
    { id: "about", label: "À propos" },
    { id: "projects", label: "Projets" },
    { id: "skills", label: "Compétences" },
    { id: "parcours", label: "Parcours" },
    { id: "contact", label: "Me contacter" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-muted ${
        isScrolled ? "bg-card/95 backdrop-blur-sm shadow-card" : ""
      }`}
    >
      <nav className="container mx-auto px-4 py-4" aria-label="Navigation principale">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-display font-bold text-primary hover:text-accent transition-colors"
            aria-label="Accueil"
          >
            Portfolio
          </button>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems
              .filter((item) => item.id !== "contact")
              .map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-foreground hover:text-accent transition-colors font-medium"
                    aria-label={item.label}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            <li>
              <Button
                variant="default"
                size="lg"
                className="px-8 bg-primary hover:bg-primary/90 text-primary-foreground"
                onClick={() => scrollToSection("contact")}
              >
                Me contacter
              </Button>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 animate-fade-in-scale">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-foreground hover:text-accent transition-colors font-medium"
                  aria-label={item.label}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;

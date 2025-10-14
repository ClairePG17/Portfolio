import { useEffect, useState, lazy, Suspense } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FloatingContactButton from "@/components/FloatingContactButton";

interface Project {
  id: number;
  title: string;
  date: string;
  category: string[];
  description: string;
  technologies: string[];
  github: string;
  images: string[];
  featured?: boolean;
}

// Lazy load des composants secondaires
const About = lazy(() => import("@/components/About"));
const Projects = lazy(() => import("@/components/Projects"));
const Skills = lazy(() => import("@/components/Skills"));
const Parcours = lazy(() => import("@/components/Parcours"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Charger les projets depuis le fichier JSON
    fetch("/data/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Erreur lors du chargement des projets:", error));
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Suspense fallback={<div>Chargement des sections...</div>}>
          <About />
          <Projects projects={projects} />
          <Skills />
          <Parcours />
          <Contact />
          <Footer />
        </Suspense>
      </main>
      <FloatingContactButton />
    </div>
  );
};

export default Index;

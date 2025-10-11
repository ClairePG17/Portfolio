import { useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Parcours from "@/components/Parcours";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
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
        <Hero projects={projects} />
        <About />
        <Projects projects={projects} />
        <Skills />
        <Parcours />
        <Contact />
      </main>
      <Footer />
      <FloatingContactButton />
    </div>
  );
};

export default Index;

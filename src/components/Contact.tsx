import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation simple
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs.",
        variant: "destructive",
      });
      return;
    }

    // Simulation d'envoi
    toast({
      title: "Message envoyé !",
      description: "Merci pour votre message. Je vous répondrai bientôt.",
    });

    // Réinitialiser le formulaire
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-center mb-4 text-primary animate-fade-in">
          Me contacter
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Une question ? Un projet ? N'hésitez pas à me contacter !
        </p>

        <form onSubmit={handleSubmit} className="space-y-6 animate-slide-up">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground">
              Nom
            </label>
            <Input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Votre nom"
              className="bg-card border-border focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="votre.email@example.com"
              className="bg-card border-border focus:border-accent"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground">
              Message
            </label>
            <Textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Votre message..."
              rows={6}
              className="bg-card border-border focus:border-accent resize-none"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold py-6 text-lg group"
          >
            <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

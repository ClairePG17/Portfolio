import { MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

const FloatingContactButton = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      onClick={scrollToContact}
      className="fixed bottom-8 right-8 z-40 rounded-full w-14 h-14 shadow-elegant bg-accent hover:bg-accent/90 text-accent-foreground p-0 group"
      aria-label="Me contacter"
    >
      <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform" />
    </Button>
  );
};

export default FloatingContactButton;

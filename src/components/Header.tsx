import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="font-serif text-2xl lg:text-3xl font-light tracking-wide">
            Галерист
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("artists")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              Художники
            </button>
            <button
              onClick={() => scrollToSection("works")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              Работы
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              О нас
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm tracking-wide hover:text-muted-foreground transition-colors"
            >
              Контакты
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <button
                onClick={() => scrollToSection("artists")}
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors text-left"
              >
                Художники
              </button>
              <button
                onClick={() => scrollToSection("works")}
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors text-left"
              >
                Работы
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors text-left"
              >
                О нас
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm tracking-wide hover:text-muted-foreground transition-colors text-left"
              >
                Контакты
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

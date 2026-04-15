import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-xl border-b border-border/50 shadow-sm"
            : "py-5 bg-transparent"
        )}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <a
            className="text-xl font-bold flex items-center shrink-0"
            href="#hero"
          >
            <span className="text-glow text-foreground">Guillermo</span>
            <span className="text-primary">.</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-3 py-1.5 text-sm font-medium text-foreground/70 hover:text-primary rounded-md hover:bg-primary/5 transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button — always renders Menu icon; X lives inside the overlay */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 text-foreground rounded-md hover:bg-secondary transition-colors"
            aria-label="Open Menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile overlay — sibling of <nav> so z-index compares correctly */}
      <div
        className={cn(
          "fixed inset-0 bg-background/97 backdrop-blur-lg z-40 flex flex-col items-center justify-center md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Close button inside the overlay */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 right-5 p-2.5 text-foreground border border-border rounded-lg hover:bg-secondary hover:border-primary/40 transition-all duration-200"
          aria-label="Close Menu"
        >
          <X size={20} />
        </button>

        <div className="flex flex-col items-center gap-7 text-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-foreground/70 hover:text-primary transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

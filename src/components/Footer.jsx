import { ArrowUp, Github, Linkedin, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card border-t border-border">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <a href="#hero" className="text-lg font-bold">
          <span className="text-foreground">Guillermo</span>
          <span className="text-primary">.</span>
        </a>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground text-center order-last sm:order-none">
          &copy; {new Date().getFullYear()} Guillermo Martinez. All rights
          reserved.
        </p>

        {/* Right side: social + back to top */}
        <div className="flex items-center gap-3">
          <a
            href="https://github.com/guillermomtz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-guillermo-martinez-887400153/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.instagram.com/guillermocodes_/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-1.5 text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram size={16} />
          </a>
          <div className="w-px h-4 bg-border mx-1" />
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-2 rounded-full border border-border bg-background hover:bg-primary/10 hover:border-primary/50 text-muted-foreground hover:text-primary transition-all duration-200"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

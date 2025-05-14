import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card relative border-t border-border mt-12 pt-8 flex items-center justify-between">
      <div />
      <p className="text-sm text-muted-foreground text-center flex-1">
        {" "}
        &copy; {new Date().getFullYear()} Guillermo Martinez. All rights
        reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-background/75 hover:bg-primary/20 text-primary transition-colors border"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
};

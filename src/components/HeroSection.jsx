import { ArrowDown, Download, Github, Linkedin, MoveRight } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/5 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/5 w-96 h-96 bg-primary/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, hsl(var(--primary)) 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      <div className="container max-w-3xl mx-auto text-center relative z-10">

        {/* Name & Headline */}
        <div className="space-y-3 mb-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1]">
            <span className="opacity-0 animate-fade-in block text-foreground">
              Hi, I&apos;m
            </span>
            <span className="opacity-0 animate-fade-in-delay-1 block bg-gradient-to-r from-purple-400 via-violet-400 to-indigo-400 bg-clip-text text-transparent pb-2">
              Guillermo Martinez
            </span>
          </h1>
          <p className="text-lg md:text-xl font-semibold text-primary/80 opacity-0 animate-fade-in-delay-2 tracking-wide">
            Software Engineer &amp; ML Enthusiast
          </p>
        </div>

        {/* Bio */}
        <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed mb-10">
          Engineer bridging hands-on software development and machine learning.
          Pursuing an M.S. in Computer Science at Georgia Tech—building smart,
          practical solutions to real-world problems.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4 mb-10">
          <a href="#projects" className="cosmic-button flex items-center gap-2">
            View My Work
            <MoveRight size={16} />
          </a>
          <a
            href="/JGM-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2.5 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 flex items-center gap-2 font-medium"
          >
            <Download size={16} />
            Resume
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 opacity-0 animate-fade-in-delay-4">
          <div className="h-px w-10 bg-border" />
          <a
            href="https://github.com/guillermomtz1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Github size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/jose-guillermo-martinez-887400153/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2.5 rounded-full border border-border hover:border-primary/50 hover:bg-primary/10 text-muted-foreground hover:text-primary transition-all duration-300"
          >
            <Linkedin size={18} />
          </a>
          <div className="h-px w-10 bg-border" />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 animate-bounce">
        <span className="text-xs text-muted-foreground tracking-widest uppercase">
          Scroll
        </span>
        <ArrowDown className="h-4 w-4 text-primary" />
      </div>
    </section>
  );
};

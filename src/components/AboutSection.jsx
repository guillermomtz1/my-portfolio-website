import { Code, Ghost, Lightbulb } from "lucide-react";

const traits = [
  {
    icon: Code,
    title: "Software Development",
    description:
      "Building responsive web applications and REST APIs with modern frameworks and best practices.",
  },
  {
    icon: Lightbulb,
    title: "Self-Motivated & Proactive",
    description:
      "A self-starter who enjoys building side projects and learning new tools independently.",
  },
  {
    icon: Ghost,
    title: "Curiosity & Drive to Learn",
    description:
      "Passionate about continuous learning—currently exploring ML systems and full-stack engineering.",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {/* Subtle background blob */}
      <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-primary">Me</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: text content */}
          <div className="space-y-5 text-left">
            <h3 className="text-2xl font-semibold leading-snug">
              Passionate Software Engineer
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              I&apos;m an aspiring software engineer with a strong interest in
              machine learning and backend development. I enjoy creating
              solutions to real-world problems and continuously expand my skills
              through hands-on projects.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Recently I&apos;ve been building full-stack web applications with
              React and Node.js, while exploring ML concepts through Georgia
              Tech&apos;s OMSCS program. My background spans both structural engineering and
              computer science, giving me a unique analytical lens.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <a href="#contact" className="cosmic-button text-center">
                Get In Touch
              </a>
              <a
                href="/JGM-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary hover:bg-primary/5 transition-all duration-300 font-medium text-center"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right: trait cards */}
          <div className="flex flex-col gap-4">
            {traits.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="group flex items-start gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="p-2.5 rounded-lg bg-primary/10 shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-base mb-1">{title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

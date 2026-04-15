import { ArrowRight, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    id: 1,
    title: "Braggy.dev",
    description:
      "Full-stack web app to track and showcase career achievements. Built with the MERN stack and Clerk for authentication.",
    image: "/projects/braggy.png",
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Clerk"],
    demoURL: "https://braggy.dev/",
  },
  {
    id: 2,
    title: "Stock Market Newsletter",
    description:
      "AI-powered newsletter app that delivers personalized stock market summaries to your inbox. Users select ticker symbols, and the app fetches live news, summarizes it with OpenAI, and emails a formatted digest on a custom schedule.",
    image: "/projects/newsletter-ai.png",
    objectPosition: "top",
    tags: ["Next.js", "TypeScript", "Supabase", "OpenAI", "Inngest"],
    demoURL: "https://github.com/guillermomtz1/newsletter-app",
  },
  {
    id: 3,
    title: "Movie Rental API",
    description:
      "Designed and implemented a RESTful Movie API with full CRUD operations, authentication, and a clean Express + MongoDB backend.",
    image: "/projects/REST-API-project.png",
    tags: ["Node.js", "Express.js", "MongoDB"],
    demoURL: "https://github.com/guillermomtz1/REST-movie-API",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What I&apos;ve Built
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A selection of projects crafted with attention to detail,
            performance, and user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-secondary/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ objectPosition: project.objectPosition ?? "center" }}
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-left mb-2">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm text-left leading-relaxed flex-1 mb-4">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-2 border-t border-border">
                  <a
                    href={project.demoURL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
                  >
                    <ExternalLink size={15} />
                    View Project
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="text-center mt-12">
          <a
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-border hover:border-primary/50 text-foreground hover:text-primary hover:bg-primary/5 font-medium transition-all duration-300"
            href="https://github.com/guillermomtz1"
            target="_blank"
            rel="noopener noreferrer"
          >
            More on GitHub
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

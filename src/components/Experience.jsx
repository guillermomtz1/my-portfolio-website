import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    period: "2025 — Present",
    role: "Georgia Institute of Technology",
    company: "M.S. in Computer Science",
    description: "Specialization in Machine Learning",
    technologies: [],
    current: true,
  },
  {
    period: "2024 — Present",
    role: "Engineer",
    company: "Parkhill",
    description:
      "Developed custom full-stack web applications and designed scalable REST API backends for internal engineering tools.",
    technologies: ["React", "TypeScript", "MongoDB", "Node.js"],
    current: false,
  },
  {
    period: "2021 — 2024",
    role: "Structural Engineer",
    company: "Hunt & Joiner, Inc.",
    description:
      "",
    technologies: [],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Texas A&M University",
    company: "M.S. in Civil Engineering",
    description: "Specialization in Structural Engineering",
    technologies: ["Python"],
    current: false,
  },
  {
    period: "2016 — 2019",
    role: "Texas A&M University",
    company: "B.S. in Civil Engineering",
    description: "",
    technologies: [],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            My Path
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            Career <span className="text-primary">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Center line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/20 to-transparent md:-translate-x-1/2 shadow-[0_0_20px_rgba(139,92,246,0.5)]" />

          <div className="space-y-10">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-6 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 120}ms` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 top-6 w-3.5 h-3.5 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10 shadow-[0_0_10px_rgba(139,92,246,0.6)]">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-60" />
                  )}
                </div>

                {/* Card */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-12" : "md:col-start-2 md:pl-12"
                  }`}
                >
                  <div className="glass p-5 rounded-2xl border border-border hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 text-left">
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <h3 className="text-base font-semibold leading-snug">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {exp.company}
                        </p>
                      </div>
                      <span className="shrink-0 text-xs font-medium text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-full whitespace-nowrap">
                        {exp.period}
                      </span>
                    </div>

                    {exp.description && (
                      <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                        {exp.description}
                      </p>
                    )}

                    {exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

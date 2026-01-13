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
      "Developed custom full-stack web applications and designed and implemented scalable REST API backend",
    technologies: ["React", "TypeScript", "MongoDB", "Node.js"],
    current: false,
  },
  {
    period: "2021 — 2024",
    role: "Structural Engineer",
    company: "Hunt & Joiner, Inc.",
    description: "",
    technologies: [],
    current: false,
  },
  {
    period: "2020 — 2021",
    role: "Texas A&M University",
    company: "M.S. in Structural Engineering",
    description: "",
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
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
         h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-5xl md:text-4l font-bold mb-12 text-center">
            Career <span className="text-primary ">Journey</span>
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="text-left">
                        <h3 className="text-xl font-semibold text-left">
                          {exp.role}
                        </h3>
                        <p className="text-muted-foreground mt-1 text-left">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
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

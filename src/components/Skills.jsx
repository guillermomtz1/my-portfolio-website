import { FaGit, FaJava } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiJavascript,
  SiMongodb,
  SiExpress,
  SiR,
  SiJupyter,
  SiTypescript,
  SiDotnet,
  SiPostgresql,
  SiAndroidstudio,
  SiOpenai,
  SiPytorch,
} from "react-icons/si";
import { Database, Sparkles } from "lucide-react";

const categories = [
  {
    label: "Programming",
    skills: [
      { name: "Python", icon: SiPython },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Java", icon: FaJava },
      { name: "C#", icon: SiDotnet },
      { name: "SQL", icon: Database },
      { name: "R", icon: SiR },
    ],
  },
  {
    label: "Frontend / Backend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: RiNextjsLine },
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
    ],
  },
  {
    label: "Tools & Databases",
    skills: [
      { name: "Git", icon: FaGit },
      { name: "Jupyter", icon: SiJupyter },
      { name: "Android Studio", icon: SiAndroidstudio },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MongoDB", icon: SiMongodb },
    ],
  },
  {
    label: "AI / ML",
    skills: [
      { name: "OpenAI API", icon: SiOpenai },
      { name: "Prompt Engineering", icon: Sparkles },
      { name: "PyTorch", icon: SiPytorch },
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative">
      <div className="absolute top-0 left-1/2 w-96 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            What I Work With
          </p>
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-primary">Skills</span>
          </h2>
        </div>

        <div className="flex flex-col gap-12">
          {categories.map(({ label, skills }) => (
            <div key={label}>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest mb-5 text-left">
                {label}
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                {skills.map(({ name, icon: Icon }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-2.5 p-4 rounded-xl border border-border bg-card hover:border-primary/50 hover:bg-primary/5 hover:shadow-md hover:shadow-primary/5 transition-all duration-300 cursor-default"
                  >
                    <Icon className="text-3xl transition-colors duration-300" />
                    <span className="text-xs font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-center leading-tight">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

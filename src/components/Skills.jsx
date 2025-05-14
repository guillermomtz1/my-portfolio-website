import { BiSolidCheckboxMinus } from "react-icons/bi";
import { FaGit } from "react-icons/fa";
import {
  SiPython,
  SiNodedotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiHtml5,
  SiMongodb,
  SiExpress,
  SiR,
  SiCss3,
} from "react-icons/si";

const technologies = [
  { name: "Python", icon: SiPython },
  { name: "Node.js", icon: SiNodedotjs },
  { name: "React", icon: SiReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Javascript", icon: SiJavascript },
  { name: "Express", icon: SiExpress },
  { name: "HTML", icon: SiHtml5 },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Git", icon: FaGit },
  { name: "R", icon: SiR },
  { name: "CSS", icon: SiCss3 },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-12">
        My <span className="text-primary">Skills</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8 text-5xl">
        {technologies.map((tech) => {
          const Icon = tech.icon;
          return (
            <div
              key={tech.name}
              className="group flex flex-col items-center space-y-2"
            >
              <div className="p-4 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300 cursor-pointer icon-hover">
                <Icon className="text-muted-foreground group-hover:text-primary transition-colors " />
              </div>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-foreground">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

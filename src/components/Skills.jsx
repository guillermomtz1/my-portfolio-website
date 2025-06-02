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
  SiJupyter,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

const technologies = [
  { name: "React", icon: SiReact },
  { name: "VS Code", icon: VscVscode },
  { name: "Git", icon: FaGit },
  { name: "Jupyter Notebooks", icon: SiJupyter },
];

const frameworks = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express.js", icon: SiExpress },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Tailwind CSS", icon: SiTailwindcss },
];

const languages = [
  { name: "Python", icon: SiPython },
  { name: "Javascript", icon: SiJavascript },
  { name: "CSS", icon: SiCss3 },
  { name: "HTML", icon: SiHtml5 },
  { name: "R", icon: SiR },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-24 px-4 relative text-center">
      <h2 className="text-5xl md:text-4l font-bold mb-12 text-center">
        My <span className="text-primary ">Skills</span>
      </h2>

      <h3 className="text-2xl md:text-xl font-bold text-center py-4">
        Programming Languages
      </h3>
      <div className="flex flex-wrap justify-center gap-8 text-5xl py-4">
        {languages.map((language) => {
          const Icon = language.icon;
          return (
            <div
              key={language.name}
              className="group flex flex-col items-center space-y-2"
            >
              <div className="p-4 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300 cursor-pointer icon-hover">
                <Icon className="text-muted-foreground group-hover:text-primary transition-colors " />
              </div>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-foreground">
                {language.name}
              </p>
            </div>
          );
        })}
      </div>

      <h3 className="text-2xl md:text-xl font-bold text-center py-4">
        Frameworks
      </h3>
      <div className="flex flex-wrap justify-center gap-8 text-5xl">
        {frameworks.map((framework) => {
          const Icon = framework.icon;
          return (
            <div
              key={framework.name}
              className="group flex flex-col items-center space-y-2"
            >
              <div className="p-4 rounded-lg border-2 border-transparent hover:border-foreground transition-all duration-300 cursor-pointer icon-hover">
                <Icon className="text-muted-foreground group-hover:text-primary transition-colors " />
              </div>
              <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-foreground">
                {framework.name}
              </p>
            </div>
          );
        })}
      </div>

      <h3 className="text-2xl md:text-xl font-bold text-center py-4">
        Developer Tools & Technologies
      </h3>
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

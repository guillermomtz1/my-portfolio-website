import { Code, Ghost, User } from "lucide-react";
import { SiPython, SiNodedotjs, SiReact, SiCodeproject } from "react-icons/si";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-4l font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              {" "}
              Passionate Software Developer{" "}
            </h3>
            <p className="text-muted-foreground">
              {" "}
              I'm an aspiring software engineer with a strong interest in
              machine learning and backend development. I enjoy creating
              solutions to real-world problems and continuously expand my skills
              through hands-on projects.
            </p>
            <p>
              Recently, I've been building web applications with React and
              Node.js, while also exploring machine learning concepts. My
              academic background includes courses like Knowledge-Based AI and
              Analytics Modeling, which have deepened my understanding of
              intelligent systems and data-driven decision-making.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#contact"
                className="cosmic-button hover:bg-primary/40 duration-300"
              >
                Get In Touch
              </a>
              <a
                href="../JGM-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/25 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover hover:border-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Software Development
                  </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites and web applications with
                    modern frameworks.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:border-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <SiCodeproject className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Self-Motivated and Proactive
                  </h4>
                  <p className="text-muted-foreground">
                    I’m a self-starter who enjoys building side projects and
                    learning new tools independently.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover hover:border-foreground">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Ghost className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    {" "}
                    Curiosity and Drive to Learn
                  </h4>
                  <p className="text-muted-foreground">
                    I'm passionate about continuous learning—currently exploring
                    Node.js and React in my free time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

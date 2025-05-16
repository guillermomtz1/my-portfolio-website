import { ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center relative z-10">
        <div className="absolute inset-0 flex items-center justify-center -z-10"></div>

        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-400 bg-clip-text text-transparent">
              {" "}
              Guillermo Martinez
            </span>
          </h1>
          <p className="text-xl md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I'm an engineer with a strong passion for computer science and a
            deep interest in machine learning. Right now, I'm working toward my
            Master’s in Computer Science at Georgia Tech, where I'm diving into
            topics like AI, data science, and advanced algorithms. I enjoy
            blending hands-on engineering with cutting-edge tech to build smart,
            practical solutions to real-world problems.
          </p>
        </div>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="cosmic-button hover:bg-primary/50">
            View My Work
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

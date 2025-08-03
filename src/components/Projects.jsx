import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Movie Rental API",
    description:
      "Developed a RESTful Movie API by designing and implementing CRUD operations",
    image: "/projects/REST-API-project.png",
    tags: ["Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/guillermomtz1/REST-movie-API",
  },
  // {
  //   id: 2,
  //   title: "Coming Soon",
  //   description: "Stay tuned!",
  //   image: "/projects/project2.png",
  //   tags: ["React", "Node.js", "Stripe"],
  //   demoURL: "#",
  //   githubUrl: "#",
  // },
  // {
  //   id: 3,
  //   title: "Coming Soon",
  //   description: "Stay tuned!",
  //   image: "/projects/project3.png",
  //   tags: ["React", "Node.js", "MongoDB"],
  //   demoURL: "#",
  //   githubUrl: "#",
  // },
];

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-5xl md:text-4l font-bold mb-12 text-center">
          My <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoURL}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2 hover:bg-primary/50"
            href="https://github.com/guillermomtz1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check my Github
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

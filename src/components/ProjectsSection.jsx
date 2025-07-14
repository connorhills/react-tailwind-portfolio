import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Last Stand",
    description:
      "My first complete video game where you fight zombies endlessly in an abandoned mall.",
    image: "/projects/lastStandProject.jpg",
    tag: ["Unity", "C#", "Visual Studio"],
    demoUrl: "https://ciegeworks.itch.io/last-stand",
    githubUrl: "#",
  }
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, each built with attention to
          detail ensuring a high-quality user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-primary">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="px-2 py-4">
                <div className="flex flex-wrap gap-2 mb-2 px-2">
                  {project.tag.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border-2 border-white/20 rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1 text-white"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-4 px-4">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={30} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={30} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/connorhills"
          >
            Checkout My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

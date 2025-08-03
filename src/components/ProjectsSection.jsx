import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Last Stand",
    description:
      "A first-person shooter framework built with Unity featuring weapon systems, UI management, and visual effects. Includes custom HUD elements, ammo tracking, and dynamic particle systems.",
    image: "/projects/lastStandProject.jpg",
    tag: ["Unity", "C#", "3D Game Development"],
    demoUrl: "https://ciegeworks.itch.io/last-stand",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Full-Stack Expense & Income Tracker",
    description:
      "Comprehensive financial management application with real-time dashboard, interactive charts, and secure user authentication. Features expense/income tracking, data visualization, and Excel export functionality.",
    image: "/projects/expenseTrackerProject.jpg",
    tag: ["React", "Node.js", "MongoDB", "Express.js"],
    demoUrl: "https://react-expense-tracker-frontend.onrender.com",
    githubUrl: "https://github.com/connorhills/react-expense-tracker",
  },
  {
    id: 3,
    title: "Jobify - AI Resume ATS Analyzer",
    description:
      "Full-stack AI-powered resume analyzer that provides users with a detailed, reliable ATS compatibility scores and improvement tips. Features PDF processing, real-time feedback, and cloud storage integration.",
    image: "/projects/jobifyProject.jpg",
    tag: ["React", "TypeScript", "Claude AI", "React Router"],
    demoUrl: "https://ai-job-helper-red.vercel.app/",
    githubUrl: "https://github.com/connorhills/ai-job-helper",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured{" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects, each built with attention to
          detail ensuring a high-quality user experience
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-primary transition-transform duration-300">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover card-glow-hover flex flex-col hover:scale-105 hover:border-2 hover:border-primary transition-transform duration-300 border-2"
              style={{ minHeight: 400 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col flex-1 px-2 py-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {project.tag.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 text-xs font-medium border-2 border-white/20 rounded-full bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex-1" />
                <div className="flex space-x-4 px-4 pb-2">
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    className="text-white/80 hover:text-primary transition-colors duration-300"
                  >
                    <ExternalLink size={30} />
                  </a>
                  {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={30} />
                    </a>
                  )}
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

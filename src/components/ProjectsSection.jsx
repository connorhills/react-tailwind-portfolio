import { useState } from "react";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { cn } from "../lib/utils";

const projects = [
  {
    id: 1,
    title: "OpulFi",
    description:
      "A DeFi platform built on the XRPL with real-time data, staking workflows, reward features, and a focus on making blockchain tools easier to use.",
    image: "/projects/opulfiProject.jpg",
    tag: ["XRPL", "DeFi", "NestJS", "TypeScript"],
    category: "blockchain",
    demoUrl: "https://opulfi.io",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "OpulX",
    description:
      "A production XRPL NFT marketplace for discovering, collecting, and trading digital art, with wallet-connected flows, IPFS media, and custom-domain deployment.",
    image: "/projects/opulxProject.jpg",
    tag: ["XRPL", "NFT Marketplace", "React", "IPFS", "Hosting"],
    category: "blockchain",
    demoUrl: "https://www.opulx.io",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Workflow",
    description:
      "A Python desktop productivity app with a modern CustomTkinter UI, session timer, CSV work logs, editable notes, calendar views, and priority task tracking.",
    image: "/projects/timaProject.png",
    imageClassName: "object-cover object-left-top bg-[#050509]",
    tag: ["Python", "CustomTkinter", "PyInstaller", "Productivity"],
    category: "tools",
    demoUrl: "",
    githubUrl: "",
  },
  {
    id: 4,
    title: "Knicks Kiosk Biography",
    description:
      "A premium touchscreen-style team biography built with React and Vite, featuring roster stories, coach profiles, franchise history, Hall of Famers, responsive mobile flow, and Vercel static hosting.",
    image: "/projects/knicksKioskProject.png",
    imageClassName: "object-cover object-left-top",
    tag: ["React", "Vite", "Interactive Kiosk", "Vercel"],
    category: "web-apps",
    demoUrl: "https://knicks-kiosk-biography.vercel.app",
    githubUrl: "",
  },
  {
    id: 5,
    title: "Trade Recap",
    description:
      "Built for the NQuarters trading community to log trades, review decision-making, and keep entries, stops, wins, and losses in one place.",
    image: "/projects/nquarters-trade-cal.jpg",
    tag: ["NestJS", "Node.js", "Prisma", "TypeScript"],
    category: "web-apps",
    demoUrl: "https://nquarters-calendar.vercel.app",
    githubUrl: "https://github.com/connorhills/NQuarters-Trade-Recap-Calendar",
  },
  {
    id: 6,
    title: "Expense Tracker",
    description:
      "A full-stack finance tracker for managing income and expenses with dashboards, charts, authentication, and Excel export.",
    image: "/projects/expenseTrackerProject.jpg",
    tag: ["React", "Node.js", "MongoDB", "Express.js"],
    category: "web-apps",
    demoUrl: "https://react-expense-tracker-frontend.onrender.com",
    githubUrl: "https://github.com/connorhills/react-expense-tracker",
  },
  {
    id: 7,
    title: "Last Stand",
    description:
      "A Unity FPS project where I built core gameplay systems including weapons, HUD elements, ammo tracking, and visual effects.",
    image: "/projects/lastStandProject.jpg",
    tag: ["Unity", "C#", "3D Game Development"],
    category: "games",
    demoUrl: "https://ciegeworks.itch.io/last-stand",
    githubUrl: "#",
  },
  {
    id: 8,
    title: "Jobify",
    description:
      "An AI resume analyzer that scores ATS compatibility, processes PDFs, and gives users practical feedback on how to improve their resume.",
    image: "/projects/jobifyProject.jpg",
    tag: ["React", "TypeScript", "Claude AI", "React Router"],
    category: "web-apps",
    demoUrl: "https://ai-job-helper-red.vercel.app/",
    githubUrl: "https://github.com/connorhills/ai-job-helper",
  }
];

const categories = [
  { key: "all", label: "All" },
  { key: "web-apps", label: "Web Apps" },
  { key: "games", label: "Games" },
  { key: "blockchain", label: "Blockchain" },
  { key: "tools", label: "Tools" },
];

export const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projects.filter(
    (project) => activeCategory === "all" || project.category === activeCategory
  );

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured{" "}
          <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Production products, full-stack apps, tools, and interactive
          experiences that show how I approach usability, API design, hosting,
          and product execution.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 cursor-pointer",
                activeCategory === cat.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary/20 resume-glow-hover"
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-primary transition-transform duration-300">
          {filteredProjects.map((project, key) => (
            <div
              key={project.id ?? key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover card-glow-hover flex flex-col hover:scale-105 hover:border-2 hover:border-primary transition-transform duration-300 border-2"
              style={{ minHeight: 400 }}
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className={cn(
                    "w-full h-full transition-transform duration-500 group-hover:scale-110",
                    project.imageClassName ?? "object-cover"
                  )}
                />
              </div>
              <div className="flex flex-col flex-1 px-3 py-4">
                <div className="flex flex-wrap gap-2 mb-4">
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
                <p className="text-white/75 text-sm mb-6">
                  {project.description}
                </p>
                <div className="flex-1" />
                {(project.demoUrl || project.githubUrl) && (
                  <div className="flex space-x-4 px-4 pb-2">
                    {project.demoUrl && project.demoUrl !== "#" && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`Open ${project.title} live project`}
                        title={`Open ${project.title}`}
                        className="text-white/80 hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={30} />
                      </a>
                    )}
                    {project.githubUrl && project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open ${project.title} GitHub repository`}
                      title={`${project.title} GitHub`}
                      className="text-white/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={30} />
                    </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noreferrer"
            href="https://github.com/connorhills"
          >
            Checkout My GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

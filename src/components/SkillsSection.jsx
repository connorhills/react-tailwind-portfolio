import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  { name: "HTML/CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 82, category: "frontend" },
  { name: "React", level: 88, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "React Router", level: 82, category: "frontend" },
  { name: "Tailwind CSS", level: 85, category: "frontend" },
  { name: "Recharts", level: 78, category: "frontend" },
  { name: "Responsive Design", level: 84, category: "frontend" },

  { name: "Node.js", level: 78, category: "backend" },
  { name: "NestJS", level: 80, category: "backend" },
  { name: "Express.js", level: 76, category: "backend" },
  { name: "REST APIs", level: 80, category: "backend" },
  { name: "JWT Authentication", level: 78, category: "backend" },
  { name: "MongoDB/Mongoose", level: 76, category: "backend" },
  { name: "SQL", level: 76, category: "backend" },
  { name: "Prisma", level: 76, category: "backend" },

  { name: "XRPL", level: 82, category: "blockchain" },
  { name: "DeFi Workflows", level: 80, category: "blockchain" },
  { name: "NFT Marketplaces", level: 80, category: "blockchain" },
  { name: "Wallet Auth", level: 78, category: "blockchain" },
  { name: "Xaman", level: 78, category: "blockchain" },
  { name: "IPFS", level: 75, category: "blockchain" },

  { name: "Vite", level: 78, category: "deployment" },
  { name: "Vercel", level: 85, category: "deployment" },
  { name: "Render", level: 80, category: "deployment" },
  { name: "Custom Domains", level: 78, category: "deployment" },
  { name: "Static Site Hosting", level: 80, category: "deployment" },
  { name: "Environment Variables", level: 82, category: "deployment" },
  { name: "Production Debugging", level: 78, category: "deployment" },
  { name: "Postman", level: 78, category: "deployment" },
  { name: "Git/GitHub", level: 76, category: "deployment" },

  { name: "Python", level: 82, category: "software" },
  { name: "CustomTkinter", level: 76, category: "software" },
  { name: "PyInstaller", level: 72, category: "software" },
  { name: "C#", level: 90, category: "software" },
  { name: ".NET", level: 85, category: "software" },
  { name: "Unity", level: 92, category: "software" },
  { name: "C/C++", level: 84, category: "software" },
  { name: "Java", level: 78, category: "software" },
];

const categories = [
  { key: "all", label: "All" },
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "blockchain", label: "Blockchain" },
  { key: "deployment", label: "Deployment" },
  { key: "software", label: "Software" },
];

const categorySummaries = {
  all: "A practical stack for full-stack apps, hosted interactive experiences, XRPL products, and desktop tools.",
  frontend: "UI work across React apps, responsive layouts, routing, charts, styling systems, and modern build tooling.",
  backend: "API design, authentication, databases, and service logic for full-stack products.",
  blockchain: "XRPL-focused marketplace, DeFi, wallet, and media workflow experience.",
  deployment:
    "Hosting, custom domains, environment setup, API testing, source control, and production troubleshooting.",
  software:
    "Python desktop apps, packaged utilities, C#/.NET, Unity, and core programming fundamentals.",
};

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Technical <span className="text-primary"> Skills</span>
        </h2>
        <p className="text-center text-foreground/70 mb-10 max-w-2xl mx-auto">
          Tools and technologies I have used to build, ship, debug, or maintain
          real projects.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-5">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary/20 resume-glow-hover"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        <p className="text-center text-sm text-foreground/70 mb-10 max-w-3xl mx-auto">
          {categorySummaries[activeCategory]}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill) => (
            <div
              key={skill.name}
              className="bg-card/95 p-4 rounded-lg border border-white/10 shadow-xs card-hover"
            >
              <div className="flex items-start justify-between gap-4 mb-4 text-left">
                <h3 className="font-semibold text-lg leading-tight text-white">
                  {skill.name}
                </h3>
                <span className="text-xs uppercase tracking-wide text-primary">
                  {categories.find((cat) => cat.key === skill.category)?.label}
                </span>
              </div>

              <div className="w-full bg-white/15 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-white/70">{skill.level}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

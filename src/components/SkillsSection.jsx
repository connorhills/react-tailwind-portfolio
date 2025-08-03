import { act, useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  /* Frontend Skills */
  { name: "HTML", level: 90, category: "frontend" },
  { name: "CSS", level: 90, category: "frontend" },
  { name: "JavaScript", level: 85, category: "frontend" },
  { name: "TypeScript", level: 80, category: "frontend" },
  { name: "Next.js", level: 82, category: "frontend" },
  { name: "React.js", level: 87, category: "frontend" },
  { name: "Recharts", level: 78, category: "frontend" },
  { name: "Tailwind CSS", level: 83, category: "frontend" },
  { name: "Vite", level: 72, category: "frontend" },
  { name: "Axios", level: 70, category: "frontend" },

  /* Backend Skills */
  { name: "C", level: 82, category: "backend" },
  { name: "C++", level: 86, category: "backend" },
  { name: "C#", level: 90, category: "backend" },
  { name: ".NET", level: 85, category: "backend" },
  { name: "Java", level: 78, category: "backend" },
  { name: "Python", level: 79, category: "backend" },
  { name: "Node.js", level: 75, category: "backend" },
  { name: "Express.js", level: 75, category: "backend" },
  { name: "MongoDB", level: 71, category: "backend" },
  { name: "Mongoose", level: 70, category: "backend" },
  { name: "PostgreSQL/MySQL", level: 78, category: "backend" },
  { name: "RESTful API", level: 70, category: "backend" },
  { name: "JWT Authentication", level: 77, category: "backend" },

  /* Tools */
  { name: "Unity", level: 95, category: "tools" },
  { name: "Git/GitHub", level: 70, category: "tools" },
  { name: "Visual Studio", level: 80, category: "tools" },
  { name: "VS Code", level: 75, category: "tools" },
  { name: "Render", level: 80, category: "tools" },
  { name: "Vercel", level: 85, category: "tools" },
  { name: "Postman", level: 75, category: "tools" },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My <span className="text-primary"> Skills</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "border border-primary text-primary hover:bg-primary/20 resume-glow-hover"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skills, key) => (
            <div
              key={key}
              className="bg-card p-4 rounded-lg shadow-cs card-hover"
            >
              <div className="text-left mb-4">
                <h3 className="font-semibold text-lg text-white"> {skills.name} </h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                  style={{ width: skills.level + "%" }}
                />
              </div>

              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skills.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

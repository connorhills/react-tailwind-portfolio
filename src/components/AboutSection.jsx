import { cn } from "@/lib/utils";
import { Briefcase, Code, Globe } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Full-Stack Developer Building Useful, Hosted Software
            </h3>
            <p className="text-foreground/70">
              I like building projects where people need to explore content,
              understand information clearly, or complete a workflow without
              friction. Over the last year, I have worked across OpulFi and
              OpulX, building XRPL products that required full-stack features,
              wallet-aware UX, API design, marketplace flows, and production
              deployment work.
            </p>

            <p className="text-foreground/70">
              I also build web apps, desktop tools, and game systems that keep
              sharpening my frontend, backend, hosting, and UX skills. What
              matters most to me is writing clean code, communicating clearly,
              and shipping products that solve the actual problem instead of
              only looking good in a demo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="/resume.pdf"
                download="Connor_Hills_Resume.pdf"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary",
                  "hover:bg-primary/20 transition-colors resume-glow-hover duration-300"
                )}
              >
                Download Resume
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 text-primary">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Globe className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">
                    Interactive Interfaces
                  </h4>
                  <p className="text-white/70">
                    Building responsive interfaces for products, tools, and
                    content-rich experiences with a strong focus on clarity,
                    navigation, and polish.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">
                    APIs, Data & Workflows
                  </h4>
                  <p className="text-white/70">
                    Connecting frontends to APIs, databases, authentication, and
                    platform-specific workflows, including XRPL marketplace and
                    DeFi features.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg text-white">
                    Hosting & Delivery
                  </h4>
                  <p className="text-white/70">
                    Turning ideas into usable products with attention to detail,
                    maintainable code, hosting, and deployment follow-through.
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

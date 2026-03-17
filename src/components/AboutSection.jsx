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
              Full-Stack Developer Who Likes Building Things That People Use
            </h3>
            <p className="text-muted-foreground">
              Over the last year, most of my time has gone into building
              OpulFi, a DeFi platform on the XRPL. Working on that pushed me
              further into full-stack development, product thinking, API design,
              and building features that need to be clear, reliable, and easy
              to use. I like taking ideas from concept to something real and
              making sure the end result feels solid.
            </p>

            <p className="text-muted-foreground">
              I also have experience building web apps and tools that sharpened
              my frontend, backend, and UX skills. What matters most to me is
              writing clean code, communicating well, and building products that
              actually solve a problem instead of just looking good in a demo.
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
                    Full-Stack Web Development
                  </h4>
                  <p className="text-muted-foreground">
                    Building end-to-end applications with React, Node.js, and
                    modern tooling, with a strong focus on usability and polish.
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
                    Blockchain & DeFi
                  </h4>
                  <p className="text-muted-foreground">
                    Working on blockchain products with real-time data,
                    platform features, and a strong emphasis on trust and clarity.
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
                    Product-Focused Execution
                  </h4>
                  <p className="text-muted-foreground">
                    Turning ideas into usable products with attention to detail,
                    maintainable code, and a smooth user experience.
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

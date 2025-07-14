import { cn } from "@/lib/utils";
import { Briefcase, Code, User } from "lucide-react";

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
              Passionate Software & Game Developer
            </h3>
            <p className="text-muted-foreground">
              With over 3 years of software development experience and 1.5 years 
              building games in Unity, I’m passionate about bringing ideas to life 
              through technology. From complete websites and software to immersive 
              video games, I enjoy creating experiences that are both functional and 
              visually engaging.
            </p>

            <p className="text-muted-foreground">
              I strive to make technology meaningful by combining creativity with 
              seamless functionality. Whether designing intuitive interfaces or 
              developing engaging gameplay, I aim to create digital experiences that 
              inspire and connect with users. I’m committed to continuous growth, 
              always exploring new tools and techniques to expand what I can create.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Get In Touch
              </a>

              <a
                href="#contact"
                className={cn(
                  "px-6 py-2 rounded-full border border-primary text-primary",
                  "hover:bg-primary/20 transition-colors duration-300"
                )}
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 text-primary">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg text-white"> Game Development</h4>
                    <p className="text-muted-foreground">
                         Building immersive and engaging experiences 
                         with Unity C#.
                    </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                    <h4 className="font-semibold text-lg text-white"> UI/UX Design</h4>
                    <p className="text-muted-foreground">
                         Designing smooth, responsive UI for games
                         and websites.
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
                    <h4 className="font-semibold text-lg text-white"> Project Management</h4>
                    <p className="text-muted-foreground">
                         Leading and completing creative 
                         software, web, and game projects.
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

import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
            <span className="block sm:inline opacity-0 animate-fade-in">
              Hi, my name is
            </span>
            <span className="block sm:inline text-primary opacity-0 animate-fade-in-delay-1 text-glow">
              {" "}
              Connor
            </span>
            <span className="block sm:inline text-gradient sm:ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Hills
            </span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto opacity-0 animate-fade-in-delay-3 leading-relaxed">
            I build full-stack web apps, interactive digital experiences, and
            practical tools with clean interfaces, reliable APIs, and hosting
            that holds up after launch.
          </p>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};

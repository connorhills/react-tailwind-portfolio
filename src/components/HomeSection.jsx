import { ArrowDown } from "lucide-react";

export const HomeSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, my name is</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1 text-glow">
              {" "}
              Connor
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Hills
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            I create video games, applications, websites, and more.
            Specializing in full-stack development, I strive to develop
            <span className="text-xl text-primary font-bold text-glow"> immersive</span>,
            and <span className="text-xl text-primary font-bold text-glow">engaging experiences</span>,
            or <span className="text-xl text-primary font-bold text-glow">practical </span>
            and <span className="text-xl text-primary font-bold text-glow">intuitive </span>
            tools for everyone to enjoy!
          </p>

          <div className="space-y-0 opacity-0 animate-fade-in-delay-3">
            <p className="text-lg mb-0"> PS: if you don't like the current <span className="text-xl text-primary font-bold text-glow">color</span> theme refresh 
            <span className="text-xl">🔃</span>
            </p>
            <p className="text-[15px] mt-0">(maybe there is even more components that will change!) </p>
          </div>

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

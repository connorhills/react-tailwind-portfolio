import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 bg-card relative border-t border-primary mt-12 pt-8 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-white">
        {" "}
        &copy; {new Date().getFullYear()} Connor Hills, All rights reserved.
      </p>
      <a href="#home" className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors">
        <ArrowUp size={20}/>
      </a>
    </footer>
  );
};

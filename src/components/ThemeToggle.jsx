import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = ({ isMenuOpen = false }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storeThemed = localStorage.getItem("theme");
    if (storeThemed === "dark") {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDarkMode(true);
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        "fixed top-1 right-1 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-hidden",
        isMenuOpen && "hidden"
      )}
    >
      {isDarkMode ? (
        <Sun className="h-10 w-10 text-yellow-300" />
      ) : (
        <Moon className="h-10 w-10 text-blue-900" />
      )}
    </button>
  );
};

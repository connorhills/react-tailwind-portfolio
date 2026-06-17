import { useEffect } from "react";

import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";
import { NavBar } from "@/components/NavBar";
import { HomeSection } from "@/components/HomeSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

export const Home = () => {
  useEffect(() => {
    const hue = Math.floor(Math.random() * 360);
    const saturation = 76 + Math.random() * 18;
    const lightness =
      hue >= 38 && hue <= 105
        ? 38 + Math.random() * 8
        : 45 + Math.random() * 10;
    const randomAccent = `${hue} ${saturation.toFixed(1)}% ${lightness.toFixed(
      1
    )}%`;

    const hslToRgb = (h, s, l) => {
      const normalizedS = s / 100;
      const normalizedL = l / 100;
      const chroma = (1 - Math.abs(2 * normalizedL - 1)) * normalizedS;
      const x = chroma * (1 - Math.abs(((h / 60) % 2) - 1));
      const m = normalizedL - chroma / 2;

      let red = 0;
      let green = 0;
      let blue = 0;

      if (h < 60) {
        red = chroma;
        green = x;
      } else if (h < 120) {
        red = x;
        green = chroma;
      } else if (h < 180) {
        green = chroma;
        blue = x;
      } else if (h < 240) {
        green = x;
        blue = chroma;
      } else if (h < 300) {
        red = x;
        blue = chroma;
      } else {
        red = chroma;
        blue = x;
      }

      return [red + m, green + m, blue + m];
    };

    const relativeLuminance = (rgb) => {
      const [red, green, blue] = rgb.map((channel) =>
        channel <= 0.03928
          ? channel / 12.92
          : ((channel + 0.055) / 1.055) ** 2.4
      );

      return 0.2126 * red + 0.7152 * green + 0.0722 * blue;
    };

    const accentLuminance = relativeLuminance(
      hslToRgb(hue, saturation, lightness)
    );
    const primaryForeground =
      accentLuminance > 0.42 ? "222 47% 11%" : "210 40% 98%";
    const themedCard = `${hue} 38% 10%`;
    const themedSecondary = `${hue} 26% 17%`;
    const themedInput = `${hue} 22% 18%`;

    document.documentElement.style.setProperty("--primary", randomAccent);
    document.documentElement.style.setProperty(
      "--primary-foreground",
      primaryForeground
    );
    document.documentElement.style.setProperty("--card", themedCard);
    document.documentElement.style.setProperty("--secondary", themedSecondary);
    document.documentElement.style.setProperty("--input", themedInput);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      <StarBackground />
      {/* NavBar */}
      <NavBar />
      {/* Main Content */}
      <main>
        <HomeSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

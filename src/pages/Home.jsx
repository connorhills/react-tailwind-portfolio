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
    const getRandomPrimaryColor = () => {
      const hue = Math.floor(Math.random() * 360);
      const saturation = 70 + Math.random() * 20;
      const lightness = 50 + Math.random() * 10;
      return `${hue} ${saturation.toFixed(1)}% ${lightness.toFixed(1)}%`;
    };

    const getMatchingCardColor = (primaryHue) => {
      const saturation = 50 + Math.random() * 20; 
      const lightness = 10;
      return `${primaryHue} ${saturation.toFixed(1)}% ${lightness.toFixed(1)}%`;
    };

    const randomPrimary = getRandomPrimaryColor();
    const primaryHue = parseInt(randomPrimary.split(" ")[0]); 
    const matchingCard = getMatchingCardColor(primaryHue);

    document.documentElement.style.setProperty("--primary", randomPrimary);

    document.documentElement.style.setProperty("--card", matchingCard);

    document.querySelectorAll(".dark").forEach((el) => {
      el.style.setProperty("--primary", randomPrimary);
      el.style.setProperty("--card", matchingCard);
    });
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

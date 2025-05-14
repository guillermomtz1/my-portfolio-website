import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <div className="bg-gradient-to-b from-background to-gradient">
          <HeroSection />
        </div>
        <div>
          <AboutSection />
        </div>

        <Skills />
        <Projects />
        <div>
          <Contact />
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

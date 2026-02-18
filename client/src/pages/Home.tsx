import BackgroundScene from '@/components/BackgroundScene';
import HeroSectionEnhanced from '@/components/HeroSectionEnhanced';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import GitHubShowcase from '@/components/GitHubShowcase';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

/**
 * Home Page
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Premium portfolio showcasing AI expertise and projects
 * - Smooth scroll-based animations and transitions
 * - Clean typography hierarchy and generous whitespace
 * - Cinematic pacing and storytelling
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Animated background */}
      <BackgroundScene />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <a href="#" className="font-display text-xl font-bold text-foreground">
            SB
          </a>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              About
            </a>
            <a href="#projects" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </a>
            <a href="#expertise" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </a>
            <a href="#contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Sections */}
      <HeroSectionEnhanced />
      <AboutSection />
      <ProjectsSection />
      <GitHubShowcase />
      <ExpertiseSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

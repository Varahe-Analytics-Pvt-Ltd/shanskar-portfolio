import { useEffect, useState } from 'react';
import DashboardHeader from '@/components/DashboardHeader';
import MetricsGrid from '@/components/MetricsGrid';
import ProjectShowcase from '@/components/ProjectShowcase';
import SkillsVisualization from '@/components/SkillsVisualization';
import DataVisualization from '@/components/DataVisualization';
import InteractiveStats from '@/components/InteractiveStats';
import ContactCTA from '@/components/ContactCTA';
import EnhancedFooter from '@/components/EnhancedFooter';

/**
 * Modern Analytics Dashboard Home Page
 * 
 * Design Philosophy: Modern Data Analytics Aesthetic
 * - Dark theme with neon accents (cyan, magenta, lime)
 * - Grid-based layout with animated metric cards
 * - Real-time statistics and data visualization
 * - Gaming-inspired high-energy aesthetic
 * - Smooth scroll animations and transitions
 */

export default function HomeDashboard() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
      {/* Animated background grid */}
      <div className="fixed inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(0deg, transparent 24%, rgba(0, 255, 200, 0.05) 25%, rgba(0, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, 0.05) 75%, rgba(0, 255, 200, 0.05) 76%, transparent 77%, transparent), linear-gradient(90deg, transparent 24%, rgba(0, 255, 200, 0.05) 25%, rgba(0, 255, 200, 0.05) 26%, transparent 27%, transparent 74%, rgba(0, 255, 200, 0.05) 75%, rgba(0, 255, 200, 0.05) 76%, transparent 77%, transparent)',
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Animated gradient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-magenta-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <DashboardHeader />
        <main className="container mx-auto px-4 py-12 space-y-16">
          {/* Hero metrics */}
          <MetricsGrid isLoaded={isLoaded} />

          {/* Projects showcase */}
          <section>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <ProjectShowcase />
          </section>

          {/* Skills visualization */}
          <section>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              Core Expertise
            </h2>
            <SkillsVisualization />
          </section>

          {/* Data Visualization */}
          <DataVisualization />

          {/* Interactive Statistics */}
          <section>
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              By The Numbers
            </h2>
            <InteractiveStats />
          </section>

          {/* Contact CTA */}
          <ContactCTA />
        </main>

        {/* Footer */}
        <EnhancedFooter />
      </div>
    </div>
  );
}

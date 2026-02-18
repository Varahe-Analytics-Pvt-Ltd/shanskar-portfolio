import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ProjectsSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Showcase projects with elegant card design
 * - Staggered scroll animations for cinematic pacing
 * - Clear hierarchy and generous whitespace
 */

interface Project {
  id: string;
  title: string;
  description: string;
  role: string;
  technologies: string[];
  link: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: 'datanautx',
    title: 'DataNautX',
    description: 'Enterprise-grade social media intelligence platform that extracts, analyzes, and reports across Facebook, Instagram, YouTube, and X.',
    role: 'Lead Developer',
    technologies: ['Python', 'Node.js', 'MongoDB', 'React', 'API Integration'],
    link: 'https://github.com/shanskarBansal/DataNautX-Showcase',
    highlights: [
      'Multi-platform data extraction with parallel processing',
      'Real-time analytics dashboard',
      'Enterprise-scale data management',
    ],
  },
  {
    id: 'omnimetric',
    title: 'OmniMetric',
    description: 'Multi-platform social media intelligence pipeline with auto-failover and parallel fetching capabilities.',
    role: 'Full-Stack Developer',
    technologies: ['Python', 'Async Processing', 'MongoDB', 'FastAPI'],
    link: 'https://github.com/shanskarBansal',
    highlights: [
      'Parallel data fetching with intelligent failover',
      'Real-time metric aggregation',
      'Scalable pipeline architecture',
    ],
  },
  {
    id: 'commentlens',
    title: 'CommentLens',
    description: 'AI-powered comment extraction and sentiment analysis across multiple social platforms using Gemini API.',
    role: 'AI Engineer',
    technologies: ['Python', 'Gemini AI', 'NLP', 'React', 'FastAPI'],
    link: 'https://github.com/shanskarBansal',
    highlights: [
      'Advanced sentiment analysis with Gemini',
      'Multi-platform comment extraction',
      'Real-time processing pipeline',
    ],
  },
  {
    id: 'salarylens',
    title: 'SalaryLens',
    description: 'ML-powered salary prediction platform providing data-driven insights into developer compensation trends.',
    role: 'ML Engineer',
    technologies: ['Python', 'TensorFlow', 'React', 'Node.js', 'PostgreSQL'],
    link: 'https://github.com/shanskarBansal/SalaryLens-Showcase',
    highlights: [
      'Advanced ML prediction models',
      'Comprehensive salary benchmarking',
      'Interactive visualization dashboard',
    ],
  },
];

export default function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Stagger animation for cards
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
          end: 'top 50%',
          scrub: 1,
        },
        opacity: 0,
        y: 60,
        duration: 0.8,
        delay: index * 0.1,
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-16">
          Featured Projects
        </h2>

        {/* Projects grid */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="group bg-card text-card-foreground rounded-lg p-8 md:p-10 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Project header */}
              <div className="mb-6">
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="font-accent text-sm font-semibold text-primary uppercase tracking-wide">
                  {project.role}
                </p>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              {/* Highlights */}
              <div className="mb-8">
                <h4 className="font-accent font-semibold text-foreground mb-3 text-sm uppercase tracking-wide">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                      <span className="text-primary mt-1.5 flex-shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded-full font-accent font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-accent font-semibold hover:gap-3 transition-all duration-300"
              >
                View Project
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="mt-16 text-center">
          <a
            href="https://github.com/shanskarBansal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-accent font-semibold hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            View All Projects on GitHub
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

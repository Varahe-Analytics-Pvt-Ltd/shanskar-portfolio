import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGitHubProjects } from '@/hooks/useGitHubProjects';

gsap.registerPlugin(ScrollTrigger);

/**
 * GitHubShowcase Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Display real GitHub projects with live data
 * - Smooth animations on scroll
 * - Premium card design with hover effects
 */

export default function GitHubShowcase() {
  const { repos, loading, error } = useGitHubProjects('shanskarBansal');
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    // Animate cards on scroll
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.1,
      });
    });
  }, [repos]);

  if (loading) {
    return (
      <section ref={containerRef} className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-muted-foreground">Loading GitHub projects...</p>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section ref={containerRef} className="py-24 md:py-32 px-4 bg-background">
        <div className="max-w-5xl mx-auto text-center">
          <p className="text-destructive">Unable to load GitHub projects</p>
        </div>
      </section>
    );
  }

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 bg-background">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-16">
          Open Source & Public Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repos.map((repo, index) => (
            <div
              key={repo.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-card text-card-foreground rounded-lg p-6 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg group"
            >
              {/* Repo name */}
              <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                {repo.name}
              </h3>

              {/* Description */}
              {repo.description && (
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {repo.description}
                </p>
              )}

              {/* Meta info */}
              <div className="flex items-center justify-between mb-4">
                {repo.language && (
                  <span className="text-xs px-2 py-1 bg-secondary text-secondary-foreground rounded-full">
                    {repo.language}
                  </span>
                )}
                {repo.stars > 0 && (
                  <span className="text-xs text-muted-foreground flex items-center gap-1">
                    ⭐ {repo.stars}
                  </span>
                )}
              </div>

              {/* Topics */}
              {repo.topics.length > 0 && (
                <div className="mb-4 flex flex-wrap gap-1">
                  {repo.topics.slice(0, 3).map((topic) => (
                    <span
                      key={topic}
                      className="text-xs px-2 py-0.5 bg-primary/10 text-primary rounded"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              )}

              {/* Link */}
              <a
                href={repo.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-primary font-accent font-semibold text-sm hover:gap-3 transition-all"
              >
                View on GitHub
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
      </div>
    </section>
  );
}

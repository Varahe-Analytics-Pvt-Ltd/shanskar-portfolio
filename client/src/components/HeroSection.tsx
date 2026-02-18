import { useEffect, useRef } from 'react';
import gsap from 'gsap';

/**
 * HeroSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Full-screen hero with generous whitespace
 * - Smooth, elegant animations on load
 * - Premium typography hierarchy
 * - Cinematic pacing and timing
 */

export default function HeroSection() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Stagger animation timeline
    const tl = gsap.timeline();

    tl.from(titleRef.current, {
      duration: 1,
      opacity: 0,
      y: 40,
      ease: 'power3.out',
    })
      .from(
        subtitleRef.current,
        {
          duration: 0.8,
          opacity: 0,
          y: 30,
          ease: 'power3.out',
        },
        '-=0.6'
      )
      .from(
        ctaRef.current,
        {
          duration: 0.8,
          opacity: 0,
          y: 20,
          ease: 'power3.out',
        },
        '-=0.5'
      );

    // Subtle parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      gsap.to(containerRef.current, {
        duration: 0.5,
        x: xPercent,
        y: yPercent,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main title */}
        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground"
        >
          Shanskar Bansal
        </h1>

        {/* Subtitle with role */}
        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          AI Engineer • Political Sector Technologist • Building Intelligence for Governance
        </p>

        {/* CTA Section */}
        <div ref={ctaRef} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-accent font-semibold hover:shadow-lg transition-shadow duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-accent font-semibold hover:bg-foreground hover:text-background transition-colors duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="pt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-muted-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}

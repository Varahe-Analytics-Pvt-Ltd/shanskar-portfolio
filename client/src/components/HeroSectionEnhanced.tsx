import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { animationConfig } from '@/lib/animations';

/**
 * Enhanced HeroSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Premium cinematic entrance animations
 * - Smooth parallax and interactive effects
 * - Typography hierarchy with elegant motion
 */

export default function HeroSectionEnhanced() {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create staggered entrance animation
    const tl = gsap.timeline();

    // Fade in title with scale
    tl.from(titleRef.current, {
      duration: animationConfig.long,
      opacity: 0,
      y: 60,
      scale: 0.95,
      ease: animationConfig.easeOutCubic,
    })
      // Fade in subtitle
      .from(
        subtitleRef.current,
        {
          duration: animationConfig.medium,
          opacity: 0,
          y: 40,
          ease: animationConfig.easeOutCubic,
        },
        '-=0.6'
      )
      // Fade in CTA buttons
      .from(
        ctaRef.current,
        {
          duration: animationConfig.medium,
          opacity: 0,
          y: 30,
          ease: animationConfig.easeOutCubic,
        },
        '-=0.5'
      )
      // Fade in scroll indicator
      .from(
        scrollIndicatorRef.current,
        {
          duration: animationConfig.short,
          opacity: 0,
          ease: animationConfig.easeOutCubic,
        },
        '-=0.3'
      );

    // Subtle parallax on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 15;
      const yPercent = (clientY / innerHeight - 0.5) * 15;

      gsap.to(containerRef.current, {
        duration: 0.6,
        x: xPercent,
        y: yPercent,
        ease: 'power2.out',
      });
    };

    // Scroll parallax effect
    const handleScroll = () => {
      if (!containerRef.current) return;
      const scrollY = window.scrollY;
      gsap.to(containerRef.current, {
        duration: 0.5,
        y: scrollY * 0.3,
        ease: 'power2.out',
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main title with premium typography */}
        <h1
          ref={titleRef}
          className="font-display text-6xl md:text-7xl lg:text-8xl leading-tight text-foreground tracking-tight"
        >
          Shanskar Bansal
        </h1>

        {/* Subtitle with role and expertise */}
        <p
          ref={subtitleRef}
          className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          AI Engineer • Political Sector Technologist • Building Intelligence for Governance
        </p>

        {/* CTA Section with hover effects */}
        <div ref={ctaRef} className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-accent font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-foreground text-foreground rounded-lg font-accent font-semibold hover:bg-foreground hover:text-background transition-all duration-300"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll indicator with animation */}
        <div
          ref={scrollIndicatorRef}
          className="pt-16 flex justify-center"
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
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
    </div>
  );
}

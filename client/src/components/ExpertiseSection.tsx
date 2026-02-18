import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ExpertiseSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Showcase AI expertise with clear, visual storytelling
 * - Scroll-triggered animations for engagement
 * - Premium typography and generous whitespace
 */

interface ExpertiseArea {
  title: string;
  description: string;
  icon: string;
  applications: string[];
}

const expertiseAreas: ExpertiseArea[] = [
  {
    title: 'Natural Language Processing',
    description: 'Advanced text understanding and generation using transformer models and LLMs.',
    icon: '📝',
    applications: [
      'Text classification & sentiment analysis',
      'Named entity recognition',
      'Question answering systems',
      'Text summarization',
    ],
  },
  {
    title: 'Machine Learning',
    description: 'Building predictive models and data-driven systems for real-world problems.',
    icon: '🤖',
    applications: [
      'Regression & classification models',
      'Time series forecasting',
      'Anomaly detection',
      'Feature engineering & optimization',
    ],
  },
  {
    title: 'Generative AI',
    description: 'Leveraging LLMs and generative models to automate complex workflows.',
    icon: '✨',
    applications: [
      'RAG pipelines & knowledge retrieval',
      'Prompt engineering & optimization',
      'Fine-tuning & model customization',
      'AI-powered automation',
    ],
  },
  {
    title: 'Data Intelligence',
    description: 'Extracting actionable insights from complex, multi-source data.',
    icon: '📊',
    applications: [
      'Social media intelligence',
      'Campaign analytics',
      'Citizen data analysis',
      'Policy impact measurement',
    ],
  },
];

export default function ExpertiseSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
    });

    // Stagger card animations
    cardsRef.current.forEach((card, index) => {
      gsap.from(card, {
        scrollTrigger: {
          trigger: card,
          start: 'top 85%',
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        delay: index * 0.15,
      });
    });
  }, []);

  return (
    <section ref={containerRef} className="py-24 md:py-32 px-4 bg-secondary/20">
      <div className="max-w-5xl mx-auto">
        {/* Section title */}
        <h2
          ref={titleRef}
          className="font-display text-5xl md:text-6xl text-foreground mb-16"
        >
          AI & Data Expertise
        </h2>

        {/* Expertise grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {expertiseAreas.map((area, index) => (
            <div
              key={area.title}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className="bg-card text-card-foreground rounded-lg p-8 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              {/* Icon and title */}
              <div className="mb-6">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="font-display text-2xl text-foreground">{area.title}</h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed">{area.description}</p>

              {/* Applications */}
              <div>
                <h4 className="font-accent font-semibold text-foreground text-sm uppercase tracking-wide mb-3">
                  Applications
                </h4>
                <ul className="space-y-2">
                  {area.applications.map((app) => (
                    <li key={app} className="flex items-start gap-2 text-muted-foreground text-sm">
                      <span className="text-primary mt-1 flex-shrink-0">→</span>
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Political sector focus */}
        <div className="bg-primary/10 rounded-lg p-10 border border-primary/20">
          <h3 className="font-display text-3xl text-foreground mb-6">
            Technology for Governance & Public Impact
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m passionate about leveraging AI and data intelligence for governance and public impact. My work in the political sector focuses on building tools that make governance more transparent, efficient, and data-driven.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="font-accent font-semibold text-foreground mb-2">Policy Analysis</h4>
                <p className="text-sm">AI-powered tools for analyzing policy impact and effectiveness</p>
              </div>
              <div>
                <h4 className="font-accent font-semibold text-foreground mb-2">Citizen Intelligence</h4>
                <p className="text-sm">Data systems for understanding public sentiment and needs</p>
              </div>
              <div>
                <h4 className="font-accent font-semibold text-foreground mb-2">Smart Governance</h4>
                <p className="text-sm">Platforms for efficient resource allocation and decision-making</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

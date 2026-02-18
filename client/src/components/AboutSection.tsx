import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * AboutSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Story-driven narrative with generous whitespace
 * - Scroll-triggered animations for cinematic pacing
 * - Premium typography with clear hierarchy
 */

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    // Scroll-triggered animation
    gsap.from(contentRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1,
      },
      opacity: 0,
      y: 50,
      duration: 1,
    });
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-24 md:py-32 px-4 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        <div ref={contentRef} className="space-y-8">
          {/* Section title */}
          <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12">
            About Me
          </h2>

          {/* Main narrative */}
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a Senior Consultant & Data Scientist at Varahe Analytics, where I spend my days building data platforms, analytics dashboards, and intelligent systems that transform messy real-world data into actionable insights. My work spans social media intelligence, campaign analytics, and governance technology.
            </p>

            <p>
              What drives me is the problem-solving aspect of data and AI. I'm fascinated by understanding why patterns emerge in datasets, connecting signals across platforms, and building systems that automate complex analytical workflows. Over the past few years, I've gone deeper into LLMs and generative AI—building RAG pipelines, integrating OpenAI and Claude APIs into internal tools, and experimenting with prompt engineering to unlock new possibilities in data analysis.
            </p>

            <p>
              Beyond data science, I'm passionate about full-stack web development. I build end-to-end solutions with React frontends, Node/Express backends, and MongoDB databases. This combination of data expertise and engineering skills allows me to ship complete products that are both technically sound and user-friendly.
            </p>

            <p>
              My work in the political sector focuses on leveraging AI for governance and public impact—building tools for policy analysis, citizen data intelligence, and smart governance platforms. I believe technology should serve democracy and make governance more transparent and efficient.
            </p>
          </div>

          {/* Hobbies section */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-display text-3xl text-foreground mb-8">Beyond Work</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <h4 className="font-accent text-xl font-semibold text-foreground">
                  🚴 Biking
                </h4>
                <p className="text-muted-foreground">
                  Freedom, speed, and exploration. There's something about the open road that clears the mind and sparks creativity.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-accent text-xl font-semibold text-foreground">
                  🏎️ Car Riding
                </h4>
                <p className="text-muted-foreground">
                  Precision, engineering, and control. The mechanics of motion fascinate me as much as the experience itself.
                </p>
              </div>
            </div>
          </div>

          {/* Tech stack */}
          <div className="mt-16 pt-12 border-t border-border">
            <h3 className="font-display text-3xl text-foreground mb-8">Tech Stack</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                'Python',
                'JavaScript',
                'TypeScript',
                'React',
                'Node.js',
                'MongoDB',
                'PostgreSQL',
                'OpenAI API',
                'Claude API',
                'TensorFlow',
                'Pandas',
                'FastAPI',
              ].map((tech) => (
                <div
                  key={tech}
                  className="px-4 py-3 bg-secondary text-secondary-foreground rounded-lg text-center font-accent font-medium"
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * ContactSection Component
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Clean contact form with premium styling
 * - Social links and direct contact options
 * - Smooth interactions and feedback
 */

export default function ContactSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Scroll-triggered animation
    gsap.from(containerRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
      opacity: 0,
      y: 60,
      duration: 1,
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('loading');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      if (formRef.current) {
        formRef.current.reset();
      }
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1000);
  };

  return (
    <section
      ref={containerRef}
      id="contact"
      className="py-24 md:py-32 px-4 bg-background"
    >
      <div className="max-w-4xl mx-auto">
        {/* Section title */}
        <h2 className="font-display text-5xl md:text-6xl text-foreground mb-12 text-center">
          Let&apos;s Connect
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-accent font-semibold text-foreground mb-4 uppercase tracking-wide text-sm">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always interested in discussing AI, data, governance technology, and interesting engineering problems. Feel free to reach out.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-4">
              <a
                href="mailto:shanskarbansal@gmail.com"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-2xl">✉️</span>
                <div>
                  <p className="font-accent font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">shanskarbansal@gmail.com</p>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/shanskarbansal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-2xl">💼</span>
                <div>
                  <p className="font-accent font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/shanskarbansal</p>
                </div>
              </a>

              <a
                href="https://github.com/shanskarBansal"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-foreground hover:text-primary transition-colors duration-300"
              >
                <span className="text-2xl">🐙</span>
                <div>
                  <p className="font-accent font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/shanskarBansal</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block font-accent font-semibold text-foreground mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="Your name"
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-accent font-semibold text-foreground mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors duration-300"
                placeholder="your@email.com"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-accent font-semibold text-foreground mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full px-4 py-3 bg-secondary text-foreground rounded-lg border border-border focus:border-primary focus:outline-none transition-colors duration-300 resize-none"
                placeholder="Your message..."
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === 'loading'}
              className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg font-accent font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50"
            >
              {formStatus === 'loading' && 'Sending...'}
              {formStatus === 'success' && 'Message sent! 🎉'}
              {formStatus === 'error' && 'Error sending message'}
              {formStatus === 'idle' && 'Send Message'}
            </button>
          </form>
        </div>


      </div>
    </section>
  );
}

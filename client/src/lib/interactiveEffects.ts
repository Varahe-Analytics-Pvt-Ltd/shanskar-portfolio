/**
 * Interactive Effects Library
 * 
 * Utility functions for smooth animations and interactive elements
 */

export const createParticleEffect = (element: HTMLElement, event: MouseEvent) => {
  const rect = element.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;

  const particle = document.createElement('div');
  particle.className = 'absolute pointer-events-none';
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  particle.style.width = '10px';
  particle.style.height = '10px';
  particle.style.background = 'radial-gradient(circle, #06b6d4, transparent)';
  particle.style.borderRadius = '50%';
  particle.style.animation = 'particleFloat 1s ease-out forwards';

  element.appendChild(particle);

  setTimeout(() => particle.remove(), 1000);
};

export const addGlowEffect = (element: HTMLElement, color: string = '#06b6d4') => {
  element.addEventListener('mouseenter', () => {
    element.style.boxShadow = `0 0 20px ${color}, 0 0 40px ${color}40`;
  });

  element.addEventListener('mouseleave', () => {
    element.style.boxShadow = '';
  });
};

export const createScrollReveal = (element: HTMLElement, options?: IntersectionObserverInit) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    ...options,
  });

  observer.observe(element);
  return observer;
};

export const createCounterAnimation = (
  element: HTMLElement,
  target: number,
  duration: number = 2000
) => {
  const start = 0;
  const startTime = Date.now();

  const animate = () => {
    const elapsed = Date.now() - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const current = Math.floor(start + (target - start) * progress);

    element.textContent = current.toString();

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  animate();
};

export const createTypewriterEffect = (element: HTMLElement, text: string, speed: number = 50) => {
  let index = 0;
  element.textContent = '';

  const type = () => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
      setTimeout(type, speed);
    }
  };

  type();
};

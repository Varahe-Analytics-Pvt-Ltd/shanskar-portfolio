import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Animation Utilities
 * 
 * Design Philosophy: Minimalist Elegance with Cinematic Motion
 * - Smooth, purposeful animations that enhance storytelling
 * - Scroll-based triggers for cinematic pacing
 * - Premium easing functions for elegant motion
 */

export const animationConfig = {
  // Easing functions
  easeInOutCubic: 'power2.inOut',
  easeOutCubic: 'power3.out',
  easeInCubic: 'power3.in',
  easeOutExpo: 'expo.out',

  // Durations
  short: 0.4,
  medium: 0.8,
  long: 1.2,
};

/**
 * Fade in and slide up animation on scroll
 */
export const fadeInUpOnScroll = (element: HTMLElement | null, delay = 0) => {
  if (!element) return;

  gsap.from(element, {
    scrollTrigger: {
      trigger: element,
      start: 'top 85%',
      end: 'top 50%',
      scrub: 1,
    },
    opacity: 0,
    y: 60,
    duration: animationConfig.medium,
    delay,
    ease: animationConfig.easeOutCubic,
  });
};

/**
 * Staggered fade in for multiple elements
 */
export const staggerFadeIn = (elements: (HTMLElement | null)[], staggerDelay = 0.1) => {
  elements.forEach((element, index) => {
    if (element) {
      fadeInUpOnScroll(element, index * staggerDelay);
    }
  });
};

/**
 * Parallax effect on scroll
 */
export const parallaxOnScroll = (element: HTMLElement | null, speed = 0.5) => {
  if (!element) return;

  gsap.to(element, {
    scrollTrigger: {
      trigger: element,
      scrub: true,
    },
    y: (index, target) => {
      return -window.innerHeight * speed;
    },
    ease: 'none',
  });
};

/**
 * Scale animation on hover
 */
export const scaleOnHover = (element: HTMLElement | null, scale = 1.05) => {
  if (!element) return;

  element.addEventListener('mouseenter', () => {
    gsap.to(element, {
      scale,
      duration: animationConfig.short,
      ease: animationConfig.easeOutCubic,
    });
  });

  element.addEventListener('mouseleave', () => {
    gsap.to(element, {
      scale: 1,
      duration: animationConfig.short,
      ease: animationConfig.easeOutCubic,
    });
  });
};

/**
 * Text reveal animation
 */
export const revealText = (element: HTMLElement | null) => {
  if (!element) return;

  const text = element.textContent || '';
  element.innerHTML = '';

  const chars = text.split('');
  chars.forEach((char) => {
    const span = document.createElement('span');
    span.textContent = char;
    span.style.opacity = '0';
    element.appendChild(span);
  });

  const spans = element.querySelectorAll('span');
  gsap.to(spans, {
    opacity: 1,
    duration: 0.05,
    stagger: 0.05,
    ease: animationConfig.easeOutCubic,
  });
};

/**
 * Number counter animation
 */
export const countUp = (element: HTMLElement | null, target: number, duration = 2) => {
  if (!element) return;

  const obj = { value: 0 };
  gsap.to(obj, {
    value: target,
    duration,
    ease: animationConfig.easeOutCubic,
    onUpdate: () => {
      element.textContent = Math.floor(obj.value).toString();
    },
  });
};

/**
 * Floating animation (continuous)
 */
export const floatingAnimation = (element: HTMLElement | null, distance = 20, duration = 3) => {
  if (!element) return;

  gsap.to(element, {
    y: distance,
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
};

/**
 * Glow pulse animation
 */
export const glowPulse = (element: HTMLElement | null, duration = 2) => {
  if (!element) return;

  gsap.to(element, {
    boxShadow: '0 0 40px rgba(79, 70, 229, 0.6)',
    duration,
    ease: 'sine.inOut',
    repeat: -1,
    yoyo: true,
  });
};

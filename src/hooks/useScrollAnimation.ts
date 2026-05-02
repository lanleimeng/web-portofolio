import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number | number[];
  rootMargin?: string;
}

export function useScrollAnimation(options?: ScrollAnimationOptions) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: options?.threshold ?? 0.1,
      rootMargin: options?.rootMargin ?? '0px',
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, observerOptions);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [options?.threshold, options?.rootMargin]);

  return { ref, isVisible };
}

export function useParallax(offset = 0.5) {
  const ref = useRef<HTMLDivElement>(null);
  const [offset_, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        const elementOffset = (window.innerHeight - rect.top) * offset;
        setOffset(elementOffset);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [offset]);

  return { ref, offset: offset_ };
}

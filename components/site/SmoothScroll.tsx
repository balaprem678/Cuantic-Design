'use client';

import { useEffect } from 'react';

export default function SmoothScroll() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    let raf = 0;
    let target = window.scrollY;
    let current = window.scrollY;
    const ease = 0.12;
    let ticking = false;

    const onScroll = () => {
      target = window.scrollY;
      if (!ticking) {
        ticking = true;
        raf = requestAnimationFrame(step);
      }
    };

    const step = () => {
      current += (target - current) * ease;
      if (Math.abs(target - current) < 0.5) {
        current = target;
        ticking = false;
        return;
      }
      raf = requestAnimationFrame(step);
    };

    // Lightweight lerp — only apply subtle smoothing, don't hijack native scroll
    // Removed: over-aggressive smoothing can feel janky. Native smooth scroll + reveal is enough.
    return () => {
      cancelAnimationFrame(raf);
    };
  }, []);

  return null;
}

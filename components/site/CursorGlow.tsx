'use client';

import { useEffect } from 'react';

export default function CursorGlow() {
  useEffect(() => {
    const isFinePointer = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isFinePointer || reduce) return;

    const dot = document.createElement('div');
    dot.className = 'cu-cursor-dot';
    const ring = document.createElement('div');
    ring.className = 'cu-cursor-ring';
    document.body.appendChild(dot);
    document.body.appendChild(ring);

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px)`;
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor]');
      ring.classList.toggle('is-active', !!interactive);
    };

    const loop = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(loop);
    };

    window.addEventListener('mousemove', onMove);
    loop();

    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      dot.remove();
      ring.remove();
    };
  }, []);

  return null;
}

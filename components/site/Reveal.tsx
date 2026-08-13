'use client';
import { useEffect, useRef, useState } from 'react';
export default function Reveal({
  children,
  className = '',
  variant = '',
  delay,
  as: Tag = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: '' | 'scale' | 'left' | 'right';
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  as?: keyof JSX.IntrinsicElements;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const Comp = Tag as any;

  return (
    <Comp
      ref={ref as any}
      className={`reveal ${variant ? `reveal--${variant}` : ''} ${
        visible ? 'is-visible' : ''
      } ${className}`}
      data-delay={delay}
    >
      {children}
    </Comp>
  );
}

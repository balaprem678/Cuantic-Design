'use client';

import Link from 'next/link';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';

/**
 * Magnetic button — subtly pulls toward the cursor on desktop.
 */
export default function MagneticButton({
  children,
  href,
  variant = 'primary',
  className = '',
  onClick,
  type,
}: {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'accent' | 'ghost' | 'light' | 'outline-light';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement | null>(null);

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (el) el.style.transform = '';
  };

  const cls = `btn btn--${variant} ${className}`;

  if (href) {
    return (
      <Link
        ref={ref as any}
        href={href}
        className={cls}
        onMouseMove={onMove}
        onMouseLeave={onLeave}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as any}
      type={type || 'button'}
      className={cls}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

// Convenience wrapper for the common arrow CTA pattern
export function ArrowCta({
  href,
  children,
  variant = 'primary',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'accent' | 'ghost' | 'light' | 'outline-light';
}) {
  return (
    <MagneticButton href={href} variant={variant}>
      {children} <ArrowRight size={16} />
    </MagneticButton>
  );
}

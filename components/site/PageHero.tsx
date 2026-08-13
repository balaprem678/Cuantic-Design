'use client';

import Reveal from './Reveal';
import styles from './PageHero.module.scss';

export default function PageHero({
  eyebrow,
  title,
  highlight,
  subtitle,
  dark = false,
}: {
  eyebrow: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  dark?: boolean;
}) {
  return (
    <section className={`${styles.hero} ${dark ? styles.dark : ''}`}>
      <div className={styles.bg} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <Reveal as="span" className={`eyebrow ${dark ? styles.eyebrowLight : ''}`}>
          {eyebrow}
        </Reveal>
        <Reveal as="h1" className={styles.title} delay={1}>
          {title} {highlight && <span className="gradient-text">{highlight}</span>}
        </Reveal>
        {subtitle && (
          <Reveal as="p" className={styles.subtitle} delay={2}>
            {subtitle}
          </Reveal>
        )}
      </div>
    </section>
  );
}

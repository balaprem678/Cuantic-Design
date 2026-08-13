'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '@/lib/site-data';
import Reveal from '../site/Reveal';
import styles from './PortfolioPreview.module.scss';

export default function PortfolioPreview() {
  const featured = PROJECTS.filter((p) => p.featured);
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <div>
            <Reveal as="span" className="eyebrow">
              Featured Portfolio
            </Reveal>
            <Reveal as="h2" className={styles.title} delay={1}>
              Selected Work
            </Reveal>
            <Reveal as="p" className={styles.sub} delay={2}>
              A cross-section of branding, web, and print projects delivered for
              clients across Chennai and beyond.
            </Reveal>
          </div>
          <Reveal className={styles.headCta} delay={2}>
            <Link href="/portfolio" className={styles.viewAll}>
              View All Work <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className={styles.grid}>
          {featured.map((p, i) => (
            <Reveal
              key={p.id}
              variant="scale"
              className={`${styles.card} ${i === 0 ? styles.large : ''}`}
              delay={(i + 1) as 1 | 2}
            >
              <Link href="/portfolio" className={styles.link}>
                <div className={styles.image}>
                  <img src={p.image} alt={p.title} loading="lazy" />
                  <span className={styles.category}>{p.category}</span>
                </div>
                <div className={styles.meta}>
                  <div>
                    <span className={styles.client}>{p.client}</span>
                    <h3 className={styles.projectTitle}>{p.title}</h3>
                    <p className={styles.desc}>{p.description}</p>
                  </div>
                  <span className={styles.caseLink}>
                    View Case Study <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

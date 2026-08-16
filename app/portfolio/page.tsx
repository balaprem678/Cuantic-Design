'use client';

import { useState } from 'react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import CtaBand from '@/app/home/CtaBand';
import { PROJECTS } from '@/lib/site-data';
import { ArrowRight, X } from 'lucide-react';
import styles from './portfolio.module.scss';

const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'web', label: 'Web Design & Development' },
  { key: 'branding', label: 'Branding & Identity' },
  { key: 'print', label: 'Print & Advertising' },
  { key: 'marketing', label: 'Digital Marketing Campaigns' },
];

export default function PortfolioPage() {
  const [active, setActive] = useState('all');
  const [selected, setSelected] = useState<(typeof PROJECTS)[number] | null>(null);

  const filtered =
    active === 'all' ? PROJECTS : PROJECTS.filter((p) => p.categoryKey === active);

  return (
    <>
      <PageHero
        eyebrow="Our Portfolio"
        title="Selected Work"
        subtitle="Every project started as a brief and ended as something a client actually uses."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          {/* Filters */}
          <Reveal className={styles.filters}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                className={`${styles.filter} ${active === cat.key ? styles.filterActive : ''}`}
                onClick={() => setActive(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </Reveal>

          {/* Asymmetric grid */}
          <div className={styles.grid}>
            {filtered.map((p, i) => (
              <Reveal
                key={p.id}
                variant="scale"
                className={`${styles.card} ${p.size === 'large' ? styles.large : ''} ${
                  i % 5 === 0 ? styles.tall : ''
                }`}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              >
                <button className={styles.cardBtn} onClick={() => setSelected(p)}>
                  <div className={styles.image}>
                    <img src={p.image} alt={p.title} loading="lazy" />
                    <span className={styles.category}>{p.category}</span>
                    <span className={styles.hoverArrow}>
                      <ArrowRight size={20} />
                    </span>
                  </div>
                  <div className={styles.meta}>
                    <span className={styles.client}>{p.client}</span>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/* Case study modal */}
      {selected && (
        <div className={styles.modal} onClick={() => setSelected(null)}>
          <div className={styles.modalCard} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalClose} onClick={() => setSelected(null)} aria-label="Close">
              <X size={22} />
            </button>
            <div className={styles.modalImage}>
              <img src={selected.image} alt={selected.title} />
              <span className={styles.modalCategory}>{selected.category}</span>
            </div>
            <div className={styles.modalBody}>
              <span className={styles.modalClient}>{selected.client}</span>
              <h2>{selected.title}</h2>
              <p className={styles.modalDesc}>{selected.description}</p>
              <div className={styles.modalGrid}>
                <div>
                  <h4>Scope</h4>
                  <p>{selected.scope}</p>
                </div>
                <div>
                  <h4>Outcome</h4>
                  <p>{selected.outcome}</p>
                </div>
              </div>
              <a href="/contact" className={styles.modalCta}>
                Start a similar project <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

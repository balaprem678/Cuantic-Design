'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Palette, Code, TrendingUp, Plus } from 'lucide-react';
import { SERVICES } from '@/lib/site-data';
import Reveal from '../../components/site/Reveal';
import styles from './Services.module.scss';

const ICONS = { Palette, Code, TrendingUp };

export default function Services() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.section} id="services">
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="span" className="eyebrow">
            What We Do
          </Reveal>
          <Reveal as="h2" className={styles.title} delay={1}>
            Three Disciplines. <br />
            One Creative Team.
          </Reveal>
        </div>

        <div className={styles.list}>
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon as keyof typeof ICONS];
            const isOpen = open === i;
            return (
              <Reveal
                key={service.slug}
                className={`${styles.card} ${isOpen ? styles.open : ''}`}
                dataTone={service.slug}
                delay={(i + 1) as 1 | 2 | 3}
              >
                <button
                  className={styles.cardHead}
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <div className={styles.cardLeft}>
                    <span className={styles.number}>{service.number}</span>
                    <span className={styles.icon}>
                      <Icon size={22} />
                    </span>
                    <div className={styles.titles}>
                      <h3>{service.title}</h3>
                      <p className={styles.short}>{service.short}</p>
                    </div>
                  </div>
                  <span className={`${styles.toggle} ${isOpen ? styles.toggleOpen : ''}`}>
                    <Plus size={20} />
                  </span>
                </button>

                <div className={styles.body} aria-hidden={!isOpen}>
                  <div className={styles.bodyInner}>
                    <ul className={styles.items}>
                      {service.items.map((item) => (
                        <li key={item}>
                          <span className={styles.bullet} />
                          {item}
                        </li>
                      ))}
                    </ul>
                    <Link href="/services" className={styles.cardCta}>
                      Explore {service.title} <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

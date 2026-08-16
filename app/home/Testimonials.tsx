'use client';

import { Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/lib/site-data';
import Reveal from '../../components/site/Reveal';
import styles from './Testimonials.module.scss';

export default function Testimonials() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="span" className="eyebrow">
            Testimonials
          </Reveal>
          <Reveal as="h2" className={styles.title} delay={1}>
            What Clients Say
          </Reveal>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              className={styles.card}
              delay={((i % 2) + 1) as 1 | 2}
            >
              <span className={styles.quoteMark}>
                <Quote size={28} />
              </span>
              <p className={styles.quote}>{t.quote}</p>
              <div className={styles.author}>
                <span className={styles.avatar}>
                  {t.name
                    .split(' ')
                    .map((n) => n[0])
                    .join('')}
                </span>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.company}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

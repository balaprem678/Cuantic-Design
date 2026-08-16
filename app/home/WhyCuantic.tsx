'use client';

import { Layers, MessageCircle, CalendarCheck, Zap, MapPin } from 'lucide-react';
import { REASONS } from '@/lib/site-data';
import Reveal from '../../components/site/Reveal';
import styles from './WhyCuantic.module.scss';

const ICONS = { Layers, MessageCircle, CalendarCheck, Zap, MapPin };

export default function WhyCuantic() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="span" className="eyebrow">
            Why Cuantic
          </Reveal>
          <Reveal as="h2" className={styles.title} delay={1}>
            Why Businesses Choose <br />
            Cuantic Designs
          </Reveal>
        </div>

        <div className={styles.grid}>
          {REASONS.map((r, i) => {
            const Icon = ICONS[r.icon as keyof typeof ICONS];
            return (
              <Reveal
                key={r.title}
                className={styles.card}
                delay={((i % 3) + 1) as 1 | 2 | 3}
              >
                <span className={styles.icon}>
                  <Icon size={22} />
                </span>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <span className={styles.index}>0{i + 1}</span>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

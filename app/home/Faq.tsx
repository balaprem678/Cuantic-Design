'use client';

import { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQS } from '@/lib/site-data';
import Reveal from '../../components/site/Reveal';
import styles from './Faq.module.scss';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <div className={styles.aside}>
            <Reveal as="span" className="eyebrow">
              FAQ
            </Reveal>
            <Reveal as="h2" className={styles.title} delay={1}>
              Questions, <br />
              Answered.
            </Reveal>
            <Reveal as="p" className={styles.note} delay={2}>
              Still unsure about something? The first scoping call is free —
              we'll walk you through how it works.
            </Reveal>
          </div>

          <div className={styles.list}>
            {FAQS.map((faq, i) => {
              const isOpen = open === i;
              return (
                <Reveal
                  key={faq.q}
                  className={`${styles.item} ${isOpen ? styles.open : ''}`}
                  delay={(i + 1) as 1 | 2 | 3 | 4}
                >
                  <button
                    className={styles.q}
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span>{faq.q}</span>
                    <span className={`${styles.plus} ${isOpen ? styles.plusOpen : ''}`}>
                      <Plus size={18} />
                    </span>
                  </button>
                  <div className={styles.a} aria-hidden={!isOpen}>
                    <p>{faq.a}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

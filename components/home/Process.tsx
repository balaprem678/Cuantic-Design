'use client';

import { PROCESS_STEPS } from '@/lib/site-data';
import Reveal from '../site/Reveal';
import styles from './Process.module.scss';

export default function Process() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.head}>
          <Reveal as="span" className="eyebrow">
            How We Work
          </Reveal>
          <Reveal as="h2" className={styles.title} delay={1}>
            From First Brief <br />
            to Final Launch.
          </Reveal>
        </div>

        <div className={styles.timeline}>
          <div className={styles.line} aria-hidden />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal
              key={step.number}
              className={styles.step}
              delay={(i + 1) as 1 | 2 | 3 | 4}
            >
              <div className={styles.node}>
                <span className={styles.nodeDot} />
                <span className={styles.nodeRing} />
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepNum}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { ArrowRight, Phone } from 'lucide-react';
import { ArrowCta } from '../../components/site/MagneticButton';
import Reveal from '../../components/site/Reveal';
import styles from './CtaBand.module.scss';

export default function CtaBand() {
  return (
    <section className={styles.band}>
      <div className={styles.glow} aria-hidden />
      <div className={styles.grid} aria-hidden />
      <div className={styles.inner}>
        <Reveal className={styles.content}>
          <span className="eyebrow eyebrow--center" style={{ color: 'rgba(255,255,255,0.7)' }}>
            <span style={{ background: 'rgba(255,255,255,0.5)' }} />
            READY WHEN YOU ARE
          </span>
          <h2 className={styles.headline}>
            Have a Project <br />
            in Mind?
          </h2>
          <p className={styles.text}>
            Tell us what you're building and we'll get back to you within one
            business day with next steps — no obligation.
          </p>
          <div className={styles.actions}>
            <ArrowCta href="/contact" variant="light">
              Start a Project
            </ArrowCta>
            <a href="tel:+919003190977" className={`btn btn--outline-light ${styles.talk}`}>
              <Phone size={16} /> Talk to Us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

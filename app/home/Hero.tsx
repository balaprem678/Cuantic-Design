'use client';

import Link from 'next/link';
import { ArrowRight, ArrowDown } from 'lucide-react';
import Reveal from '../../components/site/Reveal';
import MagneticButton from '../../components/site/MagneticButton';
import { useCountUp } from '../../components/site/useCountUp';
import styles from './Hero.module.scss';

export default function Hero() {
  return (
    <>
      <section className={styles.hero}>
        {/* Background visuals */}
        <div className={styles.bgGrad} aria-hidden />
        <div className={styles.gridLines} aria-hidden />

        {/* Floating shapes */}
        <div className={styles.shapes} aria-hidden>
          <span className={styles.shape1} />
          <span className={styles.shape2} />
          <span className={styles.shape3} />
          <span className={styles.shape4} />
        </div>

        <div className={styles.inner}>
          <div className={styles.content}>
            <Reveal as="span" className="eyebrow">
              Chennai Creative Studio
            </Reveal>

            <Reveal as="h1" className={styles.headline} delay={1}>
              Design That Moves <br />
              Your Brand <span className={styles.headlineAccent}>Forward.</span>
            </Reveal>

            <Reveal as="p" className={styles.support} delay={2}>
              Graphic Design · Web Development · Digital Marketing — built for
              businesses across Chennai and beyond.
            </Reveal>

            <Reveal className={styles.ctas} delay={4}>
              <MagneticButton href="/contact" variant="accent">
                Start Your Project <ArrowRight size={18} />
              </MagneticButton>
              <MagneticButton href="/portfolio" variant="ghost">
                Explore Our Work
              </MagneticButton>
            </Reveal>

            <Reveal className={styles.meta} delay={5}>
              <div className={styles.metaItem}>
                <strong>150+</strong>
                <span>Projects Delivered</span>
              </div>
              <span className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <strong>60+</strong>
                <span>Returning Clients</span>
              </div>
              <span className={styles.metaDivider} />
              <div className={styles.metaItem}>
                <strong>1 Day</strong>
                <span>First Response</span>
              </div>
            </Reveal>
          </div>

          {/* Visual */}
          <Reveal variant="scale" className={styles.visual} delay={2}>
            <div className={styles.visualCard}>
              <div className={styles.visualRing} />
              <div className={styles.visualOrb} />
              <div className={styles.visualGrid} />
              <div className={styles.visualBadge}>
                <span className={styles.dot} />
                Studio Online · Chennai
              </div>
              <div className={styles.visualLabel}>
                <span>Brand</span>
                <span>Web</span>
                <span>Marketing</span>
              </div>
            </div>
            <div className={styles.floatChip1}>
              <strong>4.9</strong>
              <span>Client Rating</span>
            </div>
            <div className={styles.floatChip2}>
              <span>SEO</span>
              <strong>Rank #1</strong>
            </div>
          </Reveal>
        </div>

        <Link href="#who" className={styles.scrollHint} aria-label="Scroll down">
          <span>Scroll</span>
          <ArrowDown size={14} />
        </Link>
      </section>
    </>
  );
}

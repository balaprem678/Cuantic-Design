'use client';

import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Reveal from '../site/Reveal';
import styles from './WhoWeAre.module.scss';

export default function WhoWeAre() {
  return (
    <section className={styles.section} id="who">
      <div className={styles.inner}>
        <div className={styles.left}>
          <Reveal as="span" className="eyebrow">
            Who We Are
          </Reveal>
          <Reveal as="h2" className={styles.headline} delay={1}>
            Good Design <br />
            Should Do <br />
            <span className="gradient-text">Real Work.</span>
          </Reveal>
          <Reveal className={styles.ctaRow} delay={3}>
            <Link href="/about" className={styles.link}>
              More About Cuantic <ArrowRight size={18} />
            </Link>
          </Reveal>
        </div>

        <div className={styles.right}>
          <Reveal variant="right" className={styles.textCol} delay={2}>
            <p className={styles.lead}>
              Cuantic Designs is a Chennai-based creative studio built around one
              idea: good design should do real work for your business, not just
              look good in a portfolio.
            </p>
            <p className={styles.body}>
              We combine graphic design, web development, and digital marketing
              into a single team — so your brand, website, and campaigns stay
              consistent and actually perform together. No hand-offs between
              agencies. No diluted vision. Just direct work with the people
              building your project.
            </p>
            <div className={styles.points}>
              <div className={styles.point}>
                <span className={styles.pointNum}>01</span>
                <span>Design, dev, and marketing under one roof</span>
              </div>
              <div className={styles.point}>
                <span className={styles.pointNum}>02</span>
                <span>Direct access to the people doing the work</span>
              </div>
              <div className={styles.point}>
                <span className={styles.pointNum}>03</span>
                <span>Chennai-based, delivering across India</span>
              </div>
            </div>
          </Reveal>

          <Reveal variant="scale" className={styles.imageCol} delay={3}>
            <div className={styles.image}>
              <img
                src="https://images.pexels.com/photos/8117415/pexels-photo-8117415.jpeg?auto=compress&cs=tinysrgb&h=900&w=800"
                alt="Cuantic Designs studio collaboration"
                loading="lazy"
              />
              <div className={styles.imageBadge}>
                <strong>Est. 2021</strong>
                <span>Chennai · India</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

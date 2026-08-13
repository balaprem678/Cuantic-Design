'use client';

import { STATS } from '@/lib/site-data';
import { useCountUp } from '../site/useCountUp';
import Reveal from '../site/Reveal';
import styles from './StatsBar.module.scss';

function Stat({
  stat,
  delay,
}: {
  stat: (typeof STATS)[number];
  delay: 1 | 2 | 3 | 4;
}) {
  const { value, ref } = useCountUp(stat.value);
  return (
    <Reveal className={styles.stat} delay={delay}>
      <span className={styles.value} ref={ref}>
        {stat.prefix ? stat.prefix : value}
        {stat.suffix}
      </span>
      <span className={styles.label}>{stat.label}</span>
    </Reveal>
  );
}

export default function StatsBar() {
  return (
    <section className={styles.bar}>
      <div className={styles.inner}>
        {STATS.map((s, i) => (
          <Stat key={s.label} stat={s} delay={(i + 1) as 1 | 2 | 3 | 4} />
        ))}
      </div>
    </section>
  );
}

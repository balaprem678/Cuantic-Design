import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import CtaBand from '@/components/home/CtaBand';
import { TEAM, MILESTONES, VALUES } from '@/lib/site-data';
import { ArrowRight, Target, Handshake, Sparkles, MapPin } from 'lucide-react';
import Link from 'next/link';
import styles from './about.module.scss';

export const metadata: Metadata = {
  title: 'About — Cuantic Designs',
  description:
    'A Chennai-based creative studio built for direct work. Our story, how we work, values, milestones, and team.',
};

const VALUE_ICONS = [Target, Handshake, Sparkles, MapPin];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Cuantic"
        title="A Small Studio, Built for"
        highlight="Direct Work."
        subtitle="Cuantic Designs is a Chennai-based creative studio. We keep the team small on purpose — so you work directly with the people designing and building your project."
      />

      {/* Our Story */}
      <section className={styles.story}>
        <div className={styles.container}>
          <div className={styles.storyGrid}>
            <Reveal className={styles.storyText}>
              <span className="eyebrow">Our Story</span>
              <h2 className={styles.storyTitle}>
                We started Cuantic to fix a simple problem.
              </h2>
              <p>
                Brands were getting passed between agencies, freelancers, and
                account managers — and the work kept getting thinner at every
                hand-off. Design didn't match the website. The website didn't
                match the marketing. Nobody owned the whole picture.
              </p>
              <p>
                So we built a studio that does. One team handling graphic design,
                web development, and digital marketing together, based in Avadi,
                Chennai. You talk to the designer. You talk to the developer.
                You talk to the marketer. No middle layer, no diluted vision.
              </p>
              <p>
                Since 2021 we've delivered 150+ projects for startups and
                established businesses across Chennai and the rest of India —
                and we've kept the same principle the whole way: good design
                should do real work for your business.
              </p>
            </Reveal>
            <Reveal variant="scale" className={styles.storyImage} delay={2}>
              <img
                src="https://images.pexels.com/photos/6476257/pexels-photo-6476257.jpeg?auto=compress&cs=tinysrgb&h=900&w=800"
                alt="Cuantic Designs team collaboration"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className={styles.how}>
        <div className={styles.container}>
          <Reveal className={styles.howHead}>
            <span className="eyebrow">How We Work</span>
            <h2 className={styles.sectionTitle}>
              Four steps, one team, <br /> no hand-offs.
            </h2>
          </Reveal>
          <div className={styles.howGrid}>
            {[
              { n: '01', t: 'Direct access', d: 'You work with the people doing the work — not an account manager relaying messages.' },
              { n: '02', t: 'Fixed scope', d: 'We agree what is being delivered, when, and for how much — before we start.' },
              { n: '03', t: 'Regular reviews', d: 'You see work in progress at agreed checkpoints and give feedback as it develops.' },
              { n: '04', t: 'Launch & support', d: 'We hand over, launch, and stay on for support and ongoing marketing if you need it.' },
            ].map((item, i) => (
              <Reveal key={item.n} className={styles.howCard} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <span className={styles.howNum}>{item.n}</span>
                <h3>{item.t}</h3>
                <p>{item.d}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className={styles.values}>
        <div className={styles.container}>
          <Reveal className={styles.valuesHead}>
            <span className="eyebrow">Our Values</span>
            <h2 className={styles.sectionTitle}>What we won't compromise on.</h2>
          </Reveal>
          <div className={styles.valuesGrid}>
            {VALUES.map((v, i) => {
              const Icon = VALUE_ICONS[i] || Target;
              return (
                <Reveal key={v.title} className={styles.valueCard} delay={((i % 2) + 1) as 1 | 2}>
                  <span className={styles.valueIcon}>
                    <Icon size={22} />
                  </span>
                  <h3>{v.title}</h3>
                  <p>{v.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className={styles.milestones}>
        <div className={styles.container}>
          <Reveal className={styles.milestonesHead}>
            <span className="eyebrow">Milestones</span>
            <h2 className={styles.sectionTitle}>The studio's timeline.</h2>
          </Reveal>
          <div className={styles.timeline}>
            {MILESTONES.map((m, i) => (
              <Reveal key={m.year} className={styles.milestone} delay={(i + 1) as 1 | 2 | 3 | 4}>
                <div className={styles.milestoneNode}>
                  <span className={styles.milestoneDot} />
                </div>
                <div className={styles.milestoneContent}>
                  <span className={styles.milestoneYear}>{m.year}</span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Studio Culture */}
      <section className={styles.culture}>
        <div className={styles.container}>
          <div className={styles.cultureGrid}>
            <Reveal className={styles.cultureText}>
              <span className="eyebrow">Studio Culture</span>
              <h2 className={styles.sectionTitle}>Small team, sharp work.</h2>
              <p>
                We keep the studio deliberately small. It means everyone here
                owns their craft — design, code, or campaign — and you get
                senior attention on every project, not a junior learning on
                your budget.
              </p>
              <p>
                We work from Avadi, Chennai, and deliver remotely across Tamil
                Nadu and India. Most discovery and review calls happen over
                video, and we're always one message away.
              </p>
            </Reveal>
            <Reveal variant="scale" className={styles.cultureImage} delay={2}>
              <img
                src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&h=900&w=800"
                alt="Studio culture at Cuantic Designs"
                loading="lazy"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className={styles.team}>
        <div className={styles.container}>
          <Reveal className={styles.teamHead}>
            <span className="eyebrow">Meet the Team</span>
            <h2 className={styles.sectionTitle}>The people behind the work.</h2>
          </Reveal>
          <div className={styles.teamGrid}>
            {TEAM.map((member, i) => (
              <Reveal key={member.name} variant="scale" className={styles.teamCard} delay={(i + 1) as 1 | 2}>
                <div className={styles.teamImage}>
                  <img src={member.image} alt={member.name} loading="lazy" />
                </div>
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <span className={styles.teamRole}>{member.role}</span>
                  <p>{member.bio}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Training & Internships */}
      <section className={styles.training}>
        <div className={styles.container}>
          <Reveal className={styles.trainingBox}>
            <div className={styles.trainingContent}>
              <span className="eyebrow">Training & Internships</span>
              <h2 className={styles.sectionTitle}>Learning at Cuantic.</h2>
              <p>
                We take on interns and trainees from Chennai and across Tamil
                Nadu who want hands-on experience in design, development, or
                digital marketing. If you are keen to learn by doing real work
                on real projects, we'd like to hear from you.
              </p>
              <Link href="/contact" className={styles.trainingLink}>
                Apply for an internship <ArrowRight size={18} />
              </Link>
            </div>
            <div className={styles.trainingGlow} aria-hidden />
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}

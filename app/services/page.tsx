import type { Metadata } from 'next';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import CtaBand from '@/app/home/CtaBand';
import { ArrowRight, Check, Palette, Code, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import styles from './services.module.scss';

export const metadata: Metadata = {
  title: 'Services — Cuantic Designs',
  description:
    'Graphic Design, Web Development, and Digital Marketing services with deliverables, engagement options, and industries served.',
};

const ICONS = { Palette, Code, TrendingUp };

const SERVICE_DETAILS = [
  {
    slug: 'graphic-design',
    number: '01',
    title: 'Graphic Design',
    icon: 'Palette',
    image:
      'https://images.pexels.com/photos/6373857/pexels-photo-6373857.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    description:
      'Logos, brand identity, brochures, and campaign creative that stay consistent across every touchpoint. We build visual systems that scale from a business card to a billboard without losing coherence.',
    subServices: [
      'Strategy Development',
      'Branding & Corporate Identity',
      'Advertisements & Posters',
      'Brochures',
      'Banners',
      'Outdoor Creative',
    ],
    deliverables: [
      'Logo files (all formats)',
      'Brand identity guideline',
      'Print-ready artwork',
      'Social media templates',
      'Source files',
    ],
    industries: ['Retail', 'Hospitality', 'Education', 'Real Estate', 'F&B', 'Healthcare'],
    faq: [
      { q: 'Do you provide source files?', a: 'Yes. You receive editable source files along with exported, print-ready formats.' },
      { q: 'Can you refresh an existing logo?', a: 'Absolutely. We can refine and modernise an existing logo or build a complete new identity system.' },
    ],
  },
  {
    slug: 'web-development',
    number: '02',
    title: 'Web Development',
    icon: 'Code',
    image:
      'https://images.pexels.com/photos/160107/pexels-photo-160107.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    description:
      'Responsive, fast-loading websites built for search visibility — from single landing pages to full e-commerce builds. Every site we ship is tested for speed, SEO structure, and conversion.',
    subServices: [
      'Responsive Design',
      'Front-End Development',
      'WordPress & E-Commerce',
      'SEO-Friendly Structure',
      'Testing & Debugging',
      'Maintenance & Updates',
    ],
    deliverables: [
      'Fully responsive website',
      'CMS setup & training',
      'On-page SEO foundation',
      'Performance optimisation',
      'Analytics integration',
    ],
    industries: ['E-Commerce', 'SaaS', 'Education', 'Healthcare', 'Manufacturing', 'Services'],
    faq: [
      { q: 'Do you build on WordPress?', a: 'Yes, WordPress is our primary CMS for content-led sites, and we build custom e-commerce on WooCommerce or bespoke stacks.' },
      { q: 'Can you take over an existing site?', a: 'Yes. We audit the current site, fix issues, and improve performance and design without losing your content.' },
    ],
  },
  {
    slug: 'digital-marketing',
    number: '03',
    title: 'Digital Marketing',
    icon: 'TrendingUp',
    image:
      'https://images.pexels.com/photos/15595050/pexels-photo-15595050.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200',
    description:
      'SEO, social media, and paid campaigns run with monthly reporting so you always know what is working. We focus on leads and measurable growth, not vanity metrics.',
    subServices: [
      'SEO',
      'Social Media Marketing',
      'Google Ads',
      'Lead Generation',
      'Email Campaigns',
      'Content Strategy',
      'Analytics & Reporting',
    ],
    deliverables: [
      'Monthly performance report',
      'Campaign strategy document',
      'Ad creative & copy',
      'Landing page optimisation',
      'Keyword & audience research',
    ],
    industries: ['E-Commerce', 'Ed-Tech', 'Real Estate', 'Healthcare', 'Local Business', 'B2B'],
    faq: [
      { q: 'Is there a minimum commitment?', a: 'Monthly retainer engagements run on a 3-month minimum so campaigns have time to gather data and optimise.' },
      { q: 'How do you report results?', a: 'You get a monthly report covering traffic, leads, conversions, and spend — plus a review call to walk through it.' },
    ],
  },
];

const ENGAGEMENTS = [
  { title: 'Project-Based', desc: 'A fixed scope, fixed price, and agreed delivery date. Best for defined deliverables like a website or brand identity.' },
  { title: 'Monthly Retainer', desc: 'Ongoing design, development, or marketing support with a set number of hours each month. Best for growing brands.' },
  { title: 'Hourly Consulting', desc: 'Ad-hoc hours for advice, audits, or specific tasks. Best when you need expert input without a full project.' },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Creative Services Built Around"
        highlight="Your Business."
        subtitle="Three disciplines, one team. Design, development, and marketing that work together instead of in silos."
      />

      {/* Engagement options */}
      <section className={styles.engagements}>
        <div className={styles.container}>
          <Reveal className={styles.engHead}>
            <span className="eyebrow">Engagement Options</span>
            <h2>Three ways to work with us.</h2>
          </Reveal>
          <div className={styles.engGrid}>
            {ENGAGEMENTS.map((e, i) => (
              <Reveal key={e.title} className={styles.engCard} delay={(i + 1) as 1 | 2 | 3}>
                <span className={styles.engNum}>0{i + 1}</span>
                <h3>{e.title}</h3>
                <p>{e.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service detail sections */}
      {SERVICE_DETAILS.map((service, idx) => {
        const Icon = ICONS[service.icon as keyof typeof ICONS];
        const reversed = idx % 2 === 1;
        return (
          <section
            key={service.slug}
            className={`${styles.serviceSection} ${reversed ? styles.reversed : ''}`}
            id={service.slug}
          >
            <div className={styles.container}>
              <div className={styles.serviceGrid}>
                <Reveal className={styles.serviceImage}>
                  <img src={service.image} alt={service.title} loading="lazy" />
                  <div className={styles.serviceImageBadge}>
                    <span className={styles.serviceIcon}>
                      <Icon size={22} />
                    </span>
                    <span className={styles.serviceNumber}>{service.number}</span>
                  </div>
                </Reveal>

                <Reveal variant={reversed ? 'left' : 'right'} className={styles.serviceContent} delay={2}>
                  <span className="eyebrow">{service.number} — Service</span>
                  <h2 className={styles.serviceTitle}>{service.title}</h2>
                  <p className={styles.serviceDesc}>{service.description}</p>

                  <div className={styles.subBlock}>
                    <h4>Sub-services</h4>
                    <div className={styles.tagList}>
                      {service.subServices.map((s) => (
                        <span key={s} className={styles.tag}>{s}</span>
                      ))}
                    </div>
                  </div>

                  <div className={styles.twoCol}>
                    <div className={styles.subBlock}>
                      <h4>Deliverables</h4>
                      <ul className={styles.checkList}>
                        {service.deliverables.map((d) => (
                          <li key={d}><Check size={16} /> {d}</li>
                        ))}
                      </ul>
                    </div>
                    <div className={styles.subBlock}>
                      <h4>Industries Served</h4>
                      <ul className={styles.checkList}>
                        {service.industries.map((d) => (
                          <li key={d}><Check size={16} /> {d}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={styles.serviceFaq}>
                    {service.faq.map((f) => (
                      <div key={f.q} className={styles.faqItem}>
                        <strong>{f.q}</strong>
                        <p>{f.a}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/contact" className={styles.serviceCta}>
                    Start a {service.title} project <ArrowRight size={18} />
                  </Link>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CtaBand />
    </>
  );
}

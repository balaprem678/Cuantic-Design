'use client';

import { useState } from 'react';
import PageHero from '@/components/site/PageHero';
import Reveal from '@/components/site/Reveal';
import { Phone, Mail, MapPin, Clock, Linkedin, Facebook, Instagram, Check, ArrowRight } from 'lucide-react';
import { SITE } from '@/lib/site-data';
import styles from './contact.module.scss';

const SERVICE_OPTIONS = [
  'Graphic Design',
  'Web Development',
  'Digital Marketing',
  'Branding & Identity',
  'Other / Not sure yet',
];

const BUDGET_RANGES = [
  'Under ₹25,000',
  '₹25,000 – ₹75,000',
  '₹75,000 – ₹2,00,000',
  '₹2,00,000+',
  "Let's discuss",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    details: '',
    budget: '',
  });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (key: string, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's Start Your"
        highlight="Project."
        subtitle="Tell us a bit about what you need and we'll respond within one business day."
      />

      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.grid}>
            {/* Left — contact info */}
            <Reveal variant="left" className={styles.info}>
              <span className="eyebrow">Get in Touch</span>
              <h2 className={styles.infoTitle}>
                We're here <br /> and ready to help.
              </h2>
              <p className={styles.infoText}>
                Reach out by phone, email, or the form. The first scoping call
                is always free — no obligation, no pressure.
              </p>

              <div className={styles.contactItems}>
                <a href={`tel:${SITE.phoneHref}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}><Phone size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>Phone</span>
                    <span className={styles.contactValue}>{SITE.phone}</span>
                  </div>
                </a>
                <a href={`mailto:${SITE.email}`} className={styles.contactItem}>
                  <span className={styles.contactIcon}><Mail size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{SITE.email}</span>
                  </div>
                </a>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}><MapPin size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>Location</span>
                    <span className={styles.contactValue}>{SITE.address}</span>
                  </div>
                </div>
                <div className={styles.contactItem}>
                  <span className={styles.contactIcon}><Clock size={18} /></span>
                  <div>
                    <span className={styles.contactLabel}>Business Hours</span>
                    <span className={styles.contactValue}>{SITE.hours}</span>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className={styles.map}>
                <iframe
                  title="Cuantic Designs location"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapsQuery)}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>

              {/* Socials */}
              <div className={styles.socials}>
                <span className={styles.socialsLabel}>Follow us</span>
                <div className={styles.socialRow}>
                  <a href={SITE.social.linkedin} aria-label="LinkedIn" className={styles.social}><Linkedin size={18} /></a>
                  <a href={SITE.social.facebook} aria-label="Facebook" className={styles.social}><Facebook size={18} /></a>
                  <a href={SITE.social.instagram} aria-label="Instagram" className={styles.social}><Instagram size={18} /></a>
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal variant="right" className={styles.formWrap} delay={2}>
              {submitted ? (
                <div className={styles.success}>
                  <span className={styles.successIcon}><Check size={32} /></span>
                  <h2>Thank you — enquiry received.</h2>
                  <p>
                    We've got your details. Someone from the studio will get back
                    to you within one business day with next steps.
                  </p>
                  <button className={styles.successBtn} onClick={() => setSubmitted(false)}>
                    Send another enquiry
                  </button>
                </div>
              ) : (
                <form className={styles.form} onSubmit={onSubmit}>
                  <h2 className={styles.formTitle}>Send an enquiry</h2>
                  <p className={styles.formTrust}>
                    <Check size={15} /> First scoping call is free.
                  </p>

                  <div className={styles.field}>
                    <label htmlFor="name">Full Name</label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => update('name', e.target.value)}
                      placeholder="Your name"
                    />
                  </div>

                  <div className={styles.fieldRow}>
                    <div className={styles.field}>
                      <label htmlFor="email">Email Address</label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => update('email', e.target.value)}
                        placeholder="you@example.com"
                      />
                    </div>
                    <div className={styles.field}>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => update('phone', e.target.value)}
                        placeholder="+91"
                      />
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="service">Service Interested In</label>
                    <select
                      id="service"
                      required
                      value={form.service}
                      onChange={(e) => update('service', e.target.value)}
                    >
                      <option value="" disabled>Select a service</option>
                      {SERVICE_OPTIONS.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="budget">Budget Range</label>
                    <select
                      id="budget"
                      value={form.budget}
                      onChange={(e) => update('budget', e.target.value)}
                    >
                      <option value="" disabled>Select a range (optional)</option>
                      {BUDGET_RANGES.map((b) => (
                        <option key={b} value={b}>{b}</option>
                      ))}
                    </select>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="details">Project Details</label>
                    <textarea
                      id="details"
                      required
                      rows={5}
                      value={form.details}
                      onChange={(e) => update('details', e.target.value)}
                      placeholder="Tell us what you're building, your timeline, and anything we should know."
                    />
                  </div>

                  <button type="submit" className={styles.submit}>
                    Submit Enquiry <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from 'next/link';
import { Phone, Mail, MapPin, Linkedin, Facebook, Instagram, ArrowUpRight } from 'lucide-react';
import { SITE, NAV_LINKS, SERVICES } from '@/lib/site-data';
import styles from './Footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brandCol}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>
              <span />
            </span>
            <span>CUANTIC DESIGNS</span>
          </Link>
          <p className={styles.tagline}>{SITE.tagline}</p>
          <p className={styles.desc}>
            A Chennai-based creative studio helping brands look sharper, launch
            faster, and market smarter.
          </p>
          <div className={styles.socials}>
            <a href={SITE.social.linkedin} aria-label="LinkedIn" className={styles.social}>
              <Linkedin size={18} />
            </a>
            <a href={SITE.social.facebook} aria-label="Facebook" className={styles.social}>
              <Facebook size={18} />
            </a>
            <a href={SITE.social.instagram} aria-label="Instagram" className={styles.social}>
              <Instagram size={18} />
            </a>
          </div>
        </div>

        <div className={styles.col}>
          <h4>Navigation</h4>
          <ul>
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <Link href={l.href}>{l.label}</Link>
              </li>
            ))}
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/careers">Careers</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Services</h4>
          <ul>
            <li><Link href="/services">Web Design</Link></li>
            <li><Link href="/services">Graphic Design</Link></li>
            <li><Link href="/services">Digital Marketing</Link></li>
          </ul>
        </div>

        <div className={styles.col}>
          <h4>Contact</h4>
          <ul className={styles.contactList}>
            <li>
              <Phone size={15} />
              <a href={`tel:${SITE.phoneHref}`}>{SITE.phone}</a>
            </li>
            <li>
              <Mail size={15} />
              <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>{SITE.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={styles.legal}>
          <span>© 2026 Cuantic Designs. All rights reserved.</span>
          <div className={styles.legalLinks}>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/terms">Terms of Service</Link>
          </div>
        </div>
        <Link href="/contact" className={styles.ctaPill}>
          Start a Project <ArrowUpRight size={16} />
        </Link>
      </div>
    </footer>
  );
}

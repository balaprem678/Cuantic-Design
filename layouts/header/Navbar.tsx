'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { NAV_LINKS } from '@/lib/site-data';
import styles from './Navbar.module.scss';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActiveLink = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="Cuantic Designs home">
            <span className={styles.logoMark}>
              <span />
            </span>
            <span className={styles.logoText}>
              CUANTIC <span>DESIGNS</span>
            </span>
          </Link>

          <nav className={styles.nav}>
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${styles.navLink} ${
                  isActiveLink(link.href) ? styles.active : ''
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className={styles.actions}>
            <Link href="/contact" className={styles.cta}>
              Start a Project <ArrowRight size={16} />
            </Link>
            <button
              className={styles.burger}
              aria-label="Open menu"
              onClick={() => setOpen(true)}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div className={`${styles.drawer} ${open ? styles.drawerOpen : ''}`}>
        <div className={styles.drawerHead}>
          <span className={styles.logoText}>
            CUANTIC <span>DESIGNS</span>
          </span>
          <button aria-label="Close menu" onClick={() => setOpen(false)}>
            <X size={22} />
          </button>
        </div>
        <nav className={styles.drawerNav}>
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.drawerLink}
              style={{ transitionDelay: `${0.06 * i + 0.1}s` }}
              onClick={() => setOpen(false)}
            >
              <span>{link.label}</span>
              <ArrowRight size={18} />
            </Link>
          ))}
        </nav>
        <Link href="/contact" className={styles.drawerCta} onClick={() => setOpen(false)}>
          Start a Project <ArrowRight size={18} />
        </Link>
      </div>
      {open && <div className={styles.scrim} onClick={() => setOpen(false)} />}
    </>
  );
}

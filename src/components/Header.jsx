import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import styles from './Header.module.css';
import { NAV_LINKS } from '../data/content';
import { useBooking } from '../context/BookingContext';
import { useMediaQuery } from '../hooks/useMediaQuery';
import { useScrolled } from '../hooks/useScrolled';
import { waLink } from '../utils/whatsapp';

const waLinkGeneral = waLink('¡Hola! Quiero hacer una consulta en Velour Clinique Esthétique.');

export default function Header() {
  const { openBooking } = useBooking();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isDesktop = useMediaQuery('(min-width: 940px)');
  const scrolled = useScrolled(8);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.logoLink}>
          <img src="/assets/logo-wordmark-dark.png" alt="Velour Clinique Esthétique" className={styles.logoImg} />
        </a>

        {isDesktop && (
          <nav className={styles.desktopNav} style={{ display: 'flex' }}>
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
        )}

        {isDesktop && (
          <div className={styles.desktopActions} style={{ display: 'flex' }}>
            <a href={waLinkGeneral} target="_blank" rel="noopener" aria-label="WhatsApp" className={styles.waIconLink}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
              </svg>
            </a>
            <button type="button" onClick={() => openBooking(null)} className={styles.bookBtn}>
              Reservar consulta
            </button>
          </div>
        )}

        {!isDesktop && (
          <button
            type="button"
            aria-label="Menú"
            onClick={() => setMobileMenuOpen((v) => !v)}
            className={styles.hamburgerBtn}
            style={{ display: 'flex' }}
          >
            <span
              className={styles.hamLine}
              style={{ transform: mobileMenuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none' }}
            />
            <span className={styles.hamLine} style={{ opacity: mobileMenuOpen ? 0 : 1 }} />
            <span
              className={styles.hamLine}
              style={{ transform: mobileMenuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none' }}
            />
          </button>
        )}
      </div>

      <AnimatePresence>
        {!isDesktop && mobileMenuOpen && (
          <motion.div
            className={styles.mobileMenu}
            style={{ display: 'flex' }}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={`#${link.id}`} onClick={closeMobileMenu} className={styles.mobileNavLink}>
                {link.label}
              </a>
            ))}
            <div className={styles.mobileActionsRow}>
              <a href={waLinkGeneral} target="_blank" rel="noopener" className={styles.mobileWaLink}>
                WhatsApp
              </a>
              <button
                type="button"
                onClick={() => {
                  closeMobileMenu();
                  openBooking(null);
                }}
                className={styles.mobileBookBtn}
              >
                Reservar
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

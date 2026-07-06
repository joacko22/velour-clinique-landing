import { motion } from 'motion/react';
import styles from './ConsultCTA.module.css';
import { useBooking } from '../context/BookingContext';
import { waLink } from '../utils/whatsapp';

const waLinkGeneral = waLink('¡Hola! Quiero hacer una consulta en Velour Clinique Esthétique.');

export default function ConsultCTA() {
  const { openBooking } = useBooking();

  return (
    <section id="consultas" className={styles.section}>
      <div className={styles.glow} />
      <motion.div
        className={styles.inner}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>CONSULTAS</span>
          <span className={styles.kickerLine} />
        </div>
        <h2 className={styles.title}>Demos el primer paso</h2>
        <p className={styles.subtitle}>
          Escribinos por WhatsApp para resolver tus dudas, o reservá tu consulta online en simples pasos.
        </p>
        <div className={styles.ctaRow}>
          <a href={waLinkGeneral} target="_blank" rel="noopener" className={styles.waLink}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
            Escribir por WhatsApp
          </a>
          <motion.button
            type="button"
            onClick={() => openBooking(null)}
            whileHover={{ filter: 'brightness(1.08)' }}
            whileTap={{ scale: 0.97 }}
            className={styles.bookBtn}
          >
            Reservar consulta
          </motion.button>
        </div>
        <div className={styles.note}>Turno con seña reembolsable a cuenta del tratamiento.</div>
      </motion.div>
    </section>
  );
}

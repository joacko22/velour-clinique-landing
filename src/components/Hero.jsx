import { motion } from 'motion/react';
import styles from './Hero.module.css';
import { useBooking } from '../context/BookingContext';

export default function Hero() {
  const { openBooking } = useBooking();

  return (
    <section id="inicio" className={styles.hero}>
      <motion.div
        className={styles.glow}
        animate={{ opacity: [0.85, 1, 0.85], scale: [1, 1.05, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className={styles.noisePattern} />

      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>CLINIQUE ESTHÉTIQUE</span>
        </div>

        <h1 className={styles.title}>
          El arte de realzar tu <span className={styles.titleAccent}>belleza natural</span>
        </h1>

        <p className={styles.subtitle}>
          Combinamos tecnología médica de vanguardia con un trato cálido y personalizado, para que cada
          tratamiento se sienta tan bien como se ve.
        </p>

        <div className={styles.ctaRow}>
          <motion.button
            type="button"
            onClick={() => openBooking(null)}
            whileHover={{ filter: 'brightness(1.08)', y: -2 }}
            whileTap={{ scale: 0.97 }}
            className={styles.primaryCta}
          >
            Reservar consulta
          </motion.button>
          <a href="#tratamientos" className={styles.secondaryCta}>
            Ver tratamientos
          </a>
        </div>

        <a href="#nosotros" className={styles.scrollHint}>
          <span className={styles.scrollHintText}>DESCUBRÍ MÁS</span>
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <path d="M6 9l6 6 6-6"></path>
          </motion.svg>
        </a>
      </motion.div>
    </section>
  );
}

import { useEffect, useMemo, useRef, useState } from 'react';
import { motion } from 'motion/react';
import styles from './Treatments.module.css';
import { TREATMENTS, CATEGORIES, fmtPrice } from '../data/content';
import { SHOW_PRICES } from '../config';
import { useBooking } from '../context/BookingContext';
import PhotoPlaceholder from './PhotoPlaceholder';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

export default function Treatments() {
  const { openBooking } = useBooking();
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [paused, setPaused] = useState(false);
  const trackRef = useRef(null);
  const timerRef = useRef(null);

  const filteredTreatments = useMemo(
    () => TREATMENTS.filter((t) => activeCategory === 'Todos' || t.cat === activeCategory),
    [activeCategory]
  );

  const startAutoplay = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (paused) return;
      const el = trackRef.current;
      if (!el) return;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (atEnd) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: 340, behavior: 'smooth' });
      }
    }, 3800);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paused]);

  const setCategory = (cat) => {
    setActiveCategory(cat);
    if (trackRef.current) trackRef.current.scrollTo({ left: 0, behavior: 'auto' });
  };

  const scrollLeft = () => trackRef.current?.scrollBy({ left: -340, behavior: 'smooth' });
  const scrollRight = () => trackRef.current?.scrollBy({ left: 340, behavior: 'smooth' });

  return (
    <section id="tratamientos" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>TRATAMIENTOS</span>
        </div>

        <div className={styles.headerRow}>
          <h2 className={styles.title}>Un protocolo para cada objetivo</h2>
          <div className={styles.arrowsRow}>
            <button type="button" onClick={scrollLeft} aria-label="Anterior" className={styles.arrowBtn}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"></path>
              </svg>
            </button>
            <button type="button" onClick={scrollRight} aria-label="Siguiente" className={styles.arrowBtn}>
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"></path>
              </svg>
            </button>
          </div>
        </div>

        <div className={styles.chipsRow}>
          {CATEGORIES.map((cat) => (
            <motion.button
              key={cat}
              type="button"
              onClick={() => setCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`${styles.chip} ${activeCategory === cat ? styles.chipActive : ''}`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        <motion.div
          ref={trackRef}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          className={styles.track}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
        >
          {filteredTreatments.map((t) => (
            <motion.div key={t.id} variants={itemVariants} className={styles.card}>
              <PhotoPlaceholder label={t.cat} tone={t.tone} className={styles.cardImage} />
              <div className={styles.cardBody}>
                <div className={styles.cardCat}>{t.cat}</div>
                <div className={styles.cardName}>{t.name}</div>
                <div className={styles.cardDesc}>{t.desc}</div>
                <div className={styles.cardFooter}>
                  {SHOW_PRICES && <span className={styles.cardPrice}>Desde {fmtPrice(t.price)}</span>}
                  <button type="button" onClick={() => openBooking(t.id)} className={styles.cardReserve}>
                    Reservar
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M13 6l6 6-6 6"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

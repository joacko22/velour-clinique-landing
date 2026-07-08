import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import styles from './BeforeAfterGallery.module.css';
import { GALLERY } from '../data/content';
import { useBooking } from '../context/BookingContext';
import PhotoPlaceholder from './PhotoPlaceholder';

export default function BeforeAfterGallery() {
  const { booking } = useBooking();
  const [galleryIndex, setGalleryIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [paused, setPaused] = useState(false);

  const sliderRef = useRef(null);
  const timerRef = useRef(null);
  const moveHandlerRef = useRef(null);
  const upHandlerRef = useRef(null);

  useEffect(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      if (paused || booking.open) return;
      setGalleryIndex((i) => (i + 1) % GALLERY.length);
      setSliderPos(50);
    }, 4800);
    return () => clearInterval(timerRef.current);
  }, [paused, booking.open]);

  useEffect(() => {
    return () => {
      if (moveHandlerRef.current) window.removeEventListener('pointermove', moveHandlerRef.current);
      if (upHandlerRef.current) window.removeEventListener('pointerup', upHandlerRef.current);
    };
  }, []);

  const updateSliderFromClientX = (clientX) => {
    const el = sliderRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    let pct = ((clientX - rect.left) / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setSliderPos(pct);
  };

  const onSliderPointerDown = (e) => {
    e.preventDefault();
    updateSliderFromClientX(e.clientX);
    const onMove = (ev) => updateSliderFromClientX(ev.clientX);
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
    moveHandlerRef.current = onMove;
    upHandlerRef.current = onUp;
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  };

  const galleryPrev = () => {
    setGalleryIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);
    setSliderPos(50);
  };
  const galleryNext = () => {
    setGalleryIndex((i) => (i + 1) % GALLERY.length);
    setSliderPos(50);
  };

  const currentItem = GALLERY[galleryIndex];
  const sliderClipRight = 100 - sliderPos;

  return (
    <section id="galeria" className={styles.section}>
      <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)} className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>ANTES Y DESPUÉS</span>
        </div>
        <h2 className={styles.title}>Resultados que hablan por sí solos</h2>
        <p className={styles.subtitle}>
          Deslizá para comparar. Fotos ilustrativas — los resultados varían según cada paciente.
        </p>

        <div ref={sliderRef} onPointerDown={onSliderPointerDown} className={styles.slider}>
          <div className={styles.layerFull}>
            <PhotoPlaceholder label="Después" tone="gold" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className={styles.layerFull} style={{ clipPath: `inset(0 ${sliderClipRight}% 0 0)` }}>
            <PhotoPlaceholder label="Antes" tone="espresso" style={{ width: '100%', height: '100%' }} />
          </div>
          <div className={styles.handleTrack} style={{ left: `${sliderPos}%` }}>
            <div className={styles.handleLine} />
            <div className={styles.handleKnob}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M8 7l-5 5 5 5M16 7l5 5-5 5"></path>
              </svg>
            </div>
          </div>
          <div className={styles.tagLeft}>ANTES</div>
          <div className={styles.tagRight}>DESPUÉS</div>
        </div>

        <div className={styles.controlsRow}>
          <button type="button" onClick={galleryPrev} aria-label="Anterior" className={styles.arrowBtn}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"></path>
            </svg>
          </button>

          <div className={styles.captionCol}>
            <motion.div key={currentItem.name} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} className={styles.captionName}>
              {currentItem.name}
            </motion.div>
            <div className={styles.captionDetail}>{currentItem.detail}</div>
            <div className={styles.dotsRow}>
              {GALLERY.map((g, i) => (
                <button
                  key={g.name}
                  type="button"
                  onClick={() => {
                    setGalleryIndex(i);
                    setSliderPos(50);
                  }}
                  aria-label="Ir a resultado"
                  className={styles.dot}
                  style={{
                    width: i === galleryIndex ? '9px' : '7px',
                    height: i === galleryIndex ? '9px' : '7px',
                    background: i === galleryIndex ? '#A9723F' : 'rgba(38,38,40,0.2)',
                  }}
                />
              ))}
            </div>
          </div>

          <button type="button" onClick={galleryNext} aria-label="Siguiente" className={styles.arrowBtn}>
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

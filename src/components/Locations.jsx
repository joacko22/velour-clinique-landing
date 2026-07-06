import { motion } from 'motion/react';
import styles from './Locations.module.css';
import { LOCATIONS } from '../data/content';

const locationsList = LOCATIONS.map((loc) => ({
  ...loc,
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(loc.name + ', ' + loc.address),
}));

export default function Locations() {
  return (
    <section id="ubicaciones" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>UBICACIONES</span>
        </div>
        <h2 className={styles.title}>Te esperamos en nuestras sedes</h2>

        <div className={styles.row}>
          <motion.div
            className={styles.mapPanel}
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className={styles.mapGrid} />
            <div className={styles.blobA} />
            <div className={styles.blobB} />
            {locationsList.map((pin) => (
              <div key={pin.id} className={styles.pin} style={{ top: pin.top, left: pin.left }}>
                <div className={styles.pinLabel}>{pin.name}</div>
                <div className={styles.pinDot} />
              </div>
            ))}
          </motion.div>

          <div className={styles.cardsCol}>
            {locationsList.map((loc, i) => (
              <motion.div
                key={loc.id}
                className={styles.locationCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.1 }}
              >
                <div className={styles.locationName}>{loc.name}</div>
                <div className={styles.locationAddress}>{loc.address}</div>
                <div className={styles.locationMeta}>{loc.hours}</div>
                <div className={styles.locationMeta}>{loc.phone}</div>
                <a href={loc.mapsUrl} target="_blank" rel="noopener" className={styles.locationLink}>
                  Cómo llegar
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M13 6l6 6-6 6"></path>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

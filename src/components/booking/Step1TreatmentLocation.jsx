import { motion } from 'motion/react';
import styles from './Booking.module.css';
import { useBooking } from '../../context/BookingContext';
import { TREATMENTS, LOCATIONS } from '../../data/content';
import { fmtPrice } from '../../data/content';
import { SHOW_PRICES } from '../../config';

export default function Step1TreatmentLocation() {
  const { booking, onTreatmentSelect, onLocationSelect, goToStep2 } = useBooking();

  const step1Disabled = !(booking.treatmentId && booking.locationId);

  return (
    <div>
      <h3 className={styles.stepTitle}>Elegí tu tratamiento y sede</h3>

      <label className={styles.fieldLabel}>Tratamiento</label>
      <select value={booking.treatmentId} onChange={onTreatmentSelect} className={styles.select}>
        <option value="">Seleccioná un tratamiento…</option>
        {TREATMENTS.map((t) => (
          <option key={t.id} value={t.id}>
            {t.cat} · {t.name}
            {SHOW_PRICES ? ` — ${fmtPrice(t.price)}` : ''}
          </option>
        ))}
      </select>

      <label className={styles.fieldLabel}>Sede</label>
      <select value={booking.locationId} onChange={onLocationSelect} className={`${styles.select} ${styles.locationSelect}`}>
        <option value="">Seleccioná una sede…</option>
        {LOCATIONS.map((loc) => (
          <option key={loc.id} value={loc.id}>
            {loc.name}
          </option>
        ))}
      </select>

      <motion.button
        type="button"
        disabled={step1Disabled}
        onClick={goToStep2}
        whileHover={step1Disabled ? undefined : { scale: 1.02 }}
        whileTap={step1Disabled ? undefined : { scale: 0.98 }}
        className={styles.primaryButton}
        style={{
          background: step1Disabled ? 'rgba(43,36,32,0.12)' : 'var(--gold-gradient)',
          color: step1Disabled ? 'rgba(43,36,32,0.35)' : '#2B2420',
        }}
      >
        Continuar
      </motion.button>
    </div>
  );
}

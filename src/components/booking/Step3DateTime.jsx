import { motion } from 'motion/react';
import styles from './Booking.module.css';
import { useBooking } from '../../context/BookingContext';

export default function Step3DateTime() {
  const { booking, datesList, timeSlots, setDate, setTime, confirmBooking, selectedTreatmentName, selectedLocationName } = useBooking();

  const step3Disabled = !(booking.date && booking.time);

  return (
    <div>
      <div className={styles.confirmBanner}>
        ✓ {selectedTreatmentName} · {selectedLocationName} · Seña abonada
      </div>
      <h3 className={styles.stepTitle}>Elegí el día y horario</h3>

      <div className={styles.dateChipsRow}>
        {datesList.map((d) => {
          const selected = booking.date === d.iso;
          return (
            <button
              key={d.iso}
              type="button"
              onClick={() => setDate(d.iso)}
              className={`${styles.dateChip} ${selected ? styles.active : ''}`}
            >
              <div className={styles.dateChipWeekday}>{d.weekday}</div>
              <div className={styles.dateChipDay}>{d.day}</div>
              <div className={styles.dateChipMonth}>{d.month}</div>
            </button>
          );
        })}
      </div>

      <div className={styles.timeChipsGrid}>
        {timeSlots.map((t) => {
          const selected = booking.time === t;
          return (
            <button
              key={t}
              type="button"
              onClick={() => setTime(t)}
              className={`${styles.timeChip} ${selected ? styles.active : ''}`}
            >
              {t}
            </button>
          );
        })}
      </div>

      <motion.button
        type="button"
        disabled={step3Disabled}
        onClick={confirmBooking}
        whileHover={step3Disabled ? undefined : { scale: 1.02 }}
        whileTap={step3Disabled ? undefined : { scale: 0.98 }}
        className={styles.primaryButton}
        style={{
          background: step3Disabled ? 'rgba(43,36,32,0.12)' : 'var(--gold-gradient)',
          color: step3Disabled ? 'rgba(43,36,32,0.35)' : '#2B2420',
        }}
      >
        Confirmar turno
      </motion.button>
    </div>
  );
}

import { AnimatePresence, motion } from 'motion/react';
import styles from './Booking.module.css';
import { useBooking } from '../../context/BookingContext';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import Step1TreatmentLocation from './Step1TreatmentLocation';
import Step2Deposit from './Step2Deposit';
import Step3DateTime from './Step3DateTime';
import Step4Confirmation from './Step4Confirmation';

const STEP_LABELS = ['Tratamiento', 'Seña', 'Turno', 'Listo'];

export default function BookingModal() {
  const { booking, closeBooking } = useBooking();
  const showStepLabels = useMediaQuery('(min-width: 480px)');

  return (
    <AnimatePresence>
      {booking.open && (
        <motion.div
          className={styles.backdrop}
          onClick={closeBooking}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={styles.modal}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.94, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button type="button" onClick={closeBooking} aria-label="Cerrar" className={styles.closeBtn}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#262628" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 6l12 12M18 6L6 18"></path>
              </svg>
            </button>

            <img src="/assets/logo-full-light.png" alt="Velour" className={styles.logo} />

            <div className={styles.progressRow}>
              {STEP_LABELS.map((label, i) => {
                const num = i + 1;
                const active = booking.step === num;
                const done = booking.step > num;
                return (
                  <div key={label} className={styles.progressStep}>
                    <div
                      className={styles.progressCircle}
                      style={{
                        background: active || done ? 'var(--gold-gradient)' : 'rgba(38,38,40,0.08)',
                        color: active || done ? '#262628' : 'rgba(38,38,40,0.4)',
                      }}
                    >
                      {done ? '✓' : num}
                    </div>
                    <span
                      className={styles.progressLabel}
                      style={{
                        color: active ? '#262628' : 'rgba(38,38,40,0.4)',
                        display: showStepLabels ? 'inline' : 'none',
                      }}
                    >
                      {label}
                    </span>
                    {num < 4 && <span className={styles.progressLine} />}
                  </div>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={booking.step}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.2 }}
              >
                {booking.step === 1 && <Step1TreatmentLocation />}
                {booking.step === 2 && <Step2Deposit />}
                {booking.step === 3 && <Step3DateTime />}
                {booking.step === 4 && <Step4Confirmation />}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { motion } from 'motion/react';
import styles from './Booking.module.css';
import { useBooking } from '../../context/BookingContext';

export default function Step2Deposit() {
  const {
    booking,
    selectedTreatmentName,
    selectedLocationName,
    depositFormatted,
    payDeposit,
    goToStep1,
  } = useBooking();

  const payButtonDisabled = booking.paying || booking.paid;
  let payButtonText = 'Pagar seña con Mercado Pago';
  if (booking.paying) payButtonText = 'Procesando pago…';
  if (booking.paid) payButtonText = '¡Pago confirmado!';

  const payButtonBg = booking.paid ? '#3FA85C' : booking.paying ? 'rgba(43,36,32,0.5)' : 'var(--gold-gradient)';
  const payButtonColor = booking.paid || booking.paying ? '#FFFFFF' : '#2B2420';
  const showBack = !(booking.paying || booking.paid);

  return (
    <div>
      <h3 className={styles.stepTitle}>Confirmá tu seña</h3>

      <div className={styles.summaryCard}>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Tratamiento</span>
          <span className={styles.value}>{selectedTreatmentName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Sede</span>
          <span className={styles.value}>{selectedLocationName}</span>
        </div>
        <div className={styles.summaryTotalRow}>
          <span className={styles.label}>Seña para reservar</span>
          <span className={styles.value}>{depositFormatted}</span>
        </div>
      </div>

      <motion.button
        type="button"
        disabled={payButtonDisabled}
        onClick={payDeposit}
        whileHover={payButtonDisabled ? undefined : { scale: 1.02 }}
        whileTap={payButtonDisabled ? undefined : { scale: 0.98 }}
        className={`${styles.primaryButton} ${styles.payButton}`}
        style={{ background: payButtonBg, color: payButtonColor }}
      >
        {booking.paying && (
          <motion.span
            className={styles.spinner}
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 0.7, ease: 'linear' }}
          />
        )}
        {payButtonText}
      </motion.button>

      <p className={styles.simDisclaimer}>
        Simulación de pago vía Mercado Pago — la integración real se conecta próximamente.
      </p>

      {showBack && (
        <button type="button" onClick={goToStep1} className={styles.backLink}>
          ← Volver
        </button>
      )}
    </div>
  );
}

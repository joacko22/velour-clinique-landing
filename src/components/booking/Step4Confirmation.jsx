import styles from './Booking.module.css';
import { useBooking } from '../../context/BookingContext';

export default function Step4Confirmation() {
  const {
    booking,
    selectedTreatmentName,
    selectedLocationAddress,
    confirmedDateLong,
    depositFormatted,
    gcalLink,
    waLinkConfirm,
    closeBooking,
  } = useBooking();

  return (
    <div style={{ textAlign: 'center' }}>
      <div className={styles.successIcon}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#A9723F" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 12l5 5L20 6"></path>
        </svg>
      </div>
      <h3 className={styles.step4Title}>¡Tu turno está confirmado!</h3>
      <p className={styles.step4Subtitle}>Te esperamos. Este es tu resumen:</p>

      <div className={`${styles.summaryCard} ${styles.left}`}>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Tratamiento</span>
          <span className={styles.value}>{selectedTreatmentName}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Sede</span>
          <span className={styles.value}>{selectedLocationAddress}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Fecha</span>
          <span className={styles.value}>{confirmedDateLong}</span>
        </div>
        <div className={styles.summaryRow}>
          <span className={styles.label}>Horario</span>
          <span className={styles.value}>{booking.time}</span>
        </div>
        <div className={styles.summaryTotalRow}>
          <span className={styles.label}>Seña abonada</span>
          <span className={styles.value}>{depositFormatted}</span>
        </div>
      </div>

      <div className={styles.actionsColumn}>
        <a href={gcalLink} target="_blank" rel="noopener" className={styles.actionLink}>
          Agregar a Google Calendar
        </a>
        <a href={waLinkConfirm} target="_blank" rel="noopener" className={styles.actionLinkWhatsapp}>
          Hablar por WhatsApp
        </a>
        <button type="button" onClick={closeBooking} className={styles.actionBackHome}>
          Volver al inicio
        </button>
      </div>
    </div>
  );
}

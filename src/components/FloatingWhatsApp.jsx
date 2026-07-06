import { AnimatePresence, motion } from 'motion/react';
import styles from './FloatingWhatsApp.module.css';
import { useBooking } from '../context/BookingContext';
import { waLink } from '../utils/whatsapp';

const waLinkGeneral = waLink('¡Hola! Quiero hacer una consulta en Velour Clinique Esthétique.');

export default function FloatingWhatsApp() {
  const { booking } = useBooking();

  return (
    <AnimatePresence>
      {!booking.open && (
        <motion.a
          href={waLinkGeneral}
          target="_blank"
          rel="noopener"
          aria-label="Chatear por WhatsApp"
          className={styles.floatingBtn}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.6 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
          </svg>
        </motion.a>
      )}
    </AnimatePresence>
  );
}

import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { TREATMENTS, LOCATIONS, TIME_SLOTS, fmtPrice } from '../data/content';
import { DEPOSIT_AMOUNT } from '../config';
import { buildAvailableDates } from '../utils/dates';
import { waLink } from '../utils/whatsapp';
import { buildGcalLink } from '../utils/gcal';

const BookingContext = createContext(null);

const initialBooking = {
  open: false,
  step: 1,
  treatmentId: '',
  locationId: '',
  date: '',
  time: '',
  paying: false,
  paid: false,
};

export function BookingProvider({ children }) {
  const [booking, setBooking] = useState(initialBooking);
  const payTimersRef = useRef([]);
  const datesList = useMemo(() => buildAvailableDates(), []);

  useEffect(() => {
    return () => {
      payTimersRef.current.forEach(clearTimeout);
    };
  }, []);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape' && booking.open) closeBooking();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [booking.open]);

  const openBooking = (treatmentId) => {
    setBooking({ ...initialBooking, open: true, treatmentId: treatmentId || '' });
  };

  const closeBooking = () => {
    setBooking((s) => ({ ...s, open: false }));
  };

  const goToStep1 = () => setBooking((s) => ({ ...s, step: 1 }));
  const goToStep2 = () => setBooking((s) => ({ ...s, step: 2 }));

  const onTreatmentSelect = (e) => {
    const v = e.target.value;
    setBooking((s) => ({ ...s, treatmentId: v }));
  };
  const onLocationSelect = (e) => {
    const v = e.target.value;
    setBooking((s) => ({ ...s, locationId: v }));
  };

  const setDate = (iso) => setBooking((s) => ({ ...s, date: iso }));
  const setTime = (t) => setBooking((s) => ({ ...s, time: t }));

  const payDeposit = () => {
    setBooking((s) => ({ ...s, paying: true }));
    const t1 = setTimeout(() => {
      setBooking((s) => ({ ...s, paying: false, paid: true }));
      const t2 = setTimeout(() => {
        setBooking((s) => ({ ...s, step: 3 }));
      }, 900);
      payTimersRef.current.push(t2);
    }, 1400);
    payTimersRef.current.push(t1);
  };

  const confirmBooking = () => setBooking((s) => ({ ...s, step: 4 }));

  const selectedTreatment = TREATMENTS.find((t) => t.id === booking.treatmentId) || null;
  const selectedLocation = LOCATIONS.find((l) => l.id === booking.locationId) || null;
  const selectedTreatmentName = selectedTreatment ? selectedTreatment.name : '—';
  const selectedLocationName = selectedLocation ? selectedLocation.name : '—';
  const selectedLocationAddress = selectedLocation ? `${selectedLocation.name} — ${selectedLocation.address}` : '—';

  const selectedDateObj = datesList.find((d) => d.iso === booking.date);
  const confirmedDateLong = selectedDateObj
    ? `${selectedDateObj.weekdayLong} ${selectedDateObj.day} de ${selectedDateObj.monthLong}`
    : '—';

  const gcalLink = buildGcalLink({
    date: booking.date,
    time: booking.time,
    treatmentName: selectedTreatmentName,
    locationName: selectedLocationName,
    locationAddress: selectedLocation ? selectedLocation.address : '',
  });

  const waLinkConfirm = waLink(
    `¡Hola! Ya reservé un turno (${selectedTreatmentName}) para el ${confirmedDateLong} a las ${booking.time}. Tengo una consulta.`
  );

  const depositFormatted = fmtPrice(DEPOSIT_AMOUNT);

  const value = {
    booking,
    datesList,
    timeSlots: TIME_SLOTS,
    openBooking,
    closeBooking,
    goToStep1,
    goToStep2,
    onTreatmentSelect,
    onLocationSelect,
    setDate,
    setTime,
    payDeposit,
    confirmBooking,
    selectedTreatment,
    selectedLocation,
    selectedTreatmentName,
    selectedLocationName,
    selectedLocationAddress,
    confirmedDateLong,
    gcalLink,
    waLinkConfirm,
    depositFormatted,
  };

  return <BookingContext.Provider value={value}>{children}</BookingContext.Provider>;
}

export function useBooking() {
  const ctx = useContext(BookingContext);
  if (!ctx) throw new Error('useBooking debe usarse dentro de <BookingProvider>');
  return ctx;
}

export function buildGcalLink({ date, time, treatmentName, locationName, locationAddress }) {
  if (!date || !time) return '#';

  const [y, m, d2] = date.split('-');
  const [hh, mm] = time.split(':');
  const start = `${y}${m}${d2}T${hh}${mm}00`;
  const endHour = String(parseInt(hh, 10) + 1).padStart(2, '0');
  const end = `${y}${m}${d2}T${endHour}${mm}00`;

  const text = encodeURIComponent('Turno Velour – ' + treatmentName);
  const details = encodeURIComponent('Reserva en ' + locationName + '.');
  const loc = encodeURIComponent(locationAddress || '');

  return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${text}&dates=${start}/${end}&details=${details}&location=${loc}`;
}

export function buildAvailableDates() {
  const days = [];
  const weekdayFmt = new Intl.DateTimeFormat('es-AR', { weekday: 'short' });
  const weekdayLongFmt = new Intl.DateTimeFormat('es-AR', { weekday: 'long' });
  const dayFmt = new Intl.DateTimeFormat('es-AR', { day: '2-digit' });
  const monthFmt = new Intl.DateTimeFormat('es-AR', { month: 'short' });
  const monthLongFmt = new Intl.DateTimeFormat('es-AR', { month: 'long' });

  let d = new Date();
  d.setDate(d.getDate() + 1);

  while (days.length < 12) {
    if (d.getDay() !== 0) {
      const iso = d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
      days.push({
        iso,
        weekday: weekdayFmt.format(d).replace('.', ''),
        weekdayLong: weekdayLongFmt.format(d),
        day: dayFmt.format(d),
        month: monthFmt.format(d).replace('.', ''),
        monthLong: monthLongFmt.format(d),
      });
    }
    d = new Date(d.getTime() + 86400000);
  }
  return days;
}

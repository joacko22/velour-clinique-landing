import { WHATSAPP_NUMBER } from '../config';

const digitsOnly = (WHATSAPP_NUMBER || '5493417070000').replace(/\D/g, '');

export function waLink(message) {
  return `https://wa.me/${digitsOnly}?text=${encodeURIComponent(message)}`;
}

export function formatWhatsappDisplay() {
  const m54 = digitsOnly.match(/^(\d{2})(\d{1})(\d{2})(\d{4})(\d{4})$/);
  if (m54) return `+${m54[1]} ${m54[2]} ${m54[3]} ${m54[4]}-${m54[5]}`;
  return '+' + digitsOnly;
}

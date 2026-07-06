export const GOLD_GRADIENT = 'linear-gradient(135deg,#E7C89C,#C6945C 55%,#A9723F)';

export function fmtPrice(n) {
  return '$' + n.toLocaleString('es-AR');
}

export const TREATMENTS = [
  { id: 'hydrafacial', cat: 'Facial', name: 'Hydrafacial Premium', desc: 'Limpieza profunda, hidratación y luminosidad inmediata.', price: 18000, tone: 'gold' },
  { id: 'peeling', cat: 'Facial', name: 'Peeling Químico', desc: 'Renueva la textura y unifica el tono de la piel.', price: 15000, tone: 'cream' },
  { id: 'radiofacial', cat: 'Facial', name: 'Radiofrecuencia Facial', desc: 'Tensa la piel y estimula colágeno sin cirugía.', price: 22000, tone: 'espresso' },
  { id: 'criolipolisis', cat: 'Corporal', name: 'Criolipólisis', desc: 'Reduce grasa localizada sin cirugía ni downtime.', price: 35000, tone: 'espresso' },
  { id: 'drenaje', cat: 'Corporal', name: 'Drenaje Linfático', desc: 'Reduce retención de líquidos e hinchazón.', price: 16000, tone: 'gold' },
  { id: 'mesoterapia', cat: 'Corporal', name: 'Mesoterapia Corporal', desc: 'Trata celulitis y flacidez localizada.', price: 20000, tone: 'cream' },
  { id: 'botox', cat: 'Inyectables', name: 'Toxina Botulínica', desc: 'Suaviza líneas de expresión con resultado natural.', price: 28000, tone: 'cream' },
  { id: 'hialuronico', cat: 'Inyectables', name: 'Ácido Hialurónico', desc: 'Devuelve volumen y define contornos faciales.', price: 32000, tone: 'gold' },
  { id: 'bioestimuladores', cat: 'Inyectables', name: 'Bioestimuladores de Colágeno', desc: 'Mejora firmeza y calidad de piel en el tiempo.', price: 40000, tone: 'espresso' },
  { id: 'laser-full', cat: 'Depilación Láser', name: 'Láser Diodo Full Body', desc: 'Resultados progresivos y duraderos, todas las zonas.', price: 12000, tone: 'gold' },
  { id: 'laser-facial', cat: 'Depilación Láser', name: 'Láser Facial', desc: 'Zonas del rostro con máxima precisión.', price: 9000, tone: 'espresso' },
  { id: 'laser-combo', cat: 'Depilación Láser', name: 'Combo Axilas + Ingles', desc: 'Dúo de zonas sensibles en una sesión.', price: 14000, tone: 'cream' },
  { id: 'masaje', cat: 'Bienestar', name: 'Masaje Relajante', desc: 'Libera tensión y mejora la circulación.', price: 14000, tone: 'cream' },
  { id: 'ritual-spa', cat: 'Bienestar', name: 'Ritual Spa Velour', desc: 'Experiencia completa de bienestar sensorial.', price: 30000, tone: 'gold' },
  { id: 'facial-relax', cat: 'Bienestar', name: 'Facial Relax Premium', desc: 'Cuidado facial junto a masaje descontracturante.', price: 24000, tone: 'espresso' },
];

export const CATEGORIES = ['Todos', 'Facial', 'Corporal', 'Inyectables', 'Depilación Láser', 'Bienestar'];

export const GALLERY = [
  { name: 'Criolipólisis', detail: 'Abdomen — 3 sesiones' },
  { name: 'Ácido Hialurónico', detail: 'Contorno de labios' },
  { name: 'Radiofrecuencia Facial', detail: 'Óvalo facial — 6 sesiones' },
  { name: 'Depilación Láser', detail: 'Piernas completas — 8 sesiones' },
  { name: 'Peeling + Hydrafacial', detail: 'Luminosidad y textura' },
];

export const FAQS = [
  { q: '¿Necesito una consulta previa antes de mi primer tratamiento?', a: 'Sí. Todos los tratamientos comienzan con una valoración personalizada donde evaluamos tu piel u objetivo y armamos un plan a medida.' },
  { q: '¿Los tratamientos duelen?', a: 'La gran mayoría son indoloros o de molestia mínima. En procedimientos más sensibles usamos anestesia tópica para tu comodidad.' },
  { q: '¿Cuánto dura la recuperación?', a: 'Depende del tratamiento: muchos son "sin downtime" y podés retomar tu rutina el mismo día. Te lo detallamos en tu consulta.' },
  { q: '¿Cómo funciona la seña para reservar un turno?', a: 'Se abona una seña a través de Mercado Pago para confirmar tu turno. Ese monto se descuenta del valor final del tratamiento.' },
  { q: '¿Puedo cancelar o reprogramar mi turno?', a: 'Sí, sin cargo hasta 24 horas antes. Pasado ese plazo, la seña queda reservada para una próxima fecha.' },
  { q: '¿Qué métodos de pago aceptan?', a: 'Mercado Pago para la seña online, y en sede tarjetas de débito/crédito, transferencia o efectivo.' },
  { q: '¿Cada cuánto debo repetir un tratamiento?', a: 'Varía según el protocolo y tu objetivo. Armamos un cronograma de sesiones en tu primera consulta.' },
];

export const LOCATIONS = [
  { id: 'rosario', name: 'Velour Rosario', address: 'Tucumán 1047, Rosario, Santa Fe', hours: 'Lun a Sáb · 10:00 a 20:00', phone: '+54 9 341 234-5678' },
];

export const PILLARS = [
  { title: 'Precisión médica', desc: 'Profesionales matriculados y protocolos validados en cada procedimiento.' },
  { title: 'Calidez humana', desc: 'Acompañamiento cercano y personalizado en cada etapa de tu proceso.' },
  { title: 'Resultados naturales', desc: 'Realzamos tu belleza natural — nunca la transformamos por completo.' },
];

export const VALUE_PROPS = [
  { title: 'Tecnología de última generación', iconPath: 'M13 3 4 14h6l-1 7 9-11h-6l1-7z' },
  { title: 'Planes 100% personalizados', iconPath: 'M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z' },
  { title: 'Seguimiento post-tratamiento incluido', iconPath: 'M4 12l5 5L20 6' },
  { title: 'Ambiente exclusivo y confidencial', iconPath: 'M12 2 4 5v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V5l-8-3z' },
];

export const NAV_LINKS = [
  { id: 'nosotros', label: 'Nosotros' },
  { id: 'tratamientos', label: 'Tratamientos' },
  { id: 'ubicaciones', label: 'Ubicaciones' },
  { id: 'galeria', label: 'Galería' },
  { id: 'faq', label: 'FAQ' },
];

export const TIME_SLOTS = ['09:00', '10:30', '12:00', '14:00', '15:30', '17:00', '18:30'];

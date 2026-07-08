import styles from './PhotoPlaceholder.module.css';

const TONE_GRADIENTS = {
  gold: 'linear-gradient(150deg, #D9AE79 0%, #B8824F 55%, #8C6239 100%)',
  espresso: 'linear-gradient(150deg, #55555A 0%, #333336 55%, #1C1C1E 100%)',
  cream: 'linear-gradient(150deg, #F2E9DC 0%, #E4D3B8 55%, #CBAE85 100%)',
};

const TONE_ICON_COLOR = {
  gold: 'rgba(60,42,20,0.55)',
  espresso: 'rgba(230,200,160,0.55)',
  cream: 'rgba(90,65,35,0.5)',
};

export default function PhotoPlaceholder({ label = 'Imagen próximamente', tone = 'gold', className, style }) {
  const bgGradient = TONE_GRADIENTS[tone] || TONE_GRADIENTS.gold;
  const iconColor = TONE_ICON_COLOR[tone] || TONE_ICON_COLOR.gold;

  return (
    <div className={[styles.placeholder, className].filter(Boolean).join(' ')} style={{ background: bgGradient, ...style }}>
      <div className={styles.pattern} />
      <div className={styles.iconWrap}>
        <svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke={iconColor} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="5" width="18" height="14" rx="2"></rect>
          <circle cx="9" cy="11" r="2"></circle>
          <path d="M21 16l-5.2-5.2a1 1 0 0 0-1.4 0L7 18"></path>
        </svg>
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

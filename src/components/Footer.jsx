import styles from './Footer.module.css';
import { NAV_LINKS, LOCATIONS } from '../data/content';
import { waLink, formatWhatsappDisplay } from '../utils/whatsapp';

const waLinkGeneral = waLink('¡Hola! Quiero hacer una consulta en Velour Clinique Esthétique.');

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div>
            <img src="/assets/logo-full-dark.png" alt="Velour Clinique Esthétique" className={styles.brandLogo} />
            <p className={styles.brandDesc}>Medicina estética integral en Rosario.</p>
          </div>

          <div>
            <div className={styles.colTitle}>SECCIONES</div>
            <div className={styles.linksCol}>
              {NAV_LINKS.map((link) => (
                <a key={link.id} href={`#${link.id}`} className={styles.footerNavLink}>
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>SEDE</div>
            <div className={styles.locationsCol}>
              {LOCATIONS.map((loc) => (
                <div key={loc.id}>
                  <div className={styles.locationName}>{loc.name}</div>
                  <div className={styles.locationAddress}>{loc.address}</div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.colTitle}>CONTACTO</div>
            <div className={styles.linksCol}>
              <a href={waLinkGeneral} target="_blank" rel="noopener" className={styles.footerNavLink}>
                {formatWhatsappDisplay()}
              </a>
              <a href="mailto:contacto@velourclinique.com.ar" className={styles.footerNavLink}>
                contacto@velourclinique.com.ar
              </a>
              <span className={styles.contactText}>Instagram · @velour.clinique</span>
            </div>
          </div>
        </div>

        <div className={styles.bottomRow}>
          <div className={styles.bottomText}>© 2026 Velour Clinique Esthétique. Todos los derechos reservados.</div>
          <div className={styles.bottomText}>Los resultados pueden variar según cada paciente.</div>
        </div>
      </div>
    </footer>
  );
}

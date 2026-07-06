import { motion } from 'motion/react';
import styles from './ValueProps.module.css';
import { VALUE_PROPS } from '../data/content';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ValueProps() {
  return (
    <section id="descripcion" className={styles.section}>
      <div className={styles.glow} />
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>POR QUÉ ELEGIRNOS</span>
          <span className={styles.kickerLine} />
        </div>
        <h2 className={styles.title}>Medicina estética integral, pensada para vos</h2>
        <p className={styles.subtitle}>
          Un enfoque integral que combina diagnóstico médico, tecnología de punta y seguimiento cercano en cada
          etapa del tratamiento.
        </p>

        <motion.div
          className={styles.grid}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          {VALUE_PROPS.map((vp) => (
            <motion.div key={vp.title} variants={itemVariants} className={styles.card}>
              <div className={styles.iconWrap}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#E3C299" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d={vp.iconPath}></path>
                </svg>
              </div>
              <div className={styles.cardTitle}>{vp.title}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

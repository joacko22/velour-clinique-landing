import { motion } from 'motion/react';
import styles from './About.module.css';
import { PILLARS } from '../data/content';
import PhotoPlaceholder from './PhotoPlaceholder';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="nosotros" className={styles.section}>
      <div className={styles.inner}>
        <motion.div
          className={styles.textCol}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className={styles.kicker}>
            <span className={styles.kickerLine} />
            <span className={styles.kickerText}>NUESTRA HISTORIA</span>
          </motion.div>

          <motion.h2 variants={itemVariants} className={styles.title}>
            Belleza con criterio médico
          </motion.h2>

          <motion.p variants={itemVariants} className={styles.paragraph}>
            Velour nació de la convicción de que la estética y la medicina no compiten: se completan. Desde hace
            más de una década acompañamos a cada paciente con protocolos seguros, tecnología certificada y una
            escucha genuina de sus objetivos.
          </motion.p>

          <motion.p variants={itemVariants} className={styles.quote}>
            "No buscamos transformarte en otra persona — buscamos que te reconozcas, con más luz."
          </motion.p>

          <motion.div variants={itemVariants} className={styles.pillarsGrid}>
            {PILLARS.map((pillar) => (
              <div key={pillar.title}>
                <div className={styles.pillarTitle}>{pillar.title}</div>
                <div className={styles.pillarDesc}>{pillar.desc}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className={styles.imageCol}
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <PhotoPlaceholder label="Interior de la clínica" tone="gold" className={styles.image} />
        </motion.div>
      </div>
    </section>
  );
}

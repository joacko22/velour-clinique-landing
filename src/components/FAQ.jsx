import { useState } from 'react';
import { motion } from 'motion/react';
import styles from './FAQ.module.css';
import { FAQS } from '../data/content';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((cur) => (cur === i ? -1 : i));

  return (
    <section id="faq" className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.kicker}>
          <span className={styles.kickerLine} />
          <span className={styles.kickerText}>PREGUNTAS FRECUENTES</span>
        </div>
        <h2 className={styles.title}>¿Tenés dudas? Empecemos por acá</h2>

        <div className={styles.list}>
          {FAQS.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q} className={styles.item}>
                <button type="button" onClick={() => toggle(i)} className={styles.question}>
                  <span className={styles.questionText}>{item.q}</span>
                  <motion.svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A9723F"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={styles.chevron}
                    animate={{ rotate: open ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </motion.svg>
                </button>
                <div className={styles.answerRow} style={{ gridTemplateRows: open ? '1fr' : '0fr' }}>
                  <div className={styles.answerInner}>
                    <p className={styles.answerText}>{item.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

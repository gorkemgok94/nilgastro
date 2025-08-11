// src/components/CallToAction.jsx
import React from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Bist du bereit, Qualität zu erleben?</h2>
        <p className={styles.subheading}>
          Schließen Sie sich Tausenden zufriedener Kunden an, die bereits ihre Unternehmen transformieren.
        </p>
        <a href="#" className="button button-primary">Schickst du deine Gewerbeschein!</a>
      </div>
    </section>
  );
}

export default CallToAction;
// src/components/CallToAction.jsx
import React from 'react';
import styles from './CallToAction.module.css';
import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Bist du bereit, Qualität zu erleben?</h2>
        <p className={styles.subheading}>
          Schließen Sie sich Tausenden zufriedener Kunden an, die bereits ihre Unternehmen transformieren.
        </p>
        <Link to="/kontakt" className="button button-primary" onClick={() => window.scrollTo(0, 0)}>
          📞 Nimmst du Kontakt mit uns auf!
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;
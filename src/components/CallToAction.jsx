// src/components/CallToAction.jsx
import React from 'react';
import styles from './CallToAction.module.css';

function CallToAction() {
  return (
    <section id="cta" className={styles.cta}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Ready to Get Started?</h2>
        <p className={styles.subheading}>
          Join thousands of satisfied customers who are already transforming their businesses.
        </p>
        <a href="#" className="button button-primary">Sign Up Today!</a>
      </div>
    </section>
  );
}

export default CallToAction;
// src/components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';

// Placeholder image (replace with your own)
import heroImage from '../assets/HakanGorkem.jpg'; // Create this file or replace path

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Build Your Digital Presence with Ease
          </h1>
          <p className={styles.subheadline}>
            Innovative solutions for modern businesses. Grow your brand, reach more customers, and simplify your workflow.
          </p>
          <div className={styles.buttons}>
            <a href="#cta" className="button button-primary">Get Started Now</a>
            <a href="#features" className="button button-secondary">Learn More</a>
          </div>
        </div>
        <div className={styles.imageWrapper}>
          <img
            src={heroImage}
            alt="Product illustration showing a laptop with charts"
            className={styles.image}
            loading="eager" // Load hero image immediately
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
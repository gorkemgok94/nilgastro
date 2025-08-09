// src/components/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS Module

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <a href="#hero" className={styles.logo} onClick={closeMenu}>
          Nil Gastro
        </a>

        <button className={styles.menuButton} onClick={toggleMenu} aria-label="Toggle navigation">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.icon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className={styles.icon}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          )}
        </button>

        <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
          <ul className={styles.navList}>
            <li className={styles.navItem}>
              <a href="#features" className={styles.navLink} onClick={closeMenu}>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href="#testimonials" className={styles.navLink} onClick={closeMenu}>Testimonials</a>
            </li>
            <li className={styles.navItem}>
              <a href="#cta" className={styles.navLink} onClick={closeMenu}>Contact</a>
            </li>
          </ul>
          <a href="#cta" className={`${styles.navCta} button button-primary`} onClick={closeMenu}>
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
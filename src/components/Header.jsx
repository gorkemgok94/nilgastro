// src/components/Header.jsx
import React, { useState } from 'react';
import styles from './Header.module.css'; // Import CSS Module
import { useCartContext } from '../context/CartContext';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { cart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={`${styles.container} container`}>
        <a href="/" className={styles.logo} onClick={closeMenu}>
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
              <a href="#features" className={styles.navLink} onClick={closeMenu}>Produkte</a>
            </li>
            <li className={styles.navItem}>
              <a href="#testimonials" className={styles.navLink} onClick={closeMenu}>Erfahrungsberichte</a>
            </li>
            <li className={styles.navItem}>
              <a href="/kontakt" className={styles.navLink} onClick={closeMenu}>Kontakt</a>
            </li>
          </ul>
          <a href="#cta" className={`${styles.navCta} button button-primary`} onClick={closeMenu}>
            Kunde werden
          </a>
        </nav>

        {/* TODO: This div below makes the whole setting of navbar messy. It pushes all the other elements to left to make itself space. */}

        {/* 
        <div className={styles.headerRight}>
          TODO: Link to #features where your cart lives or to a cart page
          <a href="#features" className={styles.cartLink} aria-label={`Warenkorb, ${totalItems} Artikel`}>
            <svg>...cart icon...</svg>
            {totalItems > 0 && <span className={styles.cartBadge}>{totalItems}</span>}
          </a>
        </div> */} 
      </div>

    </header>
  );
}

export default Header;
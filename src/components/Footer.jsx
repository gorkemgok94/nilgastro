// src/components/Footer.jsx
import React from 'react';
import styles from './Footer.module.css';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <div className={styles.logoInfo}>
            <a href="#hero" className={styles.logo}>YourLogo</a>
            <p className={styles.tagline}>Building the future, today.</p>
            <div className={styles.socialLinks}>
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i>FB</a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i>TW</a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i>LN</a>
            </div>
          </div>
          <div className={styles.links}>
            <div className={styles.column}>
              <h4>Product</h4>
              <ul>
                <li><a href="#">Features</a></li>
                <li><a href="#">Pricing</a></li>
                <li><a href="#">Integrations</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </div>
            <div className={styles.column}>
              <h4>Support</h4>
              <ul>
                <li><a href="#">Help Center</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.copyright}>
          <p>&copy; {new Date().getFullYear()} YourCompany. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
// src/components/Features.jsx
import React from 'react';
import styles from './Features.module.css';

// Placeholder icons (replace with actual SVG or image components)
const Icon1 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.featureIcon}><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L13.5 21.75l1.5-4.249" /></svg>;
const Icon2 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.featureIcon}><path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12h4.5" /></svg>;
const Icon3 = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={styles.featureIcon}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z" /><path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15.75l3-3V9h-3v.75A7.502 7.502 0 0112 18.75V21h.75A7.462 7.462 0 0015 17.25h-.75z" /></svg>;

const featuresData = [
  {
    icon: <Icon1 />,
    title: "Lightning Fast Performance",
    description: "Our solutions are built for speed, ensuring your users have a seamless experience."
  },
  {
    icon: <Icon2 />,
    title: "Scalable Architecture",
    description: "Grow without limits. Our flexible architecture adapts to your evolving needs."
  },
  {
    icon: <Icon3 />,
    title: "Intuitive User Experience",
    description: "Designed with your users in mind, our interfaces are easy to navigate and enjoyable to use."
  },
  {
    icon: <Icon1 />,
    title: "Secure & Reliable",
    description: "Rest easy knowing your data and operations are protected with top-tier security measures."
  },
  {
    icon: <Icon2 />,
    title: "24/7 Premium Support",
    description: "Our dedicated support team is always ready to assist you, day or night."
  },
  {
    icon: <Icon3 />,
    title: "Cost-Effective Solutions",
    description: "Get premium features and performance without breaking the bank."
  },
];

function Features() {
  return (
    <section id="features" className={styles.features}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Why Choose Us?</h2>
        <p className={styles.subheading}>
          Discover the core advantages that set our services apart from the rest.
        </p>
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={index} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
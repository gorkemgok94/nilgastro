// src/components/Testimonials.jsx
import React from 'react';
import styles from './Testimonials.module.css';

// Placeholder images (replace with your own)
import avatar1 from '../assets/avatar-1.webp';
import avatar2 from '../assets/avatar-2.webp';
import avatar3 from '../assets/avatar-3.webp';

const testimonialsData = [
  {
    quote: "This service has completely transformed how we operate. The efficiency gains are incredible!",
    name: "Jane Doe",
    title: "CEO, Tech Solutions",
    avatar: avatar1,
  },
  {
    quote: "Outstanding support and a truly intuitive platform. Highly recommended for anyone looking to scale.",
    name: "John Smith",
    title: "Founder, Innovate Co.",
    avatar: avatar2,
  },
  {
    quote: "A game-changer for our business. The features are powerful, and the results speak for themselves.",
    name: "Alice Johnson",
    title: "Marketing Director, Global Brands",
    avatar: avatar3,
  },
];

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Was unsere Kunden sagen</h2>
        <p className={styles.subheading}>
          Hören Sie von Unternehmen und Einzelpersonen, die die Kraft unserer Lösungen aus erster Hand erfahren haben.
        </p>
        <div className={styles.grid}>
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className={styles.testimonialCard}>
              <p className={styles.quote}>"{testimonial.quote}"</p>
              <div className={styles.authorInfo}>
                <img
                  src={testimonial.avatar}
                  alt={`Avatar of ${testimonial.name}`}
                  className={styles.avatar}
                  loading="lazy" // Lazy load testimonial avatars
                />
                <div>
                  <h4 className={styles.authorName}>{testimonial.name}</h4>
                  <p className={styles.authorTitle}>{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
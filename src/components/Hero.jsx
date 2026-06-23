// src/components/Hero.jsx
import React from 'react';
import styles from './Hero.module.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";


// Placeholder image (replace with your own)
import heroImage from '../assets/HakanGorkem.jpg'; // Create this file or replace path
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <Swiper
        breakpoints={{
          0: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1800: { slidesPerView: 3 },
        }}
        className={styles.swiper}
        spaceBetween={20}
        slidesPerView={1}
        modules={[Autoplay]}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <img src="/angebotimages/01.png" alt="1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/02.png" alt="2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/03.png" alt="3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/04.png" alt="4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/05.png" alt="5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/06.png" alt="6" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/07.png" alt="7" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/angebotimages/08.png" alt="8" />
        </SwiperSlide>
      </Swiper>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.headline}>
            Von A bis zum Z, mit Herz und Verstand.
          </h1>
          <p className={styles.subheadline}>
            Intelligente Logistik für eine schnellebige Welt. Liefern Sie schneller, senken Sie Kosten und begeistern Sie Ihre Kunden.
          </p>
          <div className={styles.buttons}>
            <Link to="/kontakt" className="button button-primary">Kunde werden</Link>
            <Link to="/products" className="button button-primary">
              Mehr Produkte anzeigen
            </Link>
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
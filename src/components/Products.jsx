// src/components/Features.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';

// Placeholder icons (replace with actual SVG or image components)
const Icon1 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" /><path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" /><path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" /></svg>
const Icon2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-package"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
const Icon3 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 22V2" /></svg>
const Icon4 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-thermometer-snowflake-icon lucide-thermometer-snowflake"><path d="m10 20-1.25-2.5L6 18" /><path d="M10 4 8.75 6.5 6 6" /><path d="M10.585 15H10" /><path d="M2 12h6.5L10 9" /><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /><path d="m4 10 1.5 2L4 14" /><path d="m7 21 3-6-1.5-3" /><path d="m7 3 3 6h2" /></svg>
const Icon5 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-cheese"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" /><path d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" /><path d="M15 13v.01" /><path d="M8 13v.01" /><path d="M11 16v.01" /></svg>
const Icon6 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-carrot"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" /><path d="M9 13l-1.5 -1.5" /><path d="M16 14l-2 -2" /><path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" /><path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" /></svg>


const featuresData = [
  {
    id: 'Getränke',
    icon: <Icon1 />,
    title: "Getränke",
    description: "Perfekt erfrischende Getränke – für heiß und kalt, ideal zu jeder Speise."
  },
  {
    id: 'Verpackungen',
    icon: <Icon2 />,
    title: "Verpackungen",
    description: "Hochwertige Verpackungen – ideal für Ihr köstliches Essen."
  },
  {
    id: 'Konserven',
    icon: <Icon3 />,
    title: "Konserven",
    description: "Frisch konserviert: Genuss garantiert!"
  },
  {
    id: 'Tiefkühl',
    icon: <Icon4 />,
    title: "Tiefkühl",
    description: "Damit Sie jahrelang besten Genuss erleben können."
  },
  {
    id: 'Mölkerei',
    icon: <Icon5 />,
    title: "Mölkerei",
    description: "Aus dem Herzen der Käsekultur Europas!"
  },
  {
    id: 'Gemüse',
    icon: <Icon6 />,
    title: "Gemüse",
    description: "Frischste Auswahl lässt den Salatteller strahlen!"
  },
];

const productList = [
  "29x3",
  "Su",
  "alufolie",
  "cola dose",
  "dönertüte",
  "mezzo dose",
  "serviette",
  "fanta dose",
  "handtuch",
  "sprite dose",
  "karton to go 8 oz",
  "pfirsich MEINT prisma",
  "ip7",
  "multi MEINT prisma"
];

function Products() {
  const [cart, setCart] = React.useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const removeFromCart = (product) => {
    setCart((prev) => {
      const idx = prev.indexOf(product);
      if (idx > -1) {
        const updated = [...prev];
        updated.splice(idx, 1);
        return updated;
      }
      return prev;
    });
  };

  return (
    <section id="features" className={styles.features}>
      <div className={`${styles.container} container`}>
        <h2 className={styles.heading}>Produkte</h2>
        <p className={styles.subheading}>
          Alle Produkte, die Sie für Ihr Unternehmen benötigen, finden Sie in unseren untenstehenden Kategorien.
        </p>
        <div className={styles.grid}>
          {featuresData.map((feature, index) => (
            <div key={feature.id} className={styles.featureCard}>
              <div className={styles.iconWrapper}>{feature.icon}</div>
              <Link to={`/features/${feature.id}`}>{feature.title}</Link>
              <p className={styles.cardDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className='products.list'>
        <h3>Products</h3>
        <ul>
          {productList.map((product, idx) => (
            <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span>{product}</span>
              <button onClick={() => addToCart(product)} aria-label={`Add ${product}`}>+</button>
              <button onClick={() => removeFromCart(product)} aria-label={`Remove ${product}`}>-</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='shopping-cart'>
        <div className="cart">
          <h3>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {/* 
                The problematic block has been removed.
                The remaining code correctly maps the product counts 
                (from the reduce function) into an array of <li> elements.
              */}
              {Object.entries(
                cart.reduce((acc, product) => {
                  acc[product] = (acc[product] || 0) + 1;
                  return acc;
                }, {})
              ).map(([product, quantity]) => (
                <li key={product}>
                  {product} &times; {quantity}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Products;
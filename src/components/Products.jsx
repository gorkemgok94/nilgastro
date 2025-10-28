// src/components/Features.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';
import ProductList from './ProductsSubComponents/ProductList.jsx';
import jsPDF from 'jspdf';
import useCart from '../hooks/useCart.js';
import useOrder from '../hooks/useOrder.js';

// Placeholder icons 
const Icon1 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-bottle"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 5h4v-2a1 1 0 0 0 -1 -1h-2a1 1 0 0 0 -1 1v2z" /><path d="M14 3.5c0 1.626 .507 3.212 1.45 4.537l.05 .07a8.093 8.093 0 0 1 1.5 4.694v6.199a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2v-6.2c0 -1.682 .524 -3.322 1.5 -4.693l.05 -.07a7.823 7.823 0 0 0 1.45 -4.537" /><path d="M7 14.803a2.4 2.4 0 0 0 1 -.803a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 1 -.805" /></svg>
const Icon2 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-package"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3l8 4.5l0 9l-8 4.5l-8 -4.5l0 -9l8 -4.5" /><path d="M12 12l8 -4.5" /><path d="M12 12l0 9" /><path d="M12 12l-8 -4.5" /><path d="M16 5.25l-8 4.5" /></svg>
const Icon3 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-half-icon lucide-shield-half"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M12 22V2" /></svg>
const Icon4 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-thermometer-snowflake-icon lucide-thermometer-snowflake"><path d="m10 20-1.25-2.5L6 18" /><path d="M10 4 8.75 6.5 6 6" /><path d="M10.585 15H10" /><path d="M2 12h6.5L10 9" /><path d="M20 14.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0z" /><path d="m4 10 1.5 2L4 14" /><path d="m7 21 3-6-1.5-3" /><path d="m7 3 3 6h2" /></svg>
const Icon5 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-cheese"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4.519 20.008l16.481 -.008v-3.5a2 2 0 1 1 0 -4v-3.5h-16.722" /><path d="M21 9l-9.385 -4.992c-2.512 .12 -4.758 1.42 -6.327 3.425c-1.423 1.82 -2.288 4.221 -2.288 6.854c0 2.117 .56 4.085 1.519 5.721" /><path d="M15 13v.01" /><path d="M8 13v.01" /><path d="M11 16v.01" /></svg>
const Icon6 = () => <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-carrot"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M3 21s9.834 -3.489 12.684 -6.34a4.487 4.487 0 0 0 0 -6.344a4.483 4.483 0 0 0 -6.342 0c-2.86 2.861 -6.347 12.689 -6.347 12.689z" /><path d="M9 13l-1.5 -1.5" /><path d="M16 14l-2 -2" /><path d="M22 8s-1.14 -2 -3 -2c-1.406 0 -3 2 -3 2s1.14 2 3 2s3 -2 3 -2z" /><path d="M16 2s-2 1.14 -2 3s2 3 2 3s2 -1.577 2 -3c0 -1.86 -2 -3 -2 -3z" /></svg>


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


function Products() {

  const { cart, addToCart, removeFromCart, setCart } = useCart();
  const { orderStatus, setOrderStatus, generateAndDownloadPDF } = useOrder();
  // Render server ping to keep it awake hahaha >:D
  React.useEffect(() => {
    fetch('https://always-be-there-for-you.onrender.com/')
      .then(() => console.log('Render server pinged'))
      .catch(() => { });
  }, []);

  //User name or address
  const [name, setName] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [products, setProducts] = useState([]);
  


  useEffect(() => {
    const controller = new AbortController();

    fetch('/products.json', { signal: controller.signal })
      .then(r => r.json())
      .then(data => setProducts(data))
      .catch(err => {
        if (err.name !== 'AbortError') {
          console.error(err);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  React.useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);


  const handleOrder = async () => {
    setOrderStatus({ loading: true, success: false, error: null });

    try {
      const response = await fetch('https://always-be-there-for-you.onrender.com/api/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          cart,
          address
        }),
      });

      const data = await response.json();
      if (data.success) {
        setOrderStatus({ loading: false, success: true, error: null });

        // Generate and download PDF
        generateAndDownloadPDF(name, cart);

        // Clear cart and name on success
        setCart([]);
        setName('');
        // Reset success message after 7 seconds
        setTimeout(() => {
          setOrderStatus({ loading: false, success: false, error: null });
        }, 7000);
      } else {
        setOrderStatus({ loading: false, success: false, error: data.error || 'Order failed' });
      }
    } catch (error) {
      setOrderStatus({ loading: false, success: false, error: 'Error sending order. Please try again.' });
    }
  };

  return (
    <section id="features" className={styles.features}>
      {/*
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
      */}

      <ProductList
        products={products}
        cart={cart}
        onAddToCart={addToCart}
        onRemoveFromCart={removeFromCart}
      />

      <div className={styles.shoppingCart}>
        <div className={styles.cartBox}>
          <h3 className={styles.cartHeading}>Shopping Cart</h3>
          {cart.length === 0 ? (
            <p className={styles.cartEmpty}>Your cart is empty.</p>
          ) : (
            <ul className={styles.cartList}>
              {cart.map(item => (
                <li key={item.id} className={styles.cartItem}>
                  <span className={styles.cartProduct}>{item.name}</span>
                  <span className={styles.cartQuantity}>× {item.quantity}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.cartActions}>
          <input
            type="text"
            placeholder="Ihr Name"
            value={name}
            onChange={e => setName(e.target.value)}
            className={styles.orderNameInput}
          />
          <input
            type='text'
            placeholder="Ihre Adresse"
            value={address}
            onChange={e => setAddress(e.target.value)}
            className={styles.orderNameInput}
          />
          {orderStatus.error && (
            <div className={styles.errorMessage}>
              {orderStatus.error}
            </div>
          )}
          {orderStatus.success && (
            <div className={styles.successMessage}>
              Bestellung erfolgreich! Eine PDF-Bestätigung wird heruntergeladen.
            </div>
          )}
          <button
            className={styles.orderButton}
            disabled={cart.length === 0 || !name.trim() || orderStatus.loading}
            onClick={handleOrder}
          >
            {orderStatus.loading ? 'Wird bearbeitet...' : 'Bestellen'}
          </button>
          <button
            className={styles.clearButton}
            disabled={cart.length === 0}
            onClick={() => setCart([])}
            style={{ marginLeft: 0, marginTop: '0.5rem', width: '100%' }}
          >
            Alles im Korb löschen
          </button>
        </div>
      </div>
    </section>
  );
}

export default Products;
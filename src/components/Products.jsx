// src/components/Features.jsx
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Features.module.css';


// Placeholder icons 
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
  "Dönerbox 26 oz (50 Stück)",
  "Dönertüte braun",
  "Tragetasche 45cm",
  "Pizzakarton 32cm",
  "Gabel Premium Stark",
  "Papiertragetasche 26cm",
  "Papiertragetasche 32cm",
  "Haushaltsbox 500ml (50 Stück)",
  "Haushaltsbox 1000ml (50 Stück)",
  "Alufolie stark weiß",
  "IP9 Lunchbox",
  "Servietten",
  "Handtuch",
  "Menübox 2-teilig",
  "Nuggets 1kg",
  "Bon Falafel 800g",
  "Pommes Ekin 6 mm 10kg",
  "Spinat TK 2,5kg",
  "Hamker Mayonnaise 10kg",
  "Ketchup Eimer 10kg",
  "Pizzasalami 1kg",
  "Schinken geschnitten 1kg",
  "Milram Edamer 40% circa 15kg",
  "Joghurt Mavi 3,5% 10kg",
  "Gazi Käse 55% 15kg",
  "Sucuk Egetürk Kangal 1kg",
  "Speisesalz 25kg",
  "Peperoni Suntat Kanister",
  "Pommesöl Frittierfett 10L",
  "Sriracha Sauce Grün 1kg",
  "Dill Gewürz Bon 1kg",
  "Kale Chili Gewürz Feuerscharf 900g",
  "Sumak Gewürz 1kg Beutel",
  "Homann Ketchup zum mitnehmen",
  "Homann Mayonnaise zum mitnehmen",
  "Oliven Geschnitten im Dose",
  "Knoblauchgranulat 1kg",
  "Pizzasauce La Perla",
  "Edelsüß gewürz 1kg",
  "Mais klein in Dose",
  "Coca Cola Zero 0,33L 24er Pack",
  "Coca Cola 0,33L 24er Pack",
  "Mezzo Mix 0,33L 24er Pack",
  "Istanbul Gazoz 0,33L 24er Pack",
  "Fanta 0,33L 24er Pack",
  "Red Bull 0,25L 24er Pack",
  "Klarsichtbecher 125ml 100 Stück",
  "Deckel für Klarsichtbecher 125ml 100 Stück",
  "Tetra Pfirsich 12er Pack",
  "Tetra Zitrone 12er Pack",
  "Tetra Wassermelone 12er Pack",
  "Salgam Suyu Scharf Acı 24er Pack",
  "Vio Medium 0,5L 18er Pack",
  "Vio Still 0,5L 18er Pack",
  "Mehl Degirmenci 25kg",
  "Mehl Farina 10kg",
  "Frische Kartoffeln 20kg",
  "Karotten 10kg",
  "Rote Zwiebeln 10kg",
  "Eisbergsalat im Karton",
  "Tomaten 6kg",
  "Auberginen 4 kg Karton",
  "Zucchini 4 kg Kiste",
  "Rot Kraut im Sack",
  "Rucola in Kiste",
  "Gurken 4 kg Karton",
  "Ayran Fresh 0,25L 20er Pack",
  "Curry Ketchup 10kg",
  "Pommessalzgewürz 1kg",
  "Pizzagewürz 1kg",
];

function Products() {
  
  // Render server ping to keep it awake hahaha >:D
  React.useEffect(() => {
    fetch('https://always-be-there-for-you.onrender.com/')
      .then(() => console.log('Render server pinged'))
      .catch(() => { });
  }, []);
  
  //User name or address
  const [name, setName] = React.useState("");
  const [orderStatus, setOrderStatus] = React.useState({
    loading: false,
    success: false,
    error: null
  });

  const [cart, setCart] = React.useState(() => {
    const saved = localStorage.getItem('cart');
    return saved ? JSON.parse(saved) : [];
  });

  React.useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addToCart = (productName) => {
    setCart((prev) => {
      const existing = prev.find(item => item.name === productName);
      if (existing) {
        return prev.map(item =>
          item.name === productName
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { id: Date.now(), name: productName, quantity: 1 }];
      }
    });
  };

  React.useEffect(() => {
    console.log('Cart updated:', cart);
  }, [cart]);

  const removeFromCart = (productName) => {
    setCart((prev) => {
      const existing = prev.find(item => item.name === productName);
      if (!existing) return prev;

      if (existing.quantity === 1) {
        return prev.filter(item => item.name !== productName);
      } else {
        return prev.map(item =>
          item.name === productName
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };


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
        }),
      });

      const data = await response.json();
      if (data.success) {
        setOrderStatus({ loading: false, success: true, error: null });
        // Clear cart and name on success
        setCart([]);
        setName('');
        // Reset success message after 5 seconds
        setTimeout(() => {
          setOrderStatus({ loading: false, success: false, error: null });
        }, 5000);
      } else {
        setOrderStatus({ loading: false, success: false, error: data.error || 'Order failed' });
      }
    } catch (error) {
      setOrderStatus({ loading: false, success: false, error: 'Error sending order. Please try again.' });
    }
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
      <div className={styles.productsList}>
        <h3>Products</h3>
        <ul className={styles.productUl}>
          {productList.map((product, idx) => {
            // Zähle, wie oft das Produkt im Warenkorb ist
            const existing = cart.find(item => item.name === product);
            const quantity = existing ? existing.quantity : 0;
            return (
              <li key={idx} className={styles.productLi}>
                <span className={styles.productName}>
                  {product}
                  {quantity > 0 && (
                    <span style={{ marginLeft: '0.5rem', color: '#888', fontWeight: 400 }}>
                      × {quantity}
                    </span>
                  )}
                </span>
                <div>
                  <button
                    className={styles.productBtn}
                    onClick={() => addToCart(product)}
                    aria-label={`Add ${product}`}
                  >+</button>
                  <button
                    className={styles.productBtn}
                    onClick={() => removeFromCart(product)}
                    aria-label={`Remove ${product}`}
                  >-</button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
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
          {orderStatus.error && (
            <div className={styles.errorMessage}>
              {orderStatus.error}
            </div>
          )}
          {orderStatus.success && (
            <div className={styles.successMessage}>
              Bestellung erfolgreich aufgegeben! Vielen Dank.
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
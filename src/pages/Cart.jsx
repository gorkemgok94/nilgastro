import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';
import useOrder from '../hooks/useOrder';
import styles from '../components/Features.module.css';


function Cart() {
  const { cart, addToCart, removeFromCart, setCart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const successRef = useRef(null);
  const nameRef = React.useRef(null);
  const addressRef = React.useRef(null);
  const [fieldErrors, setFieldErrors] = React.useState({ name: null, address: null });
  const { orderStatus, setOrderStatus, generateAndDownloadPDF } = useOrder();

  const clearCart = () => setCart([]);


  const handleOrder = async () => {
    // Reset previous errors
    setFieldErrors({ name: null, address: null });
    setOrderStatus({ loading: false, success: false, error: null });

    const nameEmpty = !name.trim();
    const addressEmpty = !address.trim();

    if (nameEmpty || addressEmpty) {
      const errors = {
        name: nameEmpty ? 'Bitte geben Sie Ihren Laden‑ oder Kundennamen an.' : null,
        address: addressEmpty ? 'Bitte geben Sie eine Adresse ein.' : null,
      };
      setFieldErrors(errors);

      // Fokus auf erstes fehlerhaftes Feld
      if (errors.name) {
        nameRef.current?.focus();
      } else if (errors.address) {
        addressRef.current?.focus();
      }

      // Zusätzlich: globale, screenreaderfreundliche Meldung
      setOrderStatus({ loading: false, success: false, error: 'Bitte füllen Sie alle Pflichtfelder aus.' });
      return; // Abbruch, keine Bestellung
    }

    // Wenn validiert: proceed wie bisher
    setOrderStatus({ loading: true, success: false, error: null });
    try {
      // ... dein bestehender Fetch / PDF-Generierung ...
    } catch (err) {
      setOrderStatus({ loading: false, success: false, error: 'Error sending order. Please try again.' });
    }
  };

  return (
    <main className="container" style={{ padding: '2rem 1rem' }}>
      <h1>Warenkorb</h1>

      {cart.length === 0 ? (
        <div>
          <p>Ihr Warenkorb ist leer.</p>
          <Link to="/">Weiter einkaufen</Link>
        </div>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {cart.map((item) => (
              <li
                key={item.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <div>
                  <div style={{ fontWeight: 600 }}>{item.name}</div>
                  <div style={{ fontSize: '0.9rem', color: '#666' }}>Menge: {item.quantity}</div>
                </div>

                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button
                    onClick={() => removeFromCart(item)}
                    aria-label={`Remove one ${item.name}`}
                    style={{ padding: '0.25rem 0.6rem' }}
                  >
                    −
                  </button>
                  <button
                    onClick={() => addToCart(item)}
                    aria-label={`Add one ${item.name}`}
                    style={{ padding: '0.25rem 0.6rem' }}
                  >
                    +
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <div style={{ marginTop: '1rem', display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            <button onClick={clearCart}>Alles löschen</button>
            <Link to="/">
              <button>Weiter einkaufen</button>
            </Link>
          </div>

          <p style={{ marginTop: '1rem' }}>Gesamtartikel: {totalItems}</p>
          <div style={{ marginTop: '1.25rem', maxWidth: 420 }}>
            <input
              ref={nameRef}
              type="text"
              placeholder="Ihr Ladens Name"
              value={name}
              onChange={e => setName(e.target.value)}
              className={styles.orderNameInput}
              aria-invalid={fieldErrors.name ? 'true' : 'false'}
              aria-describedby={fieldErrors.name ? 'error-name' : undefined}
            />
            {fieldErrors.name && (
              <div id="error-name" role="alert" className={styles.errorMessage}>
                {fieldErrors.name}
              </div>
            )}

            <input
              ref={addressRef}
              type="text"
              placeholder="Ihre Adresse"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className={styles.orderNameInput}
              aria-invalid={fieldErrors.address ? 'true' : 'false'}
              aria-describedby={fieldErrors.address ? 'error-address' : undefined}
            />
            {fieldErrors.address && (
              <div id="error-address" role="alert" className={styles.errorMessage}>
                {fieldErrors.address}
              </div>
            )}

            {orderStatus.error && <div style={{ color: 'crimson', marginBottom: 8 }}>{orderStatus.error}</div>}
            {orderStatus.success && (
              <div style={{ color: 'green', marginBottom: 8 }} ref={successRef}>
                Bestellung erfolgreich! Eine PDF-Bestätigung wurde heruntergeladen.
              </div>
            )}

            <button
              onClick={handleOrder}
              // disabled={cart.length === 0 || !name.trim() || orderStatus.loading}
              style={{ width: '100%', padding: '0.6rem', marginBottom: 8 }}
            >
              {orderStatus.loading ? 'Wird bearbeitet...' : 'Bestellen'}
            </button>
          </div>
        </div>

      )}
    </main>
  );
}

export default Cart;
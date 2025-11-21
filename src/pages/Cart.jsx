import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../context/CartContext';

function Cart() {
  const { cart, addToCart, removeFromCart, setCart } = useCartContext();
  const totalItems = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

  const clearCart = () => setCart([]);

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
                    onClick={() => removeFromCart(item.name)}
                    aria-label={`Remove one ${item.name}`}
                    style={{ padding: '0.25rem 0.6rem' }}
                  >
                    −
                  </button>
                  <button
                    onClick={() => addToCart(item.name)}
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
        </div>
      )}
    </main>
  );
}

export default Cart;
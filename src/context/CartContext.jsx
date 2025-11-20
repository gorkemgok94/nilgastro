// src/context/CartContext.jsx
import React, { createContext, useContext } from 'react';
import useCart from '../hooks/useCart';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { cart, addToCart, removeFromCart, setCart } = useCart();
  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, setCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCartContext() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error('useCartContext must be used within a CartProvider');
  }
  return ctx;
}
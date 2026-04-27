// src/context/CartContext.jsx
import React, { createContext, useContext, useState } from 'react';  // Added useState to imports
import useCart from '../hooks/useCart';

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const { cart, addToCart: originalAddToCart, removeFromCart, setCart } = useCart();
  
  // NEW: State to trigger the jump animation on add
  const [triggerJump, setTriggerJump] = useState(false);
  
  // NEW: Reset function for the trigger
  const resetTriggerJump = () => setTriggerJump(false);
  
  // NEW: Wrapped addToCart to set the trigger
  const addToCart = (product) => {
    originalAddToCart(product);  // Call the original add function
    setTriggerJump(true);       // Trigger the animation
  };

  return (
    <CartContext.Provider value={{ 
      cart, 
      addToCart,           // Use the wrapped version
      removeFromCart, 
      setCart,
      triggerJump,         // NEW: Expose the trigger
      resetTriggerJump     // NEW: Expose the reset function
    }}>
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
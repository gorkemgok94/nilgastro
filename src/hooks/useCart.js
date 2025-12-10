import { useState, useEffect } from 'react';

function useCart() {
    const [cart, setCart] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        const handle = setTimeout(() => {
            try {
                localStorage.setItem('cart', JSON.stringify(cart));
            } catch (e) {
                console.error('Failed to save cart', e);
            }
        }, 600);

        return () => clearTimeout(handle);
    }, [cart]);

    const addToCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (existing) {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, {
                    id: product.id,
                    name: product.name,
                    quantity: 1
                }];
            }
        });
    };

    const removeFromCart = (product) => {
        setCart((prev) => {
            const existing = prev.find(item => item.id === product.id);
            if (!existing) return prev;

            if (existing.quantity === 1) {
                return prev.filter(item => item.id !== product.id);
            } else {
                return prev.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                );
            }
        });
    };

    return { cart, addToCart, removeFromCart, setCart };
}

export default useCart;

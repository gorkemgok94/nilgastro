import React, { useState, useMemo } from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  // State to keep track of the currently open category
  const [openCategory, setOpenCategory] = useState(null);

  // Group products by category.
  // useMemo ensures this expensive operation only runs when the products prop changes.
  const groupedProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      const category = product.category;
      // If the category doesn't exist as a key in our accumulator, create it
      if (!acc[category]) {
        acc[category] = [];
      }
      // Push the current product into the correct category array
      acc[category].push(product);
      return acc;
    }, {});
  }, [products]);

  // Function to toggle the accordion
  const handleToggleCategory = (category) => {
    // If the clicked category is already open, close it. Otherwise, open it.
    setOpenCategory(openCategory === category ? null : category);
    requestAnimationFrame(() => {
      document.getElementById(category)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });

  };

  // Get the keys (category names) to iterate over
  const categories = Object.keys(groupedProducts);

  return (
    <div className={styles.productsList}>
      <h3>Products</h3>
      {categories.map((category) => {
        const isOpen = openCategory === category;
        return (
          <div key={category} className={styles.categorySection}>
            {/* Category Header Button */}
            <button
              className={styles.categoryHeader}
              onClick={() => handleToggleCategory(category)
              }
              aria-expanded={isOpen}
              id={category}
            >
              <span>{category}</span>
              <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>
                ▼
              </span>
            </button>

            {/* Conditionally render the product list for the open category */}
            {isOpen && (
              <ul className={styles.productUl}>
                {groupedProducts[category].map((product) => {
                  // Find this product in the cart to display its quantity
                  const cartItem = cart.find(item => item.id === product.id);
                  const quantity = cartItem ? cartItem.quantity : 0;

                  return (
                    <li key={product.id} className={styles.productLi}>
                      {product.imageSrc && (
                        <img
                          src={product.imageSrc}
                          alt={product.name}
                          className={styles.productImage}
                        />
                      )}
                      <span className={styles.productName}>
                        {product.name}
                        {quantity > 0 && (
                          <span className={styles.quantity}>
                            × {quantity}
                          </span>
                        )}
                      </span>
                      <div className={styles.buttonGroup}>
                        <button
                          className={styles.productBtn}
                          onClick={() => onAddToCart(product)}
                          aria-label={`Add ${product.name}`}
                        >
                          +
                        </button>
                        <button
                          className={styles.productBtn}
                          onClick={() => onRemoveFromCart(product)} // Pass the whole product object
                          aria-label={`Remove ${product.name}`}
                        >
                          -
                        </button>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ProductsList;
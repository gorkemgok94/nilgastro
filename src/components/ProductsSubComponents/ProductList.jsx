import React, { useState, useMemo } from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  const [openCategory, setOpenCategory] = useState(null);
  
  // NEW: State for the modal
  const [selectedProduct, setSelectedProduct] = useState(null);

  const groupedProducts = useMemo(() => {
    return products.reduce((acc, product) => {
      const category = product.category;
      if (!acc[category]) acc[category] = [];
      acc[category].push(product);
      return acc;
    }, {});
  }, [products]);

  const handleToggleCategory = (category) => {
    setOpenCategory(openCategory === category ? null : category);
    requestAnimationFrame(() => {
      document.getElementById(category)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  };

  // NEW: Close modal function
  const closeModal = () => setSelectedProduct(null);

  const categories = Object.keys(groupedProducts);

  return (
    <div className={styles.productsList}>
      <h3>Produkte</h3>
      {categories.map((category) => {
        const isOpen = openCategory === category;
        return (
          <div key={category} className={styles.categorySection}>
            <button
              className={styles.categoryHeader}
              onClick={() => handleToggleCategory(category)}
              aria-expanded={isOpen}
              id={category}
            >
              <span>{category}</span>
              <span className={`${styles.arrow} ${isOpen ? styles.arrowUp : ''}`}>▼</span>
            </button>

            {isOpen && (
              <ul className={styles.productUl}>
                {groupedProducts[category].map((product) => {
                  const cartItem = cart.find(item => item.id === product.id);
                  const quantity = cartItem ? cartItem.quantity : 0;

                  return (
                    <li key={product.id} className={styles.productLi}>
                      {/* Clicking the Image or Name opens the modal */}
                      <div 
                        className={styles.productInfoTrigger} 
                        onClick={() => setSelectedProduct(product)}
                      >
                        {product.imageSrc && (
                          <img src={product.imageSrc} alt={product.name} className={styles.productImage} />
                        )}
                        <span className={styles.productName}>
                          {product.name}
                          {quantity > 0 && <span className={styles.quantity}> × {quantity}</span>}
                        </span>
                      </div>

                      <div className={styles.buttonGroup}>
                        <button
                          className={styles.productBtn}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent opening modal
                            onAddToCart(product);
                          }}
                        >
                          +
                        </button>
                        <button
                          className={styles.productBtn}
                          onClick={(e) => {
                            e.stopPropagation(); // Prevent opening modal
                            onRemoveFromCart(product);
                          }}
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

      {/* NEW: Modal Component logic */}
      {selectedProduct && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeModalBtn} onClick={closeModal}>&times;</button>
            
            <img src={selectedProduct.imageSrc} alt={selectedProduct.name} className={styles.modalImage} />
            <h2>{selectedProduct.name}</h2>
            <p className={styles.productDescription}>
              {selectedProduct.description || "Wir arbeiten gerade mit Hochdruck daran, alle Details zu diesem Produkt für dich zusammenzustellen. Schau bald wieder vorbei!"}
            </p>
            
            <div className={styles.modalActions}>
                <button onClick={() => onAddToCart(selectedProduct)}>Add to Cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsList;
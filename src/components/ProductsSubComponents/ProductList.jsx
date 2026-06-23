import React, { useState, useMemo } from 'react';
import styles from './ProductsList.module.css';

const ProductsList = ({ products, cart, onAddToCart, onRemoveFromCart }) => {
  // Selected category via badges
  const [selectedCategory, setSelectedCategory] = useState(null);

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

  const handleSelectCategory = (category) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
    {/*requestAnimationFrame(() => {
      document.getElementById('products-list')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });*/}
  };

  // NEW: Close modal function
  const closeModal = () => setSelectedProduct(null);

  const categories = Object.keys(groupedProducts);

  return (
    <div className={styles.productsList}>
      <h3>Produkte</h3>
      {/* Category badges */}
      <div className={styles.badgesContainer}>
        {categories.map((category) => (
          <button
            key={category}
            className={`${styles.badge} ${selectedCategory === category ? styles.badgeActive : ''}`}
            onClick={() => handleSelectCategory(category)}
            aria-pressed={selectedCategory === category}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Products for selected category */}
      {selectedCategory ? (
        <ul id="products-list" className={styles.productUl}>
          {groupedProducts[selectedCategory].map((product) => {
            const cartItem = cart.find(item => item.id === product.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <li key={product.id} className={styles.productLi}>
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
                      e.stopPropagation();
                      onAddToCart(product);
                    }}
                  >
                    +
                  </button>
                  <button
                    className={styles.productBtn}
                    onClick={(e) => {
                      e.stopPropagation();
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
      ) : (
        <p className={styles.selectPrompt}>Wähle eine Kategorie, um Produkte anzuzeigen.</p>
      )}

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
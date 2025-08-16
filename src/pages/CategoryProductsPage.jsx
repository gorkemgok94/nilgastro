import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Assuming you have a way to fetch products, e.g., from your db.js or an API
// For now, let's use dummy data or assume you'll fetch from an API endpoint later
const dummyProducts = [
    { id: 1, name: 'Baum Tomaten', category: 'Getränke', price: 1.50, available: 1, imageUrl: 'https://imgur.com/KYjyxbM' },
    { id: 2, name: 'Eisberg Salat', category: 'Gemüse', price: 2.20, available: 1, imageUrl: null },
    { id: 3, name: 'Pizza Karton', category: 'Verpackungen', price: 0.10, available: 1, imageUrl: null },
    { id: 4, name: 'Milk (1L)', category: 'Mölkerei', price: 0.99, available: 0, imageUrl: null },
    { id: 5, name: 'Organic Eggs (6-pack)', category: 'Mölkerei', price: 3.49, available: 1, imageUrl: null },
    { id: 6, name: 'Baguette', category: 'Bakery', price: 1.20, available: 1, imageUrl: null },
    // Add more dummy data as needed, ensure categories match your featuresData IDs
];


function CategoryProductsPage() {
  const { categoryId } = useParams(); // This hook gets the 'categoryId' from the URL (e.g., 'Getränke')
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // In a real application, you would fetch data from your backend API here
    // Example: fetch(`/api/products?category=${categoryId}`)
    console.log(`Fetching products for category: ${categoryId}`);
    setLoading(true);
    setError(null);

    // Simulate API call with dummy data
    const filteredProducts = dummyProducts.filter(p => p.category.toLowerCase() === categoryId.toLowerCase());
    setProducts(filteredProducts);
    setLoading(false);

  }, [categoryId]); // Re-run effect when categoryId changes

  if (loading) {
    return <div>Loading products...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div style={{ padding: '20px', maxWidth: '960px', margin: '0 auto' }}>
      <h1>Produkte für {categoryId}</h1>
      {products.length === 0 ? (
        <p>No products found for this category.</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px' }}>
          {products.map(product => (
            <div key={product.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', textAlign: 'center' }}>
              {product.imageUrl && <img src={product.imageUrl} alt={product.name} style={{ maxWidth: '100px', maxHeight: '100px', objectFit: 'cover', marginBottom: '10px' }} />}
              <h3>{product.name}</h3>
              <p>Category: {product.category}</p>
              <p>Price: ${product.price.toFixed(2)}</p>
              <p>{product.available ? 'In Stock' : 'Out of Stock'}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default CategoryProductsPage;
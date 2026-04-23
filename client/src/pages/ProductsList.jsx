import React, { useState, useEffect } from 'react';
import API from '../services/api';
import ProductCard from '../components/ProductCard';
import './ProductsList.css';

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await API.get('/products');
      setProducts(response.data.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProductClick = (product) => {
    // Navigate to product detail or show modal
    console.log('Product clicked:', product);
  };

  const filterProducts = (products) => {
    if (filter === 'all') return products;
    return products.filter(p => p.badges.includes(filter));
  };

  const badges = ['Heart Healthy', 'Organic', 'Low Sugar', 'High Protein', 'Gluten Free'];

  return (
    <div className="products-page">
      <header className="page-header">
        <h1>Health Badge Products</h1>
        <p>Discover products with verified health badges</p>
      </header>

      <div className="filter-bar">
        <button 
          className={filter === 'all' ? 'active' : ''}
          onClick={() => setFilter('all')}
        >
          All Products
        </button>
        {badges.map(badge => (
          <button
            key={badge}
            className={filter === badge ? 'active' : ''}
            onClick={() => setFilter(badge)}
          >
            {badge}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="loading">Loading products...</div>
      ) : (
        <div className="products-grid">
          {filterProducts(products).map(product => (
            <ProductCard 
              key={product._id} 
              product={product}
              onClick={handleProductClick}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductsList;

import React from 'react';
import Badge from './Badge';
import './ProductCard.css';

const ProductCard = ({ product, onClick }) => {
  const getScoreColor = (score) => {
    if (score >= 80) return '#27ae60';
    if (score >= 60) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <div className="product-card" onClick={() => onClick(product)}>
      <div className="product-image">
        <img 
          src={product.imageUrl || 'https://via.placeholder.com/200'} 
          alt={product.name}
        />
        <div 
          className="health-score" 
          style={{ backgroundColor: getScoreColor(product.healthScore) }}
        >
          {product.healthScore}
        </div>
      </div>
      
      <div className="product-info">
        <h3>{product.name}</h3>
        <p className="product-description">{product.description}</p>
        
        <div className="badges-container">
          {product.badges && product.badges.map((badge, index) => (
            <Badge key={index} type={badge} />
          ))}
        </div>
        
        <div className="nutrition-summary">
          <span>🔥 {product.nutritionalInfo.calories} cal</span>
          <span>💪 {product.nutritionalInfo.protein}g protein</span>
          <span>🌾 {product.nutritionalInfo.fiber}g fiber</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

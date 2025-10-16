import React from 'react';
import './Badge.css';

const badgeConfig = {
  'Heart Healthy': {
    color: '#e74c3c',
    icon: '❤️',
    description: 'Low sodium, low saturated fat, high fiber'
  },
  'Organic': {
    color: '#27ae60',
    icon: '🌱',
    description: 'Certified organic ingredients'
  },
  'Low Sugar': {
    color: '#3498db',
    icon: '🍬',
    description: 'Less than 5g sugar per serving'
  },
  'High Protein': {
    color: '#9b59b6',
    icon: '💪',
    description: 'More than 15g protein per serving'
  },
  'Gluten Free': {
    color: '#f39c12',
    icon: '🌾',
    description: 'No gluten-containing ingredients'
  }
};

const Badge = ({ type }) => {
  const config = badgeConfig[type] || {};
  return (
    <div className="badge" style={{ backgroundColor: config.color }}>
      <span className="badge-icon">{config.icon}</span>
      <span className="badge-text">{type}</span>
    </div>
  );
};

export default Badge;

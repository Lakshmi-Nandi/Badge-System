const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true
  },
  description: {
    type: String,
    trim: true
  },
  nutritionalInfo: {
    calories: { type: Number, default: 0 },
    protein: { type: Number, default: 0 },
    fiber: { type: Number, default: 0 },
    sodium: { type: Number, default: 0 },
    saturatedFat: { type: Number, default: 0 },
    sugar: { type: Number, default: 0 },
    servingSize: { type: String, default: '100g' }
  },
  ingredients: [String],
  badges: [{
    type: String,
    enum: ['Heart Healthy', 'Organic', 'Low Sugar', 'High Protein', 'Gluten Free']
  }],
  healthScore: {
    type: Number,
    default: 0,
    min: 0,
    max: 100
  },
  imageUrl: String,
  category: String
}, {
  timestamps: true
});

module.exports = mongoose.model('Product', productSchema);

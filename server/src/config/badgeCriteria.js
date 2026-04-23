// src/config/badgeCriteria.js

module.exports = {
  heartHealthy: {
    sodiumMax: 300,         // mg
    saturatedFatMax: 3,     // g
    fiberMin: 3             // g
  },
  organic: {
    keyword: 'organic'      // ingredient must contain this word
  },
  lowSugar: {
    sugarMax: 5             // g
  },
  highProtein: {
    proteinMin: 15          // g
  },
  glutenFree: {
    glutenKeywords: ['wheat', 'barley', 'rye', 'gluten'] // ingredient must NOT contain any of these
  }
};

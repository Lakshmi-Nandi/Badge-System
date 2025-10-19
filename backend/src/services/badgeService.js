// src/services/badgeService.js


//  Assigns health badges to a product based on its nutritional info and ingredients.
//  @param {Object} nutritionalInfo - { calories, protein, fiber, sodium, saturatedFat, sugar }
//  @param {Array} ingredients - Array of ingredient strings
//  @returns {Array} badges - Array of badge strings

function assignBadges(nutritionalInfo, ingredients = []) {
  const badges = [];
  if (!nutritionalInfo) return badges;

  const { protein, fiber, sodium, saturatedFat, sugar } = nutritionalInfo;

  // Heart Healthy: sodium < 300mg, saturatedFat < 3g, fiber > 3g
  if (
    typeof sodium === 'number' && sodium < 300 &&
    typeof saturatedFat === 'number' && saturatedFat < 3 &&
    typeof fiber === 'number' && fiber > 3
  ) {
    badges.push('Heart Healthy');
  }

  // Organic: any ingredient contains 'organic'
  if (
    Array.isArray(ingredients) &&
    ingredients.some(ing => ing.toLowerCase().includes('organic'))
  ) {
    badges.push('Organic');
  }

  // Low Sugar: sugar < 5g
  if (typeof sugar === 'number' && sugar < 5) {
    badges.push('Low Sugar');
  }

  // High Protein: protein > 15g
  if (typeof protein === 'number' && protein > 15) {
    badges.push('High Protein');
  }

  // Gluten Free: no ingredient contains 'wheat', 'barley', 'rye', 'gluten'
  const glutenIngredients = ['wheat', 'barley', 'rye', 'gluten'];
  const hasGluten = Array.isArray(ingredients) && ingredients.some(ing =>
    glutenIngredients.some(gi => ing.toLowerCase().includes(gi))
  );
  if (!hasGluten && Array.isArray(ingredients) && ingredients.length > 0) {
    badges.push('Gluten Free');
  }

  return badges;
}

module.exports = { assignBadges };

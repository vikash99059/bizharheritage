// Helper function to safely convert any value to string
export const safeToString = (value, defaultValue = '') => {
  if (value === null || value === undefined) return defaultValue;
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return value.toString();
  if (typeof value === 'object') {
    // If it's an object with name/id/slug, extract it
    if (value.name) return value.name;
    if (value.id) return value.id;
    if (value.slug) return value.slug;
    return defaultValue;
  }
  return defaultValue;
};

// Safe category extractor
export const safeCategory = (category) => {
  return safeToString(category, 'Others');
};

// Safe product transformer
export const transformProduct = (item) => {
  return {
    id: item.id,
    name: item.name || 'Unnamed Product',
    price: item.sell_price || 0,
    image: item.images?.[0]?.url || 'https://via.placeholder.com/200x200?text=No+Image',
    category: safeCategory(item.category),
    description: item.description || '',
    images: item.images?.map(img => img.url) || [],
    sell_price: item.sell_price || 0,
    original_price: item.original_price || null,
    size: Array.isArray(item.size) ? item.size.map(s => safeToString(s)) : ['Standard']
  };
};
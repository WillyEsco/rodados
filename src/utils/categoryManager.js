const STORAGE_KEY = 'rodados_categories';
const DEFAULT_CATEGORIES = [
  'Bicicletas',
  'Motos',
  'Scooters',
  'Accesorios',
  'Repuestos',
  'Otros'
];
export const categoryManager = {
  getCategories: () => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      try {
        return JSON.parse(stored);
      } catch (error) {
        console.error('Error parsing categories:', error);
        return DEFAULT_CATEGORIES;
      }
    }
    return DEFAULT_CATEGORIES;
  },
  addCategory: (newCategory) => {
    const categories = categoryManager.getCategories();
    const trimmed = newCategory.trim();
    if (trimmed === '' || categories.includes(trimmed)) {
      console.log('⚠️ Categoría vacía o duplicada');
      return categories;
    }
    const updated = [...categories, trimmed];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    console.log('✅ Categoría agregada:', trimmed);
    return updated;
  },
  removeCategory: (categoryToRemove) => {
    const categories = categoryManager.getCategories();
    const updated = categories.filter(cat => cat !== categoryToRemove);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    console.log('✅ Categoría eliminada:', categoryToRemove);
    return updated;
  },
  resetCategories: () => {
    localStorage.removeItem(STORAGE_KEY);
    console.log('✅ Categorías restauradas a valores por defecto');
    return DEFAULT_CATEGORIES;
  },
  getDefaultCategories: () => {
    return [...DEFAULT_CATEGORIES];
  }
};

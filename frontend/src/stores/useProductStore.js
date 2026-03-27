import { defineStore } from 'pinia';
import { mockProducts } from '../mocks/products';

export const useProductStore = defineStore('products', {
  state: () => ({
    allProducts: mockProducts,
    filter: 'All Pieces'
  }),
  getters: {
    filteredProducts: (state) => {
      if (state.filter === 'All Pieces') return state.allProducts;
      return state.allProducts.filter(p => p.category === state.filter);
    }
  },
  actions: {
    setFilter(category) {
      this.filter = category;
    }
  }
});
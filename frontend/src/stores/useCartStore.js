import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: [],
    shippingCost: 0,
    vatRate: 0.075
  }),
  getters: {
    count: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0),
    subtotal: (state) => state.items.reduce((acc, item) => acc + (item.price * item.quantity), 0),
    vat: (state) => state.subtotal * state.vatRate,
    total: (state) => state.subtotal + state.vat
  },
  actions: {
    addToBag(product, size) {
      const exists = this.items.find(i => i.id === product.id && i.size === size);
      if (exists) exists.quantity++;
      else this.items.push({ ...product, size, quantity: 1 });
    },
    updateQty(id, size, delta) {
      const item = this.items.find(i => i.id === id && i.size === size);
      if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) this.removeItem(id, size);
      }
    },
    removeItem(id, size) {
      this.items = this.items.filter(i => !(i.id === id && i.size === size));
    }
  }
});

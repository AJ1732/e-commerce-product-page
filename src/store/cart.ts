import { defineStore } from "pinia";

import type { Product } from "@/types/shared";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [] as Product[],
  }),

  getters: {
    totalQuantity: (state) =>
      state.items.reduce((sum, item) => sum + item.quantity, 0),

    totalPrice: (state) =>
      state.items.reduce((sum, item) => sum + item.price * item.quantity, 0),
  },

  actions: {
    addToCart(product: Omit<Product, "quantity">) {
      const existingItem = this.items.find(
        (item) => Number(item.id) === Number(product.id),
      );
      if (existingItem) this.removeFromCart(existingItem.id);
      else this.items.push({ ...product, quantity: 1 });
    },

    increment(product: Omit<Product, "quantity">) {
      const item = this.items.find((i) => i.id === product.id);
      if (item) {
        item.quantity++;
      } else {
        this.addToCart(product);
      }
    },

    decrement(id: number) {
      const item = this.items.find((i) => i.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
      } else {
        this.removeFromCart(id);
      }
    },

    removeFromCart(id: number) {
      this.items = this.items.filter((item) => item.id !== id);
    },
  },
});

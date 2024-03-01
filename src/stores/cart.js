import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartItems: [],
  }),

  getters: {
    cartContent() {
      return this.cartItems;
    },
    totalAmount() {
      return this.cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );
    },
  },

  actions: {
    async addToCart(cartItem) {
      const response = await fetch(`http://localhost:5001/cart/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(cartItem),
      });
      const newCartItem = await response.json();
      console.log(newCartItem);
      this.cartItems = [newCartItem, ...this.cartItems];
      this.fetchCartItems();
    },
    async fetchCartItems() {
      try {
        const items = await fetch(`http://localhost:5001/cart`);
        const data = await items.json();
        console.log(data);
        this.cartItems = data;
      } catch (error) {
        console.error();
      }
    },
    async updateCartItem(cartItem) {
      const response = await fetch(
        `http://localhost:5001/cart/${cartItem.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(cartItem),
        }
      );
      const updatedCartItem = await response.json();
      let cartItems = this.cartItems.map((item) =>
        item.id === cartItem.id ? { ...item, ...updatedCartItem } : item
      );
      this.cartItems = cartItems;
    },
    async deleteCart(cartItem) {
      await fetch(`http://localhost:5001/cart/${cartItem.id}`, {
        method: "DELETE",
      });
      this.cartItems = this.cartItems.filter((cart) => cart.id !== cart.id);
      this.fetchCartItems();
    },
  },
});

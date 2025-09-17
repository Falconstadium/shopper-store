import { create } from "zustand";
import type { CartState } from "../types/props";

export const useCartStore = create<CartState>((set) => ({
  cart: [],
  count: 0,
  loading: false,

  addToCart: (item) =>
    set((state) => {
      const index = state.cart.find((cartItem) => cartItem.id === item.id);
      if (index) {
        return {
          count: state.count + 1,
          cart: state.cart.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return {
        count: state.count + 1,
        cart: [...state.cart, item],
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const index = state.cart.find((item) => item.id === id);
      if (index && index.quantity > 1) {
        return {
          count: state.count - 1,
          cart: state.cart.map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          ),
        };
      }
      return {
        count: state.count - 1,
        cart: state.cart.filter((item) => item.id !== id),
      };
    }),

  removeFromCart: (id) =>
    set((state) => {
      return {
        cart: state.cart.filter((item) => item.id !== id),
        count: state.count,
      };
    }),
}));

import { createSlice } from "@reduxjs/toolkit";

const init = { items: [], totalQuatity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: init,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      state.totalQuatity++;
      state.totalPrice = state.totalPrice + newItem.price;
      const sameItems = state.items.find((item) => item.id === newItem.id);
      if (!sameItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        // sameItems.quantity++;
        sameItems.totalPrice = sameItems.totalPrice + newItem.price;
        sameItems.quantity = sameItems.quantity + newItem.quantity;
      }
    },
    removeItems(state, action) {
      const id = action.payload;
      const existingItems = state.items.find((item) => item.id === id);
      state.totalQuatity--;
      state.totalPrice = state.totalPrice - existingItems.price;
      if (existingItems.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== id);
      } else {
        existingItems.quantity--;
        existingItems.totalPrice =
          existingItems.totalPrice - existingItems.price;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;

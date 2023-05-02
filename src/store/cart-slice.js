import { createSlice } from "@reduxjs/toolkit";

const init = { items: [], totalQuatity: 0, totalPrice: 0 };

const cartSlice = createSlice({
  name: "cartSlice",
  initialState: init,
  reducers: {
    addItems(state, action) {
      const newItem = action.payload;
      // state.totalQuatity = state.totalQuatity + newItem.quantity;

      const sameItems = state.items.find((item) => item.id === newItem.id);
      if (!sameItems) {
        state.items.push({
          id: newItem.id,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.price,
          title: newItem.title,
        });
      } else {
        sameItems.quantity++;
      }

      const totalQuan = state.items.reduce((initialVal, current) => {
        let { quantity } = current;
        console.log(quantity);
        initialVal = initialVal + quantity;
        return initialVal;
      }, 0);

      let total = state.items.reduce((ini, cur) => {
        let { price, quantity } = cur;
        ini = ini + price * quantity;
        return ini;
      }, 0);
      state.totalPrice = total;
      state.totalQuatity = totalQuan;
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
        existingItems.totalPrice = existingItems.price * existingItems.quantity;
      }
    },
  },
});

export const cartAction = cartSlice.actions;

export default cartSlice;

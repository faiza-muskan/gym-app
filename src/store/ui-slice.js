import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { cartIsVisible: false },
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
    close(state) {
      state.cartIsVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

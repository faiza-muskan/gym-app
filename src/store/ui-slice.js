import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: { isVisible: false },
  reducers: {
    toggle(state) {
      state.isVisible = !state.isVisible;
    },
    close(state) {
      state.isVisible = false;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

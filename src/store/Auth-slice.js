import { createSlice } from "@reduxjs/toolkit";

const init = {};

const AuthSlice = createSlice({
  name: "Auth",
  initialState: init,
  reducers: {
    showLogin() {},
  },
});

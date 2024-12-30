// src/redux/slices/loginSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    message: "",
  },
  reducers: {
    setLoginMessage: (state, action) => {
      state.message = action.payload;
    },
    resetLoginMessage: (state) => {
      state.message = "";
    },
  },
});

export const { setLoginMessage, resetLoginMessage } = loginSlice.actions;

export default loginSlice.reducer;

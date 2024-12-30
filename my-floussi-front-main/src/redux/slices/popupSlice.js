import { createSlice } from "@reduxjs/toolkit";

export const popupSlice = createSlice({
  name: "popup",
  initialState: {
    showPopup: false,
    message: "",
  },
  reducers: {
    setShowPopup: (state, action) => {
      state.showPopup = action.payload;
    },
    setMessage: (state, action) => {
      state.message = action.payload;
    },
    resetPopup: (state) => {
      state.showPopup = false;
      state.message = "";
    },
  },
});

export const { setShowPopup, setMessage, resetPopup } = popupSlice.actions;

export default popupSlice.reducer;

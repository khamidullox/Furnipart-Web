import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./cartSlice";

export const store = configureStore({
  reducer: {
    cart: counterReducer,
  },
});

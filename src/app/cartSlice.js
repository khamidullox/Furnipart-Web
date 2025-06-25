import { createSlice } from "@reduxjs/toolkit";

// Получение данных из localStorage
const dataFromLocalStore = () => {
  return (
    JSON.parse(localStorage.getItem("cart")) || {
      product: [],
    }
  );
};

const initialState = dataFromLocalStore();

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      const exists = state.product.some((item) => item.id === payload.id);
      if (!exists) {
        state.product.push(payload);
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    deleteProduct: (state, { payload }) => {
      state.product = state.product.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    decrement: (state) => {
      // по желанию
    },
  },
});

export const { addProduct, deleteProduct, decrement } = cartSlice.actions;

export default cartSlice.reducer;

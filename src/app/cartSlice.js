import { createSlice } from "@reduxjs/toolkit";

// Получение данных из localStorage
const dataFromLocalStore = () => {
  const saved = JSON.parse(localStorage.getItem("cart")) || {};
  return {
    product: saved.product || [],
    ordersProduct: saved.ordersProduct || [],
  };
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

    ordersAddHistory: (state, { payload }) => {
      state.product = [];
      state.ordersProduct.push(payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addProduct, deleteProduct, ordersAddHistory } =
  cartSlice.actions;

export default cartSlice.reducer;

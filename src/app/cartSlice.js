import { createSlice } from "@reduxjs/toolkit";

// Получение данных из localStorage
const dataFromLocalStore = () => {
  const saved = JSON.parse(localStorage.getItem("cart")) || {};
  return {
    product: saved.product || [],
    ordersProduct: saved.ordersProduct || [],
    amoutCart: 1,
  };
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLocalStore,
  reducers: {
    addProduct: (state, { payload }) => {
      const exists = state.product.some((item) => item.id === payload.id);
      if (!exists) {
        state.product.push({ ...payload, amoutCart: 1 });
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    deleteProduct: (state, { payload }) => {
      state.product = state.product.filter((item) => item.id !== payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },

    increaseQuantity: (state, { payload }) => {
      const item = state.product.find((item) => item.id === payload);
      if (item) {
        item.amoutCart += 1;
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    decreaseQuantity: (state, { payload }) => {
      const itemIndex = state.product.findIndex((item) => item.id === payload);
      if (itemIndex !== -1) {
        const item = state.product[itemIndex];
        if (item.amoutCart > 1) {
          item.amoutCart -= 1;
        } else {
          state.product.splice(itemIndex, 1);
        }
        localStorage.setItem("cart", JSON.stringify(state));
      }
    },

    ordersAddHistory: (state, { payload }) => {
      state.product = [];
      state.ordersProduct.push(payload);
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const {
  addProduct,
  deleteProduct,
  ordersAddHistory,
  increaseQuantity,
  decreaseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

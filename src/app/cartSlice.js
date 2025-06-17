import { createSlice } from "@reduxjs/toolkit";
let dataFromLoclaStore = () => {
  return (
    JSON.parse(localStorage.getItem("cart")) || {
      product: [],
    }
  );
};
const initialState = {
  product: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: dataFromLoclaStore,
  reducers: {
    addProduct: (state, { payload }) => {
      let filterProduct = state.product.filter((item) => {
        console.log(item.id);
        return item.id !== payload.id;
      });
      state.product.push(filterProduct);
    },
    decrement: (state) => {},
  },
});

export const { addProduct, decrement } = cartSlice.actions;

export default cartSlice.reducer;

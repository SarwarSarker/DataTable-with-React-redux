import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  product: [],
};

export const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, { payload }) => {
      state.product = payload;
    },
  },
});

//actions
export const { addProduct } = productSlice.actions;

//select
export const getAllProducts = (state) => state.products.product;

//reducer
export default productSlice.reducer;

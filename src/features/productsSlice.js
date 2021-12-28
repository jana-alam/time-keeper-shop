import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [{ name: "hello" }, { name: "gello" }],
};

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    remove: (state, action) => {
      state.products.filter((product) => product.name === action.payload);
    },
  },
});

export const { remove } = productsSlice.actions;
export default productsSlice.reducer;

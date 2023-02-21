import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItem.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItem[itemIndex].cartTotalQuantity += 1;
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItem.push(tempProduct);
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;

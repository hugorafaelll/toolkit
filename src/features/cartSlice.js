import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItem: localStorage.getItem("cartItems") //pega o item do localstorage
    ? JSON.parse(localStorage.getItem("cartItems")) // jston to js code
    : [],
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
        toast.info(`Adicionou mais um ${action.payload.name} 👍`, {
          position: "top-right",
        });
      } else {
        const tempProduct = { ...action.payload, cartTotalQuantity: 1 };
        state.cartItem.push(tempProduct);
        toast.success(`Adicionado ${action.payload.name} ao carrinho`, {
          position: "top-right",
        });
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItem)); // adiciona o item no localstorage stringfy converte para  json
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
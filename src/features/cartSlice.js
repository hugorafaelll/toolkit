import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


// ACTIONS AND REDUCERS PAGE 

const initialState = {
  cartItem: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
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

      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    removeFromCart(state, action) {
      const nextCartItems = state.cartItem.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );
      state.cartItem = nextCartItems; //envia para o local storage um novo array de items 
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
      
      toast.error(`Removido ${action.payload.name} do carrinho`, {
        position: "top-right",
      });
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItem.findIndex(  // acessa o index do item selecionado no payload
        cartItem => cartItem.id === action.payload.id
      )
      if (state.cartItem[itemIndex].cartTotalQuantity > 1) {// acessa o index do item selecionado para apos selecionar o item no array 
        state.cartItem[itemIndex].cartTotalQuantity -= 1;
    
        toast.info(`Removido ${action.payload.name} do carrinho`, {
          position: "top-right",
        });
      } else if (state.cartItem[itemIndex].cartTotalQuantity === 1) {
        const nextCartItems = state.cartItem.filter(
          (cartItem) => cartItem.id !== action.payload.id
        );
        state.cartItem = nextCartItems; //envia para o local storage um novo array de items 
      
        toast.error(`Removido ${action.payload.name} do carrinho`, {
          position: "top-right",
        });
      }
      localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    clearCart(state, action){
      state.cartItem = []; 
      
       toast.success(`Não ha mais itens no carrinho`, {
          position: "top-right",
        });
 localStorage.setItem("cartItems", JSON.stringify(state.cartItem));
    },
    getTotals(state, action){
      let { total, quantity } = state.cartItem.reduce((cartTotal, cartItem) => {
        const { price, cartTotalQuantity } = cartItem;
        const itemTotal = price * cartTotalQuantity;
        
        cartTotal.total += itemTotal
        cartTotal.quantity += cartTotalQuantity
        
        return cartTotal
      }, {
        total: 0,
        quantity: 0,
      });
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total
    }
   
  }
});

export const { addToCart,  decreaseCart, removeFromCart, clearCart, getTotals } = cartSlice.actions;

export default cartSlice.reducer;

import React, { useEffect } from "react";

import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, clearCart, decreaseCart, getTotals, removeFromCart } from "../features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  useEffect(()=>{   //toda vez que ouver mudança no cart o getTotals ira alterar o total de itens no carrinho 
  dispatch(getTotals())
  
  },[cart])
  
  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromCart(cartItem));
  }
  const handleDecreaseCart =(cartItem)=>{
   dispatch(decreaseCart(cartItem))
  }

const handleIncreaseQuantity  = (cartItem) =>{
  dispatch(addToCart(cartItem));
}

const handleClearCart  = (cartItem) =>{
  dispatch(clearCart());
}
  
  return (
    <div className="cart-container">
      <h2> Shooping Cart</h2>
      {cart.cartItem?.length === 0 ? (  // CARRINHO VAZIO 
        <div className="cart-empty">
          <p> Seu carrinho esta vazio </p>

          <div className="start-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                />
              </svg>
              <p>Start Shopping </p>
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div className="titles">
            <h3 className="product-title">Produto</h3>
            <h3 className="price">Preço</h3>
            <h3 className="quantity">Quantidade</h3>
            <h3 className="total">Total</h3>
          </div>
          <div className="cart-items">
            {cart.cartItem?.map((cartItem) => (
              <div className="cart-item" key={cartItem.id}>
                <div className="cart-product">
                  <img src={cartItem.image} alt={cartItem.name} />
                  <div>
                    <h3>{cartItem.name}</h3>
                    <h3>{cartItem.desc}</h3>
                    <button onClick={()=> handleRemoveFromCart(cartItem)}>Remove</button>
                  </div>
                </div>
                <div className="cart-product-price">  
                {cartItem.price}</div>
                <div 
                className="cart-product-quantity">
                  <button onClick={() => handleDecreaseCart(cartItem)}> - </button>
                  <div className="count"> 
                  {cartItem.cartTotalQuantity}</div>
                  <button onClick={()=> handleIncreaseQuantity(cartItem) }> + </button>
                </div>
                <div className="cart-product-total-price">
                  R$ {cartItem.price * cartItem.cartTotalQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" onClick={()=>handleClearCart()} > Limpar Carrinho </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>SubTotal </span>
                  <span className="amount">R$:{cart.cartTotalAmount}</span>
                      </div>
                    <p>Frete calculado no final da Compra </p>
                    <button>Check out </button>
                    <div className="continue-shopping">
            <Link to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                height="30px"
                fill="white"
                className="bi bi-arrow-left"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
                /><path d="M1413 497.9c8.7 0 41.2 14.7 97.5 44s86.2 47 89.5 53c1.3 3.3 2 8.3 2 15 0 22-5.7 47.3-17 76-10.7 26-34.3 47.8-71 65.5s-70.7 26.5-102 26.5c-38 0-101.3-20.7-190-62-65.3-30-122-69.3-170-118s-97.3-110.3-148-185c-48-71.3-71.7-136-71-194v-8c2-60.7 26.7-113.3 74-158 16-14.7 33.3-22 52-22 4 0 10 .5 18 1.5s14.3 1.5 19 1.5c12.7 0 21.5 2.2 26.5 6.5s10.2 13.5 15.5 27.5c5.3 13.3 16.3 42.7 33 88s25 70.3 25 75c0 14-11.5 33.2-34.5 57.5s-34.5 39.8-34.5 46.5c0 4.7 1.7 9.7 5 15 22.7 48.7 56.7 94.3 102 137 37.3 35.3 87.7 69 151 101a44 44 0 0 0 22 7c10 0 28-16.2 54-48.5s43.3-48.5 52-48.5zm-203 530c84.7 0 165.8-16.7 243.5-50s144.5-78 200.5-134 100.7-122.8 134-200.5 50-158.8 50-243.5-16.7-165.8-50-243.5-78-144.5-134-200.5-122.8-100.7-200.5-134-158.8-50-243.5-50-165.8 16.7-243.5 50-144.5 78-200.5 134S665.3 78.7 632 156.4s-50 158.8-50 243.5a611 611 0 0 0 120 368l-79 233 242-77a615 615 0 0 0 345 104zm0-1382c102 0 199.5 20 292.5 60s173.2 93.7 240.5 161 121 147.5 161 240.5 60 190.5 60 292.5-20 199.5-60 292.5-93.7 173.2-161 240.5-147.5 121-240.5 161-190.5 60-292.5 60a742 742 0 0 1-365-94l-417 134 136-405a736 736 0 0 1-108-389c0-102 20-199.5 60-292.5s93.7-173.2 161-240.5 147.5-121 240.5-161 190.5-60 292.5-60z"></path>
              </svg>
              <p>  Continue  Shopping </p>
            </Link>
          </div>
                </div>
          </div>
        </>

      )}
    </div>
  );
};

export default Cart;

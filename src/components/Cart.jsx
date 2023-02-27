import React from "react";

import { useSelector , useDispatch} from "react-redux";
import { Link } from "react-router-dom";
import { removeFromCart } from "../features/cartSlice";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  
  const handleRemoveFromCart = (cartItem) =>{
    dispatch(removeFromCart(cartItem));
  }

  return (
    <div className="cart-container">
      <h2> Shooping Cart</h2>
      {cart.cartItem?.length === 0 ? (
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
                <div className="cart-product-price">R$:  
                
                {cartItem.price}</div>
                <div 
                className="cart-product-quantity">
                  <button> - </button>
                  <div className="count"> 
                  {cartItem.cartTotalQuantity}</div>
                  <button> + </button>
                </div>
                <div className="cart-product-total-price">
                  R${cartItem.price * cartItem.cartQuantity}
                </div>
              </div>
            ))}
          </div>
          <div className="cart-summary">
            <button className="clear-cart" > Clear Cart </button>
              <div className="cart-checkout">
                <div className="subtotal">
                  <span>SubTotal </span>
                  <span className="amount">R$:{cart.cartTotaAmount}</span>
                      </div>
                    <p>Frete calculado no final da Compra </p>
                    <button>Check out </button>
                    <div className="continue-shopping">
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

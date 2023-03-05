import React from "react";
import Carrosel from "./Carrosel/Carrosel";

import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useNavigate } from "react-router-dom";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const history = useNavigate();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    history("/cart");
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p> Loading ...</p>
      ) : error ? (
        <p> Ocorreu um erro {error.data}</p>
      ) : (
        <>
        <Carrosel />
          <h2>Hugo Imports</h2>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <h3>{product.name}</h3>
                <img src={product.image} alt={product.name} />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

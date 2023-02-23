import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useHistory } from "react-router-dom";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  let history = useHistory();

  const handleAddToCart = (product) => {
    console.log("adicionando item ");
    dispatch(addToCart(product));
  };

  return (
    <div className="home-container">
      {isLoading ? (
        <p> Loading ...</p>
      ) : error ? (
        <p> Ocorreu um erro {error.data}</p>
      ) : (
        <>
          <h2> Products List</h2>
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

import React from "react";
import { useGetAllProductsQuery } from "../features/productsApi";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();

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
                <img
                  src={product.image}
                  alt={product.name}
                  style={{ width: "200px", height: "200px" }}
                />
                <div className="details">
                  <span>{product.desc}</span>
                  <span className="price">${product.price}</span>
                </div>
                <button> Add to Cart</button>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

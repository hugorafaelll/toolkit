import React from "react";
import { useState } from "react";
import Carrosel from "./Carrosel/Carrosel";


//redux
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";
import { useGetAllProductsQuery } from "../features/productsApi";
import { useNavigate } from "react-router-dom";

// modal
import Modal from "./Modal/BasicModal";

function Home() {
  const { data, error, isLoading } = useGetAllProductsQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [selectedProduct, setSelectedProduct] = useState(null);



  const [isModalOpen, setIsModalOpen] = useState(false);


  const handleOpen = () => {
    setIsModalOpen(true);
  };



  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    navigate("/cart");
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
          <div className="frete">
            
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" className="bi bi-truck" viewBox="0 0 16 16">
                <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
              </svg>
            <h3>Frete Gratis para todo Brasil </h3>
            </div>
          <div className="products">
            {data?.map((product) => (
              <div className="product" key={product.id}>
                <h4 className="title">{product.name}</h4>
                <img 
                 onClick={() => {
                  handleOpen(product);
                  console.log(product.name);
                }}
                src={product.image} 
                alt={product.name} />
                <div className="details">
                  <h4 >{product.desc}</h4>
                  <h3 className="price">${product.price}</h3>
                </div>
                <button onClick={() => handleAddToCart(product)}>
                  Adicionar ao Carrinho
                </button>
                {isModalOpen && <Modal handleOpen={handleOpen}  handleCloseModal={handleCloseModal}/>}
              
         
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Home;

import React from "react";
import ReactDOM from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";

import "./index.css";
import App from "./App";

import { Provider } from "react-redux";

import productsReducer, { productsFetch } from "./features/productsSlice";

const store = configureStore({
  reducer: {
    productsReducer,
  },
});

store.dispatch(productsFetch());

https://www.youtube.com/watch?v=X3cE7Hatlo8&list=PL63c_Ws9ecIRnNHCSqmIzfsMAYZrN71L6&index=9



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

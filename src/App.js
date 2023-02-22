import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import "./App.css";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ToastContainer />
        <NavBar />
        <Routes>
          <Route path="/cart" exact element={<Cart />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

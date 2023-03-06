import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Cart from "./components/Cart";
import "./App.css";
import Container from '@mui/material/Container';

import Whatsapp from "./components/Whatsapp-call/Whatsapp";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
           <Container maxWidth="xl">
      <BrowserRouter>
        <ToastContainer />
 
        <NavBar />
        
        <Routes>
        <Route path="/cart" exact element={<Cart />} />
        <Route path="/" exact element={<Home />} />
        </Routes>
        
        
        </BrowserRouter>
        </Container>
        <Footer />
        <Whatsapp/>
    
    </div>
  );
}

export default App;

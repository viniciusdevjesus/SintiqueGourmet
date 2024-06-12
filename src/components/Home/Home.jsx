import React from "react";
import { CartProvider } from "../Pages/CartContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "../Pages/footer";
import Header from "../Pages/header";
import  "../css/home.module.css"
import ProductCards from "../Pages/ProductCards";
import ProductDetail from "../Pages/ProductDetail";
const Home = () => {
  return (
    <>
        <Header />
        <main>
        <CartProvider>
          <Routes>
            <Route exact path="/" element={<ProductCards />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Routes>
        </CartProvider>
        </main>
        <Footer />
    </>
  );
};

export default Home;

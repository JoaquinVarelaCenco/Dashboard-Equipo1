import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import ProductsList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";

const AppRouter = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/products/:id" element={<ProductView/>}/>
        <Route path="/products/new" element={<ProductView/>}/>
        <Route path="/*" element={"Error 404"}/>
      </Routes>
  );
};

export default AppRouter;

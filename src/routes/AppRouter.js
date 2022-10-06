import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Error404 from "../pages/Error404/Error404";
import Home from "../pages/Home/Home";
import NoImplemented from "../pages/NoImplemented/NoImplemented";
import ProductsList from "../pages/Products/ProductsList/ProductsList";
import ProductView from "../pages/Products/ProductView/ProductView";

const AppRouter = () => {
  return (
    
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="/products/:id" element={<ProductView/>}/>
        <Route path="/products/new" element={<ProductView/>}/>
        <Route path="/stores/*" element={<NoImplemented/>}/>
        <Route path="/*" element={<Error404/>}/>
      </Routes>
  );
};

export default AppRouter;

import React from "react";
import { useNavigate } from "react-router-dom";
import { newProduct } from "../../../services/apiServices";
import ProductForm from "../../../components/forms/ProductForm";

function ProductView() {
  const navigate = useNavigate();

  function handleSubmit(product) {
    newProduct(product).then((res) => {
      console.log(res);
    });
    navigate("/products");
  }

  return <ProductForm handleSubmit={handleSubmit} />;
}

export default ProductView;

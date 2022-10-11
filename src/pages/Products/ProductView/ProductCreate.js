import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { newProduct } from "../../../services/apiServices";
import ProductForm from "../../../components/forms/ProductForm";
import { ProductContext } from "../../../context/ProductContext";

function ProductView() {
  const navigate = useNavigate();
  const { product } = useContext(ProductContext);

  function handleSubmit() {
    newProduct(product).then((res) => {
      console.log(res);
    });
    navigate("/products");
  }

  return <ProductForm handleSubmit={handleSubmit} />;
}

export default ProductView;

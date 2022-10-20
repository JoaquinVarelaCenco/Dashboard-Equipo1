import React, { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductById, updateProduct } from "../../../services/apiServices";
import { ProductContext } from "../../../context/ProductContext";
import { deleteProductFunction } from "../../../utils/product";
import ProductForm from "../../../components/Forms/ProductForm";

function ProductUpdate() {
  let productId = useParams().id;
  const navigate = useNavigate();
  const { currentProduct, currentLastProduct } = useContext(ProductContext);

  useEffect(() => {
    if (productId) {
      getProductById(productId)
        .then((res) => {
          if (res.status === 404) {
            navigate("/");
          }
          delete res.isActive;
          delete res.lastModified;
          delete res.createdAt;
          currentProduct(res);
          currentLastProduct(res);

        });
      }
    }, [productId]);
    
  function handleDeleteProd() {
    deleteProductFunction(productId);
  }

  function handleSubmit(product) {
    updateProduct(product).then((res) => {
      
    });
    navigate("/products");
  }

  return (
    <ProductForm
      productId={productId}
      handleDeleteProd={handleDeleteProd}
      handleSubmit={handleSubmit}
    />
  );
}

export default ProductUpdate;

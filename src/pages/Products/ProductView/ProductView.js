import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import FormProduct from "../../../components/FormProduct/FormProduct";
import { getProductById } from "../../../services/apiServices";
import { deleteProduct } from "../../../services/apiServices";


import "./ProductView.css";

let defaultValues = {
  title: "",
  price: 0,
  stock: 0,
  description: "",
  category: "",
  images: [],
  rating: {
    rate: 0,
    count: 0,
  },
};

const ProductView = () => {
  const navigate = useNavigate();


  const [product, setProduct] = useState(defaultValues);
  const [lastState, setLastState] = useState(defaultValues);

  let productId = useParams().id;

  useEffect(() => {
    if (productId) {
      getProductById(productId).then((res) => {
        if (res.status === 404) {
          alert("Producto no encontrado");
          navigate("/");
        }
        delete res.isActive;
        delete res.lastModified;
        delete res.createdAt;
        setProduct(res);
        setLastState(res);
      });
    }
  }, [productId]);

  function handleDeleteProd() {
    deleteProduct(productId).then((res) => {
      console.log(res);
      navigate("/");
    });
  }

  return (
    <div className="product-new">
      <div className="product-new__nav">
        {productId ? (
          <>
            <h2>Productos - #{productId}</h2>
            <button onClick={handleDeleteProd}>Eliminar</button>
          </>
        ) : (
          <h2>Productos - Nuevo Producto</h2>
        )}
      </div>
      <h1>Informacion</h1>
        <FormProduct
        product={product}
        setProduct={setProduct}
        productId={productId}
        lastState={lastState}
        />
    </div>
  );
};

export default ProductView;

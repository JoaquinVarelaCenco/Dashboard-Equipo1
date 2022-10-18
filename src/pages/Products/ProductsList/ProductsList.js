import { useContext, useEffect, useState } from "react";
import { SearchContext } from "../../../context/SearchContext";
import ProductCard from "../../../components/ProductCard/ProductCard";
import Spinner from "../../../components/Spinner/Spinner";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import ProductsSortMenu from "../../../components/ProductsSortMenu/ProductsSortMenu";
import "./ProductsList.css";

const ProductsList = () => {
  const {
        products,
        productsExist,
        getAllProducts,
        searchTermValue,
  } = useContext(SearchContext);

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <div className="productList__container">
      <ProductsSortMenu/>
      {productsExist ? (
        products.length !== 0 ? (
          products.map((p) => (
            
            <ProductCard
              title={p.title}
              price={p.price}
              key={p.id}
              image={p.images!=null? p.images[0] : null}
              id={p.id}
            />
          ))
        ) : searchTermValue !== "" && products.length === 0 ? (
          <WarningMessage
            text="No hay productos que coincidan con tu busqueda"
            search={true}
          />
        ) : (
          <div className="productList__spinner-container">
            <Spinner />
          </div>
        )
      ) : (
        <WarningMessage text="No existen productos" search={false} />
      )}
    </div>
  );
};

export default ProductsList;

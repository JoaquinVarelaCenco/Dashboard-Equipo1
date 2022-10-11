import { useContext, useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsList.css";
import Spinner from "../../../components/Spinner/Spinner";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import { SearchContext } from "../../../context/SearchContext";
import ProductsSortMenu from "../../../components/ProductsSortMenu/ProductsSortMenu";

const ProductsList = () => {
  const context = useContext(SearchContext);

  useEffect(() => {
    context.getAllProducts();
  }, []);

  return (
    <div className="productList__container">
      <ProductsSortMenu/>
      {context.productsExist ? (
        context.products.length !== 0 ? (
          context.products.map((p) => (
            
            <ProductCard
              title={p.title}
              price={p.price}
              key={p.id}
              image={p.images!=null? p.images[0] : null}
              id={p.id}
            />
          ))
        ) : context.searchTermValue !== "" && context.products.length === 0 ? (
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

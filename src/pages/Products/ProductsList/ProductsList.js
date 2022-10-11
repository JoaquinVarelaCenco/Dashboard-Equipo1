import { useContext, useEffect, useState } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsList.css";
import Spinner from "../../../components/Spinner/Spinner";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import { SearchContext } from "../../../context/SearchContext";

const ProductsList = () => {
  const context = useContext(SearchContext);

  useEffect(() => {
    context.getAllProducts();
  }, []);

  return (
    <div className="productList__container">
      <div className="productList__container__sort">
        <i>Ordenar por</i>
        <select
          name="category"
          required
          className="select-control"
          onChange={context.orderProducts}
        >
          <option value="Mayor precio">Mayor precio</option>
          <option value="Menor precio">Menor precio</option>
          <option value="Mas relevantes" selected>
            Mas relevantes
          </option>
        </select>
      </div>
      {context.productsExist ? (
        context.products.length !== 0 ? (
          context.products.map((p) => (
            <ProductCard
              title={p.title}
              price={p.price}
              key={p.id}
              image={p.images[0]}
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

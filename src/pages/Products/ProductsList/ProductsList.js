import { useContext, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsList.css";
import Spinner from "../../../components/Spinner/Spinner";
import { SearchContext } from "../../../context/SearchContext";

const ProductsList = () => {
  const context = useContext(SearchContext);

  useEffect(() => {
    context.getAllProducts();
  }, []);

  return (
    <div className="productList__container">
      {context.products.length ? (
        context.products.map((p) => (
          <ProductCard
            title={p.title}
            price={p.price}
            key={p.id}
            image={p.images[0]}
            id={p.id}
          />
        ))
      ) : context.products.length===0 ? <p>No se encontraron productos!!</p> : <Spinner /> }
    </div>
  );
};

export default ProductsList;

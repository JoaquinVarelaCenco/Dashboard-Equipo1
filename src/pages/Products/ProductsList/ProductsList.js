import { useContext, useEffect } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import "./ProductsList.css";
import Spinner from "../../../components/Spinner/Spinner";
import WarningMessage from "../../../components/WarningMessage/WarningMessage";
import { SearchContext } from "../../../context/SearchContext";

const ProductsList = () => {
  const context = useContext(SearchContext);

  context.products.sort((a, b) =>
    a.rating.count < b.rating.count
      ? 1
      : a.rating.count > b.rating.count
      ? -1
      : 0
  );

  useEffect(() => {
      context.getAllProducts();
  }, []);

  return (
    <div className="productList__container">
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
        ) :  (context.searchTermValue !== '' && context.products.length===0) ?(
          <WarningMessage text="No hay productos que coincidan con tu busqueda" search={true}/>
      ) : 
            <div className="productList__spinner-container">
            <Spinner />
          </div>
      )
      :(
        <WarningMessage text="No existen productos" search={false}/>
      )}
    </div>
  );
};

export default ProductsList;

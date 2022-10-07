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
      {
      context.productsExist?
        
        context.products.length != 0 ? 
        
          context.products.map((p) => 
          
            <ProductCard
              title={p.title}
              price={p.price}
              key={p.id}
              image={p.images[0]}
              id={p.id}
            />
          )

        : 
           <Spinner />
      :
      <h1>No hay productos</h1>
      }
    </div>
  );
};

export default ProductsList;

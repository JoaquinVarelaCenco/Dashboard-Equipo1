import { useState, useEffect, useContext } from "react";
import ProductCard from "../../../components/ProductCard/ProductCard";
import { getProducts } from "../../../services/apiServices";
import "./ProductsList.css";
import Spinner from "../../../components/Spinner/Spinner";
import { SearchContext } from "../../../context/SearchContext";


const ProductsList = () => {
  // const [products, setProducts] = useState([]);
  const context = useContext(SearchContext);

  // const filterProducts = (searchTerm) => {
  //   return products.filter((val) => {
  //     if (searchTerm === "") {
  //       return val;
  //     } else if (val.title.toLowerCase().includes(searchTerm.toLowerCase())) {
  //       return val;
  //     }
  //   });
  // };

  // useEffect(() => {
  //   getProducts().then((data) => {
  //     setProducts(data);
  //   });
  // }, []);


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

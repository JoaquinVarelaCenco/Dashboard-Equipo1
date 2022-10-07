import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsExist, setProductsExist] = useState(true)
  const [helpProducts, setHelpProducts] = useState([]);

  useEffect(() => {

    getAllProducts();
///empieza lo de marquitos
      getProducts()
    .then((data) => {
      setProductsExist(true)
      setProducts(data);
      setHelpProducts(data);
    })
    .catch(e =>{
      setProductsExist(false)
    });

  }, []);

  const filterProducts = (searchTerm) => {
    const newProducts = helpProducts.filter((val) => {
      if (
        searchTerm === "" ||
        val.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }
    });
    return newProducts;
  };

  const handleSearch = (e) => {
    const newFilter = filterProducts(e.target.value);
    setProducts(newFilter);
  };

  const getAllProducts = () => {
    getProducts().then((data) => {
      setProducts(data);
      setHelpProducts(data);
    });
  };

  return (
    <SearchContext.Provider value={{ handleSearch, products, productsExist, getAllProducts, helpProducts}}>
      {children}
    </SearchContext.Provider>
  );
};

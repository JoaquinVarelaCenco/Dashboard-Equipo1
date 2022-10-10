import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsExist, setProductsExist] = useState(true);
  const [helpProducts, setHelpProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  const filterProducts = (searchTerm) => {
    const newProducts = helpProducts.filter((val) => {
      if (
        searchTerm === "" ||
        val.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return val;
      }else if(val.description.toLowerCase().includes(searchTerm.toLowerCase())){
        return val;
      }
    });
    return newProducts;
  };

  const handleSearch = (e) => {
    const newFilter = filterProducts(e.target.value);
    const newFilterOrderByPoints = [...newFilter].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0))
    console.log(newFilterOrderByPoints);
    setProducts([...newFilter].sort((a, b) => (a.price > b.price ? 1 : a.price < b.price ? -1 : 0)));
  };

  const getAllProducts = () => {
    getProducts()
      .then((data) => {
        setProductsExist(true);
        setProducts(data);
        setHelpProducts(data);
      })
      .catch((e) => {
        setProductsExist(false);
      });
  };

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        products,
        productsExist,
        getAllProducts,
        helpProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
 
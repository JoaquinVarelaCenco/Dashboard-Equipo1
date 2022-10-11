import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsExist, setProductsExist] = useState(true);
  const [helpProducts, setHelpProducts] = useState([]);
  const [searchTermValue, setSearchTermValue] = useState('')
  const [orderBy, setOrderBy] = useState("Mas relevantes");

  const getAllProducts = () => {
    getProducts()
      .then((data) => {
        setProductsExist(true);
        orderByMostRelevants(data)
          setProducts(data);
          setHelpProducts(data);
      })
      .catch(() => {
        setProductsExist(false);
      });
  };

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
    setSearchTermValue(e.target.value);
    setProducts(newFilter);
  };

  const orderByHighPrice = () => {
    products.sort((a, b) =>
      a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    );
  };

  const orderByLowPrice = () => {
    products.sort((a, b) =>
      a.price > b.price ? 1 : a.price < b.price ? -1 : 0
    );
  };

  const orderByMostRelevants = (arrayData) => {
    arrayData.sort((a, b) =>
      a.rating.count < b.rating.count
        ? 1
        : a.rating.count > b.rating.count
        ? -1
        : 0
    );
  };

  const orderProducts = (e) => {
    switch (e.target.value) {
      case "Mayor precio":
        orderByHighPrice();
        setOrderBy("Mayor precio");
        break;
      case "Menor precio":
        orderByLowPrice();
        setOrderBy("Menor precio");
        break;
      case "Mas relevantes":
        orderByMostRelevants(products);
        setOrderBy("Mas relevantes");
        break;
    }
  };

  useEffect(() => {
    getAllProducts();
    console.log(products);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        handleSearch,
        products,
        productsExist,
        getAllProducts,
        helpProducts,
        searchTermValue,
        orderProducts,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
 
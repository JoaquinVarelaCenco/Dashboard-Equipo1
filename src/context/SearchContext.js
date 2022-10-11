import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [productsExist, setProductsExist] = useState(true);
  const [helpProducts, setHelpProducts] = useState([]);
  const [searchTermValue, setSearchTermValue] = useState("");
  const [orderBy, setOrderBy] = useState("Mas relevantes");

  const getAllProducts = () => {
    getProducts()
      .then((data) => {
        setProductsExist(true);
        orderProductsPrueba(data);
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
      } else if (
        val.description.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
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

  const orderByHighPrice = (arrayData) => {
    arrayData.sort((a, b) =>
      a.price < b.price ? 1 : a.price > b.price ? -1 : 0
    );
  };

  const orderByLowPrice = (arrayData) => {
    arrayData.sort((a, b) =>
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

  const orderByAlphabet = (arrayData) => {
    arrayData.sort((a, b) =>
      a.title > b.title ? 1 : a.title < b.title ? -1 : 0
    );
  };

  const orderProducts = (e) => {
    switch (e.target.value) {
      case "Mayor precio":
        setOrderBy("Mayor precio");
        orderByHighPrice(products);
        break;
      case "Menor precio":
        setOrderBy("Menor precio");
        orderByLowPrice(products);
        break;
      case "Mas relevantes":
        setOrderBy("Mas relevantes");
        orderByMostRelevants(products);
        break;
      case "A-Z":
        setOrderBy("A-Z");
        orderByAlphabet(products);
        break;
    }
  };

  const orderProductsPrueba = (data) => {
    
    switch (orderBy) {
      case "Mayor precio":
        setOrderBy("Mayor precio");
        orderByHighPrice(data);
        break;
      case "Menor precio":
        setOrderBy("Menor precio");
        orderByLowPrice(data);
        break;
      case "Mas relevantes":
        setOrderBy("Mas relevantes");
        orderByMostRelevants(data);
        break;
      case "A-Z":
        setOrderBy("A-Z");
        orderByAlphabet(data);
        break;
    }
  };



  useEffect(() => {
    getAllProducts();
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
        orderBy,
        orderProducts
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

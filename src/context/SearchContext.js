import { useState, createContext, useEffect } from "react";
import { getProducts } from "../services/apiServices";
import { orderByAlphabet, orderByHighPrice, orderByLowPrice, orderByMostRelevants } from "../utils/product";

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
        setProducts(data);
        setHelpProducts(data);
        orderProductsInit(data);
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
  }

  const orderProducts = (e) => {
    switch (e.target.value) {
      case "Mayor precio":
        setOrderBy("Mayor precio");
        setProducts(orderByHighPrice(products));
        break;
      case "Menor precio":
        setOrderBy("Menor precio");
        setProducts(orderByLowPrice(products));
        break;
      case "Mas relevantes":
        setOrderBy("Mas relevantes");
        setProducts(orderByMostRelevants(products));
        break;
      case "A-Z":
        setOrderBy("A-Z");
        setProducts(orderByAlphabet(products));
        break;
      default:
        setOrderBy("Mas relevantes");
        setProducts(orderByMostRelevants(products));
        break;
    }
  };

  const orderProductsInit = (data) => {
    switch (orderBy) {
      case "Mayor precio":
        setOrderBy("Mayor precio");
        setProducts(orderByHighPrice(data));
        break;
      case "Menor precio":
        setOrderBy("Menor precio");
        setProducts(orderByLowPrice(data));
        break;
      case "Mas relevantes":
        setOrderBy("Mas relevantes");
        setProducts(orderByMostRelevants(data));
        break;
      case "A-Z":
        setOrderBy("A-Z");
        setProducts(orderByAlphabet(data));
        break;
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  const value = {
    handleSearch,
        products,
        productsExist,
        getAllProducts,
        helpProducts,
        searchTermValue,
        orderBy,
        orderProducts,
  }
  return (
    <SearchContext.Provider
      value={value}
    >
      {children}
    </SearchContext.Provider>
  );
};

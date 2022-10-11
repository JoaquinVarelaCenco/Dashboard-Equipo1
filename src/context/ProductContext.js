import { useState, createContext } from "react";

export const ProductContext = createContext("home");

export const ProductProvider = ({ children }) => {
  const defaultValues = {
    title: "",
    price: 0,
    stock: 0,
    description: "",
    category: "",
    images: [],
    rating: {
      rate: 0,
      count: 0,
    },
  };

  const [product, setProduct] = useState(defaultValues);

  const [lastState, setLastState] = useState(defaultValues);

  const value = {
    product,
    currentProduct: (p) => setProduct(p),
    lastState,
    currentLastProduct: (p) => setLastState(p),
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};

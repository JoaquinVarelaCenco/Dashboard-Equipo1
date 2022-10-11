import { useState, createContext } from "react";

export const HeaderContext = createContext("home");

export const HeaderProvider = ({ children }) => {
  const [page, setPage] = useState("home");

  const value = {
    page,
    currentPage: (p) => setPage(p),
  };

  return (
    <HeaderContext.Provider value={value}>{children}</HeaderContext.Provider>
  );
};

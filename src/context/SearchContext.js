import { useState, createContext } from 'react'

export const SearchContext = createContext()

export const SearchProvider = ({children}) => {
    
const [searchTerm, setSearchTerm] = useState("");

const handleSearch = (e) => {
  setSearchTerm(e.target.value)
  console.log(searchTerm);
}
  return (
    <SearchContext.Provider value={{searchTerm, handleSearch}}>
      {children}
    </SearchContext.Provider>
  )
}
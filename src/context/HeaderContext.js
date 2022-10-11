import { useState, createContext } from 'react'

export const HeaderContext = createContext('home')

export const HeaderProvider = ({children}) => {

  const [ page, setPage ] = useState('home');
  const [ titleContainer, setTitleContainer ] = useState('displayFlex')

  const value = {
    page,
    currentPage:(p) => setPage(p),
    titleContainer,
    currentTitleContainer: (p) => setTitleContainer(p)
  }

  return (
    <HeaderContext.Provider value={value}>
      {children}
    </HeaderContext.Provider>
  )
}
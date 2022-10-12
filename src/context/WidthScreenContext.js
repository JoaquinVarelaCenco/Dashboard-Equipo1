import { useState, createContext } from 'react'

export const WidthScreenContext = createContext(window.innerWidth);

export const WidthScreenProvider = ({children}) => {
    const [ widthScreen, setWidthScreen ] = useState(window.innerWidth);

    const value = {
        widthScreen,
        updateWidthScreen: (newState) => setWidthScreen(newState)
    }

    window.addEventListener('resize', ()=>{
      setWidthScreen(window.innerWidth)
  })

  return (
    <WidthScreenContext.Provider value={value}>
      {children}
    </WidthScreenContext.Provider>
  )
}


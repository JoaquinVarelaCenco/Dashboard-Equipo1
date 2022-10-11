import { useState, createContext } from 'react'

export const WidthScreenContext = createContext(0);

const WidthScreenProvider = () => {
    const [ widthScreen, setWidthScreen ] = useState(0);

    const value = {
        widthScreen,
        updateWidthScreen: () => setWidthScreen()
    }


  return (
    <div>WidthScreenContext</div>
  )
}

export default WidthScreenContext
import { useState, createContext } from 'react'

export const SideBarContext = createContext('unhide');

export const SideBarProvider = ({children}) => {

    const [ visibility, setVisibility ] = useState('unhide');

    const value = {
        visibility,
        toggleVisibility: () => setVisibility(prev => prev === 'unhide' ? 'hide' : 'unhide')
    }


return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    )
}
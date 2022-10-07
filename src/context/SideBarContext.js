import { useState, createContext } from 'react'

export const SideBarContext = createContext('');

export const SideBarProvider = ({children}) => {

    const [ visibility, setVisibility ] = useState('');

    const value = {
        visibility,
        toggleVisibility: () => setVisibility(prev => prev === 'unhide' ? 'hide' : 'unhide'),
        hideSideBar:() => setVisibility(prev => prev === 'unhide' ? 'hide' : '')
    }


return (
        <SideBarContext.Provider value={value}>
            {children}
        </SideBarContext.Provider>
    )
}
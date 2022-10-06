import { useState, createContext } from 'react'

export const ThemeContext = createContext('clear');

export const ThemeProvider = ({children}) => {
    
    const initialMode = (localStorage.getItem("darkMode")) ? localStorage.getItem("darkMode") : 'clear';

    const [ theme, setTheme ] = useState(initialMode);

    const value = {
        theme,
        toggleTheme: () => setTheme(prev => prev === 'dark' ? 'clear' : 'dark')
    }
    localStorage.setItem("darkMode", theme);


return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
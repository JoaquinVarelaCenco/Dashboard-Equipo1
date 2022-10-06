import { useState, createContext } from 'react'

export const ThemeContext = createContext('dark')

export const ThemeProvider = ({children}) => {

    const [ theme, setTheme ] = useState('dark')

    const value = {
        theme,
        toggleTheme: () => setTheme(prev => prev === 'dark' ? 'clear' : 'dark')
    }

return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}
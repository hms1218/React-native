import { createContext, useState } from "react";

const ThemeContext = createContext()

const ThemeProvider = ({children}) => {

    const [isDarkmode, setIsDarkmode] = useState(false);

    const toggleTheme = () => setIsDarkmode(prev => !prev);

    const value = {isDarkmode, toggleTheme}

    return(
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export {ThemeContext,ThemeProvider};
"use client";
import { createContext, useContext, useEffect, useState } from 'react';

interface ThemeContextStructure {
    theme: string
}

const ThemeContext = createContext({});

const ThemeProvider = (props: any) => {
    const [theme, setTheme] = useState("light");
    
    const themeChanger = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    useEffect(() => {
        if(window.localStorage.theme !== undefined)
            setTheme(localStorage.theme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setTheme: themeChanger }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
export {ThemeContext};

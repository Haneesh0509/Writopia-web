"use client";
import { createContext, useContext, useState } from 'react';

const ThemeContext = createContext({});

const ThemeProvider = (props: any) => {
    const [theme, setTheme] = useState("dark");

    console.log(theme);
    
    const themeChanger = (newTheme: string) => {
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme: themeChanger }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;
export {ThemeContext};

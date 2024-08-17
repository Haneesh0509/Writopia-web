"use client";
import React, { useContext } from 'react'
import { ThemeContext } from "../contexts/Theme";

const ThemeContainer = ({ children }) => {
    const {theme} = useContext(ThemeContext)

    return (
        <main data-theme={theme}>
            {children}
        </main>
    )
}

export default ThemeContainer

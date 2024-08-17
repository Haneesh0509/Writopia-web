"use client";
import React, { useContext } from 'react';

import Styles from "./NavBar.module.css";
import { ThemeContext } from '@/app/contexts/Theme';

const NavBarThemeContainer = ({children}: any) => {
    const {theme} = useContext(ThemeContext);

    return (
        <div className={`${theme === "dim" ? "navbar bg-base-100" : "navbar bg-slate-300"} ${Styles.navbar}`}>{children}</div>
    )
}

export default NavBarThemeContainer

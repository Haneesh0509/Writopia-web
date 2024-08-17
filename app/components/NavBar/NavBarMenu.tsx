"use client";
import { ThemeContext } from '@/app/contexts/Theme';
import React, { useContext } from 'react'

const NavBarMenu = () => {
    const themeContextData: any = useContext(ThemeContext);

    return (
        <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow ${themeContextData.theme === "dim" ? "bg-base-100" : "bg-slate-500"}`}>
            <li><a>Homepage</a></li>
            <li><a>Portfolio</a></li>
            <li><a>About</a></li>
        </ul>
    )
}

export default NavBarMenu

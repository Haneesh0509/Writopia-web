"use client";
import { ThemeContext } from '../../contexts/Theme';
import React, { useContext, useEffect } from 'react'

const ThemeToggler = () => {
    // const {theme, setTheme} = useContext(ThemeContext);

    // useEffect(() => {}, [theme]);

    return (
        <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full bg-gray-300">
                    <img
                        alt="Theme Selector"
                        src="/assets/themepng.png" />
                </div>
            </div>
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                {/* <li onClick={() => setTheme("dark")}>
                    <a className="justify-between">
                        Dark
                        <span className="badge">New</span>
                    </a>
                </li>
                <li onClick={() => setTheme("light")}><a>Light</a></li> */}
                <li><a>Coming Soon!</a></li>
            </ul>
        </div>
    );
}

export default ThemeToggler

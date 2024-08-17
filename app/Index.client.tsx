"use client";
import React, { useContext } from 'react'

import { ThemeContext } from './contexts/Theme';
import Styles from "./index.module.css";

const Index = () => {
    const themeContextData: any = useContext(ThemeContext);

    return (
        <>
            <div className={
                `${themeContextData.theme === "dim" ?
                    "bg-slate-600 border-solid border-4 border-slate-400" :
                    "bg-slate-200 border-solid border-4 border-slate-400"} hover:border-dotted rounded-3xl ${Styles.brandingText}`
            }>
                We are a publisher for Young Authors!
            </div>
            <div className=
                {`${themeContextData.theme === "dim" ?
                    "bg-stone-800 hover:bg-stone-900" :
                    "bg-neutral-300 hover:bg-neutral-200"} ${Styles.container}`}>
                Writopia is an open-source, non-profit platform where authors can upload their stories for Free of Cost! Writopia does not require funding as it has a few enthusiastic developers who contribute to the Open-Source for respect and honour rather than profit.
            </div>
        </>
    )
}

export default Index
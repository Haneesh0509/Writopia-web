import React from "react";
import Image from "next/image";
import NavBar from "./components/NavBar/NavBar";
import Styles from "./index.module.css";
import FAQs from "./components/FAQs/FAQs";

export default function Home() {

	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
			<main>
				<NavBar />
				<div className={"text-center "+Styles.semiHeading}>
					Welcome to Writopia!
				</div>
				<div className={`bg-slate-600 border-solid border-4 border-slate-400 hover:border-dotted rounded-3xl ${Styles.brandingText}`}>
					We are a publisher for Young Authors!
				</div>
				<div className={`bg-stone-800 hover:bg-stone-900 ${Styles.container}`}>
					Writopia is an open-source, non-profit platform where authors can upload their stories for Free of Cost! Writopia does not require funding as it has a few enthusiastic developers who contribute to the Open-Source for respect and honour rather than profit.	
				</div>
				<div className={`${Styles.container}`}>
					<div className={Styles.semiHeading} style={{textAlign: "left"}}>
						FAQs:
						<FAQs />
					</div>
				</div>
			</main>
		// </main>
	);
}

import React, { useContext } from "react";

import NavBar from "./components/NavBar/NavBar";
import Styles from "./index.module.css";
import FAQs from "./components/FAQs/FAQs";
import Footer from "./components/Footer/Footer";

import ThemeContainer from "./components/ThemeContainer";
import IndexClient from "./Index.client";

export default function Home() {

	return (
		// <main className="flex min-h-screen flex-col items-center justify-between p-24">
		<ThemeContainer>
			<div className="page">
				<NavBar />
				<div className={"text-center " + Styles.semiHeading}>
					Welcome to Writopia!
				</div>
				<IndexClient />
				<div className={`${Styles.container}`}>
					<div className={Styles.semiHeading} style={{ textAlign: "left" }}>
						FAQs:
						<FAQs />
					</div>
				</div>
				<Footer />
			</div>
		</ThemeContainer>
		// </main>
	);
}

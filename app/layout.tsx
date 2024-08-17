import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./contexts/Theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Writopia",
	description: "A place where young authors from High Schools can start writing stories!",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<title>Writopia</title>
			</head>
			<ThemeProvider>
				<body className={inter.className + " min-h-screen"}>{children}</body>
			</ThemeProvider>
		</html>
	);
}

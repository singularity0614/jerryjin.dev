'use client'

import "./globals.css";
import Script from "next/script";
import { ThemeProvider } from "next-themes";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous" />
            <body className={`font-sans bg-[#F8FAFC] text-[#222222] dark:bg-black dark:text-[#F8FAFC] selection:bg-[#222222] selection:text-[#F8FAFC] dark:selection:bg-[#F8FAFC] dark:selection:text-black`}>
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
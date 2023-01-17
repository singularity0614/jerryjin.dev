'use client'

import "./globals.css";
import Script from "next/script";
import { Inter } from "@next/font/google";
import { ThemeProvider } from "next-themes";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.variable} font-sans bg-[#F8FAFC] text-[#222222] dark:bg-black dark:text-[#F8FAFC] selection:bg-[#222222] selection:text-[#F8FAFC] dark:selection:bg-[#F8FAFC] dark:selection:text-black`}>
                <ThemeProvider enableSystem={true} attribute="class">
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
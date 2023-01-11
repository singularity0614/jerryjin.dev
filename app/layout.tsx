import "./globals.css";
import Script from "next/script";
import { Inter } from "@next/font/google";

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous" />
            <body className={`${inter.variable} font-sans bg-[#F8FAFC] text-[#222222]`}>
                {children}
            </body>
        </html>
    );
}
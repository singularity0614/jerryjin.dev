import "./globals.css";
import Script from "next/script";
import { Inter } from "next/font/google";
import Temp from "./Temp";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: {
      template: '%s | Jerry Jin',
      absolute: 'Jerry Jin',
    },
    description: "The website concerning Jerry Jin. On this site there will be content regarding thoughts on life, coding projects as well as many other things which I hope can provide value to anyone out there.",
  }

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous" />
            <body className={`font-sans bg-[#F8FAFC] text-[#222222] dark:bg-black dark:text-[#F8FAFC] selection:bg-[#222222] selection:text-[#F8FAFC] dark:selection:bg-[#F8FAFC] dark:selection:text-black`}>
                <Temp>
                    {children}
                </Temp>
            </body>
        </html>
    );
}
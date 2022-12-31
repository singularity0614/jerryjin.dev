import Footer from "./Footer";
import "./globals.css";
import Script from "next/script";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous" />
            <body className="font-sans bg-[#F8FAFC]">
                {children}
                <Footer />
            </body>
        </html>
    );
}
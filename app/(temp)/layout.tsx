import Header from "./Header";
import Footer from "../Footer";
import Script from "next/script";

export default function TempLayout({ children }) {
    return (
        <>
            <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2596207444336931" crossOrigin="anonymous" />
            <div className="">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
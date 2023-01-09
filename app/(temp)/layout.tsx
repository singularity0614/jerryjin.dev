import Header from "./Header";
import Footer from "../Footer";

export default function TempLayout({ children }) {
    return (
        <>
            <div className="selection:bg selection:bg-[#222222] selection:text-[#F8FAFC]">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
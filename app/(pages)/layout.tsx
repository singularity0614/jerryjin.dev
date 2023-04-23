import Header from "./Header";
import Footer from "../Footer";

export default function TempLayout({ children }) {
    return (
        <>
            <div className="">
                <Header />
                {children}
                <Footer />
            </div>
        </>
    );
}
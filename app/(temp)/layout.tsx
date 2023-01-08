import Header from "./Header";

export default function TempLayout({ children }) {
    return (
        <>
            <div className="selection:bg selection:bg-[#222222] selection:text-[#F8FAFC]">
                <Header />
                {children}
            </div>
        </>
    );
}
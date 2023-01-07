import Header from "./Header";

export default function TempLayout({ children }) {
    return (
        <>
            <div className="selection:bg selection:bg-rose-200 selection:text-rose-500">
                <Header />
                {children}
            </div>
        </>
    );
}
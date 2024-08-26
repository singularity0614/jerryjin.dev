import Header from "./Header";

export default function TempLayout({ children }) {
    return (
        <>
            <div className="">
                <Header />
                {children}
            </div>
        </>
    );
}
import Header from "./header";

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
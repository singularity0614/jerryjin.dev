import Header from "./Header";

export default function TempLayout({ children }) {
    return (
        <>
            <Header />
            {children}
        </>
    );
}
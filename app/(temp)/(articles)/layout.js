import DistanceBar from "./DistanceBar";

export default function RootLayout({ children }) {
    return (
        <>
            <DistanceBar />
            {children}
        </>
    );
}
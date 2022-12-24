import DistanceBar from "./DistanceBar";

export default function AricleLayout({ children }) {
    return (
        <>
            <DistanceBar />
            {children}
        </>
    );
}
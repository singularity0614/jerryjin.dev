import DistanceBar from "./DistanceBar";

export default function AricleLayout({ children }) {
    return (
        <>
            <DistanceBar />
            <main className="text-[#222222] flex flex-col justify-center">
                <div className="flex justify-center mt-[10vw] xl:mt-32">
                    <div className="w-full sm:w-[640px] m-2">                        
                        {children}
                    </div>
                </div>
            </main>
        </>
    );
}
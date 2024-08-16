import type { Metadata } from "next"


export const metadata: Metadata = {
    title: "Skills",
    description: "Welcome to Jerry Jin's limited list of skills.",
}

export default function Skills() {
    return (
        <>
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="w-[576px] md:w-[75vw]">
                    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center -z-10">
                        <div className="w-[432px] h-[432px] bg-gradient-to-r from-jblue to-jgreen dark:from-jred dark:to-jyellow blur-[144px] animate-rotate-grad rounded-full">hello</div>
                    </div>
                    <h2 className="font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-jblue to-jgreen dark:from-jred dark:to-jyellow w-fit pb-1">Skills</h2>
                    <p>A very limited amount</p>
                </div>
            </div>
        </>
    )
}
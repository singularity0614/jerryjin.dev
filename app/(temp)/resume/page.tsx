import type { Metadata } from "next"
import ResumeContents from "./Resume"


export const metadata: Metadata = {
    title: "Resume - Jerry Jin",
    description: "Welcome to Jerry Jin's un-decorative resume.",
}

export default function Resume() {
    return (
        <>
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="w-[576px] md:w-[75vw]">
                    <ResumeContents></ResumeContents>
                </div>
            </div>
        </>
    )
}
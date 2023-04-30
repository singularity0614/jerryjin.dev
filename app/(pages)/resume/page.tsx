import type { Metadata } from "next"
import ResumeContents from "./Resume"


export const metadata: Metadata = {
    title: "Resume",
    description: "Welcome to Jerry Jin's un-decorative resume.",
}

export default function Resume() {
    return (
        <>
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="">
                    <ResumeContents></ResumeContents>
                </div>
            </div>
        </>
    )
}
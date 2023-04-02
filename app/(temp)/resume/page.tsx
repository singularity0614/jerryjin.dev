import type { Metadata } from "next"
import { Title } from "../../Formats"

export const metadata: Metadata = {
    title: "Resume - Jerry Jin",
    description: "Welcome to Jerry Jin's un-decorative resume.",
}

export default function Resume() {
    return (
        <>
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="w-[576px] md:w-[75vw]">
                    <h2 className="font-semibold text-6xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] w-fit pb-1">Resume</h2>
                    <h3 className="font-medium text-3xl my-24">Education</h3>
                    <h3 className="font-medium text-3xl my-24">Experience</h3>
                </div>
            </div>
        </>
    )
}
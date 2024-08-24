import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Tutoring",
    description: "Tutoring offers from Jerry Jin.",
}

export default function Tutoring() {
    return (
        <>
            <div className="flex justify-center items-center h-full">
                <div className="text-9xl w-96">
                    Private, 1-on-1 tutoring
                </div>
            </div>
            <div>
                Offering:
                - Mathematical Methods
                - Chemistry
            </div>
            <div>
                About Me:
            </div>
        </>
    )
}
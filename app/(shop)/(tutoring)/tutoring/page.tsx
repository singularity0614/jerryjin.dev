import { Metadata } from "next"
import Subject from "./Subject"

export const metadata: Metadata = {
    title: "Tutoring",
    description: "Tutoring offers from Jerry Jin.",
}

export default function Tutoring() {
    return (
        <>
            <Subject name={"Mathematics"} description={"VCE. Preparation."} link={"/tutoring/mathematics"} />
            <Subject name={"Chemistry"} description={"VCE. Olympiad."} link={"/tutoring/chemistry"} />

            <div className="border-t-2 border-slate-200 dark:border-t-[#222222]">
                <div className="text-5xl font-semibold pt-6 pl-6 md:pt-24 md:pl-24 xl:pt-24 xl:pl-64">
                    About
                </div>
                <div className="px-6 md:px-24 xl:px-64 relative pb-2 md:pb-8 mb-4 md:mb-16">
                    <div className=" pt-4 lg:pt-8 text-xl">
                        Hey what&apos;s up! I&apos;m Jerry, a student (currently at Camberwell Grammar School). Yeah, we&apos;re probs pretty similar in that regard. In fact, I&apos;ve gone through school life with all its ups and downs, feeling the lows and celebrating the highs. I&apos;m interested in teaching anything Maths or Chemistry related (for now, might expand) to any student at any level.
                    </div>
                    <div className="pt-4 text-xl">
                        If you want some credentials, I can point you to my Premier&apos;s Award in Methods, or my bronze medal in the International Chemistry Olympiad, participating as one of the Top 4 students in Australia.
                    </div>
                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center -z-10">
                        <div className="w-[432px] h-[432px] bg-gradient-to-r from-jblue to-jgreen dark:from-jred dark:to-jyellow blur-[144px] animate-rotate-grad rounded-full">hello</div>
                    </div>
                    <div className="pt-4 text-xl">
                        But teaching students is a whole different ball game. I&apos;ve learnt that through being the head tutor of our school&apos;s maths and chemistry clubs. Being a student, I&apos;m by no means the best tutor in all of Melbourne to look for, especially if you&apos;re looking for teaching experience, exhaustive resources or that teacher-like authority.
                    </div>
                    <div className="pt-4 text-xl">
                        But I know what it&apos;s like to be a student, I know what it&apos;s like to need that one person to ask questions to, I know what it&apos;s like to want someone to help you pursue things you never thought you would&apos;ve before (trust me, I didn&apos;t learn any proper Chemistry until Year 11). And most importantly, I know that to do well, it&apos;s not about the number of hours, the number of exam papers. It&apos;s about finding the fun, the passion and understanding not just on a surface level, but getting a holistic view of the subject.
                    </div>
                </div>
            </div>
            <div className="py-32 border-t-2 border-slate-200 dark:border-t-[#222222]"></div>
        </>
    )
}
'use client'

import { useState, useRef } from "react"

export default function ResumeContents() {
    const [slideNum, setSlideNum] = useState(0);
    const totalSlides = 2;

    const prevSlide = () => {
        setSlideNum(Math.max(0, slideNum-1));
    }
    
    const nextSlide = () => {
        setSlideNum(Math.min(totalSlides, slideNum+1))
    }

    const Slide = ({number, children}) => {

        return (
            <>
                <div className={`${slideNum === number ? "block" : "hidden"}`}>
                    {children}
                </div>
            </>
        )
    }

    return (
        <>
            <div className="flex justify-between items-center w-[576px] md:w-[75vw]">
                <h2 className="font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] w-fit pb-1">Resume</h2>
                <div className="flex justify-center items-center">
                    <button onClick={prevSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                        </svg>
                    </button>
                    {/* not the best solution, have to find other way to keep / 3 frozen while changing slideNum */}
                    <div className="text-2xl mx-4 w-12 text-right">
                        {slideNum+1} / {totalSlides+1}
                    </div>
                    <button onClick={nextSlide}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                        </svg>
                    </button>
                </div>
            </div>
            <Slide number={0}>
                <h3 className="font-medium text-5xl mt-24 mb-16">Education</h3>
                <table className="table-fixed w-full mb-16">
                    <tbody>
                        <tr className="border-b-2 border-b-slate-200 dark:border-b-[#222222]">
                            <td className="font-light text-lg pt-6 pb-12 w-56">2021-present</td>
                            <td className="text-2xl pt-6 pb-12">Camberwell Grammar School</td>
                        </tr>
                        <tr className="border-b-2 border-b-slate-200 dark:border-b-[#222222]">
                            <td className="font-light text-lg pt-6 pb-12">2020</td>
                            <td className="text-2xl pt-6 pb-12">Caulfield Grammar School</td>
                        </tr>
                        <tr className="border-b-2 border-b-slate-200 dark:border-b-[#222222]">
                            <td className="font-light text-lg pt-6 pb-12">2010-2019</td>
                            <td className="text-2xl pt-6 pb-12">Wesley College</td>
                        </tr>
                    </tbody>
                </table>
            </Slide>
            <Slide number={1}>
                <h3 className="font-medium text-5xl mt-24 mb-12">Experience</h3>
                Stuff coming soon...
            </Slide>
            <Slide number={2}>
                <h3 className="font-medium text-5xl mt-24 mb-12">Achievements</h3>
                (Very limited) stuff coming soon...
            </Slide>
        </>
    )
}
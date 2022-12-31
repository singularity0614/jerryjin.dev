'use client'

import CustomLink from "../../../CustomLink";
import { useState } from "react";

export default function About() {
    const [funny, setFunny] = useState("CLICK TO REVEAL...");
    return (
        <>
            <main className="text-[#222222] flex flex-col justify-center">
                <div className="flex justify-center mt-[10vw] xl:mt-32">
                    <div className="w-full sm:w-[640px] m-2">
                        <p className="text-xs text-gray-500 font-medium pl-[5px] mb-3">ABOUT ME</p>
                        <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl">hi.</h1>
                        <h2 className="animate-fade-in-from-bottom del font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD]">about me</h2>
                        <img className="show-on-scroll animate-fade-in-from-bottom rounded-xl my-16" alt="CGS" src="https://media.digistormhosting.com.au/cgs-au-vic-256-website/content/_facebookImage/972/Copy-of-DJI_0006.jpg?mtime=20190122142424"/>
                        <p className="text-lg mb-6">As of 2023, I am a student in Year 11, enroute to finishing my high school journey, with the largest obstacle — VCE — still in the way.</p>
                        <h3 className="text-2xl font-semibold mb-6">Current Projects</h3>
                        <ol className="text-lg list-decimal list-inside mb-6">
                            <li className="mb-1">I am currently a Year 11 student studying at <CustomLink href="https://cgs.vic.edu.au" text="Camberwell Grammar School" />.</li>
                            <li className="mb-1">On <CustomLink href="/" text="this website" />, I showcase myself as well as some other projects, including this <CustomLink href="/stockdashboard" text="stock dashboard" />.</li>
                            <li className="mb-1">I also try to invest in stocks, so if you have any advice, feel free to share it 😊</li>
                        </ol>
                        <p className="text-lg mb-6">However, I feel like I should probably be looking for a job or maybe even starting a small business to earn some money at this age.</p>
                        <h3 className="text-2xl font-semibold mb-6">VCE</h3>
                        <p className="text-lg mb-6">As with every other student, this period is quite daunting to me. It feels quite surreal that I'm finishing school so soon, but I hope I make the most of these final 2 years.</p>
                        <p className="text-lg mb-6">For reference, my VCE subjects are:</p>
                        <ul className="text-lg list-disc list-inside mb-6">
                            <li className="mb-1 pl-1">English Language</li>
                            <li className="mb-1 pl-1">Mathematical Methods</li>
                            <li className="mb-1 pl-1">Specialist Mathematics</li>
                            <li className="mb-1 pl-1">Chinese Second Language</li>
                            <li className="mb-1 pl-1">Chemistry</li>
                            <li className="mb-1 pl-1">Physics</li>
                        </ul>
                        <h3 className="text-2xl font-semibold mb-6">Other Stuff</h3>
                        <p className="text-lg mb-6">not much other than...</p>
                        <p className="text-lg mb-6"><button onClick={() => setFunny("CRISTO RONALDO SEWY")}>{funny}</button></p>
                    </div>
                </div>
            </main>
        </>
    );
}
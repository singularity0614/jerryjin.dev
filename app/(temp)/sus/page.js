'use client'

import { useRef } from "react";
import Link from "next/link";

export default function HomePage() {
    const scrollToRef = useRef();

    const nextPage = () => {
        scrollToRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }

    return (
        <>
            <main className="dark:bg-slate-700 text-[#222222] dark:text-[#F8FAFC]">
                <section>
                    <div className="h-screen flex flex-col justify-center items-center">
                        <button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 absolute top-2 right-3">
                            <svg id="theme-toggle-dark-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                            <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
                        </button>
                        <h1 className="text-center font-medium text-7xl sm:text-8xl md:text-9xl">Jerry Jin</h1>
                        <br/>
                        <br/>
                        <div className="flex justify-center">
                            <div>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#ECD7C8] to-[#EEA4BC] border-neutral-500 hover:border-neutral-700 px-3 py-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Facebook</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#EEA4BC] to-[#BE88C4] border-neutral-500 hover:border-neutral-700 px-3 py-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Instagram</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#BE88C4] to-[#9186E7] border-neutral-500 hover:border-neutral-700 px-3 py-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Twitter</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#9186E7] to-[#92C9F9] border-neutral-500 hover:border-neutral-700 px-3 py-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Github</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#92C9F9] to-[#C7F8FF] border-neutral-500 hover:border-neutral-700 px-3 py-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Email</a>
                            </div>
                        </div>
                        <div onClick={nextPage} className="hover:cursor-pointer animate-bounce bg-white p-2 w-12 h-12 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center absolute bottom-4">
                            <svg className="w-6 h-6 text-[#3DD9BD]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                        <br/>
                    </div>
                </section>
                <section>
                    <div ref={scrollToRef} className="h-screen flex flex-col justify-center items-center bg-slate-700">
                        <a href="" className="text-7xl text-white font-semibold">About Me</a>
                        <br/>
                        <div className="w-[640px] xl:w-[50vw]">
                            <p className="text-2xl text-white">Don't really know what else to put here. Maybe a lorem ipsum dolor sit amet...</p>
                            <br/>
                            <p className="text-2xl text-white">I have participated in Da Vinci decathlon, earning a 1st place in State Mathematics and a 1st place in National Mathematics. Other competitions I have participated in include: AMOC Senior Contest (Bronze), AMO (Bronze), AIMO (High Distinction).</p>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="p-32">
                        <div className="flex justify-center items-center">
                            <div className="w-[480px] m-8">
                                <h1 className="text-5xl font-semibold">Skills</h1>
                                <hr className="w-[80px] border-2 border-[#3DD9BD] mt-4 mb-8 rounded-sm" />
                                <div className="h-96 flex flex-col justify-between">
                                    <Skill emoji="➗" title="Maths" description="An interesting subject which I have always been passionate about." />
                                    <Skill emoji="👨🏻‍💻" title="Coding" description="Recently started learning, I wish to continue with this and develop more skills." />
                                    <Skill emoji="🧬" title="Science" description="Although not above average in terms of grades, I am still curious about the way the world works." />
                                </div>
                            </div>
                            <div className="w-[480px] m-8">
                                <h1 className="text-5xl font-semibold">Latest</h1>
                                <hr className="w-[80px] border-2 border-[#3DD9BD] mt-4 mb-8 rounded-sm" />
                                <div className="h-96 flex flex-col justify-between">
                                    <Latest title="About" route="/about" />
                                    <Latest title="Intern" route="#" />
                                    <Latest title="Tech" route="#" />
                                    <Latest title="Plans" route="#" />
                                    <Latest title="Stocks" route="/stockdashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

function Skill(props) {
    return (
        <>
            <div className="flex justify-between items-center p-3 bg-slate-100 rounded-lg hover:cursor-pointer">
                <div className="text-3xl mx-3">{props.emoji}</div>
                <div className="ml-1 my-3">
                    <p className="text-xl font-semibold mb-0.25">{props.title}</p>
                    <p className="text-sm pr-3">{props.description}</p>
                </div>
            </div>
        </>
    );
}

function Latest(props) {
    return (
        <>
            <div className="border-b-slate-200 border-b pb-6">
                <p className="text-lg text-[#444444]"><Link href={props.route}>{props.title}</Link></p>
            </div>
        </>
    )
}
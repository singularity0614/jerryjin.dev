'use client'

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
    const scrollToRef = useRef();

    const nextPage = () => {
        scrollToRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"});
    }

    return (
        <>
            <main className="dark:bg-slate-700 text-[#222222] dark:text-[#F8FAFC]">
                <section>
                    <div className="h-screen flex flex-col justify-center items-center bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] text-white">
                        <h1 className="font-semibold text-2xl absolute left-20 top-8">Jerry Jin</h1>
                        <h1 className="font-semibold text-9xl">hi.</h1>
                        <div className="font-semibold text-md absolute right-20 top-8 text-center">
                            <div className="mb-24"><Link href="/about">about</Link></div>
                            <div className="mb-8 flex justify-center">
                                <a href="https://www.instagram.com/j.j.in_/" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
                                </a>
                            </div>
                            <div className="mb-8 flex justify-center">
                                <a href="https://twitter.com/singularity0614" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="18"><path fill="#FFF" d="M20.667 2.797a8.192 8.192 0 01-2.357.646 4.11 4.11 0 001.804-2.27 8.22 8.22 0 01-2.606.996A4.096 4.096 0 0014.513.873c-2.649 0-4.595 2.472-3.997 5.038a11.648 11.648 0 01-8.457-4.287 4.109 4.109 0 001.27 5.478A4.086 4.086 0 011.47 6.59c-.045 1.901 1.317 3.68 3.29 4.075a4.113 4.113 0 01-1.853.07 4.106 4.106 0 003.834 2.85 8.25 8.25 0 01-6.075 1.7 11.616 11.616 0 006.29 1.843c7.618 0 11.922-6.434 11.662-12.205a8.354 8.354 0 002.048-2.124z"/></svg>
                                </a>
                            </div>
                            {/*<button id="theme-toggle" type="button" className="text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1 mb-8">
                                <svg id="theme-toggle-dark-icon" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path></svg>
                                <svg id="theme-toggle-light-icon" className="hidden w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" fillRule="evenodd" clipRule="evenodd"></path></svg>
    </button>*/}
                        </div>
                        {/*<div className="flex justify-center">
                            <div>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#ECD7C8] to-[#EEA4BC] border-neutral-500 hover:border-neutral-700 p-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Facebook</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#EEA4BC] to-[#BE88C4] border-neutral-500 hover:border-neutral-700 p-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Instagram</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#BE88C4] to-[#9186E7] border-neutral-500 hover:border-neutral-700 p-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Twitter</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#9186E7] to-[#92C9F9] border-neutral-500 hover:border-neutral-700 p-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Github</a>
                                <a href="#" className="anim-delay-700 text-white bg-gradient-to-r from-[#92C9F9] to-[#C7F8FF] border-neutral-500 hover:border-neutral-700 p-2 rounded-2xl inline-block items-center m-1 text-2xl md:text-3xl border transition">Email</a>
                            </div>
    </div>*/}
                        <div onClick={nextPage} className="hover:cursor-pointer animate-bounce bg-white p-2 w-12 h-12 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center absolute bottom-4">
                            <svg className="w-6 h-6 text-[#3DD9BD]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                        <br/>
                    </div>
                </section>
                {/*<section>
                    <div ref={scrollToRef} className="h-screen flex flex-col justify-center items-center bg-slate-700">
                        <a href="" className="text-7xl text-white font-semibold">About Me</a>
                        <br/>
                        <div className="w-[640px] xl:w-[50vw]">
                            <p className="text-2xl text-white">Don't really know what else to put here. Maybe a lorem ipsum dolor sit amet...</p>
                            <br/>
                            <p className="text-2xl text-white">I have participated in Da Vinci decathlon, earning a 1st place in State Mathematics and a 1st place in National Mathematics. Other competitions I have participated in include: AMOC Senior Contest (Bronze), AMO (Bronze), AIMO (High Distinction).</p>
                        </div>
                    </div>
</section>*/}
                <section>
                    <div className="p-32">
                        <div className="flex justify-center items-center">
                            <div className="w-[480px] m-8">
                                <h1 className="text-5xl font-semibold">Skills</h1>
                                <hr className="w-[80px] border-2 border-[#049CB7] mt-4 mb-8 rounded-sm" />
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
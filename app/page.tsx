'use client'

import { useRef } from "react";
import Link from "next/link";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

export default function Page() {
    const scrollToRef = useRef<HTMLDivElement>();

    const nextPage = () => {
        scrollToRef.current !== undefined ? scrollToRef.current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"}) : null;
    }

    return (
        <>
            <main className="">
                <section>
                    <div className="h-screen flex flex-col justify-center items-center animate-gradient-anim bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] text-[#F8FAFC]">
                        <h1 className="hidden sm:block font-semibold text-2xl absolute left-20 top-8">Jerry Jin</h1>
                        <h1 className="font-semibold text-9xl text-transparent bg-clip-text bg-gradient-to-r from-[#222222] via-[#F8FAFC] to-[#222222] animate-shine">hello.</h1>
                        <div className="sm:hidden absolute top-[6vw] right-[6vw]">
                            <ThemeSwitcher />
                        </div>
                        <div className="hidden sm:block font-semibold text-md absolute right-20 top-8 text-center">
                            <div className="mb-24"><Link href="/about">about</Link></div>
                            <div className="mb-8 flex justify-center">
                                <a href="https://www.instagram.com/j.j.in_/" target="_blank" rel="noopener noreferrer" aria-label="instagram">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path fill="#FFF" d="M10.333 1.802c2.67 0 2.987.01 4.042.059 2.71.123 3.976 1.409 4.1 4.099.048 1.054.057 1.37.057 4.04 0 2.672-.01 2.988-.058 4.042-.124 2.687-1.386 3.975-4.099 4.099-1.055.048-1.37.058-4.042.058-2.67 0-2.986-.01-4.04-.058-2.717-.124-3.976-1.416-4.1-4.1-.048-1.054-.058-1.37-.058-4.041 0-2.67.01-2.986.058-4.04.124-2.69 1.387-3.977 4.1-4.1 1.054-.048 1.37-.058 4.04-.058zm0-1.802C7.618 0 7.278.012 6.211.06 2.579.227.56 2.242.394 5.877.345 6.944.334 7.284.334 10s.011 3.057.06 4.123c.166 3.632 2.181 5.65 5.816 5.817 1.068.048 1.408.06 4.123.06 2.716 0 3.057-.012 4.124-.06 3.628-.167 5.651-2.182 5.816-5.817.049-1.066.06-1.407.06-4.123s-.011-3.056-.06-4.122C20.11 2.249 18.093.228 14.458.06 13.39.01 13.049 0 10.333 0zm0 4.865a5.135 5.135 0 100 10.27 5.135 5.135 0 000-10.27zm0 8.468a3.333 3.333 0 110-6.666 3.333 3.333 0 010 6.666zm5.339-9.87a1.2 1.2 0 10-.001 2.4 1.2 1.2 0 000-2.4z"/></svg>
                                </a>
                            </div>
                            <div className="mb-8 flex justify-center">
                                <a href="https://au.linkedin.com/in/jerry-jin-850682243" target="_blank" rel="noopener noreferrer" aria-label="linkedin">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#FFF" d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/></svg>
                                </a>
                            </div>
                            <div className="mb-8 flex justify-center">
                                <ThemeSwitcher />
                            </div>
                        </div>
                        <div onClick={nextPage} className="hover:cursor-pointer animate-bounce bg-[#F8FAFC] p-2 w-12 h-12 shadow-lg rounded-full flex items-center justify-center absolute bottom-4">
                            <svg className="w-6 h-6 text-[#21BBBA] dark:text-[#F7814B]" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                                <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                            </svg>
                        </div>
                        <br/>
                    </div>
                </section>
                <section>
                    <div ref={scrollToRef} className="sm:py-32">
                        <div className="sm:flex sm:justify-center sm:items-center">
                            <div className="sm:w-[480px] mx-4 sm:mx-8 py-16 sm:py-8">
                                <h1 className="text-5xl font-semibold"><Link href="/skills">Skills</Link></h1>
                                <hr className="w-[80px] border-2 border-[#049CB7] dark:border-[#F2195A] mt-4 mb-8 rounded-sm" />
                                <div className="sm:h-96 sm:flex sm:flex-col sm:justify-between">
                                    <Skill emoji="➗" title="Maths" description="An interesting subject which I have always been passionate about." />
                                    <Skill emoji="👨🏻‍💻" title="Coding" description="Recently started learning, I wish to continue with this and develop more skills." />
                                    <Skill emoji="🧪" title="Chemistry" description="Again, a recent interest which I've picked up, though I've always been interested about science." />
                                </div>
                            </div>
                            <div className="sm:w-[480px] mx-4 sm:mx-8 pb-16 sm:py-8">
                                <h1 className="text-5xl font-semibold">Pages</h1>
                                <hr className="w-[80px] border-2 border-[#3DD9BD] dark:border-[#FBE83B] mt-4 mb-8 rounded-sm" />
                                <div className="h-96 flex flex-col justify-between">
                                    <Pages title="About" route="/about" />
                                    <Pages title="Resume" route="/resume" />
                                    <Pages title="Tech" route="/tech" />
                                    <Pages title="Blog" route="/blog" />
                                    <Pages title="Stock Dashboard" route="/stock-dashboard" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="pt-16 border-t-2 border-t-slate-200 dark:border-t-[#222222]">
                        <div className="sm:flex sm:justify-center sm:items-center text-4xl">
                            <h1 className="text-5xl font-semibold">Watch this: (cause why not)</h1>
                        </div>
                    </div>
                    <div className="sm:py-16">
                        <div className="sm:flex sm:justify-center sm:items-center">
                            <iframe
                                className="w-[64vw] h-[36vw]"
                                src="https://www.youtube.com/embed/2XyVW688-pk?si=LxIb5Uk1yazdrWob"
                                allowFullScreen
                            />
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

function Skill({emoji, title, description}) {
    return (
        <>
            <div className="flex justify-between items-center p-3 my-3 sm:my-0 bg-slate-100 dark:bg-[#111111] rounded-lg hover:cursor-pointer">
                <div className="text-3xl mx-3">{emoji}</div>
                <div className="ml-1 my-3">
                    <p className="text-xl font-semibold mb-0.25">{title}</p>
                    <p className="text-sm pr-3">{description}</p>
                </div>
            </div>
        </>
    );
}

function Pages({route, title}) {
    return (
        <>
            <div className="border-b-slate-200 dark:border-b-[#222222] border-b pb-6">
                <p className="text-lg"><Link href={route}>{title}</Link></p>
            </div>
        </>
    )
}
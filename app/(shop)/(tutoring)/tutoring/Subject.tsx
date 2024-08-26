'use client'

import Link from "next/link"

export default function Subject({name, description, link}) {
    return (
        <>
            <div className="flex flex-col justify-center items-center py-8 border-t-2 border-slate-200 dark:border-t-[#222222]">
                <div className="text-5xl font-semibold">
                    {name}
                </div>
                <div className="py-4 text-2xl">{description}</div>
                <div className="flex justify-between items-center w-60 pt-2 pb-16 text-lg">
                    <button className="bg-gradient-to-r from-[#049CB7] to-[#21BBBA] dark:from-[#F2195A] dark:to-[#F7814B] text-[#F8FAFC] px-4 py-[10px] rounded-full">
                        <Link href={link}>Learn more</Link>
                    </button>
                    <button className="bg-gradient-to-r from-[#21BBBA] to-[#3DD9BD] dark:from-[#F7814B] dark:to-[#FBE83B] text-[#F8FAFC] p-[1px] rounded-full">
                        <span className="transition dark:hover:bg-transparent hover:bg-transparent hover:text-[#F8FAFC] duration-300 ease-in-out flex w-full bg-[#F8FAFC] text-[#222222] dark:bg-black dark:text-[#F8FAFC] px-[15px] py-[9px] rounded-full">
                            Enquire
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}
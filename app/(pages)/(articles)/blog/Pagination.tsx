'use client'

import Link from "next/link";
import { useState } from "react";

export default function Pagination({postsData}) {
    let pageSize = 5;
    const [pageNum, setPageNum] = useState(0); // starts from 0 to pagesCount - 1

    const pagesCount = Math.ceil(postsData.length/pageSize);
    const pagesArray = [...Array(pagesCount).keys()]; // 0 to pagesCount - 1

    const [toggle, setToggle] = useState(true)
    const [x, setX] = useState(true) // check if field is empty
    const [y, setY] = useState(pageNum) // store last entered number

    return (
        <>
            <ul className="py-16">
                {
                    postsData.slice(pageNum*pageSize, (pageNum+1)*pageSize).map((x, index) => (
                        <BlogPost key={index} post={x} />
                    ))
                }   
            </ul>
            <p className="text-center text-xl font-medium">Pages</p>
            {
                pagesCount === 1 
                ? null 
                :   <div className="flex justify-between items-center my-6">
                        {
                            pageNum === 0
                            ? <div className="w-10 h-10 rounded-lg hidden sm:block"></div>
                            : <button onClick={() => setPageNum(Math.max(pageNum-5, 0))} className={`bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg hidden sm:flex justify-center items-center`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
                                </svg>
                            </button>
                        }
                        {
                            <ul className="flex justify-center items-center">
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum < 3
                                        ? <div className="w-10 h-10 rounded-lg"></div>
                                        : <button onClick={() => setPageNum(0)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{1}</button>
                                    }
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum === 2
                                        ? <button onClick={() => setPageNum(pageNum-2)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{pageNum-1}</button>
                                        : (
                                            pageNum < 2
                                            ? <div className="w-10 h-10 rounded-lg"></div>
                                            : <div className="w-10 h-10 rounded-lg flex justify-center items-center">...</div>
                                        )
                                    }
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum < 1
                                        ? <div className="w-10 h-10 rounded-lg"></div>
                                        : <button onClick={() => setPageNum(pageNum-1)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{pageNum}</button>
                                    }
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    <div className="bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] text-[#F8FAFC] w-10 h-10 rounded-lg flex justify-center items-center">
                                        {
                                            toggle ? (
                                                <p onDoubleClick={() => {setToggle(false); setY(pageNum)}}>
                                                    {
                                                        x === true ? pageNum+1 : ""
                                                    }
                                                </p>
                                            ) : (
                                                <input
                                                    className="appearance-none w-10 h-10 bg-transparent text-center focus:outline-none select-none"
                                                    type='text'
                                                    value={
                                                        x === true ? pageNum+1 : ""
                                                    }
                                                    onChange={(event) => {
                                                        if (event.target.value === "") {
                                                            setX(false);
                                                        } else {
                                                            let num = Math.min(pagesCount, Math.max(1, parseInt(event.target.value)))
                                                            setY(num-1);
                                                            setPageNum(num-1);
                                                            setX(true);
                                                        }
                                                    }}
                                                    onKeyDown={(event) => {
                                                        if (event.key === 'Enter' || event.key === 'Escape') {
                                                            setX(true);
                                                            if (event.key === 'Escape'){
                                                                setPageNum(y);
                                                            }
                                                            setToggle(true);
                                                            event.preventDefault();
                                                            event.stopPropagation();
                                                        }
                                                    }}
                                                    onBlur={(event) => {
                                                            setX(true);
                                                            setPageNum(y);
                                                            setToggle(true);
                                                            event.preventDefault();
                                                            event.stopPropagation();
                                                        }
                                                    }
                                                />
                                            )
                                        }
                                    </div>
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum > pagesCount - 2
                                        ? <div className="w-10 h-10 rounded-lg"></div>
                                        : <button onClick={() => setPageNum(pageNum+1)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{pageNum+2}</button>
                                    }
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum === pagesCount - 3
                                        ? <button onClick={() => setPageNum(pageNum+2)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{pageNum+3}</button>
                                        : (
                                            pageNum > pagesCount - 3
                                            ? <div className="w-10 h-10 rounded-lg"></div>
                                            : <div className="w-10 h-10 rounded-lg flex justify-center items-center">...</div>
                                        )
                                    }
                                </li>
                                <li className="mx-2 sm:mx-3">
                                    {
                                        pageNum > pagesCount - 4
                                        ? <div className="w-10 h-10 rounded-lg"></div>
                                        : <button onClick={() => setPageNum(pagesCount-1)} className="bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg">{pagesCount}</button>
                                    }
                                </li>
                            </ul>
                        }

                        {
                            pageNum === pagesArray.length-1
                            ? <div className="w-10 h-10 rounded-lg hidden sm:block"></div>
                            : <button onClick={() => setPageNum(Math.min(pageNum+5, pagesCount-1))} className={`bg-slate-100 dark:bg-[#111111] w-10 h-10 rounded-lg hidden sm:flex justify-center items-center`}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
                                </svg>
                            </button>
                        }
                    </div>
            }
        </>
    )
}

function BlogPost({post}) {
    return (
        <li className="odd:bg-slate-100 dark:odd:bg-[#111111] rounded-xl">
            <div className="flex justify-between items-center p-8">
                <p className="font-medium text-base sm:text-lg"><Link href={`/blog/${post.id}`}>{post.title}</Link></p>
                <p className="text-sm sm:text-base text-gray-500">{post.date}</p>
            </div>
        </li>
    )
}
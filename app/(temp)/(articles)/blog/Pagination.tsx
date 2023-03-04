'use client'

import Link from "next/link";
import { useState } from "react";

export default function Pagination({postsData}) {
    let pageSize = 5;
    const [pageNum, setPageNum] = useState(0);

    const pagesCount = Math.ceil(postsData.length/pageSize);
    const pagesArray = [...Array(pagesCount).keys()]; // 0 to pagesCount - 1

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
                :   <ul className="flex justify-center items-center my-6">
                        {
                            pagesArray.map((x, index) => (
                                <li key={index} className="mx-2 sm:mx-3">
                                    <button onClick={() => setPageNum(x)} className={`${x === pageNum ? "bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] text-[#F8FAFC]" : "bg-slate-100 dark:bg-[#111111]"} w-10 h-10 rounded-lg`}>{x + 1}</button>
                                </li>
                            ))
                        }
                    </ul>  
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
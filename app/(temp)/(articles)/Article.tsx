'use client'

import { useEffect, useState } from "react";
import Markdown from "markdown-to-jsx";
import Contents from "./Contents";
import { Title, Heading3, Heading4, Paragraph, Footnote, CustomLink } from "../../Formats";

export default function Article({postData, type=''}) {
    const [headings, setHeadings] = useState([]);

    useEffect(() => {
        const elements = Array.from(document.querySelectorAll("h3, h4")).map(x => [x.textContent, x.getAttribute('id'), x.nodeName[1]]);
        setHeadings(elements);
    }, [])

    const options = {
        overrides: {
            CustomLink: {
                component: CustomLink,
            },
            h3: {
                component: Heading3,
            },
            h4: {
                component: Heading4,
            },
            p: {
                component: Paragraph,
            },
            Footnote: {
                component: Footnote,
            },
        },
    }

    return (
        <>
            {
                headings.length !== 0 ? <Contents headings={headings}></Contents> : null
            } 
            {
                type === "blog" ? (
                    <>
                        <Title title="blog" image={false} />
                        <div className="mx-2 sm:mx-0">
                            <div className="bg-slate-100 dark:bg-[#111111] py-8 sm:py-12 my-6 sm:my-8 rounded-3xl">                
                                <div className="text-center text-2xl sm:text-4xl font-semibold mb-2 sm:mb-4">{postData.data.title}</div>
                                <div className="text-center text-xl text-gray-500 dark:text-gray-200">{postData.data.date}</div>
                            </div>
                            <Paragraph><CustomLink href="/blog">← All blogs</CustomLink></Paragraph>
                        </div>
                    </>
                    
                ) : null
            }           
            <Markdown options={options} className="mx-2 sm:mx-0">{postData.content}</Markdown>
            
        </>
    )
}
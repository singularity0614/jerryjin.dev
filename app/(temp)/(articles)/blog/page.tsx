import { Title } from "../../../Formats";
import Link from "next/link";
import { getSortedPostsData } from "../../../posts";

async function getData() {
    return getSortedPostsData();
}

export default async function Page() {
    const postsData = await getData();

    return (
        <> 
            <Title title="blog" image={false} /> 
            <ul className="py-16">
                {
                    postsData.map((x, index) => (
                        <BlogPost key={index} post={x} />
                    ))
                }   
            </ul>                
        </>
    )
}

function BlogPost(props) {
    const post = props.post;

    return (
        <li className="odd:bg-slate-100 rounded-xl">
            <div className="flex justify-between items-center p-6">
                <p className="font-medium"><Link href={`/blog/${post.id}`}>{post.title}</Link></p>
                <p className="text-sm text-gray-500">{post.date}</p>
            </div>
        </li>
    )
}
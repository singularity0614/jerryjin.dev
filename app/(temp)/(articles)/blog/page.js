import { Title } from "../../../Formats";
import Link from "next/link";

class Post {
    constructor(title, date) {
        this.title = title;
        this.slug = title.toLowerCase().split(" ").join("-");
        this.date = date;
    }
}

export const Posts = [
    new Post("Our habits are inevitable", "03/01/23"),
    new Post("Something else", "07/01/23"),
    new Post("Something else", "07/01/23"),
    new Post("Something else", "07/01/23"),
]

export default function Page() {

    return (
        <> 
            <Title title="blog" image={false} /> 
            <ul className="pt-6">
                {
                    Posts.map((x, index) => (
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
                <p className="font-medium"><Link href={`/blog/${post.slug}`}>{post.title}</Link></p>
                <p className="text-sm text-gray-500">{post.date}</p>
            </div>
        </li>
    )
}
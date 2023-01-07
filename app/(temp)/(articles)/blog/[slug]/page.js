import { Title } from "../../../../Formats";
import { Posts } from "../page";

export async function generateStaticParams() {
    const posts = Posts;
  
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export default function Page({params}) {
    console.log(params)
    return (
        <>
            <Title title="blog" image={false} />
            <div className="text-center text-2xl font-semibold my-16">{params.slug}</div>
        </>
    )
}
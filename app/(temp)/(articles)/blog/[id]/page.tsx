import { Title } from "../../../../Formats";
import { getAllPostIds, getPostData } from "../posts";

export async function generateStaticParams() {
    const posts = getAllPostIds();
  
    return posts.map((post) => ({
        id: post.id,
    }));
}

async function getPost(params) {
    const post = getPostData(params.id);

    return post;
}

export default async function Page({ params }) {
    const postData = await getPost(params);
    
    return (
        <>
            <Title title="blog" image={false} />
            <div className="text-center text-2xl font-semibold my-16">{(postData as any).title}</div>
            <div className="text-center text-2xl font-semibold my-16">{(postData as any).date}</div>
        </>
    )
}
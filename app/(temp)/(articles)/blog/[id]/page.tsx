import Article from "../../Article";
import { getAllPostIds, getPostData } from "../../../../posts";

export async function generateMetadata({params}) {
    const postData = await getPost(params);

    return {
        title: postData.data.title,
        description: postData.data.description,
    }
}

export async function generateStaticParams() {
    const posts = getAllPostIds();
  
    return posts.map((post) => ({
        id: post.id,
    }));
}

async function getPost(params) {
    const post = getPostData(params.id, 'blog');

    return post;
}

export default async function Page({ params }) {
    const postData = await getPost(params);

    return (
        <>
            <Article postData={postData} type="blog"></Article>
        </>
    )
}
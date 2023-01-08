import Markdown from "markdown-to-jsx";
import { Title, Heading3, Heading4, Paragraph, CustomLink } from "../../../../Formats";
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

    const options = {
        overrides: {
            CustomLink: {
                component: CustomLink,
            },
            h3: {
                component: Paragraph,
            },
            p: {
                component: Paragraph,
            },
        },
    }

    return (
        <>
            <Title title="blog" image={false} />
            <div className="bg-slate-100 py-12 my-8 rounded-3xl">                
                <div className="text-center text-4xl font-semibold mb-4">{postData.data.title}</div>
                <div className="text-center text-xl text-gray-500">{postData.data.date}</div>
            </div>
            <Paragraph><CustomLink href="/blog">← All blogs</CustomLink></Paragraph>
            <Markdown options={options}>{postData.content}</Markdown>
        </>
    )
}
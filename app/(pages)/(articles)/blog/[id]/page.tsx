import Article from "../../Article";
import { getAllPostIds, getPostData } from "../posts";

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
    const post = getPostData(params.id);

    return post;
}

export default async function Page({ params }) {
    const postData = await getPost(params);

    return (
        <>
            <Article postData={postData} type="blog"></Article>
            <div className="flex flex-col items-center bg-slate-100 dark:bg-[#111111] py-8 sm:py-12 my-6 sm:my-8 rounded-3xl">
                <div className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] w-fit">&quot;Your blog is the reason I&apos;m still alive.&quot;</div>
                <div className="text-lg text-gray-500 dark:text-gray-200">- Anonymous</div>
            </div>
        </>
    )
}
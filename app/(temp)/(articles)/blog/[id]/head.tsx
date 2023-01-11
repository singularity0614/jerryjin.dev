import { getPostData } from "../../../../posts";

async function getPost(params) {
    const post = getPostData(params.id, 'blog');

    return post;
}

export default async function Head({ params }) {
    const postData = await getPost(params);

    return (
        <>
            <title>{`${postData.data.title} - Jerry Jin`}</title>
        </>
    )
}
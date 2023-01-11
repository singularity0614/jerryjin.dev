import DefaultTags from "../../../../DefaultTags";
import { getPostData } from "../../../../posts";

async function getPost(params) {
    const post = getPostData(params.id, 'blog');

    return post;
}

export default async function Head({ params }) {
    const postData = await getPost(params);

    return (
        <>
            <DefaultTags />
            <title>{`${postData.data.title} - Jerry Jin`}</title>
            <meta name="description" content={postData.data.description}/>
        </>
    )
}
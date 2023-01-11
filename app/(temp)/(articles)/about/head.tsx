import { getPostData } from "../../../posts";

export default function Head() {
    const postData = getPostData('about');

    return (
        <>
            <title>{`${postData.data.title} - Jerry Jin`}</title>
            <meta name="description" content={postData.data.description}/>
        </>
    )
}
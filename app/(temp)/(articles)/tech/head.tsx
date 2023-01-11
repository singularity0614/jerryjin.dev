import DefaultTags from "../../../DefaultTags";
import { getPostData } from "../../../posts";

export default function Head() {
    const postData = getPostData('tech');

    return (
        <>
            <DefaultTags />
            <title>{`${postData.data.title} - Jerry Jin`}</title>
            <meta name="description" content={postData.data.description}/>
        </>
    )
}
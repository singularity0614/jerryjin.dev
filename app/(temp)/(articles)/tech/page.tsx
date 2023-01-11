import { getPostData } from "../../../posts";
import { Title } from "../../../Formats";
import Article from '../Article';


export default function Tech() {
    const postData = getPostData('tech');

    return (
        <>
            <Title title="tech" image={true} alt="Mac mini" src="https://www.apple.com/v/mac-mini/q/images/overview/hero__x8ruukomx2au_large_2x.jpg" />
            <Article postData={postData}></Article>
        </>
    )
}
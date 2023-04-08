import { getPostData } from "../../../posts";
import { Title } from "../../../Formats";
import Article from '../Article';

export async function generateMetadata() {
    const postData = getPostData('about');

    return {
        title: postData.data.title,
        description: postData.data.description,
    }
}

export default function About() {
    const postData = getPostData('about');
    
    return (
        <>
            <Title title="about me" image={true} alt="Camberwell Grammar School" src="https://media.digistormhosting.com.au/cgs-au-vic-256-website/content/_facebookImage/972/Copy-of-DJI_0006.jpg?mtime=20190122142424" />
            <Article postData={postData}></Article>
        </>
    );
}
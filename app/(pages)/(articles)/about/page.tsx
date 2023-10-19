import { Title } from "../../../Formats";
import { Metadata } from "next";
import Content from "./about.mdx";
import Article from "../Article";

export const metadata: Metadata = {
    title: "About Me",
    description: "About the overlord, Jerry Jin.",
}

export default function About() {
    return (
        <>
            <Title title="about me" image={true} alt="Camberwell Grammar School" src="https://media.digistormhosting.com.au/cgs-au-vic-256-website/content/_facebookImage/972/Copy-of-DJI_0006.jpg?mtime=20190122142424" />
            <Article>
                <Content></Content>
            </Article>
        </>
    );
}
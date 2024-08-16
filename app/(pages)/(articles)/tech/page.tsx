import { Title } from "../../../Formats";
import { Metadata } from "next";
import Content from "./tech.mdx";
import Article from "../Article";

export const metadata: Metadata = {
    title: "Tech",
    description: "Tech used by the overlord, Jerry Jin.",
}

export default function Tech() {
    return (
        <>
            <Title title="tech" image={true} alt="Mac mini" src="https://www.apple.com/newsroom/images/2024/05/apple-unveils-stunning-new-ipad-pro-with-m4-chip-and-apple-pencil-pro/article/Apple-iPad-Pro-hero-240507_big.jpg.large.jpg" />
            <Article>
                <Content></Content>
            </Article>
        </>
    );
}
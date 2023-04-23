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
            <Title title="tech" image={true} alt="Mac mini" src="https://www.apple.com/v/mac-mini/q/images/overview/hero__x8ruukomx2au_large_2x.jpg" />
            <Article>
                <Content></Content>
            </Article>
        </>
    );
}
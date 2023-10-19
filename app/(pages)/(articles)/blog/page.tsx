import { Title } from "../../../Formats";
import { getSortedPostsData } from "./posts";
import Pagination from "./Pagination";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog",
    description: 'The blog of the overlord, Jerry Jin.',
}

async function getData() {
    return getSortedPostsData();
}

export default async function Page() {
    const postsData = await getData();

    return (
        <> 
            <Title title="blog" image={false} /> 
            <Pagination postsData={postsData}/>            
        </>
    )
}
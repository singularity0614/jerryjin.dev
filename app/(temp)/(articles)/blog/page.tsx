import { Title } from "../../../Formats";
import Link from "next/link";
import { getSortedPostsData } from "../../../posts";
import Pagination from "./Pagination";

async function getData() {
    return getSortedPostsData();
}

export default async function Page() {
    const postsData = await getData();

    for (let i=0; i<100; i++) {
        postsData.push({id: "test"});
    }

    return (
        <> 
            <Title title="blog" image={false} /> 
            <Pagination postsData={postsData}/>            
        </>
    )
}
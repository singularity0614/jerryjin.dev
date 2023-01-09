import Link from "next/link";
import Image from "next/image";
import favicon from "../../public/favicon-128x128.png";

class NewLink {
    title: string;
    link: string;

    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
    }
}

const links = [
    new NewLink("about", "/about"),
    new NewLink("stock dashboard", "/stock-dashboard"),
    new NewLink("tech", "/tech"),
    new NewLink("blog", "/blog"),
]

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full md:w-[768px] flex justify-between items-center mt-4 mb-3 px-3 sm:px-0">
                    <Link href="/"><div className="h-[5vh] sm:h-16 w-[5vh] sm:w-16 relative"><Image src={favicon.src} alt="Jerry Jin" fill={true} /></div></Link>
                    <div className="text-gray-500 text-md sm:flex sm:justify-end hidden">
                        {
                            links.map((x, index) => (
                                <PageLink key={index} link={x.link} title={x.title} />
                            ))
                        }
                    </div>
                    <div className="group sm:hidden h-[3vh] sm:h-16 w-[3vh] sm:w-16 relative hover:cursor-pointer">
                        <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-500 h-[3vh] w-[3vh]"><path d="M8 14h7a1 1 0 000-2H8a1 1 0 000 2zM1 4h14a1 1 0 000-2H1a1 1 0 000 2zM1 9h14a1 1 0 000-2H1a1 1 0 000 2z"></path></svg>
                        <div className="group-hover:block hidden absolute right-0 top-[3vh] z-10 text-md text-gray-500">
                            <div className="flex flex-col justify-center drop-shadow-lg bg-[#F8FAFC] rounded-lg p-4 mt-0.5 w-fit">
                                {
                                    links.map((x, index) => (
                                        <Link key={index} href={x.link}><p className="text-right whitespace-nowrap">{x.title}</p></Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

function PageLink(props) {
    return (
        <>
            <Link href={props.link} className="ml-8 group transition duration-300">{props.title}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500"></span></Link>
        </>
    )
}
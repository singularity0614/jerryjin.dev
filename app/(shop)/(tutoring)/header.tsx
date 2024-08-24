import Link from "next/link";
import Image from "next/image";
import favicon from "../../favicon.ico"
import ThemeSwitcher from "../../ThemeSwitcher";

class NewLink {
    title: string;
    link: string;

    constructor(title: string, link: string) {
        this.title = title;
        this.link = link;
    }
}

const links = [
    new NewLink("contact", "/tutoring/contact"),
]

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full md:w-[768px] flex justify-between items-center mt-4 mb-3 px-3 sm:px-0">
                    <Link href="/">
                        <div className="h-[5vh] sm:h-16 w-[5vh] sm:w-16 relative"><Image src={favicon.src} alt="Jerry Jin" fill={true} /></div>
                    </Link>
                    <div className="text-gray-500 dark:text-gray-200 text-md sm:flex sm:justify-end hidden">
                        {
                            links.map((x, index) => (
                                <PageLink key={index} link={x.link} title={x.title} />
                            ))
                        }
                        <div className="ml-8">
                            <ThemeSwitcher />
                        </div>
                    </div>
                    <div className="group sm:hidden h-[3vh] sm:h-16 w-[3vh] sm:w-16 relative hover:cursor-pointer mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-[3vh] w-[3vh] stroke-2 stroke-gray-500 dark:stroke-gray-200">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <div className="group-hover:block hidden absolute right-0 top-[3vh] z-10 text-md text-gray-500 dark:text-gray-200">
                            <div className="flex flex-col justify-center shadow-lg shadow-[#222222] bg-[#F8FAFC] dark:bg-black rounded-lg p-4 mt-0.5 w-fit">
                                {
                                    links.map((x, index) => (
                                        <Link key={index} href={x.link}><p className="text-right whitespace-nowrap">{x.title}</p></Link>
                                    ))
                                }
                                <div className="text-right pt-4">
                                    <ThemeSwitcher />
                                </div>
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
            <Link href={props.link} className="ml-8 group transition duration-300">{props.title}<span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-500 dark:bg-gray-200"></span></Link>
        </>
    )
}
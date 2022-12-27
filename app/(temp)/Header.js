import Link from "next/link";
import Image from "next/image";
import favicon from "../../public/favicon-128x128.png";
import menu from "./menu_FILL0_wght500_GRAD0_opsz48.svg"

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-full md:w-[768px] flex justify-between items-center mt-4 mb-3 px-3 sm:px-0">
                    <Link href="/"><div className="h-[5vh] sm:h-16 w-[5vh] sm:w-16 relative"><Image src={favicon.src} alt="Jerry Jin" fill={true} /></div></Link>
                    <div className="text-gray-500 text-md sm:flex sm:justify-end hidden">
                        <PageLink link="/about" title="about" />
                        <PageLink link="/stockdashboard" title="stocks" />
                    </div>
                    <div className="sm:hidden h-[5vh] sm:h-16 w-[5vh] sm:w-16 relative">
                        <Image src={menu.src} alt="Menu" fill={true} />
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
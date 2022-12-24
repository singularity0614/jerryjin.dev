import Link from "next/link";
import Image from "next/image";
import favicon from "../../public/favicon-128x128.png"

export default function Header() {
    return (
        <>
            <div className="flex justify-center">
                <div className="w-[960px] flex justify-between items-center mt-4 mb-3">
                    <Link href="/"><div className="h-16 w-16 relative"><Image src={favicon.src} alt="Jerry Jin" fill={true} /></div></Link>
                    <div className="text-gray-500 text-sm flex justify-end">
                        <PageLink link="/about" title="ABOUT" />
                        <PageLink link="/stockdashboard" title="STOCKS" />
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
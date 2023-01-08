import Link from "next/link";

export function Title(props) {
    return (
        <>
            <p className="text-xs text-gray-500 font-medium pl-[5px] mb-3">{props.title.toUpperCase()}</p>
            <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl">hi.</h1>
            <h2 className="animate-fade-in-from-bottom font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] w-fit pb-1">{props.title.toLowerCase()}</h2>
            {
                props.image == true ? <img className="show-on-scroll animate-fade-in-from-bottom rounded-xl my-16" alt={props.alt} src={props.src} /> : null
            }
        </>
    )
}

export function Heading3(props) {
    return (
        <>
            <h3 ref={props.array[1]} className="text-2xl font-semibold mb-6 pt-4">{props.array[0]}</h3>
        </>
    )
}

export function Heading4(props) {
    return (
        <>
            <h4 ref={props.array[1]} className="text-xl font-medium mb-6 pt-4">{props.array[0]}</h4>
        </>
    )
}

export function Paragraph({ children }) {
    return (
        <>
            <p className="text-lg mb-6">{children}</p>
        </>
    )
}

export function CustomLink({href, children}) {
    return href[0] === "/" ? <Link href={href} className="underline text-[#049CB7]">{children}</Link> : <a href={href} target="_blank" rel="noopener noreferrer" className="underline text-[#049CB7]">{children}</a>;
}
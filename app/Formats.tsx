import Link from "next/link";

export function Title(props) {
    return (
        <div className="mx-2 sm:mx-0">
            <p className="text-xs text-gray-500 dark:text-gray-200 font-medium pl-[5px] mb-3">{props.title.toUpperCase()}</p>
            <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl">hi.</h1>
            <h2 className="animate-fade-in-from-bottom font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] w-fit pb-1">{props.title.toLowerCase()}</h2>
            {
                props.image == true ? <img className="show-on-scroll animate-fade-in-from-bottom rounded-xl my-16" alt={props.alt} src={props.src} /> : null
            }
        </div>
    )
}

export function Heading3({children}) {

    return (
        <>
            <h3 id={children.toString().toLowerCase().replaceAll(' ', '-')} className="text-2xl font-semibold mb-6 pt-4">{children}</h3>
        </>
    )
}

export function Heading4({children}) {

    return (
        <>
            <h4 id={children.toString().toLowerCase().replaceAll(' ', '-')} className="text-xl font-medium mb-6 pt-4">{children}</h4>
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

export function UnorderedList({ children }) {
    return (
        <>
            <ul className="text-lg list-disc list-inside mb-6">
                {children}
            </ul>
        </>
    )
}

export function OrderedList({ children }) {
    return (
        <>
            <ol className="text-lg list-decimal list-inside mb-6">
                {children}
            </ol>
        </>
    )
}

export function ListItem({ children }) {
    return (
        <>
            <li className="mb-1">{children}</li>
        </>
    )
}

export function Footnote({ children }) {
    return (
        <>
            <p className="text-md mb-6 font-light"><em>{children}</em></p>
        </>
    )
}

export function CustomLink({href, type = "", children}) {
    const amazon = type === "amazon";
    const amazonLogo = amazon 
        ?   <svg className="h-5 w-5 absolute top-[5px] left-1" xmlns="http://www.w3.org/2000/svg" viewBox="2.167 .438 251.038 259.969"><g fill="none" fillRule="evenodd">
                <path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fillRule="nonzero"/>
                <path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" className="fill-current"/>
                <path d="m221.503 210.324c-105.235 50.083-170.545 8.18-212.352-17.271-2.587-1.604-6.984.375-3.169 4.757 13.928 16.888 59.573 57.593 119.153 57.593 59.621 0 95.09-32.532 99.527-38.207 4.407-5.627 1.294-8.731-3.16-6.872zm29.555-16.322c-2.826-3.68-17.184-4.366-26.22-3.256-9.05 1.078-22.634 6.609-21.453 9.93.606 1.244 1.843.686 8.06.127 6.234-.622 23.698-2.826 27.337 1.931 3.656 4.79-5.57 27.608-7.255 31.288-1.628 3.68.622 4.629 3.68 2.178 3.016-2.45 8.476-8.795 12.14-17.774 3.639-9.028 5.858-21.622 3.71-24.424z" fill="#f90" fillRule="nonzero"/>
                <path d="m150.744 108.13c0 13.141.332 24.1-6.31 35.77-5.361 9.489-13.853 15.324-23.341 15.324-12.952 0-20.495-9.868-20.495-24.432 0-28.75 25.76-33.968 50.146-33.968zm34.015 82.216c-2.23 1.992-5.456 2.135-7.97.806-11.196-9.298-13.189-13.615-19.356-22.487-18.502 18.882-31.596 24.527-55.601 24.527-28.37 0-50.478-17.506-50.478-52.565 0-27.373 14.85-46.018 35.96-55.126 18.313-8.066 43.884-9.489 63.43-11.718v-4.365c0-8.018.616-17.506-4.08-24.432-4.128-6.215-12.003-8.777-18.93-8.777-12.856 0-24.337 6.594-27.136 20.257-.57 3.037-2.799 6.026-5.835 6.168l-32.735-3.51c-2.751-.618-5.787-2.847-5.028-7.07 7.543-39.66 43.36-51.616 75.43-51.616 16.415 0 37.858 4.365 50.81 16.795 16.415 15.323 14.849 35.77 14.849 58.02v52.565c0 15.798 6.547 22.724 12.714 31.264 2.182 3.036 2.657 6.69-.095 8.966-6.879 5.74-19.119 16.415-25.855 22.393l-.095-.095" className="fill-current"/>
            </g></svg> 
        : "";
    const className = `underline ${amazon ? "pr-6 text-black dark:text-white decoration-[#FF9900] font-medium" : "text-[#049CB7] dark:text-[#F2195A]"}`;
    return (
        <>
            {href[0] === "/" ? <Link href={href} className={className}>{children}<span className="h-5 w-5 relative">{amazonLogo}</span></Link> : <a href={href} target="_blank" rel="noopener noreferrer" className={className}>{children}<span className="h-5 w-5 relative">{amazonLogo}</span></a>}
        </>
    )
}
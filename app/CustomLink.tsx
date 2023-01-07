import Link from "next/link";

export default function CustomLink(props) {
    return props.href[0] === "/" ? <Link href={props.href} className="underline text-[#049CB7]">{props.text}</Link> : <a href={props.href} target="_blank" rel="noopener noreferrer" className="underline text-[#049CB7]">{props.text}</a>;
}
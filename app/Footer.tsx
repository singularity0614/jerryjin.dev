import { CustomLink } from "./Formats"

export default function Footer() {
    return (
        <>
            <div className="sm:flex sm:justify-around sm:items-center p-8 bg-[#222222] dark:bg-black dark:border-t-2 dark:border-t-[#222222] text-[#F8FAFC]">
                <p className="text-center sm:text-left mb-2 sm:mb-0">Jerry Jin</p>
                <p className="text-center sm:text-left">Built with <CustomLink href="https://nextjs.org">NextJS</CustomLink> and hosted with <CustomLink href="https://cloud.google.com">Google Cloud</CustomLink></p>
            </div>
        </>
    )
}
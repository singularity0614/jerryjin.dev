import CustomLink from "./CustomLink";

export default function Footer() {
    return (
        <>
            <div className="sm:flex sm:justify-around sm:items-center p-8 bg-[#222222] text-white">
                <p className="text-center sm:text-left mb-2 sm:mb-0">Jerry Jin</p>
                <p className="text-center sm:text-left">Built with <CustomLink href="https://nextjs.org" text="NextJS" /> and hosted with <CustomLink href="https://cloud.google.com" text="Google Cloud" /></p>
            </div>
        </>
    )
}
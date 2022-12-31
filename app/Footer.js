import CustomLink from "./CustomLink";

export default function Footer() {
    return (
        <>
            <div className="flex justify-around items-center p-8 bg-[#222222] text-white">
                <p className="">Jerry Jin</p>
                <p>Built with <CustomLink href="https://nextjs.org" text="NextJS 13" /> and hosted with <CustomLink href="https://cloud.google.com" text="Google Cloud" /></p>
            </div>
        </>
    )
}
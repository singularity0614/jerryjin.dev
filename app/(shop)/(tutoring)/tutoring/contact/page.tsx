import { CustomLink } from "../../../../Formats"

export default function Contact() {
    return (
        <>
            <div className="">
                <div>Email: <CustomLink href="mailto:triumvirsacademia@gmail.com">triumvirsacademia@gmail.com</CustomLink></div>
                <div>Phone: <CustomLink href="tel:0493496789">0493 496 789</CustomLink></div>
            </div>
        </>
    )
}
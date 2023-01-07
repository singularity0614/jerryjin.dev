'use client'

export default function Contents(props) {
    const goToContent = (n: number) => {
        props.headings[n][1].current !== undefined ? props.headings[n][1].current.scrollIntoView({behavior: "smooth", block: "start", inline: "start"}) : null;
    }

    return (
        <>
            <div className="hidden xl:inline-block fixed top-1/2 -translate-y-1/2 left-[calc(25vw-160px-9rem)] w-fit h-fit">
                <p className="text-lg py-3 font-bold">CONTENTS</p>
                <div className="table-row">
                    <div className="table-cell bg-gradient-to-b from-[#049CB7] to-[#3DD9BD] w-2 rounded-md"></div>
                    <div className="table-cell">
                        {
                            props.headings.map((x, index) => (
                                <p key={index} className="py-2 pl-4 text-md w-[256px]"><button onClick={() => goToContent(index)} className="hover:text-gray-500">{x[0]}</button></p>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
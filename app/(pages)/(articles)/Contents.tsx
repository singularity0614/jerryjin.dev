'use client'

export default function Contents({headings}) {
    return (
        <>
            <div className="hidden xl:flex xl:justify-center xl:items-center fixed top-1/2 -translate-y-1/2 w-[calc(50vw-320px)] left-0">
                <div className="w-fit h-fit">
                    <p className="text-lg py-3 font-bold">CONTENTS</p>
                    <div className="table-row">
                        <div className="table-cell bg-gradient-to-b from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] w-2 rounded-md"></div>
                        <div className="table-cell">
                            {
                                headings.map((x, index) => {
                                    let padding: string;

                                    if (x[2] === "3") {
                                        padding = 'pl-4'
                                    } else if (x[2] === "4") {
                                        padding = 'pl-6'
                                    }

                                    return (
                                        <p key={index} className={`py-2 ${padding} text-md w-fit`}>
                                            <button
                                                onClick={(e) => {
                                                    e.preventDefault()
                                                    document.querySelector(`#${x[1]}`).scrollIntoView({
                                                        behavior: "smooth"
                                                    })
                                                }} 
                                                className="hover:text-gray-500">
                                                {x[0]}
                                            </button>
                                        </p>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
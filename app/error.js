'use client'

import Image from "next/image";

export default function Error() {
    return (
        <>
            <p>Error trying to load...</p>
            <Image src="https://i.pinimg.com/originals/ce/57/77/ce5777bf7b7bd966ef14f4a0c7e4c845.gif" alt="Take the L" width={960} height={880} />
        </>
    )
}
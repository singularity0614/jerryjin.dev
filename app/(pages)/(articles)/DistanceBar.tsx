'use client'

import { useState, useEffect } from "react"

export default function DistanceBar() {
    const [barWidth, setBarWidth] = useState('100%');

    useEffect(() => {
        window.addEventListener("scroll", changeWidth);

        return () => {
            window.removeEventListener("scroll", changeWidth);
        }
    });

    const changeWidth = () => {
        const distance = window.scrollY;
        const maxDistance = document.body.offsetHeight - window.innerHeight;
        const percentage = 100 - (distance / maxDistance) * 100;
        setBarWidth(`${percentage}%`);
    }

    return (
        <>
            <div className="bg-gradient-to-r from-[#049CB7] to-[#3DD9BD] dark:from-[#F2195A] dark:to-[#FBE83B] h-3 sticky top-0 flex justify-end">
                <div className={`distance-bar h-full bg-gray-200 dark:bg-[#222222] transition-all ease-out`} style={{'width': barWidth}}></div>
            </div>
        </>
    )
}
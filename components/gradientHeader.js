import { Gradient } from "./gradientBackground";
import { useEffect } from "react";


function Background() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    });
    return (
        <>
            <canvas id="gradient-canvas" className="w-[100vw] h-1/2 origin-bottom-left -skew-y-6"></canvas>
            <style jsx>{`
                #gradient-canvas {
                    --gradient-color-1:#3DD9BD;
                    --gradient-color-2:#e2e2e2;
                    --gradient-color-3:#04B778;
                    --gradient-color-4:#049CB7;
                    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 0% 100%);
                }
            `}</style>
        </>
    )
}

export default Background;
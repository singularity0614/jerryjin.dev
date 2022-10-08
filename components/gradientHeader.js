import { Gradient } from "./gradientBackground";
import { useEffect } from "react";


function Background() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    });
    return (
        <>
            <canvas id="gradient-canvas" className="w-full h-1/2"></canvas>
            <style jsx>{`
                #gradient-canvas {
                    --gradient-color-1:#ef008f;
                    --gradient-color-2:#6ec3f4;
                    --gradient-color-3:#7038ff;
                    --gradient-color-4:#e2e2e2;
                }
            `}</style>
        </>
    )
}

export default Background;
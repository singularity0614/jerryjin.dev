import { Gradient } from "https://gist.githack.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d/raw/35a5c7c1ddc9f97ec84fe7e1ab388a3b726db85d/Gradient.js";
import { useEffect } from "react";


function Background() {
    useEffect(() => {
        const gradient = new Gradient();
        gradient.initGradient("#gradient-canvas");
    });
    return (
        <>
            <canvas id="gradient-canvas" className="w-full h-full origin-bottom-left -skew-y-[9deg]"></canvas>
            {/*<style jsx>{`
                #gradient-canvas {
                    --gradient-color-1:#3DD9BD;
                    --gradient-color-2:#e2e2e2;
                    --gradient-color-3:#04B778;
                    --gradient-color-4:#049CB7;
                }
            `}</style>*/}
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
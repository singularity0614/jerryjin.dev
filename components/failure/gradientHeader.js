/*import { Gradient } from "https://gist.githack.com/jordienr/64bcf75f8b08641f205bd6a1a0d4ce1d/raw/35a5c7c1ddc9f97ec84fe7e1ab388a3b726db85d/Gradient.js";
import { useEffect } from "react";

let bool = false;

function Background() {
    useEffect(() => {
        if (bool === false) {
            const gradient = new Gradient();
            gradient.initGradient("#gradient-canvas");
            bool = true;
        }
    });
    return (
        <>
            <canvas id="gradient-canvas" className="w-full h-full origin-bottom-left -skew-y-[9deg]"></canvas>
            <style jsx>{`
                #gradient-canvas {
                    --gradient-color-1:#ff333d;
                    --gradient-color-2:#6ec3f4;
                    --gradient-color-3:#7038ff;
                    --gradient-color-4:#ffcb57;
                }
            `}</style>
            {<style jsx>{`
            #gradient-canvas {
                --gradient-color-1:#3DD9BD;
                --gradient-color-2:#049CB7;
                --gradient-color-3:#7038ff;
                --gradient-color-4:#e2e2e2;                
            }
        `}</style>}
        </>
    )
}

export default Background;*/
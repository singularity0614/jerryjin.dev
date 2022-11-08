import React, { useEffect, useState } from "react";
import StockGraph from "./stockGraph";

function StockDisplay(props) {
    const name = props.stockName;
    const code = props.stockCode;
    const price = props.price;
    const priceChange = props.priceChange;
    const colour = priceChange > 0 ? "text-[#137333]" : (priceChange < 0 ? "text-[#a50e0e]" : "text-[#3c4043]");
    const backgroundColour = priceChange > 0 ? "bg-[#e8f4eb]" : (priceChange < 0 ? "bg-[#fce8e6]" : "bg-[#e8eaed]");
    const sign = priceChange > 0 ? "+" : (priceChange < 0 ? "-" : "");
    const percentChange = (priceChange/(price-priceChange)*100).toFixed(2);
    const dollarSign = props.type === "stock" ? "$" : "";
    const index = props.index;
    const historical = props.historical;
    const summary = props.summary;
    
    let arrow;
    
    if (priceChange > 0) {
        arrow = <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className={`fill-[#137333]`}><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>;
    } else if (priceChange < 0) {
        arrow = <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className={`fill-[#a50e0e]`}><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>;
    } else {
        arrow = null;
    }
    
    const [collapse, setCollapse] = props.collapse;
    
    const data = {
        datasets: [
            {
                data: [],
            },
        ],
    };

    for (let i=0; i<historical[0].length; i++) {
        data.datasets[0].data.push({x: historical[0][i], y: historical[1][i]});
    }
    
    return (
        <>
            <div onClick={() => setCollapse(parseInt(collapse[8]) !== index ? `collapse${index}` : "collapsenone")} className="button flex justify-center w-[720px] xl:w-[50vw] rounded-xl p-0.5 mx-auto my-2 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
                <div className="flex justify-between items-center bg-white px-6 py-5 rounded-[10px] w-[792px] xl:w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
                    <div className="">
                        <div>{name}</div>
                        <div className="text-sm text-slate-500">{code}</div>
                    </div>
                    <div className="flex justify-end items-center font-medium">
                        <div className="flex justify-end items-center">
                            <div className="p-1.5">{dollarSign}{price.toFixed(2)}</div>
                        </div>
                        <div className="w-[96px] flex justify-end items-center">
                            <div className={colour}>{sign}{dollarSign}{Math.abs(priceChange).toFixed(2)}</div>
                        </div>
                        <div className="w-[116px] flex justify-end items-center">
                            <div className={`flex justify-evenly items-center p-1.5 rounded-lg ${colour} ${backgroundColour}`}>
                                {arrow}
                                <div>{percentChange}%</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`expanded -z-10 ${collapse === `collapse${index}` ? "animate-slide-in-from-top" : "animate-slide-out-to-top"} flex justify-center w-[720px] xl:w-[50vw] rounded-xl p-0.5 mx-auto my-2 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]`}>
                <div className="flex flex-col justify-center items-center bg-white px-6 py-5 rounded-[10px] w-[792px] xl:w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
                    <div className={`${collapse === `collapse${index}` ? "animate-fade-in" : "animate-fade-out"} flex flex-col justify-center items-center`}>                            
                        {name}
                        <br/>
                        <div className="flex justify-center items-center">
                            <StockGraph data={data} priceChange={priceChange}></StockGraph>
                        </div>
                    </div>
                    <div className={`grid grid-rows-3 grid-flow-col gap-x-12 gap-y-4 ${collapse === `collapse${index}` ? "animate-fade-in" : "animate-fade-out"}`}>
                        <div>
                            <div>Open: {summary[0]}</div>
                        </div>
                        <div>
                            <div>High: {summary[1]}</div>
                        </div>
                        <div>
                            <div>Low: {summary[2]}</div>
                        </div>
                        <div>Mkt cap: {summary[3]}</div>
                        <div>P/E ratio: {summary[4]}</div>
                        <div>Div yield: {summary[5]}</div>
                        <div>Volume: {summary[6]}</div>
                        <div>52-wk high: {summary[7]}</div>
                        <div>52-wk low: {summary[8]}</div>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default StockDisplay;
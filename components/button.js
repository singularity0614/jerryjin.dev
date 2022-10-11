import React from "react";
import { useState } from "react";
import Chart from "chart.js/auto";

function StockDisplay(props) {
    const name = props.stockName;
    const code = props.stockCode;
    const price = props.price;
    const priceChange = props.priceChange;
    const colour = priceChange > 0 ? "text-[#137333]" : (priceChange < 0 ? "text-[#a50e0e]" : "text-[#3c4043]");
    const backgroundColour = priceChange > 0 ? "bg-[#e8f4eb]" : (priceChange < 0 ? "bg-[#fce8e6]" : "bg-[#e8eaed]");
    const sign = priceChange > 0 ? "+" : (parseFloat(props.priceChange) < 0 ? "-" : "");
    const percentChange = (priceChange/(price-priceChange)*100).toFixed(2);
    const dollarSign = props.type === "stock" ? "$" : "";

    let arrow;

    if (priceChange > 0) {
        arrow = <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className={`fill-[#137333]`}><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>;
    } else if (priceChange < 0) {
        arrow = <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className={`fill-[#a50e0e]`}><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>;
    } else {
        arrow = null;
    }

    const [collapse, setCollapse] = new useState(false);

    return (
        <>
            <div onClick={() => setCollapse(!collapse)} className="button flex justify-center w-[50vw] rounded-xl p-0.5 mx-auto my-2 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
                <div className="flex justify-between items-center bg-white px-6 py-5 rounded-[10px] w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
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
            {
                collapse === true
                ? <div className={`animate-fade-in-from-bottom flex justify-center w-[50vw] rounded-xl p-0.5 mx-auto mt-2 mb-6 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]`}>
                    <div className="flex justify-between items-center bg-white px-6 py-5 rounded-[10px] w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
                        {name}
                        <br/>
                        ASX: {code}
                        <br/>
                        {name}
                        <br/>
                        ASX: {code}
                        <br/>
                        {name}
                        <br/>
                        ASX: {code}
                    </div>
                </div>
                : null
            }
        </>
    );
}

export default StockDisplay;
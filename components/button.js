import React, { useEffect, useState } from "react";
import StockGraph from "./stockGraph";

const data = [
    {year: 1980, efficiency: 24.3, sales: 8949000},
    {year: 1985, efficiency: 27.6, sales: 10979000},
    {year: 1990, efficiency: 28, sales: 9303000},
    {year: 1991, efficiency: 28.4, sales: 8185000},
    {year: 1992, efficiency: 27.9, sales: 8213000},
    {year: 1993, efficiency: 28.4, sales: 8518000},
    {year: 1994, efficiency: 28.3, sales: 8991000},
    {year: 1995, efficiency: 28.6, sales: 8620000},
    {year: 1996, efficiency: 28.5, sales: 8479000},
    {year: 1997, efficiency: 28.7, sales: 8217000},
    {year: 1998, efficiency: 28.8, sales: 8085000},
    {year: 1999, efficiency: 28.3, sales: 8638000},
    {year: 2000, efficiency: 28.5, sales: 8778000},
    {year: 2001, efficiency: 28.8, sales: 8352000},
    {year: 2002, efficiency: 29, sales: 8042000},
    {year: 2003, efficiency: 29.5, sales: 7556000},
    {year: 2004, efficiency: 29.5, sales: 7483000},
    {year: 2005, efficiency: 30.3, sales: 7660000},
    {year: 2006, efficiency: 30.1, sales: 7762000},
    {year: 2007, efficiency: 31.2, sales: 7562000},
    {year: 2008, efficiency: 31.5, sales: 6769000},
    {year: 2009, efficiency: 32.9, sales: 5402000},
    {year: 2010, efficiency: 33.9, sales: 5636000},
    {year: 2011, efficiency: 33.1, sales: 6093000},
    {year: 2012, efficiency: 35.3, sales: 7245000},
    {year: 2013, efficiency: 36.4, sales: 7586000},
    {year: 2014, efficiency: 36.5, sales: 7708000},
    {year: 2015, efficiency: 37.2, sales: 7517000},
    {year: 2016, efficiency: 37.7, sales: 6873000},
    {year: 2017, efficiency: 39.4, sales: 6081000},
  ]

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
    const index = props.index;

    let arrow;

    if (priceChange > 0) {
        arrow = <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className={`fill-[#137333]`}><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>;
    } else if (priceChange < 0) {
        arrow = <svg focusable="false" width="16" height="16" viewBox="0 0 24 24" className={`fill-[#a50e0e]`}><path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path></svg>;
    } else {
        arrow = null;
    }

    const [collapse, setCollapse] = props.collapse;

    return (
        <>
            <div onClick={() => setCollapse(parseInt(collapse[8]) !== index ? `collapse${index}` : "collapsenone")} className="button flex justify-center w-[50vw] rounded-xl p-0.5 mx-auto my-2 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
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
            <div className={`expanded -z-10 ${collapse === `collapse${index}` ? "animate-slide-in-from-top" : "animate-slide-out-to-top"} flex justify-center w-[50vw] rounded-xl p-0.5 mx-auto my-2 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]`}>
                <div className="flex justify-between items-center bg-white px-6 py-5 rounded-[10px] w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
                    <div className={`${collapse === `collapse${index}` ? "animate-fade-in" : "animate-fade-out"}`}>                            
                        {name}
                        <br/>
                        <StockGraph data={data}></StockGraph>
                    </div>
                </div>
            </div>        
        </>
    );
}

export default StockDisplay;
'use client'

import { useState } from "react";
import Button from "./Button";

let filterValues = {
    select: "above",
    number: "",
}

export default function StockDisplay(props) {
    const stockList = props.stockList;

    const [filteredList, setFilteredList] = useState(stockList);

    const filterBySearch = (event) => {
        const query = event.target.value;
        let updatedList = [...stockList];
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.code.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
        setCollapse("collapsenone");
    };
    
    const filterByType = (event) => {
        const value = event.target.value;
        filterValues = {
            ...filterValues,
            [event.target.name]: value,
        };
        let updatedList = [...stockList];
        let num = filterValues.number;
        let today = new Date();
        let date = 0;
        if (today.getDay() === 0 || today.getDay() === 6) {
            date = 1;
        }
        if (num !== "") {
            if (filterValues.select === "above") {
                updatedList = updatedList.filter((item) => {
                    return item.price > parseFloat(num);
                });
            } else if (filterValues.select === "below") {
                updatedList = updatedList.filter((item) => {
                    return item.price < parseFloat(num);
                });
            } else if (filterValues.select === "up") {
                updatedList = updatedList.filter((item) => {
                    for (let i=0; i<parseInt(num); i++) {
                        if (!(item.historical[1].at(-1-i-date) - item.historical[1].at(-2-i-date) > 0)) {
                            return false;
                        }
                    }
                    return true;
                });
            } else if (filterValues.select === "equal") {
                updatedList = updatedList.filter((item) => {
                    for (let i=0; parseInt(num); i++) {
                        if (!(item.historical[1].at(-1-i-date) - item.historical[1].at(-2-i-date) === 0)) {
                            return false;
                        }
                    }
                    return true;
                });
            } else if (filterValues.select === "down") {
                updatedList = updatedList.filter((item) => {
                    for (let i=0; i<parseInt(num); i++) {
                        if (!(item.historical[1].at(-1-i-date) - item.historical[1].at(-2-i-date) < 0)) {
                            return false;
                        }
                    }
                    return true;
                });
            }
        }
        setFilteredList(updatedList);
        setCollapse("collapsenone");
    }

    const [collapse, setCollapse] = useState("collapsenone");


    return (
        <>
            <section>
                <div className="flex justify-center items-center">
                    <div className="flex justify-between items-center w-[720px] xl:w-[50vw] m-4">
                        <div className="flex justify-center items-center">
                            <label htmlFor="filter" className="pr-1 flex">Filter:</label>
                            <div id="filter" className="flex justify-center items-center" onChange={filterByType}>
                                <select name="select">
                                    <option value="above">Above</option>
                                    <option value="below">Below</option>
                                    <option value="up">Up</option>
                                    <option value="equal">Equal</option>
                                    <option value="down">Down</option>
                                </select>
                                <input name="number" className="px-1 mx-1 focus:outline-none border-solid border-2 border-neutral-300 rounded-lg w-20 bg-[#F8FAFC]" onChange={filterByType} type="number" min={0}/>
                            </div>
                        </div>
                        <div className="flex justify-center items-center">
                            <label htmlFor="search" className="mx-2">Search:</label>
                            <input id="search" name="search" className="px-1 focus:outline-none border-solid border-2 border-neutral-300 rounded-lg bg-[#F8FAFC]" onChange={filterBySearch} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center border-solid border-t-[1px] pt-4 border-neutral-300">
                    <div className="w-[720px] xl:w-[50vw] text-sm text-gray-500">
                        Results: {filteredList.length}
                    </div>
                </div>
            </section>
            <section className="mb-16">
                    <div className="flex justify-between items-center w-[720px] xl:w-[50vw] mx-auto mt-8 text-sm text-gray-500">
                        <div className="pl-[26px]">Name/Code</div>
                        <div className="flex justify-end items-center pr-[26px]">
                            <div className="flex justify-end items-center">
                                <div className="px-1.5">Price</div>
                            </div>
                            <div className="w-[96px] flex justify-end items-center">
                                <div>$ Change</div>
                            </div>
                            <div className="w-[116px] flex justify-end items-center">
                                <div className="px-1.5">% Change</div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center flex-col items-center">
                        {filteredList.length !== 0
                            ? filteredList.map((item, index) => (
                                <Button collapse={[collapse, setCollapse]} key={index} index={index} type={item.type} stockName={item.name} stockCode={item.code} price={item.price} priceChange={item.priceChange} historical={item.historical} summary={[item.open, item.high, item.low, item.cap, item.pe, item.div, item.vol, item.yhigh, item.ylow]}></Button>
                            ))
                            : <div className="button flex justify-center w-[720px] xl:w-[50vw] rounded-xl p-0.5 mx-auto mt-2 mb-6 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
                                <div className="flex justify-center items-center bg-[#F8FAFC] px-6 py-5 rounded-[10px] w-[792px] xl:w-[60vw] hover:bg-slate-100 hover:cursor-pointer">
                                    404: Your query returned no stocks :/
                                </div>
                            </div>
                        }
                    </div>   
            </section>
        </>
    )
}
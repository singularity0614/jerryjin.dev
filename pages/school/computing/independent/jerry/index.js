import Head from "next/head";
import { useState } from "react";
import Button from "../../../../../components/button";
import Gradient from "../../../../../components/gradientHeader";

class Stock {
    constructor(name, code, price, priceChange, type="stock") {
        this.name = name;
        this.code = code;
        this.price = price;
        this.priceChange = priceChange;
        this.type = type;
    }
}

export default function Home() {
    let stockList = [
        new Stock("Pilbara Minerals Ltd", "PLS", 5.42, 0.02),
        new Stock("Rio Tinto Limited", "RIO", 96.67, -1.38),
        new Stock("Wesfarmers Ltd", "WES", 44.68, -0.36),
        new Stock("Whitehaven Coal Ltd", "WHC", 10.96, 0.50),
        new Stock("S&P/ASX 200", "XJO", 6762.80, -54.70, "index"),
    ];

    const [filteredList, setFilteredList] = new useState(stockList);

    const filterBySearch = (event) => {
        const query = event.target.value;
        let updatedList = [...stockList];
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.code.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        setFilteredList(updatedList);
    };

    const filterByType = (event) => {
        
    }

    return (
        <>
            <Head>
                <title>Stock Watcher</title>
                <meta name="description" content="Independent Project - Stock Watcher Website" />
            </Head>      
            <main className="font-sans relative">
                <Gradient className="absolute block -z-20 top-0 left-0"></Gradient>
                <header className="absolute top-0 left-0 right-0">
                    <div className="flex justify-center mt-64 mb-16">
                        <div className="w-[384px] md:w-[50vw] xl:w-[640px]">
                            <p className="text-xs text-gray-500 z-10 font-medium pl-[5px] mb-3 mix-blend-color-dodge [-webkit-transform:translate3d(0,0,0)]">STOCK DASHBOARD</p>
                            <div className="relative">
                                <div className="absolute -z-10 text-[#292929] ">
                                    <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl [-webkit-transform:translate3d(0,0,0)]">hi.</h1>
                                    <h2 className="animate-fade-in-from-bottom font-semibold text-7xl [-webkit-transform:translate3d(0,0,0)]">stock dashboard</h2>
                                </div>
                                <div className="absolute z-10 text-[#3a3a3a] mix-blend-color-burn">
                                    <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl [-webkit-transform:translate3d(0,0,0)]">hi.</h1>
                                    <h2 className="animate-fade-in-from-bottom font-semibold text-7xl [-webkit-transform:translate3d(0,0,0)]">stock dashboard</h2>
                                </div>
                                <div className="absolute z-20 opacity-5 text-[#3a3a3a]">
                                    <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl [-webkit-transform:translate3d(0,0,0)]">hi.</h1>
                                    <h2 className="animate-fade-in-from-bottom font-semibold text-7xl [-webkit-transform:translate3d(0,0,0)]">stock dashboard</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>
                <section>
                    <div className="flex justify-center items-center">
                        <div className="flex justify-end items-center w-[50vw] m-4">
                            <div className="search-header flex justify-center items-center">
                                <div className="search-text mx-2">Search:</div>
                                <input className="search-box px-1 focus:outline-none border-solid border-2 border-neutral-300 rounded-lg" onChange={filterBySearch} />
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="flex justify-between items-center w-[50vw] mx-auto mt-8 text-sm text-gray-500">
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
                                <Button key={index} type={item.type} stockName={item.name} stockCode={item.code} price={item.price} priceChange={item.priceChange}></Button>
                            ))
                            : <div className="button flex justify-center w-[50vw] rounded-xl p-0.5 mx-auto mt-2 mb-6 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
                                <div className="flex justify-center items-center bg-white px-6 py-5 rounded-[10px] w-[60vw] hover:bg-neutral-100 hover:cursor-pointer">
                                    404: Your search returned no stocks :/
                                </div>
                            </div>
                        }
                    </div>   
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}


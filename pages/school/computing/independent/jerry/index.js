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
            <Gradient></Gradient>
            <main className="font-sans pl-[calc(100vw-100%)]">
                <header>
                    <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                        <div className="w-[384px] md:w-[50vw] xl:w-[640px]">
                            <p className="text-xs text-gray-500 font-medium pl-[5px] mb-3">STOCK DASHBOARD</p>
                            <h1 className="animate-fade-in-from-bottom font-extrabold text-9xl">hi.</h1>
                            <h2 className="animate-fade-in-from-bottom font-semibold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049CB7] to-[#3DD9BD]">stock dashboard</h2>
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
                        {filteredList.map((item, index) => (
                            <Button key={index} type={item.type} stockName={item.name} stockCode={item.code} price={item.price} priceChange={item.priceChange}></Button>
                        ))}
                    </div>   
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}


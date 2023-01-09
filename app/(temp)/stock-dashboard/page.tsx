import { use } from "react";
import Forms from "./Forms";
import { Title } from "../../Formats";

/**
 * For different graph views
 * We can import all the different intervals of stocks e.g. every 1m between morning and now for 1d
 * Every day between last month and now for 1mo etc
 * Every week between last 5 years and now d
 * Then we can useState for the different views
 * If useState = 0 (represents 1mo for example)
 * Then we display the graph for 1mo
 * We store the intervals in an array [[[t1], [p1]], [[t2], [p2]]]
 * Then access through historical[state][0] or [1]
 */
class Stock {
    name: string;
    code: string;
    price: number;
    priceChange: number;
    historical: any;
    open: number;
    high: number;
    low: number;
    cap: number;
    pe: number;
    div: number;
    vol: number;
    yhigh: number;
    ylow: number;
    type: string;

    constructor(name: string, code: string, price: number, priceChange: number, historical: any, open: number, high: number, low: number, cap: number, pe: number, div: number, vol: number, yhigh: number, ylow: number, type="stock") {
        this.name = name;
        this.code = code;
        this.price = price;
        this.priceChange = priceChange;
        this.historical = historical;
        this.open = open;
        this.high = high;
        this.low = low;
        this.cap = cap;
        this.pe = pe;
        this.div = div;
        this.vol = vol;
        this.yhigh = yhigh;
        this.ylow = ylow;
        this.type = type;
    }
}

let filterValues = {
    select: "above",
    number: "",
}

/**
 * Stock indices throw a failed validation error, need to fix later
 */

const stockArray = ["AIA", "ALL", "ALX", "AMC", "ANZ", "APA", "ASX", "BHP", "BXB", "CBA", "COH", "COL", "CPU", "CSL", "EDV", "FMG", "FPH", "GMG", "IAG", "IGO", "JHX", "MIN", "MQG", "NAB", "NCM", "NST", "ORG", "PLS", "QAN", "QBE", "REA", "REH", "RHC", "RIO", "RMD", "S32", "SCG", "SHL", "SOL", "STO", "SUN", "TCL", "TLS", "TPG", "WBC", "WDS", "WES", "WOW", "WTC", "XRO"];

export const dynamic = 'force-dynamic',
    revalidate = 0

async function getStocks() {
    const data = [];
    for (let ticker of stockArray) {
        const stock = `${ticker}.AX`;
        const res = await (await (await fetch(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${stock}?modules=price,summaryDetail`, { cache: 'no-store' })).json()).quoteSummary.result[0];
        const chart = await (await (await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${stock}?symbol=AAPL&period1=${Math.floor(new Date().setFullYear(new Date().getFullYear() - 1)/1000)}&period2=${Math.floor(Date.now()/1000)}&interval=1d`, { cache: 'no-store' })).json()).chart.result[0];
        const historical = [chart.timestamp, chart.indicators.quote[0].close];
        const name =  stock[0] === "^" ? await res.price.shortName : await res.price.longName;
        const code = await res.price.symbol;
        const price = await res.price.regularMarketPrice.raw;
        const change = await res.price.regularMarketChange.raw;
        const open = await res.summaryDetail.open.raw;
        const high = await res.summaryDetail.dayHigh.raw;
        const low = await res.summaryDetail.dayLow.raw;
        const cap = await res.summaryDetail.marketCap.raw;
        let pe = "-";
        if (res.summaryDetail.trailingPE !== undefined) pe = res.summaryDetail.trailingPE.raw ?? "-";
        const div = await res.summaryDetail.dividendYield.raw ?? "-";
        const vol = await res.summaryDetail.volume.raw ?? "-";
        const yhigh = await res.summaryDetail.fiftyTwoWeekHigh.raw;
        const ylow = await res.summaryDetail.fiftyTwoWeekLow.raw;
        data.push([name, code, price, change, historical, open, high, low, cap, pe, div, vol, yhigh, ylow]);
    }
    return data;
}


export default async function Home() {
    const data = await getStocks();

    const stockList = [];

    for (let i=0; i<data.length; i++) {
        const type = data[i][1][0] === "^" ? "index" : "stock";
        stockList.push(new Stock(data[i][0], type === "stock" ? data[i][1].slice(0, 3) : data[i][1].slice(2, 5), data[i][2], data[i][3], data[i][4], data[i][5], data[i][6], data[i][7], data[i][8], data[i][9], data[i][10], data[i][11], data[i][12], data[i][13], type));
    }

    //const [filteredList, setFilteredList] = new useState(stockList);
    let filteredList = stockList;

    const filterBySearch = (event) => {
        const query = event.target.value;
        let updatedList = [...stockList];
        updatedList = updatedList.filter((item) => {
          return item.name.toLowerCase().indexOf(query.toLowerCase()) !== -1 || item.code.toLowerCase().indexOf(query.toLowerCase()) !== -1;
        });
        //setFilteredList(updatedList);
        filteredList = updatedList;
        //setCollapse("collapsenone");
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
        //setFilteredList(updatedList);
        filteredList = updatedList;
        //setCollapse("collapsenone");
    }

    //const [collapse, setCollapse] = new useState("collapsenone");

    return (
        <> 
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="w-[384px] md:w-[50vw] xl:w-[640px]">
                    <Title title="stock dashboard" image={false} />
                </div>
            </div>
            <main className="font-sans relative">
                {/* @ts-ignore */}
                {/*<Background className="absolute block -z-20 top-0 left-0" />
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
                </header>*/}
                <Forms stockList={stockList} />
                {/*<section>
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
                                    <input name="number" className="px-1 mx-1 focus:outline-none border-solid border-2 border-neutral-300 rounded-lg w-20" onChange={filterByType} type="number" min={0}/>
                                </div>
                            </div>
                            <div className="flex justify-center items-center">
                                <label htmlFor="search" className="mx-2">Search:</label>
                                <input id="search" name="search" className="px-1 focus:outline-none border-solid border-2 border-neutral-300 rounded-lg" onChange={filterBySearch} />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center items-center border-solid border-t-[1px] pt-4 border-neutral-300">
                        <div className="w-[720px] xl:w-[50vw] text-sm text-gray-500">
                            Results: {filteredList.length}
                        </div>
                    </div>
                </section>
                <section>
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
                    </section>*/}
            </main>
        </>
    )
}
import StockDisplay from "./StockDisplay";
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

    return (
        <> 
            <div className="flex justify-center mt-[10vw] xl:mt-32 mb-16">
                <div className="w-[384px] md:w-[50vw] xl:w-[640px]">
                    <Title title="stock dashboard" image={false} />
                </div>
            </div>
            <StockDisplay stockList={stockList} />
        </>
    )
}
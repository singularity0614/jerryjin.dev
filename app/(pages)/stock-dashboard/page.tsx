import StockDisplay from "./StockDisplay";
import { Title } from "../../Formats";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Stock Dashboard - Jerry Jin",
    description: "A stock dashboard created by the overlord, Jerry Jin.",
}

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

/**
 * Stock indices throw a failed validation error, need to fix later
 */

// const stockArray = ["AIA", "ALL", "ALX", "AMC", "ANZ", "APA", "ASX", "BHP", "BXB", "CBA", "COH", "COL", "CPU", "CSL", "EDV", "FMG", "FPH", "GMG", "IAG", "IGO", "JHX", "MIN", "MQG", "NAB", "NCM", "NST", "ORG", "PLS", "QAN", "QBE", "REA", "REH", "RHC", "RIO", "RMD", "S32", "SCG", "SHL", "SOL", "STO", "SUN", "TCL", "TLS", "TPG", "WBC", "WDS", "WES", "WOW", "WTC", "XRO"];
const stockArray = ["AAPL", "BHP.AX", "CBA.AX", "GOOGL", "MSFT"]

export const dynamic = 'force-dynamic',
    revalidate = 0

async function getStocks() {
    const data = [];
    for (const stock of stockArray) {
        // const res = await (await (await fetch(`https://query2.finance.yahoo.com/v10/finance/quoteSummary/${stock}?modules=price,summaryDetail`, { cache: 'no-store' })).json()).quoteSummary.result[0];
        // const chart = await (await (await fetch(`https://query2.finance.yahoo.com/v8/finance/chart/${stock}?symbol=AAPL&period1=${Math.floor(new Date().setFullYear(new Date().getFullYear() - 1)/1000)}&period2=${Math.floor(Date.now()/1000)}&interval=1d`, { cache: 'no-store' })).json()).chart.result[0];
        const res = await (await (await fetch(`https://query2.finance.yahoo.com/v6/finance/options/${stock}`, { cache: 'no-store' })).json()).optionChain.result[0].quote;
        const chart = await (await (await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${stock}?period1=${Math.floor(new Date().setFullYear(new Date().getFullYear() - 1)/1000)}&period2=${Math.floor(Date.now()/1000)}&interval=1d`, { cache: 'no-store' })).json()).chart.result[0];
        const historical = [chart.timestamp, chart.indicators.quote[0].close];
        const name =  stock[0] === "^" ? await res.shortName : await res.longName;
        const code = await res.symbol;
        const price = await res.regularMarketPrice;
        const change = await res.regularMarketChange;
        const open = await res.regularMarketOpen;
        const high = await res.regularMarketDayHigh;
        const low = await res.regularMarketDayLow;
        const cap = await res.marketCap;
        // let pe = "-";
        // if (res.trailingPE !== undefined) pe = res.trailingPE.raw ?? "-";
        const pe = await res.trailingPE ?? "-";
        const div = await res.trailingAnnualDividendYield ?? "-";
        const vol = await res.regularMarketVolume ?? "-";
        const yhigh = await res.fiftyTwoWeekHigh;
        const ylow = await res.fiftyTwoWeekLow;
        const type = code[0] === "^" ? "index" : "stock";
        data.push({
            name: name,
            code: code,
            price: price,
            priceChange: change,
            historical: historical,
            open: open,
            high: high,
            low: low,
            cap: cap,
            pe: pe,
            div: div,
            vol: vol,
            yhigh: yhigh,
            ylow: ylow,
            type: type,
        });
    }
    return data;
}


export default async function Home() {
    const stockList = await getStocks();

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
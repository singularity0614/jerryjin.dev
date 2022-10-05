import Head from "next/head";
import Button from "../../../../../components/button";

export default function Home() {
    return (
        <>
            <Head>
                <title>Stock Watcher</title>
                <meta name="description" content="Independent Project - Stock Watcher Website" />
            </Head>      
            <main className="font-sans">
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
                    <div>
                        this is filter + search area
                    </div>
                </section>
                <section>
                    <div className="flex justify-center flex-col items-center">
                        <Button stockName="S&P/ASX 200" stockCode="XJO" price="7402.92" priceChange="67.11"></Button>
                        <Button stockName="Rio Tinto" stockCode="RIO" price="96.38" priceChange="-10.00"></Button>
                        <Button stockName="Whitehaven Coal" stockCode="WHC" price="9.71" priceChange="1.21"></Button>
                    </div>   
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}
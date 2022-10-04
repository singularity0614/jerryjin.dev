import Head from "next/head";
import Button from "../../../../../components/button";

export default function Home() {
    return (
        <>
            <Head>
                <title>Stock Watcher</title>
                <meta name="description" content="Independent Project - Stock Watcher Website" />
            </Head>      
            <main className="font-proxima">
                <header>
                    <div className="my-6 flex justify-center items-center">
                        <h1 className="font-bold text-7xl text-transparent bg-clip-text bg-gradient-to-r from-[#049cb7] to-[#3dd9bd]">Stock Dashboard</h1>
                    </div>
                </header>
                <section>
                    <div>
                        this is filter + search area
                    </div>
                </section>
                <section>
                    <div className="flex justify-center flex-col items-center">
                        <Button stockName="S&P/ASX 200" stockCode="XJO"></Button>
                        <Button stockName="Rio Tinto" stockCode="RIO"></Button>
                        <Button stockName="Whitehaven Coal" stockCode="WHC"></Button>
                    </div>   
                </section>
                <footer>

                </footer>
            </main>
        </>
    )
}
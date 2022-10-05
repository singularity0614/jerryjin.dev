function StockDisplay(props) {
    const priceChange = parseFloat(props.priceChange);
    console.log(priceChange);
    const colour = priceChange > 0 ? "#137333" : (priceChange < 0 ? "#FF0000" : "#000000");
    console.log(colour);
    const sign = parseFloat(props.priceChange) > 0 ? "+" : (parseFloat(props.priceChange) < 0 ? "-" : "");

    return (
        <>
            <div className="flex justify-center items-center w-[60vw] rounded-xl p-0.5 mx-auto my-4 bg-gradient-to-r from-[#bdc3c7] to-[#7d868f]">
                <div className="flex justify-between items-center bg-white px-6 py-5 rounded-[10px] w-[60vw]">
                    <div>
                        <div>{props.stockName}</div>
                        <div className="text-sm text-slate-500">{props.stockCode}</div>
                    </div>
                    <div className="flex justify-between items-center w-64 font-semibold">
                        <div className="p-1.5">${props.price}</div>
                        <div className={`text-[${colour}]`}>{sign}${priceChange}</div>
                        <div className={`flex justify-evenly items-center p-1.5 rounded-lg text-[${colour}] bg-[#e8f4eb]`}>
                            <svg width="16" height="16" viewBox="0 0 24 24" focusable="false" className={`fill-[${colour}]`}><path d="M4 12l1.41 1.41L11 7.83V20h2V7.83l5.58 5.59L20 12l-8-8-8 8z"></path></svg>
                            <div>{props.pcChange}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default StockDisplay;
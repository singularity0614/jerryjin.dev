import Image from "next/image";

async function getData() {
    const res = await fetch("https://fakestoreapi.com/products/");

    return res.json();
}

export default async function Secret() {
    const data = await getData();

    return (
        <>
            <div className="flex items-center flex-col">
                {
                    data.map((product, index) => (
                        <div key={index} className="bg-[#111111] m-4 p-4 rounded-2xl w-[1080px]">
                            <div className="flex justify-between items-center m-4">
                                <div>
                                    <h1 className="text-3xl font-bold w-[720px]">{product.title}</h1>
                                    <h3>Category: {product.category.charAt(0).toUpperCase()+product.category.slice(1)}</h3>
                                </div>
                                <h2 className="text-lg font-medium w-[360px] text-right">${product.price}</h2>
                            </div>
                            <div className="flex justify-between">
                                <img src={product.image} alt={product.title} className="h-96 aspect-auto rounded-lg m-4" />
                                <p className="m-4">{product.description.charAt(0).toUpperCase()+product.description.slice(1)}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    )
}
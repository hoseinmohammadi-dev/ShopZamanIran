'use client'
import Image from "next/image"
import Link from "next/link"
import useShop from "../store/store"

export default function Basket() {
    const { basket, removeFromBasket, increaseCount, decreaseCount } = useShop()
    const isEmpty = basket.length === 0

    return (
        <section className="container mx-auto">
            <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
                <Link href="/">صفحه اصلی</Link>
                <span className="mx-1">{">"}</span>
                <Link className="text-black/70" href="">سبد خرید</Link>
            </div>

            <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5">
                <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">سبد خرید</h2>
            </div>

            {isEmpty ? (
                <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
                    <Image src="/image/basket.svg" alt="empty basket" width={200} height={200} />
                    <p className="text-lg font-semibold text-red-500 mt-4">سبد خرید شما خالیست</p>
                    <div className="flex gap-2 mt-3">
                        <Link href="/shop">
                            <button className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition">صفحه فروشگاه</button>
                        </Link>
                        <Link href="/">
                            <button className="bg-gray-200 text-black px-4 py-2 rounded-xl hover:bg-gray-300 transition">صفحه نخست</button>
                        </Link>
                    </div>
                </div>
            ) : (
                <section className="hidden md:block container mx-auto px-[5%] mt-8">
                    <div className="overflow-x-auto border border-black/30 rounded-2xl shadow-sm">
                        <table className="w-full text-sm md:text-base text-right border-collapse">
                            <thead className="bg-gray-100 text-gray-700 border-b border-black/30">
                                <tr>
                                    <th className="py-3 px-4 text-right font-medium w-1/2">
                                        <p className="flex justify-start">محصول</p>
                                    </th>
                                    <th className="py-3 px-4 text-right font-medium">
                                        <p className="flex justify-center">قیمت</p>
                                    </th>
                                    <th className="py-3 px-4 text-center font-medium">تعداد</th>
                                    <th className="py-3 px-4 text-center font-medium flex justify-center">
                                        <p>قیمت کل</p>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {basket.map((item) => (
                                    <tr key={item.refCode} className="border-b border-black/30 last:border-none hover:bg-gray-50 transition-colors">
                                        {/* محصول */}
                                        <td className="p-3">
                                            <div className="flex items-center justify-start gap-2">
                                                <Image src={item.image} alt={item.title} width={80} height={80} className="rounded-lg border object-cover shrink-0" />
                                                <p className="font-medium text-gray-800 text-base leading-tight w-[75%] ">{item.title}</p>
                                            </div>
                                        </td>

                                        {/* قیمت */}
                                        <td className="p-3 text-gray-700 font-[yekanBakhFa]! whitespace-nowrap">
                                            <div className="flex justify-center">
                                            {item.price.toLocaleString()} تومان
                                            </div>
                                        </td>

                                        {/* تعداد */}
                                        <td className="p-3">
                                            <div className="max-w-[81px]! mx-auto flex justify-center items-center border border-black/30 rounded-md overflow-hidden text-sm">
                                                <button onClick={() => increaseCount(item.id)} className="px-2 py-0.5 hover:bg-gray-200 transition text-base"> + </button>
                                                <span className="px-3 text-[13px]">{item.count}</span>
                                                <button onClick={() => decreaseCount(item.id)} className="px-2 py-0.5 hover:bg-gray-200 transition text-base"> – </button>
                                            </div>
                                        </td>

                                        <td className="p-3 text-gray-700 font-[yekanBakhFa]! whitespace-nowrap">
                                            <div className="flex justify-center">
                                            {(Number(item.price.replace(/,/g, '')) * item.count).toLocaleString()} تومان
                                            </div>
                                        </td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </section>
    )
}

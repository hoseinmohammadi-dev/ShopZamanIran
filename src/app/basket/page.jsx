'use client'
import Link from 'next/link'
import useShop from '../store/store'
import Image from 'next/image'

export default function basket() {
    const { basket } = useShop()
    const isEmpty = basket.length === 0

    return (
        <section className="min-h-screen container mx-auto">
            <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
                <Link href="/">صفحه اصلی</Link>
                <span className="mx-1">{">"}</span>
                <Link className="text-black/70" href="">سبد خرید</Link>
            </div>

            <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5">
                <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">سبد خرید</h2>
            </div>

            {isEmpty ? (
                <div className='mx-[4%] flex justify-center'>
                    <div className='w-full bg-stone-200 rounded-4xl relative flex flex-col items-center'>
                        <Image src="/image/basket.svg" alt="pic" width={0} height={0} className='relative -top-6 left-0 rounded-xl object-cover w-[80%] max-w-[300px]' />
                        <p className='text-[16px] sm:text-[16px] md:text-[20px] lg:text-[22px] text-red-600/90 font-bold'>سبد خرید شما خالیست</p>
                        <p className='text-[12px] sm:text-[14px] md:text-[16px] text-black/45'>میتواند برای مشاهده محصولات بیشتر به صفحات زیر بروید:</p>
                        <div className='flex gap-1 mb-5 mt-1.5 md:mt-3'>
                            <Link href="/shop">
                                <button className="bg-white text-black hover:text-white text-[12px] md:text-[16px] py-1 md:py-1.5 lg:py-2 px-1.5 md:px-3 lg:px-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg mr-2 md:mr-5">صفحه فروشگاه</button>
                            </Link>
                            <Link href="/">
                                <button className="bg-white text-black hover:text-white text-[12px] md:text-[16px] py-1 md:py-1.5 lg:py-2 px-1.5 md:px-3 lg:px-4 rounded-xl hover:bg-gray-800 transition-all shadow-lg mr-2 md:mr-5">صفحه نخست</button>
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="mx-[5%] mt-5">
                    {basket.map((item, i) => (
                        <div
                            key={i}
                            className="flex items-center justify-between border-b py-3 text-black"
                        >
                            <div className="flex items-center gap-3">
                                <img src={item.img} alt={item.title} className="w-16 h-16 rounded" />
                                <div>
                                    <h3 className="font-medium">{item.title}</h3>
                                    <p className="text-sm text-gray-600">{item.price} تومان</p>
                                </div>
                            </div>
                            <span className="text-gray-700">{item.count} عدد</span>
                        </div>
                    ))}
                </div>
            )}

        </section>
    )
}

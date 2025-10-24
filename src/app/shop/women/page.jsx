import Link from "next/link";
import getData from "../../services/getData"
import SearchBox from "../../component/Search"
import Image from "next/image"

export default async function page() {
    let data = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products")
    let womenWatches = data.filter(item => item.category === "woman").reverse()

    return (

        <section className="min-h-screen container mx-auto">
            <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
                <Link href="/">صفحه اصلی</Link>
                <span className="mx-1">{">"}</span>
                <Link href="/shop">فروشگاه</Link>
                <span className="mx-1">{">"}</span>
                <Link className="text-black/70" href="">زنانه</Link>
            </div>

            {/* sec2 title */}
            <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5" >
                <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">فروشگاه زنانه</h2>
                <SearchBox />
            </div>

            {/* sec3 Products page */}
            <div className="mx-[2%] md:mx-[5%] flex flex-wrap justify-center lg:justify-between gap-5">
                {womenWatches && womenWatches.map((val) => (
                    <div key={val.refCode} className='bg-white shadow-md rounded-2xl min-w-[120px] max-w-[145px] sm:max-w-[200px] xl:max-w-[230px] min-h-[220px] sm:min-h-[260px] md:min-h-[300px] p-2 sm:p-3 hover:shadow-lg transition-all duration-300'>
                        <div className='w-full aspect-square flex justify-center items-center'>
                            <img src={val.image} alt={val.title} className='rounded-xl object-cover w-full h-full' />
                        </div>

                        <p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center mt-2 font-medium text-black/80 line-clamp-2'>{val.title}</p>

                        <div className='flex justify-center items-end gap-1 mt-2 md:mt-3'>
                            <p className='text-[10px] sm:text-[12px] md:text-[14px] font-bold text-gray-700 font-[YekanBakhFa]!'>{val.price}</p>
                            <Image src='/icon/toman.svg' alt="Toman" width={0} height={0} className='w-4 sm:w-5 md:6 object-contain' />
                        </div>
                    </div>
                ))}
            </div>

        </section>
    )
}
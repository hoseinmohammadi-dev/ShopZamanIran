import Link from "next/link";

export default function page() {
    return (

        <section className="min-h-[65dvh] lg:min-h-[55dvh]">
        <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
            <Link href="/">صفحه اصلی</Link>
            <span className="mx-1">{">"}</span>
            <Link className="text-black/70" href="">مقالات</Link>
        </div>

        {/* sec2 title */}
        <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5" >
            <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">مقالات</h2>
        </div>

        <div className="mx-[6%] text-[14px] md:text-[16px] lg:text-[18px]">
            <p>به زودی مقالات آموزشی اضافه میشن ...</p>
        </div>

        </section>
    )
}
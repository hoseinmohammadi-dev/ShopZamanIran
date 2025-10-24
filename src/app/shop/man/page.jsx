import Link from "next/link";

export default function page() {
    return (

        <>
        <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
            <Link href="/">صفحه اصلی</Link>
            <span className="mx-1">{">"}</span>
            <Link href="/shop">فروشگاه</Link>
            <span className="mx-1">{">"}</span>
            <Link className="text-black/70" href="">مردانه</Link>
        </div>

        {/* sec2 title */}
        <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5" >
            <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">فروشگاه مردانه</h2>
        </div>



        </>
    )
}
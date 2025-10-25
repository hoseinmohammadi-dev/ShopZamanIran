'use client';
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBox from "./SearchBox";

export default function ClientStore({ initialData }) {
  const [products, setProducts] = useState(initialData);

  return (
    <section className="min-h-screen container mx-auto">
      <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
        <Link href="/">صفحه اصلی</Link>
        <span className="mx-1">{">"}</span>
        <Link className="text-black/70" href="">فروشگاه</Link>
      </div>

      <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5">
        <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">فروشگاه</h2>
        <SearchBox setProducts={setProducts} initialProducts={products} />
      </div>

      <div className="mx-[2%] md:mx-[5%] flex flex-wrap justify-center lg:justify-between gap-5">
        {products && products.map((val) => (
          <Link key={val.refCode} href={`/product/${val.refCode}`} className='bg-white shadow-md rounded-2xl min-w-[120px] max-w-[145px] sm:max-w-[200px] xl:max-w-[230px] min-h-[220px] sm:min-h-[260px] md:min-h-[300px] p-2 sm:p-3 hover:shadow-lg transition-all duration-300'>
            <div className='w-full aspect-square flex justify-center items-center'>
              <Image src={val.image} alt={val.title} width={200} height={200} className='rounded-xl object-cover w-full h-full'/>
            </div>

            <p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center mt-2 font-medium text-black/80 line-clamp-2'>
              {val.title}
            </p>

            <div className='flex justify-center items-end gap-1 mt-2 md:mt-3'>
              <p className='text-[10px] sm:text-[12px] md:text-[14px] font-bold text-gray-700 font-[YekanBakhFa]'>
                {val.price}
              </p>
              <Image src='/icon/toman.svg' alt="Toman" width={20} height={20} className='object-contain' />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

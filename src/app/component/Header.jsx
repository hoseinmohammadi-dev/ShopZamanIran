import React from 'react'
import Image from "next/image";
import Link from "next/link";

export default function Header(){
    return(
        <header className='mb-[110px]'>
        <div className='fixed top-0 right-0 z-10 w-full h-20 flex justify-between items-center  px-[5%]  bg-white shadow-sm'>
          <div>
            <Image src='/image/logo.png' alt="Pic" width={150} height={150} />
          </div>
          <div className='flex gap-6 *:hover:text-red-700'>
            <Link href='./'>صفحه نخست</Link>
            <Link href=''>فروشگاه</Link>
            <Link href=''>سوالات متداول</Link>
            <Link href=''>مقالات</Link>
          </div>
          <div className='flex gap-1'>
            <Image src='/icon/basket.svg' alt="Pic" width={25} height={25} />
            <p>سبد خرید</p>
          </div>
        </div>
      </header>
    )
}
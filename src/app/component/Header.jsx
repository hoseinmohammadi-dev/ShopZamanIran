'use client'
import React, { useState } from 'react'
import Link from "next/link";
import { CgMenuRight } from "react-icons/cg";
import { LiaTimesSolid } from "react-icons/lia";

export default function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className='mb-[110px]'>
      <div className='fixed top-0 left-0 z-10 w-full h-20 flex justify-between items-center px-[5%] bg-white shadow-sm'>

        {/* mobile menu */}
        <div className='md:hidden' onClick={() => setOpen(!open)}>
          {open ? <LiaTimesSolid size={30} /> : <CgMenuRight size={30} />}
        </div>

        {/* logo */}
        <div>
          <img className='w-[130px]' src="/image/logo.png" alt="" />
        </div>

        {/* list link */}
        <div className='hidden md:flex gap-6 *:hover:text-red-700'>
          <Link href='./'>صفحه نخست</Link>
          <Link href=''>فروشگاه</Link>
          <Link href=''>سوالات متداول</Link>
          <Link href=''>مقالات</Link>
        </div>

        {/* basket */}
        <div className='hidden md:flex gap-1'>
          <img className='w-5' src="/icon/basket.svg" alt="" />
          <p>سبد خرید</p>
        </div>
      </div>

      {/* mobile menu overlay and dropdown */}
      {open && (
        <>
          <div
            className="fixed inset-0 top-20 bg-black/75 bg-opacity-60 z-20 transition-opacity duration-200"
            onClick={() => setOpen(false)}
          />
          <div className="fixed top-20 left-0 w-full bg-white shadow-md flex flex-col items-center gap-4 py-6 md:hidden animate-fade-in z-30">
            <Link href="" onClick={() => setOpen(false)}>صفحه نخست</Link>
            <Link href="" onClick={() => setOpen(false)}>فروشگاه</Link>
            <Link href="" onClick={() => setOpen(false)}>سوالات متداول</Link>
            <Link href="" onClick={() => setOpen(false)}>مقالات</Link>
            <Link className='flex text-black bg-stone-200 px-4 py-1 rounded-sm' href="" onClick={() => setOpen(false)}>
              <img className='w-5 ml-2' src="/icon/basket.svg" alt="" />
              <p>سبد خرید</p>
            </Link>
          </div>
        </>
      )}
    </header>
  )
}
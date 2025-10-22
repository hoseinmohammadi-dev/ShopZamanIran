import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MySlider from './component/Slider'

export default function homePage() {
  return (
    <>
      <header>
        <div className='flex justify-between items-center h-20 px-[5%] bg-white shadow-sm'>
          <div>
            <Image src='/image/logo.png' alt="Pic" width={150} height={150} />
          </div>
          <div className='flex gap-6 *:hover:text-red-700'>
            <Link href=''>صفحه نخست</Link>
            <Link href=''>فروشگاه</Link>
            <Link href=''>سوالات متداول</Link>
            <Link href=''>مقالات</Link>
          </div>
          <div>
            <Image src='/icon/basket.svg' alt="Pic" width={25} height={25} />
          </div>
        </div>
      </header>
      <main>
        <section className='mt-8 px-[5%] flex gap-2.5'>
          <div className='w-9/12 rounded-2xl'>
            <MySlider/>
          </div>
          <div className='flex flex-col justify-between'>
            <Image src='/image/womenSec.png' alt="Pic" width={350} height={350} className='rounded-2xl' />
            <Image src='/image/manSec.jpeg' alt="Pic" width={350} height={350}  className='rounded-2xl'/>
          </div>
        </section>
      </main>
    </>
  )
}

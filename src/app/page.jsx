import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MySlider from './component/Slider'
import Sec4 from './component/sec4'
import Sec5 from './component/sec5'
import Sec6 from './component/sec6'

export default async function homePage() {
  return (
    <main className='container mx-auto'>
      {/* sec1 */}
      <section className='mt-8 px-[5%] md:flex justify-center md:gap-2.5'>
        <div className='md:w-[950px] rounded-2xl overflow-hidden'>
          <MySlider />
        </div>
        <div className='flex md:flex-col justify-between w-full md:w-[350px] *:w-48/100 md:*:w-full mt-4 md:mt-0'>
        <Link href="/shop/women">
          <Image src='/image/womenSec.png' alt="Pic" width={350} height={350} className='rounded-2xl' />
        </Link>
        <Link href="/shop/man">
          <Image src='/image/manSec.jpeg' alt="Pic" width={350} height={350} className='rounded-2xl' />
        </Link>
        </div>
      </section>

      {/* sec2 */}
      <section className='mt-6 px-[7%] hidden lg:flex justify-between *:bg-white *:p-2.5 *:shadow-lg *:rounded-2xl *:w-19/100 *:flex *:items-center *:justify-around'>
        <div >
          <img className='w-[50px] h-[50px]' src="/icon/poshtibani.png" alt="poshtibani" />
          <div>
            <p className='text-red-600 text-[14px] xl:text-[16px] '>مشاوره خرید</p>
            <p className='text-[12px] text-black/80'>از 9 صبح تا 17 عصر</p>
          </div>
        </div>
        <div>
          <img className='w-[50px] h-[50px]' src="/icon/expres.jpeg" alt="expres" />
          <div>
            <p className='text-red-600 text-[14px] xl:text-[16px]'>ارسال سریع </p>
            <p className='text-[12px] text-black/80'>به سراسر ایران</p>
          </div>
        </div>
        <div>
          <img className='w-[45px] h-[45px]' src="/icon/frosh.png" alt="frosh" />
          <div>
            <p className='text-red-600 text-[13px] xl:text-[16px]'>خدمات پس از فروش</p>
            <p className='text-[12px] text-black/80'>10 سال</p>
          </div>
        </div>
        <div >
          <img className='w-[55px] h-[55px]' src="/icon/garanti.png" alt="garanti" />
          <div>
            <p className='text-red-600 text-[14px] xl:text-[16px]'>گارانتی باتری</p>
            <p className='text-[12px] text-black/80'>5 سال ضمانت</p>
          </div>
        </div>
        <div >
          <img className='w-[55px] h-[55px]' src="/icon/taviz.png" alt="taviz" />
          <div>
            <p className='text-red-600 text-[14px] xl:text-[16px]'>امکان تعویض</p>
            <p className='text-[10px] text-black/80'>تا 48 ساعت پس از تحویل</p>
          </div>
        </div>
      </section>

      {/* sec3 */}
      <section className='mt-6 px-[5%]'>
        <Link href="/shop">
          <Image className='rounded-2xl overflow-hidden' src='/image/baner.jpeg' alt="Pic" width={10000} height={50} />
        </Link>
      </section>

      {/* sec4 */}
      <Sec4 />

      {/* sec5 */}
      <Sec5 />
      
      {/* sec6 */}
      <Sec6 />
    </main>
  )
}

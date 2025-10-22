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
        {/* sec1 */}
        <section className='mt-8 px-[5%] flex justify-center gap-2.5'>
          <div className='w-[950px] rounded-2xl overflow-hidden'>
            <MySlider />
          </div>
          <div className='flex flex-col justify-between w-[350px]'>
            <Image src='/image/womenSec.png' alt="Pic" width={350} height={350} className='rounded-2xl' />
            <Image src='/image/manSec.jpeg' alt="Pic" width={350} height={350} className='rounded-2xl' />
          </div>
        </section>


        {/* sec2 */}
        <section className='mt-6 px-[7%] flex justify-between *:bg-white *:p-2 *:shadow-lg *:rounded-2xl *:w-2/'>
          <div className='flex gap-3'>
            <Image src='/icon/poshtibani.png' alt="Pic" width={50} height={50} />
            <div>
              <p className='text-red-600'>مشاوره خرید به مشتریان</p>
              <p className='text-sm text-black/80'>از 9 صبح تا 17 عصر</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/icon/expres.jpeg' alt="Pic" width={50} height={50} />
            <div>
              <p className='text-red-600'>ارسال سریع یا اکسپرس</p>
              <p className='text-sm text-black/80'>به سراسر ایران</p>
            </div>
          </div>
          <div className='flex gap-3 w-54'>
            <Image src='/icon/frosh.png' alt="Pic" width={50} height={50} />
            <div>
              <p className='text-red-600'>خدمات پس از فروش</p>
              <p className='text-sm text-black/80'>10 سال</p>
            </div>
          </div>
          <div className='flex gap-3 w-54'>
            <Image src='/icon/garanti.png' alt="Pic" width={50} height={50} />
            <div>
              <p className='text-red-600'>گارانتی باتری</p>
              <p className='text-sm text-black/80'>5 سال ضمانت</p>
            </div>
          </div>
          <div className='flex gap-3'>
            <Image src='/icon/taviz.png' alt="Pic" width={50} height={50} />
            <div>
              <p className='text-red-600'>امکان تعویض</p>
              <p className='text-sm text-black/80'>تا 48 ساعت پس از تحویل</p>
            </div>
          </div>
        </section>


        {/* sec3 */}
        <section className='mt-6 px-[7%]'>
          <Link href=''>
            <Image className='rounded-2xl overflow-hidden' src='/image/baner.jpeg' alt="Pic" width={10000} height={50} />
          </Link>
        </section>
      </main>
    </>
  )
}

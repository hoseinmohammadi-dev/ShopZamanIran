import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MySlider from './component/Slider'
import getData from './services/getData'


export default async function homePage() {
  let data = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products")
  return (
    <main className='container mx-auto'>
      {/* sec1 */}
      <section className='mt-8 px-[5%] md:flex justify-center md:gap-2.5'>
        <div className='md:w-[950px] rounded-2xl overflow-hidden'>
          <MySlider />
        </div>
        <div className='flex md:flex-col justify-between w-full md:w-[350px] *:w-48/100 md:*:w-full mt-4 md:mt-0'>
          <Image src='/image/womenSec.png' alt="Pic" width={350} height={350} className='rounded-2xl' />
          <Image src='/image/manSec.jpeg' alt="Pic" width={350} height={350} className='rounded-2xl' />
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
        <Link href=''>
          <Image className='rounded-2xl overflow-hidden' src='/image/baner.jpeg' alt="Pic" width={10000} height={50} />
        </Link>
      </section>

      {/* sec4 */}
      <section className='mt-8 mx-[5%]'>
        <h2 className='text-md md:text-xl font-bold text-black/75'>محصولات لاکچری زمان ایران</h2>
        <div className='relative flex justify-between gap-2 mt-3 overflow-x-hidden '>
          {data && data.slice(14,19).map((val) => {
            return (
              <div key={val.refCode} className='min-w-[110px] w-[250px] bg-white shadow-sm rounded-2xl p-1.5 md:p-2.5'>
                <div>
                  <img src={val.image} alt="" />
                </div>
                <p className='text-[10px] md:text-[14px] lg:text-[16px] mt-2 md:mt-4'>{val.title}</p>
                <div className='flex justify-end mt-2.5 md:mt-5 relative bottom-0 left-0'>
                  <p className='text-[10px] md:text-[16px] font-[YekanBakhFa]!'>{val.price}</p>
                  <Image className='w-[15px] md:w-5' src='/icon/toman.svg' alt="Pic" width={0} height={0} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* sec5 */}
      <section className='mt-8 mx-[5%]'>
        <h2 className='text-md md:text-xl font-bold text-black/75'>محصولات زنانه زمان ایران</h2>
        <div className='relative flex justify-between gap-2 mt-3 overflow-x-hidden '>
          {data && data.slice(23,28).map((val) => {
            return (
              <div key={val.refCode} className='min-w-[110px] w-[250px] bg-white shadow-sm rounded-2xl p-1.5 md:p-2.5'>
                <div>
                  <img src={val.image} alt="" />
                </div>
                <p className='text-[10px] md:text-[14px] lg:text-[16px] mt-2 md:mt-4'>{val.title}</p>
                <div className='flex justify-end mt-2.5 md:mt-5 relative bottom-0 left-0'>
                  <p className='text-[10px] md:text-[16px] font-[YekanBakhFa]!'>{val.price}</p>
                  <Image className='w-[15px] md:w-5' src='/icon/toman.svg' alt="Pic" width={0} height={0} />
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* sec6 */}
      <section className='mt-8 mx-[5%]'>
        <h2 className='text-md md:text-xl font-bold text-black/75'>محصولات مردانه زمان ایران</h2>
        <div className='relative flex justify-between gap-2 mt-3 overflow-x-hidden '>
          {data && data.slice(0,5).map((val) => {
            return (
              <div key={val.refCode} className='min-w-[110px] w-[250px] bg-white shadow-sm rounded-2xl p-1.5 md:p-2.5'>
                <div>
                  <img src={val.image} alt="" />
                </div>
                <p className='text-[10px] md:text-[14px] lg:text-[16px] mt-2 md:mt-4'>{val.title}</p>
                <div className='flex justify-end mt-2.5 md:mt-5 relative bottom-0 left-0'>
                  <p className='text-[10px] md:text-[16px] font-[YekanBakhFa]!'>{val.price}</p>
                  <Image className='w-[15px] md:w-5' src='/icon/toman.svg' alt="Pic" width={0} height={0} />
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

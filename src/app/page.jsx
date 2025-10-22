import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import MySlider from './component/Slider'
import getData from './services/getData'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";


export default async function homePage() {
  let data = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products")
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
          <div className='flex gap-1'>
            <Image src='/icon/basket.svg' alt="Pic" width={25} height={25} />
            <p>سبد خرید</p>
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

        {/* sec4 */}
        <section className='mt-8 mx-[7%]'>
          <h2 className='text-xl font-bold text-black/75'>محصولات لاکچری زمان ایران</h2>
          <div className='flex justify-between mt-3'>
            {data && data.slice(13, 18).map((val) => {
              return (
                <div key={val.refCode} className='w-[250px] bg-white shadow-lg rounded-2xl p-2.5'>
                  <div>
                    <img src={val.image} alt="" />
                  </div>
                  <div className='text-[16px] mt-4'>{val.title}</div>
                  <div className='flex justify-end mt-5'>
                    <div>{val.price}</div>
                    <Image className='rounded-2xl overflow-hidden' src='/icon/toman.svg' alt="Pic" width={30} height={50} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* sec5 */}
        <section className='mt-8 mx-[7%]'>
          <h2 className='text-xl font-bold text-black/75'>ساعت های زنانه زمان ایران</h2>
          <div className='flex justify-between mt-3'>
            {data && data.slice(22, 27).map((val) => {
              return (
                <div key={val.refCode} className='w-[250px] bg-white shadow-lg rounded-2xl p-2.5'>
                  <div className='rounded-xl overflow-hidden'>
                    <img src={val.image} alt="" />
                  </div>
                  <div className='text-[16px] mt-4'>{val.title}</div>
                  <div className='flex justify-end mt-5'>
                    <div>{val.price}</div>
                    <Image className='rounded-2xl overflow-hidden' src='/icon/toman.svg' alt="Pic" width={30} height={50} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* sec6 */}
        <section className='mt-8 mx-[7%]'>
          <h2 className='text-xl font-bold text-black/75'>ساعت های مردانه زمان ایران</h2>
          <div className='flex justify-between mt-3'>
            {data && data.slice(0, 5).map((val) => {
              return (
                <div key={val.refCode} className='w-[250px] bg-white shadow-lg rounded-2xl p-2.5'>
                  <div>
                    <img src={val.image} alt="" />
                  </div>
                  <div className='text-[16px] mt-4'>{val.title}</div>
                  <div className='flex justify-end mt-5'>
                    <div>{val.price}</div>
                    <Image className='rounded-2xl overflow-hidden' src='/icon/toman.svg' alt="Pic" width={30} height={50} />
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <footer className='flex items-center mt-8 p-5 bg-stone-200 '>
          <Image className='rounded-2xl overflow-hidden ml-12' src='/icon/newLogo.png' alt="Pic" width={150} height={50} />

          <div className='w-7/12'>
            <h4>مرجع ساعت های اورجینال ، لوکس و کلکسیونی - زمان ایران</h4>
            <p className='text-sm text-black/75 mt-2'>فروشگاه آنلاین زمان ایران، در زمینه واردات و فروش اینترنتی انواع ساعت با بیش از 30 سال فعالیت در این حوزه می باشد. فروش انواع ساعت های اورجینال به همراه انواع برند های لوکس ساعت در فروشگاه ساعت زمان ایران ساعت زمان ایران با سابقه ی بیش از 30 سال در این حوضه توانسته با اکثر برند های لوکس ساعت در جهان همکاری داشته باشه علاوه بر این فروشگاه ساعت زمان ایران اکثر محصولات انواع برند های اورجینال مثل کاسیو, تیسوت, سیکو, سیتیزن, امپریو آرمانی, هوگو بوس, فسیل, دنیل کلین را به صورت مستقیم به دست علاقه مندان این محصولات میرساند.</p>
          </div>

          <div className='w-5/12 mr-20'>
            <p>پشتیانی از 9 صبح الی 18 عصر</p>
            <div className='*:text-sm *:mt-1'>
            <div className='flex items-center gap-1.5'>
              <FaPhone className='text-stone-500'/>
              <p>09129272196</p>
            </div>
            <div className='flex items-center gap-1.5'>
              <MdOutlineMail className='text-stone-500'/>
              <p>Info@Zamaniran.com</p>
            </div>
            <div className='flex gap-1.5 relative'>
              <FaLocationArrow  className='text-stone-500 relative top-2'/>
              <p className='w-[270px]'>تهران – اتوبان ستاری – مجتمع تجاری کوروش – طبقه منفی یک – واحد 166 - گالری زمان ایران</p>
            </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

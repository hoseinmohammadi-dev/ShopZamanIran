import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className='flex items-center md:items-start mt-8 px-10 py-5 bg-stone-200'>
      <div className='hidden md:block'>
        <h4 className='text-[14px] mb-4'>مرجع ساعت های اورجینال ، لوکس و کلکسیونی - زمان ایران</h4>
        <p className='w-[85%] text-[12px] text-black/75'>فروشگاه آنلاین زمان ایران، در زمینه واردات و فروش اینترنتی انواع ساعت با بیش از 30 سال فعالیت در این حوزه می باشد. فروش انواع ساعت های اورجینال به همراه انواع برند های لوکس ساعت در فروشگاه ساعت زمان ایران ساعت زمان ایران با سابقه ی بیش از 30 سال در این حوضه توانسته با اکثر برند های لوکس ساعت در جهان همکاری داشته باشه علاوه بر این فروشگاه ساعت زمان ایران اکثر محصولات انواع برند های اورجینال مثل کاسیو, تیسوت, سیکو, سیتیزن, امپریو آرمانی, هوگو بوس, فسیل, دنیل کلین را به صورت مستقیم به دست علاقه مندان این محصولات میرساند.</p>
      </div>

      <div className=''>
        <p className='text-[14px] mb-4'>پشتیانی از 9 صبح الی 18 عصر</p>
        <div className='*:text-[12px] *:mt-1'>
          <div className='flex items-center gap-1.5'>
            <FaPhone className='text-stone-500' />
            <p>09129272196</p>
          </div>
          <div className='flex items-center gap-1.5'>
            <MdOutlineMail size={15} className='text-stone-500' />
            <p>Info@Zamaniran.com</p>
          </div>
          <div className='flex gap-1.5 relative w-[220px]'>
            <FaLocationArrow size={20} className='text-stone-500 relative top-0' />
            <p>تهران – اتوبان ستاری – مجتمع تجاری کوروش – طبقه منفی یک – واحد 166 - گالری زمان ایران</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
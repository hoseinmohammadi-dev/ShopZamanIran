import React from 'react'
import { FaPhone } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa";
import Image from 'next/image';

export default function Footer(){
    return(
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
    )
}
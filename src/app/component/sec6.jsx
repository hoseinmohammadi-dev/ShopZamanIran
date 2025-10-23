'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import getData from '../services/getData';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Sec6() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products");
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <section className='mt-10 mx-[5%] relative'>
      <h2 className='text-base sm:text-lg md:text-xl font-bold text-black/80 text-right'>محصولات مردانه زمان ایران</h2>
      <div className='relative mt-4'>
        <Swiper
          modules={[Navigation]}
          navigation={{
            nextEl: '.custom-next2',
            prevEl: '.custom-prev2',
          }}
          spaceBetween={10}
          slidesPerView={2.2}
          breakpoints={{
            480: { slidesPerView: 3 },
            640: { slidesPerView: 3.5 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className='swiper-custom relative z-10'
        >
          {data && data.slice(9,16).map((val) => (
            <SwiperSlide key={val.refCode}>
              <div className='flex flex-col justify-between items-center bg-white shadow-md rounded-2xl min-w-[130px] max-w-[180px] sm:max-w-[220px] md:max-w-60 min-h-[220px] sm:min-h-[260px] md:min-h-[300px] p-2 sm:p-3 hover:shadow-lg transition-all duration-300'>
                <div className='w-full aspect-square flex justify-center items-center'>
                  <img src={val.image} alt={val.title} className='rounded-xl object-cover w-full h-full' />
                </div>

                <p className='text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] text-center mt-2 font-medium text-black/80 line-clamp-2'>{val.title}</p>

                <div className='flex gap-1 mt-2 md:mt-3'>
                  <p className='text-[10px] sm:text-[12px] md:text-[14px] font-bold text-gray-700 font-[YekanBakhFa]!'>{val.price}</p>
                  <Image src='/icon/toman.svg' alt="Toman" width={20} height={20} className='w-3 sm:w-4 object-contain' />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='hidden sm:flex absolute top-1/2 -translate-y-1/2 justify-between w-full px-2 md:px-4 z-20'>
          <button className='custom-prev2 bg-white shadow-md hover:bg-gray-100 transition-all w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <button className='custom-next2 bg-white shadow-md hover:bg-gray-100 transition-all w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-gray-700'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 md:w-5 md:h-5">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';
import Link from 'next/link';

export default function MySlider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      pagination={{ clickable: true }}
      autoplay={{ delay: 4000 }}
      loop={true}
      spaceBetween={30}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/3.webp" alt="Slide 1" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
        <img src="/image/slider/1.gif" alt="Slide 2" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/4.webp" alt="Slide 3" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/2.gif" alt="Slide 1" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/5.webp" alt="Slide 2" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/6.webp" alt="Slide 3" />
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        <Link href="/shop">
          <img src="/image/slider/7.webp" alt="Slide 3" />
        </Link>
      </SwiperSlide>
    </Swiper>
  );
}

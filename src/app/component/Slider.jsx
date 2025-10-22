'use client';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper';

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
        <img src="/image/slider/3.webp" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/1.gif" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/4.webp" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/2.gif" alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/5.webp" alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/6.webp" alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src="/image/slider/7.webp" alt="Slide 3" />
      </SwiperSlide>
    </Swiper>
  );
}

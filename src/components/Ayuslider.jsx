import React from 'react'
// import { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../assets/img29.jpg";
import img2 from "../assets/img30.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './Ayuslider.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

const Ayuslider = () => {
  return (
    <>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src = {img2}/>
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1}/>
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img1} />
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
        <SwiperSlide>
          <img src={img2}/>
          <button className='text-white w-[110px] bg-red-700 py-2 px-8 rounded-lg absolute left-20 bottom-10 hover:bg-black transition duration-300 hover:translate-x-2 ease-in-out hover:translate-y-2'>Explore</button>
        </SwiperSlide>
      </Swiper>
    </>
  )
}

export default Ayuslider
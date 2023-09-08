import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const slides = [
  '/first.jpg',
  '/second.jpg',
  '/third.jpg',
  '/fourth.jpg',
  '/carousel_1.jpg',
  '/carousel_2.jpg',
  '/carousel_3.jpg',
  '/carousel_vid.mp4',
  '/carousel_4.jpg',
  '/carousel_5.jpg',
];

const Carousel = () => {
  return (
    <div className='h-[600px] relative object-contain z-0'>
      <Swiper
        spaceBetween={0}
        navigation
        modules={[Navigation, Autoplay]}
        autoplay={{ delay: 3000 }}
        className='h-[50%]'
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            {slide.endsWith('.mp4') ? (
              <video controls className='h-[100%]'>
                <source src={slide} type="video/mp4" />
              </video>
            ) : (
              <img src={slide} alt="" />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-black"></div>
    </div>
  );
};

export default Carousel;

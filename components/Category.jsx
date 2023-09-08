import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

const Category = () => {
    const categoryImages = [
        '/category_0.jpg',
        '/category_1.jpg',
        '/category_2.jpg',
        '/category_3.jpg',
        '/category_4.jpg',
        '/category_5.jpg',
    ];

    return (
        <div className='bg-white mt-3 p-5'>
            <h1 className='text-lg font-semibold'>Shop by Category</h1>
            <Swiper
                spaceBetween={10}
                slidesPerView={5}
                navigation
                scrollbar={{ draggable: true }}
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                autoplay={{ delay: 3000 }}
            >
                {categoryImages.map((imageUrl, index) => (
                    <SwiperSlide key={index}>
                        <img src={imageUrl} alt={`category-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Category;

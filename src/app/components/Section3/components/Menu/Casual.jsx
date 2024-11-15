'use client'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import Card from "./Card";
import { useWindowWith } from '@/hook/useWindownWhith';

function Casual() {
       const width = useWindowWith()
    return (
         <div className='relative container'>
        <Swiper spaceBetween={30} pagination={{dynamicBullets:true}} loop={true} modules={[Pagination]} slidesPerView={width >= 640 && width <1300 ? 2 : width < 640 ? 1 : 3 } className="mySwiper relative w-full">
            <SwiperSlide className='group' >
                   <Card/>
            </SwiperSlide>
            <SwiperSlide>
                   <Card/>
            </SwiperSlide>
            <SwiperSlide>
                   <Card/>
            </SwiperSlide>
            <SwiperSlide>
                   <Card/>
            </SwiperSlide>
            <SwiperSlide>
                   <Card/>
            </SwiperSlide>
        </Swiper>
         </div>
     );
}

export default Casual;
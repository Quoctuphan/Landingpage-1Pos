'use client'

import MenuItem from "./MenuItem";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import { useWindowWith } from "@/hook/useWindownWhith";
function Menu() {
    const width = useWindowWith();
    return ( 
        <div className="container">
            <Swiper spaceBetween={30} pagination={{clickable:true}} loop={true} modules={[Pagination]} slidesPerView={width > 820 ? 3 : 1 } className="mySwiper relative w-full">
            <SwiperSlide>
                    <MenuItem/>
            </SwiperSlide>
            <SwiperSlide>
                     <MenuItem/>
            </SwiperSlide>
            <SwiperSlide>
                     <MenuItem/>
            </SwiperSlide>
            <SwiperSlide>
                     <MenuItem/>
            </SwiperSlide>
            <SwiperSlide>
                     <MenuItem/>
            </SwiperSlide>
            <SwiperSlide>
                     <MenuItem/>
            </SwiperSlide>
        </Swiper>
        </div>
     );
}

export default Menu;
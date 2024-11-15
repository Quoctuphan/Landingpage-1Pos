import CardItem from "./Card/Card";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { Autoplay,EffectCoverflow, Pagination } from 'swiper/modules';
export default function CasualItem (){
    return (
        <div className="container">
            <Swiper
        effect={'coverflow'}
        grabCursor={true}
        slidesPerView={'auto'}
        centeredSlides={true}
        initialSlide={1}
        autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }} 
        coverflowEffect={{
          rotate: 0,
          stretch: 50,
          depth: 200,
          modifier: 2,
          slideShadows:false,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="width width-lg width-xl" >
          <CardItem/>
        </SwiperSlide>
        
        <SwiperSlide className="width width-lg width-xl" >
          <CardItem/>
        </SwiperSlide>
        
        <SwiperSlide className="width width-lg width-xl">
          <CardItem/>
        </SwiperSlide>
        
        <SwiperSlide className="width width-lg width-xl" >
          <CardItem/>
        </SwiperSlide>
        <SwiperSlide className="width width-lg width-xl" >
          <CardItem/>
        </SwiperSlide>
        <SwiperSlide className="width width-lg width-xl" >
          <CardItem/>
        </SwiperSlide>

       
      </Swiper>
        </div>
    )

}
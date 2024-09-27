// ImageSwiper.js
import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { assets } from '../Assets/assets';
import 'swiper/css'; 
import 'swiper/css/pagination'; 
import 'swiper/css/navigation'; 
import './ImageSwiper.css'

const ImageSwiper = () => {
  const swiperRef = useRef(null);

  const goToSlide = (index) => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideTo(index);
    }
  };

  return (
    <div className="ImageSwiper">
      <Swiper
        spaceBetween={10}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        ref={swiperRef}
      >
        <SwiperSlide>
          <img src={assets.image1} alt="Image 1" style={{ width: '100%', height: '500px' }} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={assets.image2} alt="Image 2" style={{ width: '100%', height: '500px' }} />
        </SwiperSlide>
        {/* Thêm nhiều slide nếu cần */}
      </Swiper>

     
      {/* <div className="thumbnail-container" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <img
          src={assets.image1}
          alt="Thumbnail 1"
          onClick={() => goToSlide(0)}
          style={{ width: '100px', height: '100px', cursor: 'pointer', marginRight: '10px' }}
        />
        <img
          src={assets.image2}
          alt="Thumbnail 2"
          onClick={() => goToSlide(1)}
          style={{ width: '100px', height: '100px', cursor: 'pointer', marginRight: '10px' }}
        />
      </div> */}
    </div>
  );
};

export default ImageSwiper;

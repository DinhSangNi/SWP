import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../Assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./Uudai.css"

const Uudai = () => {
  const categories1 = [
    { name: "", img: assets.uudai1 },
    { name: "", img: assets.uudai2},
    { name: "", img: assets.uudai3 },
    { name: "", img: assets.uudai4},
    { name: "", img: assets.uudai5},
  ];

  return (
    <div className="bordermain">
    <div className="product-carousel">
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {categories1.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category1-card">
              <img src={category.img} alt={category.name} />
              <p>{category.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
    </div>
  );
};

export default Uudai;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { assets } from "../Assets/assets";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import "./MainContent.css"

const MainContent = () => {
  const categories = [
    { name: "Laptop", img: assets.image3 },
    { name: "Điện thoại", img: assets.image4},
    { name: "Máy Tính Bảng", img: assets.image5 },
    { name: "Tivi", img: assets.image8 },
    { name: "Đồng Hồ Thông Minh", img: assets.image7},
    { name: "Máy tính bảng", img: assets.image3 },
    { name: "Phụ kiện", img: assets.image6 },
    { name: "Robot hút bụi", img: assets.image7 },
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
        {categories.map((category, index) => (
          <SwiperSlide key={index}>
            <div className="category-card">
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

export default MainContent;

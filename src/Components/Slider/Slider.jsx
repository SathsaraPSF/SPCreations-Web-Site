import React from "react";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./Slider.css";

import image_1 from "../../assests/img_1.jpg";
import image_2 from "../../assests/img_2.jpg";
import image_3 from "../../assests/img_3.png";
import image_4 from "../../assests/img_4.png";
import image_5 from "../../assests/img_5.jpg";
import image_6 from "../../assests/img_6.jpg";
import image_7 from "../../assests/img_7.jpg";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";

const Slider = () => {
  const transition = { type: "spring", duration: 5 };
  return (
    <>
      <motion.div
        className="Header stroke-text"
        initial={{ right: "3vw" }}
        whileInView={{
          right: "5vw",
          left: "9vw",
          transition: { ...transition, type: "spring" },
        }}
      >
        <span>Gallery</span>
      </motion.div>
      <Swiper
        id="gallery"
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
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
          <img src={image_1} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_2} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_3} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_4} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_5} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_6} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={image_7} />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;

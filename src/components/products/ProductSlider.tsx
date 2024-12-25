import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper as SwiperInstance } from "swiper";

import first from "@/assets/products/swiper-1.png";
import second from "@/assets/products/swiper-2.png";
import third from "@/assets/products/swiper-3.png";
import four from "@/assets/products/swiper-4.png";
import five from "@/assets/products/swiper-5.png";

import tableFirst from "@/assets/products/swiper-6.png";
import tableSecond from "@/assets/products/swiper-7.png";
import tableThird from "@/assets/products/swiper-8.png";
import tableFour from "@/assets/products/swiper-9.png";
import tableFive from "@/assets/products/swiper-10.png";

const exStreamPhotos = [first, second, third, four, five];
const backtablePhotos = [tableFirst, tableSecond, tableThird, tableFour, tableFive];

export const ProductSlider = ({type} : {type: "back-table" | "ex-stream"}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);
  const devicePhotos = type === "back-table" ? backtablePhotos : exStreamPhotos
  return (
    <div className="relative flex flex-col items-center rounded-[28px] bg-gradient-to-br from-[#E9E9E9] to-[#FFFFFF] p-[2px]">
      <div className="relative flex w-full flex-col items-center rounded-[28px] bg-gainsboro bg-opacity-45 p-[25px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full max-w-[500px]"
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {devicePhotos.map((photo, index) => (
            <SwiperSlide key={index}>
              <img
                src={photo}
                alt={`Slide ${index + 1}`}
                className="h-auto w-full object-contain"
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-[31px] flex justify-between gap-[15px] w-full">
          {devicePhotos.map((_, index) => (
            <span
              key={index}
              className={`h-[1px] w-full transition-all bg-grey-2 ${
                activeIndex === index ? "opacity-100" : "opacity-35"
              }`}
            />
          ))}
        </div>
        <ul className="mt-[25px] flex justify-between gap-[15px]">
          {devicePhotos.map((photo, index) => (
            <li
              key={index}
              onClick={() => swiperRef.current?.slideToLoop(index)}
              className="cursor-pointer"
            >
              <img
                src={photo}
                alt={`Slide ${index + 1}`}
                className="h-auto w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";

import exStream from "@/assets/products/ex-stream.png";
import exStreamSecond from "@/assets/perfusion/ex-stream-second.png";
import exStreamThird from "@/assets/perfusion//ex-stream-third.png";
import { Tooltip } from "../ui/Tooltip";

export const ProductSwiperWithTooltips = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<SwiperInstance | null>(null);

  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="w-full bg-gainsboro pb-[30px] pt-[81px]">
      <div className="flex w-full flex-col gap-[31px] px-[20px]">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
          className="w-full"
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide key={1} className="relative">
            <img
              src={exStream}
              alt={`Slide 1`}
              className="h-auto w-full object-contain"
            />

            <Tooltip
              text="Посадочное гнездо головки перфузионного насоса"
              top="15%"
              left="45%"
              maxWidth={"276px"}
            />
            <Tooltip
              text="Узел модуля мониторинга объёмной скорости"
              top="15%"
              left="71%"
              maxWidth={"265px"}
              textLeft="-200%"
            />
            <Tooltip
              text="Ручка регулировки настроек (энкодер)"
              top="65%"
              left="70%"
              textLeft="-200%"
              maxWidth="281px"
            />

            <Tooltip
              text="Ручкa для перемещения аппарата"
              top="35%"
              left="50%"
            />
            <Tooltip
              text="Функциональные клавиши"
              top="80%"
              left="8%"
              textLeft="400%"
            />
            <Tooltip
              text="ЖК дисплей"
              top="80%"
              left="35%"
              //   textLeft="-200%"
            />
          </SwiperSlide>
          <SwiperSlide key={2} className="relative">
            <img
              src={exStreamSecond}
              alt={`Slide 1`}
              className="h-auto w-full object-contain"
            />
            <Tooltip
              text="Разъём модуля мониторинга давления 1"
              top="38%"
              left="52%"
              maxWidth={"276px"}
            />
            <Tooltip
              text="Разъём модуля мониторинга давления 2"
              top="71%"
              left="40%"
              maxWidth={"276px"}
            />
            <Tooltip
              text="Разъём модуля пульсоксиметра"
              top="71%"
              left="63%"
              maxWidth="196px"
            />
          </SwiperSlide>
          <SwiperSlide key={3} className="relative">
            <img
              src={exStreamThird}
              alt={`Slide 1`}
              className="mt-[30px] h-auto w-full object-contain"
            />
            <Tooltip
              text="Кнопка включения/выключения аппарата"
              top="63%"
              left="35%"
              maxWidth={"276px"}
              textLeft="200%"
            />
            <Tooltip
              text="Разъем подключения шнура электропитания"
              top="63%"
              left="60%"
              maxWidth={"276px"}
              textLeft="-200%"
            />
          </SwiperSlide>
        </Swiper>

        <div className="flex justify-center gap-[43px]">
          <button onClick={handlePrev}>nazad</button>
          <button onClick={handleNext}>vpered</button>
        </div>
      </div>
    </div>
  );
};

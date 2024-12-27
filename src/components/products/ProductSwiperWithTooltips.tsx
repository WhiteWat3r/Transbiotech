import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper";

import arrow from "@/assets/products/arrow-right.svg";

import exStream from "@/assets/products/ex-stream.png";
import exStreamSecond from "@/assets/perfusion/ex-stream-second.png";
import exStreamThird from "@/assets/perfusion//ex-stream-third.png";
import { Tooltip } from "../ui/Tooltip";
import useBreakpoint from "@/hooks/useBreakpoint";

export const ProductSwiperWithTooltips = () => {
  const swiperRef = useRef<SwiperInstance | null>(null);
  const { isDesktop } = useBreakpoint();

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
    <div className="w-full bg-gainsboro pb-[30px] pt-[81px] desktop:pb-[80px] desktop:pt-[164px]">
      <div className="gap-[31px]] mx-auto flex w-full max-w-[1440px] flex-col">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          className="w-full"
          loop
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          <SwiperSlide key={1}>
            <div className="relative mx-[20px] desktop:mx-auto desktop:!w-[670px]">
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
                top="40%"
                left="73%"
              />
              <Tooltip
                text="ЖК дисплей"
                top="80%"
                left="8%"
                textLeft={"200%"}
              />
              <Tooltip
                text="Функциональные клавиши"
                top="80%"
                left="35%"
                //   textLeft="-200%"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide key={2} className="relative">
            <div className="relative mx-[20px] desktop:mx-auto desktop:!w-[670px]">
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
            </div>
          </SwiperSlide>
          <SwiperSlide key={3} className="relative">
            <div className="relative mx-[20px] desktop:mx-auto desktop:!w-[670px]">
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
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="mt-[31px] flex justify-center gap-[43px] desktop:mt-[60px]">
          <button
            onClick={handlePrev}
            className="flex items-center justify-center"
          >
            <img
              src={arrow}
              alt="Previous"
              className="w-[11px] scale-x-[-1] transform"
            />
          </button>
          <button
            onClick={handleNext}
            className="flex w-[11px] items-center justify-center"
          >
            <img src={arrow} alt="Next" />
          </button>
        </div>
      </div>
    </div>
  );
};

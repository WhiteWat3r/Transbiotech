import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Grid, Navigation } from "swiper/modules";
import type ISwiper from "swiper";
import useIsMobile from "../hooks/usIsMobile";

import arrowLeft from "../assets/arrows/arrow-left.svg";
import arrowRight from "../assets/arrows/arrow-right.svg";

import person1 from "../assets/doctors/1.png";
import person2 from "../assets/doctors/2.png";
import person3 from "../assets/doctors/3.png";
import person4 from "../assets/doctors/4.png";
import person5 from "../assets/doctors/5.png";
import person6 from "../assets/doctors/6.png";
import person7 from "../assets/doctors/7.png";
import person8 from "../assets/doctors/8.png";
import person9 from "../assets/doctors/9.png";
import person10 from "../assets/doctors/10.png";
import person11 from "../assets/doctors/11.png";
import person12 from "../assets/doctors/12.png";
import person13 from "../assets/doctors/13.png";
import person14 from "../assets/doctors/14.png";
import person15 from "../assets/doctors/15.png";
import person16 from "../assets/doctors/16.png";
import person17 from "../assets/doctors/17.png";
import person18 from "../assets/doctors/18.png";
import person19 from "../assets/doctors/19.png";
import person20 from "../assets/doctors/20.png";
import person21 from "../assets/doctors/21.png";
import person22 from "../assets/doctors/22.png";
import person23 from "../assets/doctors/23.png";
import person24 from "../assets/doctors/24.png";
import person25 from "../assets/doctors/25.png";
import person26 from "../assets/doctors/26.png";
import person27 from "../assets/doctors/27.png";
import person28 from "../assets/doctors/28.png";
import person29 from "../assets/doctors/29.png";
import person30 from "../assets/doctors/30.png";

const persons = [
  { id: 1, photo: person1, name: "Доктор А", specialization: "Кардиолог" },
  { id: 2, photo: person2, name: "Доктор Б", specialization: "Терапевт" },
  { id: 3, photo: person3, name: "Доктор В", specialization: "Ортопед" },
  { id: 4, photo: person4, name: "Доктор Г", specialization: "Хирург" },
  { id: 5, photo: person5, name: "Доктор Д", specialization: "Невролог" },
  { id: 6, photo: person6, name: "Доктор Е", specialization: "Педиатр" },
  { id: 7, photo: person7, name: "Доктор Ж", specialization: "Стоматолог" },
  { id: 8, photo: person8, name: "Доктор З", specialization: "Эндокринолог" },
  { id: 9, photo: person9, name: "Доктор И", specialization: "Офтальмолог" },
  { id: 10, photo: person10, name: "Доктор К", specialization: "ЛОР" },
  { id: 11, photo: person11, name: "Доктор Л", specialization: "Кардиолог" },
  { id: 12, photo: person12, name: "Доктор М", specialization: "Гинеколог" },
  { id: 13, photo: person13, name: "Доктор Н", specialization: "Терапевт" },
  { id: 14, photo: person14, name: "Доктор О", specialization: "Кардиолог" },
  { id: 15, photo: person15, name: "Доктор П", specialization: "Уролог" },
  { id: 16, photo: person16, name: "Доктор Р", specialization: "Пульмонолог" },
  { id: 17, photo: person17, name: "Доктор С", specialization: "Хирург" },
  { id: 18, photo: person18, name: "Доктор Т", specialization: "Терапевт" },
  { id: 19, photo: person19, name: "Доктор У", specialization: "Эндокринолог" },
  { id: 20, photo: person20, name: "Доктор Ф", specialization: "Невролог" },
  { id: 21, photo: person21, name: "Доктор Х", specialization: "Педиатр" },
  { id: 22, photo: person22, name: "Доктор Ц", specialization: "фывфыв" },
  { id: 23, photo: person23, name: "Доктор Ч", specialization: "Офтальмолог" },
  { id: 24, photo: person24, name: "Доктор Ш", specialization: "Стоматолог" },
  { id: 25, photo: person25, name: "Доктор Щ", specialization: "Кардиолог" },
  { id: 26, photo: person26, name: "Доктор Ы", specialization: "ЛОР" },
  { id: 27, photo: person27, name: "Доктор Э", specialization: "Гинеколог" },
  { id: 28, photo: person28, name: "Доктор Ю", specialization: "Терапевт" },
  { id: 29, photo: person29, name: "Доктор Я", specialization: "Хирург" },
  { id: 30, photo: person30, name: "Доктор Z", specialization: "Ортопед" },
];

export const TeamSwiper = () => {
  const swiperRef = useRef<ISwiper | null>(null);
  const [slidesPerView, setSlidesPerView] = useState(6);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const breakpoint = useIsMobile();

  const handleSlideChange = (swiper: ISwiper) => {
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     setSlidesPerView(Math.max(Math.floor(width / 200), 2));
  //   };

  //   handleResize();
  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);
  useEffect(() => {
    breakpoint === "desktop" ? setSlidesPerView(6) : breakpoint === "tablet" ? setSlidesPerView(4) : setSlidesPerView(2)
  }, [breakpoint])


  return (
    <>
      {/* <Swiper
        modules={[Grid]}
        spaceBetween={15}
        slidesPerView={slidesPerView}
        className="w-full"
        grid={{
          rows: 3,
          fill: "row",
        }}
        allowTouchMove={breakpoint !== "desktop"}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setIsBeginning(swiper.isBeginning);
          setIsEnd(swiper.isEnd);
        }}
        onSlideChange={handleSlideChange}
      > */}
      <div className="flex flex-wrap gap-5 justify-center">
        {persons.map((person) => (
          <div key={person.id} className="flex justify-center w-[157px]">
            <div className="group relative h-full w-full cursor-pointer overflow-hidden rounded-[25px]">
              {/* <span className="absolute inset-0 translate-y-full rounded-[20px] bg-light-indigo opacity-0 
              transition-all delay-300 duration-500 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 
              group-hover:delay-0" /> */}

              <div className="absolute inset-0 flex h-full translate-y-full flex-col gap-[6px] rounded-[20px] bg-indigo p-3
               text-white opacity-0 transition-all delay-0 duration-700 ease-in-out group-hover:translate-y-0 group-hover:opacity-100 
               group-hover:delay-0">
                             {/* <div className="absolute inset-0 flex h-full  flex-col gap-[6px] rounded-[20px] bg-indigo p-[15px]
               text-white transition-all delay-0 duration-700 ease-in-out translate-y-0 opacity-100 
               group-hover:delay-0"> */}
                <p className="geologica-text mt-auto text-[24px] leading-[24px] font-medium tracking-tighter">
                  {person.name}
                </p>
                <p className="text-[15px] lowercase leading-[18px] font-normal tracking-tighter">
                  {person.specialization}
                </p>
              </div>

              <img
                src={person.photo}
                className="h-full w-full rounded-[20px] object-cover"
                alt={`Врач ${person.id}`}
              />
            </div>
          </div>
        ))}
        </div>
      {/* </Swiper> */}
      {/* <div className="mt-[20px] flex justify-center gap-[18px] pb-[22px]">
        <button
          onClick={() => {
            if (swiperRef.current) {
              const currentIndex = swiperRef.current.activeIndex;
              swiperRef.current.slideTo(currentIndex - slidesPerView);
            }
          }}
          disabled={isBeginning}
          className={`${
            isBeginning ? "cursor-default opacity-50" : "opacity-100"
          }`}
        >
          <img src={arrowLeft} alt={"Назад"} />
        </button>
        <button
          onClick={() => {
            if (swiperRef.current) {
              const currentIndex = swiperRef.current.activeIndex;
              swiperRef.current.slideTo(currentIndex + slidesPerView);
            }
          }}
          disabled={isEnd}
          className={`${isEnd ? "cursor-default opacity-50" : "opacity-100"}`}
        >
          <img src={arrowRight} alt={"Вперед"} />
        </button>
      </div> */}
    </>
  );
};

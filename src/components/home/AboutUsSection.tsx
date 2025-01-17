import React, { CSSProperties, useRef, useState } from "react";

import bg from "@/assets/images/home/about-us-bg.png";
import bgDesktop from "@/assets/images/home/bg-desktop.png";
import bubble from "@/assets/images/home/bubble.png";
import bubbleDesktop from "@/assets/images/home/desk-bubble.svg";
import useBreakpoint from "@/hooks/useBreakpoint";
import useIntersection from "@/hooks/useIntersection";


const achievements = [
  {
    id: 1,
    title:
      "11 лет — официальный дистрибьютор ведущих зарубежных производителей",
  },
  {
    id: 2,
    title:
      "В 2022 создали и вывели на рынок первый российский аппарат ЭКМО Ex-Stream",
  },
  {
    id: 3,
    title:
      "В 2022 году запатентовали уникальную технологию применения аппарта Ex-Stream в донорстве",
  },
  {
    id: 4,
    title: `В 2024 году вышли\nна\u00A0международный рынок`,
  },
];

export const AboutUsSection = () => {
  const { isDesktop } = useBreakpoint();
  const sectionRef = useRef(null);

  const { isVisible } = useIntersection(sectionRef, {
    threshold: 0.9,
  });
  return (
    <div className="relative h-[750px] w-full pb-[20px] desktop:h-[800px]">
      <img
        src={isDesktop ? bgDesktop : bg}
        alt="О нас"
        className="cover absolute right-0 top-0 z-[1] h-full desktop:top-[-22%] desktop:h-[105%]"
        // onClick={() => setOpen(!open)}
      />
      <img
        src={isDesktop ? bubbleDesktop : bubble}
        alt="О нас"
        className="absolute left-0 top-[510px] h-[190px] desktop:bottom-[4%] desktop:left-[5%] desktop:top-auto"
      />
      <div className="mx-auto flex w-full max-w-[1200px] flex-col px-[20px] desktop:px-[80px]">
        <h2 className="geologica-text mb-[40px] mt-[115px] text-[32px] font-medium leading-[22px] text-grey-1 desktop:mb-[48px] desktop:mt-[15.5%] desktop:text-[72px] desktop:leading-[65px]">
          о нас
        </h2>

        {/* {open && ( */}
        <ul
          className="flex w-full flex-col gap-[30px] desktop:gap-[65px] desktop:pl-[245px]"
          ref={sectionRef}
        >
          {achievements.map((item, index) => (
            <li
              className={`relative flex translate-x-[-50px] justify-between border-t-[2px] border-solid border-[#92929280] opacity-0 ${isVisible ? "animate-slideIn" : "animate-slideOut"}`}
              key={item.id}
              // style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span
                className={`z-2 absolute top-[-6px] h-[10px] w-[10px] rounded-[50%] bg-[#929292] ${index !== 0 && isVisible ? "animate-circle-slideIn" : "animate-circle-slideOut"}`}
                style={
                  {
                    // animationDelay: `${index * 0.1}s`
                    "--init-left":
                      item.id === 1
                        ? "0"
                        : item.id === 2
                          ? "35%"
                          : item.id === 3
                            ? "58%"
                            : "92%",
                  } as CSSProperties
                }
              />
              <span className="geologica-text mt-[20px] text-[46px] font-semibold leading-[46px] text-[#808080] opacity-30 desktop:mt-[10px] desktop:text-[56px] desktop:font-normal desktop:leading-[56px]">
                0{item.id}
              </span>
              <p className="mt-[20px] max-w-[217px] text-[14px] font-semibold uppercase leading-[17px] text-indigo desktop:min-w-[600px] desktop:text-[18px] desktop:leading-[22px]">
                {item.title}
              </p>
            </li>
          ))}
        </ul>
        {/* )} */}
      </div>
    </div>
  );
};

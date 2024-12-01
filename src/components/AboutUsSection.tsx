import React, { useRef, useState } from "react";
import bg from "../assets/bg/about-us-bg.png";
import bgDesktop from "../assets/bg-desktop.png";
import bubble from "../assets/bubble.png";
import bubbleDesktop from "../assets/desk-bubble.svg";
import useIsMobile from "../hooks/usIsMobile";
import useIntersection from "../hooks/useIntersection";

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
  // const [open, setOpen] = useState(false);
  const breakpoint = useIsMobile();
  const sectionRef = useRef(null);

  const { hasAnimated } = useIntersection(sectionRef, { threshold: 0.7 });

  return (
    <div className="relative h-[750px] desktop:h-[800px] w-full  pb-[20px]">
      <img
        src={breakpoint === "desktop" ? bgDesktop : bg}
        alt="О нас"
        className="cover absolute right-0 top-0 z-[1] h-full"
        // onClick={() => setOpen(!open)}
      />
      <img
        src={breakpoint === "desktop" ? bubbleDesktop : bubble}
        alt="О нас"
        className="absolute left-0 top-[510px] h-[190px] desktop:bottom-[7%] desktop:left-[5%] desktop:top-auto"
      />
      <div className="flex flex-col mx-auto w-full max-w-[1440px] px-[20px] desktop:px-[80px]">
        <h2 className="geologica-text mb-[40px] mt-[115px] text-[32px] font-medium leading-[22px] text-grey-1 desktop:mb-[48px] desktop:mt-[15.5%] desktop:text-[72px] desktop:leading-[65px]">
          о нас
        </h2>

        {/* {open && ( */}
        <ul className="flex w-full flex-col gap-[30px] desktop:gap-[60px] desktop:pl-[20vw]"
        ref={sectionRef}
        >
          {achievements.map((item, index) => (
          
            <li
              className={`relative flex translate-x-[-50px]  justify-between border-t-[2px] border-solid border-[#92929280] opacity-0 ${hasAnimated ? "animate-slideIn" : ""}`}
              key={item.id}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <span
                className={`z-2 absolute top-[-6px] h-[10px] w-[10px] rounded-[50%] bg-[#929292] ${index !== 0 &&  hasAnimated ? "animate-circle-slideIn" : ""}`}
                style={{ left: item.id === 1 ? "0" : `${item.id * 20}%`, animationDelay: `${index * 0.1}s`}}
                
              />
              <span className="geologica-text text-[60px] font-medium leading-[72px] text-[#92929280] desktop:text-gainsboro">
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

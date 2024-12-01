import React, { CSSProperties } from "react";

import techLogoFirst from "../assets/technologies/tech-logo-first.svg";
import techLogoSecond from "../assets/technologies/tech-logo-second.svg";
import techLogoThird from "../assets/technologies/tech-logo-third.svg";
import techLogoFourth from "../assets/technologies/tech-logo-fourth.svg";

import techLogoFirstMobile from "../assets/technologies/tech-logo-first-mobile.svg";
import techLogoSecondMobile from "../assets/technologies/tech-logo-second-mobile.svg";
import techLogoThirdMobile from "../assets/technologies/tech-logo-third-mobile.svg";
import techLogoFourthMobile from "../assets/technologies/tech-logo-fourth-mobile.svg";

import techBgFirst from "../assets/technologies/bg-first.svg";
import techBgSecond from "../assets/technologies/bg-second.svg";
import techBgThird from "../assets/technologies/bg-third.svg";
import techBgFourth from "../assets/technologies/bg-fourth.svg";

import useIsMobile from "../hooks/usIsMobile";

const technologies = [
  {
    id: 1,
    title: "Перфузионные технологии",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#6A78C1",
    logo: techLogoFirstMobile,
    mobileLogo: techLogoFirst,
    bg: techBgFirst,
    desc: "Эффективное протезирование функции сердца и легких.",
  },
  {
    id: 2,
    title: "Кардио хирургия",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#90882B",
    logo: techLogoSecondMobile,
    mobileLogo: techLogoSecond,
    bg: techBgSecond,
    desc: "Лечение острых и хронических заболеваний сердечно-сосудистой системы.",
  },
  {
    id: 3,
    title: "Аритмология",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#E04918",
    logo: techLogoThirdMobile,
    mobileLogo: techLogoThird,
    bg: techBgThird,
    desc: "Работа над восстановлением сердечного ритма.",
  },
  {
    id: 4,
    title: "Скорая помощь",
    keys: ["Инфо", "Продукция", "Сопровождение"],
    color: "#EA7A92",
    logo: techLogoFourthMobile,
    mobileLogo: techLogoFourth,
    bg: techBgFourth,
    desc: "Оптимизация рабочего пространства в машинах скорой помощи.",
  },
];

export const SectionTechnologies = ({
  fromTechPage,
}: {
  fromTechPage?: boolean;
}) => {
  const breakpoint = useIsMobile();

  const isDesktop = breakpoint === "desktop";

  return (
    <div
      className={`bg-platinum relative flex w-full flex-col justify-center px-[20px] pb-[20px] desktop:px-[80px] 
        ${fromTechPage ? "h-[calc(750px-75px)]  desktop:h-[calc(800px-75px)]" : "h-[750px] desktop:h-[800px]"} mx-auto w-full max-w-[1440px]`}
    >
      <h2
        className={`geologica-text text-grey-1 mb-[40px] text-[32px] font-medium leading-[22px] desktop:mb-[40px] desktop:text-[72px]
           desktop:leading-[65px]`}
      >
        технологии
      </h2>

      <ul className={`flex w-full flex-col rounded-[45px] desktop:flex-row desktop:gap-[20px] justify-between 1440:gap-[60px] ${fromTechPage ? "mb-[72px]" : ""}`}>
        {technologies.map((tech) => (
          <li
            key={tech.id}
            className={`card pointer-events-none relative flex w-full cursor-pointer flex-col overflow-hidden rounded-[45px] bg-[#dddddd] p-[30px] transition-all duration-500 hover:translate-y-[-10px] hover:bg-[var(--hover-color)] 
              desktop:pointer-events-auto desktop:rounded-[36px] desktop:w-full desktop:h-[370px] desktop:mt-0 desktop:pb-[30px] desktop:shadow-none ${tech.id > 1 ? "shadow-tech-shadow mt-[-60px]" : ""} ${tech.id !== 4 ? "pb-[80px]" : ""}`}
            style={
              {
                "--hover-color": tech.color,
              } as CSSProperties
            }
          >
            {isDesktop && (
              <img
                src={tech.bg}
                alt={tech.title}
                className="card-image -z-1 absolute right-0 top-0 w-full opacity-0 transition-all duration-500"
                style={{
                  transform:
                    tech.id < 3
                      ? "translateX(16px) translateY(16px)"
                      : "translateX(8px) translateY(-16px) scale(1.1)",
                }}
              />
            )}
            <img
              src={isDesktop ? tech.logo : tech.mobileLogo}
              alt={tech.title}
              className="absolute right-[30px] desktop:left-[30px] desktop:right-auto"
            />
            <div className="mt-[10px relative z-10 flex flex-col desktop:mt-auto">
              <h3
                className={`geologica-text mb-[10px] flex max-w-[210px] justify-between text-[27px] font-light leading-[27px] tracking-[-0.5px] transition-all duration-500 desktop:text-[24px] desktop:font-medium desktop:leading-[24px] ${isDesktop ? "text-grey-1" : ""}`}
                style={{
                  color: isDesktop ? "#565656" : tech.color,
                }}
              >
                {tech.title}
              </h3>

              <ul className="flex gap-[6px] desktop:mb-[20px] desktop:flex-wrap">
                {tech.keys.map((key, index) => (
                  <li
                    key={index}
                    className={`flex h-[22px] flex-col items-center justify-center rounded-[25px] border-[0.5px] px-[5px] pt-[1px] text-[12px] font-semibold leading-[14px] tracking-[-0.5px] transition-all duration-500 desktop:h-[18px] desktop:text-[12px] desktop:leading-[12.5px]`}
                    style={{
                      borderColor: isDesktop ? "#808080" : tech.color,
                      color: isDesktop ? "#808080" : tech.color,
                    }}
                  >
                    {key}
                  </li>
                ))}
              </ul>
              {isDesktop && (
                <p className="line-clamp-4 h-[72px] text-[15px] leading-[18px] tracking-[-0.5px] text-[#565656] transition-all duration-500">
                  {tech.desc}
                </p>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

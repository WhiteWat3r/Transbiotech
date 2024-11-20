import { CSSProperties } from "react";
import bgMain from "../../public/tailwindBackgrounds/bg-main.png";
import bgMainDesktop from "../../public/tailwindBackgrounds/main-desktop.png";

import useIsMobile from "../hooks/usIsMobile";

const buttons = [
  {
    id: 1,
    text: "перфузия",
    color: "#6A78C1",
  },
  {
    id: 2,
    text: "кардиология",
    color: "#90882B",
  },
  {
    id: 3,
    text: "аритмология",
    color: "#E04918",
  },
  {
    id: 4,
    text: "скорая помощь",
    color: "#EA7A92",
  },
];

export const SectionMain = () => {
  const breakpoint = useIsMobile();

  return (
    <div className="relative h-[calc(100vh-115px)] w-full bg-cover">
      <img
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Задний фон"
        className="absolute left-[50%] z-[2] translate-x-[-50%] object-contain"
        style={{
          maskImage:
            breakpoint !== "desktop"
              ? "linear-gradient(to bottom, black, black 90%, transparent)"
              : "",
          top:
            //  breakpoint === "mobile" ?
            "-12%",
          // : "-12%",
        }}
      />
      <div className="relative z-[3] flex min-h-[63%] w-full flex-col justify-between px-5 pt-[38px] tablet:pt-[10px] desktop:min-h-[56%] desktop:px-[80px] desktop:pt-0">
        <div className="ml-auto max-w-[218px] text-[14px] leading-[16px] text-grey-1 desktop:mr-[265px] desktop:mt-[52px] desktop:max-w-[333px] desktop:text-[22px] desktop:leading-[26px]">
          <p className="">
            {
              "Первый российский дистрибьютор медицинского оборудования, разработавший аппарат\u00A0ЭКМО."
            }
          </p>
          <p className="font-semibold">
            {"Мы —\u00A0компания, готовая предложить большее."}
          </p>
        </div>

        <ul className="mb-[20px] flex max-w-[240px] flex-wrap gap-[10px] desktop:mb-[25px] desktop:max-w-[100%] desktop:gap-[20px]">
          {buttons.map((btn, index) => (
            <li key={btn.id}>
              <button
                className={`geologica-text " flex h-[30px] animate-glow items-center justify-center rounded-[45px] bg-white px-[11px] text-[12px] font-medium text-black-default transition-all duration-300 desktop:h-[38px] desktop:animate-none desktop:text-[18px] desktop:leading-[22px] desktop:hover:translate-y-[-10px] desktop:hover:transform desktop:hover:bg-[var(--btn-color)] desktop:hover:text-white`}
                style={
                  {
                    animationDelay: `${index * 0.6}s`,
                    "--btn-color": btn.color,
                  } as CSSProperties
                }
              >
                {btn.text}
              </button>
            </li>
          ))}
        </ul>
      </div>
      <h1 className="geologica-text z-1 px-5 text-[46px] font-semibold leading-[44px] text-grey-1 desktop:px-[80px] desktop:text-[110px] desktop:leading-[100px]">
        Transbiotech. Продлевая жизнь
      </h1>
    </div>
  );
};

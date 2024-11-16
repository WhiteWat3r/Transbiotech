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
    <div className="relative w-full bg-cover min-h-[675px]">
      <img
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Задний фон"
        className="absolute z-[2] left-[50%] translate-x-[-50%] object-contain"
        style={{
          maskImage:
            breakpoint !== "desktop"
              ? "linear-gradient(to bottom, black, black 90%, transparent)"
              : "",
          top:
            breakpoint === "mobile"
              ? "-115px"
              : breakpoint === "tablet"
              ? "120px"
              : "-143px",
        }}
      />
      <div
        className="w-full h-full px-5 relative z-[3] mt-[38px] 
        desktop:px-[80px]  desktop:mt-0"
      >
        <div
          className="text-[14px] leading-[16px] text-[#565656] max-w-[218px] ml-auto mb-[200px]
         desktop:text-[22px] desktop:leading-[26px] desktop:max-w-[333px] desktop:mr-[265px] desktop:mt-[52px] desktop:mb-[138px]
         "
        >
          <p className="">
            {
              "Первый российский дистрибьютор медицинского оборудования, разработавший аппарат\u00A0ЭКМО."
            }
          </p>
          <p className="font-semibold">
            {"Мы —\u00A0компания, готовая предложить большее."}
          </p>
        </div>

        <ul className="flex flex-wrap gap-[10px] max-w-[240px] mb-[20px] desktop:max-w-[100%] desktop:mb-[25px] desktop:gap-[20px]">
          {buttons.map((btn, index) => (
            <li key={btn.id}>
              <button
                className={`h-[30px] text-[#212121] flex justify-center items-center rounded-[45px] px-[11px] geologica-text text-[12px] font-medium bg-white animate-glow
                  desktop:animate-none desktop:h-[38px] desktop:text-[18px] desktop:hover:text-white
                  desktop:hover:transform desktop:hover:translate-y-[-10px] transition-all
                   desktop:hover:bg-[var(--btn-color)] duration-300 desktop:leading-[22px] "
                  `}
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
      <h1
        className="text-[46px] leading-[44px] text-[#565656] geologica-text font-semibold z-1 px-5
      desktop:text-[110px] desktop:leading-[100px] desktop:px-[80px]
      "
      >
        Transbiotech. Продлевая жизнь
      </h1>
    </div>
  );
};

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
  const isDesktop = breakpoint === "desktop";

  return (
    <div
      className={`relative h-[calc(750px-75px)] w-full bg-cover desktop:h-[calc(1080px-75px)]`}
    >
      <img
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Задний фон"
        className="absolute left-[50%] z-[2] translate-x-[-50%] object-contain h-full"
        style={{
          maskImage: !isDesktop
            ? "linear-gradient(to bottom, black, black 90%, transparent)"
            : "",
          top:
            //  breakpoint === "mobile" ?
            "-9%",
          // : "-12%",
        }}
      />
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="relative z-[3] flex min-h-[63%] w-full flex-col justify-between gap-[200px] px-5 pt-[38px] tablet:pt-[10px] desktop:min-h-[56%] desktop:gap-[140px] desktop:px-[80px] desktop:pt-0">
          <div className="text-grey-1 ml-auto max-w-[218px] text-[14px] leading-[16px] desktop:mr-[260px] desktop:mt-[38px] desktop:mb-[20px] desktop:max-w-[333px] desktop:text-[22px] desktop:leading-[26px]">
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
                  className={`geologica-text " text-black-default desktop:animate-glow-desc flex h-[30px] animate-glow items-center justify-center rounded-[45px] bg-white px-[11px] text-[12px] font-medium transition-all duration-300 desktop:h-[38px] desktop:text-[18px] desktop:leading-[22px]`}
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
        <h1 className="geologica-text z-1 text-grey-1 px-5 text-[46px] font-semibold leading-[44px] desktop:px-[80px] desktop:text-[110px] desktop:leading-[100px]">
          Transbiotech. <span className="block">Продлевая жизнь</span>
        </h1>
      </div>
    </div>
  );
};

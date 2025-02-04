import { CSSProperties, useRef } from "react";
import LazyLoad from "react-lazyload";

import bgMain from "@/assets/images/home/bg-main.png";
import bgMainDesktop from "@/assets/images/home/main-desktop.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useSectionSizeFromImageHeight } from "@/hooks/useSectionSizeFromImageHeight";

const buttons = [
  {
    id: 1,
    text: "перфузионные технологии",
    color: "#6A78C1",
  },
  {
    id: 2,
    text: "кардиохирургия",
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
  const { isDesktop } = useBreakpoint();

  const imgRef = useRef<HTMLImageElement | null>(null);

  const { sectionHeight, handleImageLoad } = useSectionSizeFromImageHeight(
    imgRef,
    isDesktop,
  );

  return (
    <div
      className={`relative w-full bg-cover`}
      style={{
        height: isDesktop
          ? `calc(${sectionHeight}px - 75px)`
          : "calc(750px - 75px)",
      }}
    >
      {/* <LazyLoad placeholder={<div>Loading...</div>}> */}
      <img
        ref={imgRef}
        src={isDesktop ? bgMainDesktop : bgMain}
        alt="Задний фон"
        className="pointer-events-none absolute left-[50%] top-[-9%] z-[2] translate-x-[-50%] object-contain"
        style={{
          maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
          WebkitMaskImage:
            "radial-gradient(circle, black 70%, transparent 100%)",
        }}
        onLoad={handleImageLoad}
      />
      {/* </LazyLoad> */}

      <div className="mx-auto w-full max-w-[1200px]">
        <div className="relative z-[3] flex min-h-[63%] w-full flex-col justify-between gap-[200px] px-5 pt-[38px] tablet:pt-[10px] desktop:min-h-[56%] desktop:gap-[140px] desktop:px-[80px] desktop:pt-0">
          <div className="ml-auto max-w-[218px] text-[14px] leading-[16px] text-grey-1 desktop:mb-[20px] desktop:mr-[260px] desktop:mt-[38px] desktop:max-w-[333px] desktop:text-[22px] desktop:leading-[26px]">
            <p className="">
              {
                "Первый российский дистрибьютор медицинского оборудования, разработавший аппарат\u00A0ЭКМО."
              }
            </p>
            <p className="font-semibold">
              {"Мы —\u00A0компания, готовая предложить большее."}
            </p>
          </div>

          <ul className="mb-[20px] flex max-w-[400px] flex-wrap gap-[10px] desktop:mb-[25px] desktop:max-w-[540px] desktop:gap-[20px] 1440:max-w-[40%]">
            {buttons.map((btn, index) => (
              <li key={btn.id}>
                <button
                  className={`geologica-text " flex h-[30px] animate-glow items-center justify-center rounded-[45px] bg-white px-[11px] text-[12px] font-medium text-black-default transition-all duration-300 desktop:h-[38px] desktop:animate-glow-desc desktop:text-[18px] desktop:leading-[22px]`}
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
          Transbiotech. <span className="block">Продлевая жизнь</span>
        </h1>
      </div>
    </div>
  );
};

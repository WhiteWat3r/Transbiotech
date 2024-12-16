import { CSSProperties, useEffect, useRef, useState } from "react";
import bgMain from "../../assets/bg/perfusion.png";
import bgMainDesktop from "../../assets/bg/perfusion-desc.png";

import useIsMobile from "../../hooks/usIsMobile";
import { useSectionSizeFromImageHeight } from "../../hooks/useSectionSizeFromImageHeight";

export const PerfusionMain = () => {
  const breakpoint = useIsMobile();
  const isDesktop = breakpoint !== "mobile";

  const imgRef = useRef<HTMLImageElement | null>(null);

  const { sectionHeight, handleImageLoad } = useSectionSizeFromImageHeight(
    imgRef,
    isDesktop,
  );

  return (
    <div
      className={`relative mt-[-75px] w-full bg-indigo bg-cover text-white`}
      style={{
        height: isDesktop ? `${sectionHeight}px` : "750px",
      }}
    >
      <img
        ref={imgRef}
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Задний фон"
        className="absolute left-[50%] top-0 z-[2] translate-x-[-50%] object-contain"
        // style={{
        //   maskImage: "radial-gradient(circle, black 70%, transparent 100%)",
        //   WebkitMaskImage:
        //     "radial-gradient(circle, black 70%, transparent 100%)",
        // }}
        onLoad={handleImageLoad}
      />
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-[15px] px-5 desktop:px-[80px]">
        <h1 className="z-1 mob-head-2 mt-auto">
          Перфузионные <span className="block">технологии</span>
        </h1>
        {/* <ul className="mb-[10px] flex max-w-[400px] flex-wrap gap-[10px] desktop:mb-[25px] desktop:max-w-[540px] desktop:gap-[20px] 1440:max-w-[40%]">
          {buttons.map((btn, index) => (
            <li key={btn.id}>
              <button
                className={`geologica-text " flex h-[30px] animate-glow items-center justify-center rounded-[45px] bg-white px-[11px] text-[12px] font-medium transition-all duration-300 desktop:h-[38px] desktop:animate-glow-desc desktop:text-[18px] desktop:leading-[22px]`}
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
        </ul> */}
        directionInfoButtons (жду точную инфу по логике)
        <p className="mob-text-3-1 mb-[73px] text-platinum">
          Флагманское направление, ядром которого является наша разработка —
          первый российский аппарат ЭКМО Ex-Stream
        </p>
      </div>
    </div>
  );
};

import { useRef } from "react";

import bgMainDesktop from "@/assets/bg/perfusion-desc.png";
import bgMain from "@/assets/bg/perfusion.png";
import { useSectionSizeFromImageHeight } from "@/hooks/useSectionSizeFromImageHeight";
import useIsMobile from "@/hooks/usIsMobile";
import { mainSectionButtons } from "@/utils/constants";

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
      className={`relative mt-[-75px] h-[750px] w-full bg-indigo bg-cover text-white desktop:h-[650px]`}
      // style={{
      //   height: isDesktop ? `${sectionHeight}px` : "750px",
      // }}
    >
      <img
        ref={imgRef}
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Transbiotech"
        className="absolute right-0 top-0 z-[2] object-contain desktop:h-[114%] desktop:animate-perfusion-main"
        onLoad={handleImageLoad}
      />
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-[15px] px-5 desktop:gap-[25px] desktop:px-[80px]">
        <h1 className="z-1 mob-head-2 desktop:head-1-1 z-30 mt-auto">
          Перфузионные <span className="block">технологии</span>
        </h1>
        <ul className="flex gap-[10px] text-[12px] font-semibold leading-[14.4px] desktop:text-[18px] desktop:font-medium desktop:leading-[21.6px] desktop:gap-[20px]">
          {mainSectionButtons.map((btn) => (
            <li key={btn.id}>
              <button
                className={`geologica-text tracking-tighter flex h-[22px] items-center justify-center rounded-[20px] border border-white px-[8px] desktop:h-[38px] desktop:rounded-[63px] desktop:px-[16px] ${btn.id == 1 ? "bg-white text-indigo" : ""} `}
              >
                {btn.text}
              </button>
            </li>
          ))}
        </ul>
        <p className="mob-text-3-1 desktop:text-4 mb-[73px] mt-[10px] max-w-[274px] text-platinum desktop:mb-[100px] desktop:mt-[15px] desktop:max-w-[510px] desktop:text-4">
          {`Флагманское направление, ядром которого является наша разработка —
          первый\u00A0российский аппарат ЭКМО Ex\u2011Stream`}
        </p>
      </div>
    </div>
  );
};

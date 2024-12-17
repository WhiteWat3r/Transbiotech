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
      className={`relative mt-[-75px] w-full bg-indigo bg-cover text-white h-[750px] desktop:h-[650px]`}
      // style={{
      //   height: isDesktop ? `${sectionHeight}px` : "750px",
      // }}
    >
      <img
        ref={imgRef}
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Transbiotech"
        className="absolute top-0 right-0 z-[2]  object-contain desktop:h-[114%]"
        onLoad={handleImageLoad}
      />
      <div className="mx-auto flex h-full w-full max-w-[1440px] flex-col gap-[15px] px-5 desktop:px-[80px]">
        <h1 className="z-1 mob-head-2 mt-auto desktop:head-1-1 z-30">
          Перфузионные <span className="block">технологии</span>
        </h1>
        <ul className="flex gap-[10px] text-[12px] font-semibold leading-[14.4px]">
          {mainSectionButtons.map((btn) => (
            <li key={btn.id}>
              <button className={`border border-white rounded-[20px] px-[8px] h-[22px] flex justify-center items-center ${btn.id ==1 ? 'text-indigo bg-white' : ''}`}>{btn.text}</button>
            </li>
          ))}
        </ul>
        <p className="max-w-[274px] mt-[10px] mob-text-3-1 mb-[73px] text-platinum desktop:max-w-[510px] desktop:text-4 desktop:mb-[100px]">
          {`Флагманское направление, ядром которого является наша разработка —
          первый\u00A0российский аппарат ЭКМО Ex\u2011Stream`}
        </p>
      </div>
    </div>
  );
};

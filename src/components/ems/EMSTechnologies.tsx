import { CardiacSurgeryLogo } from "@/components/ui/icons/CardiacSurgeryLogo";
import { arrhythmologyCards, cardiacSurgeryCards, emsCards, perfusionCards } from "@/utils/constants";

import { MobileLogo } from "../ui/icons/MobileLogo";
import { ArrhythmologyLogo } from "@/components/ui/icons/ArrhythmologyLogo";
import useBreakpoint from "@/hooks/useBreakpoint";
import { EmsLogo } from "@/components/ui/icons/EmsLogo";



export const EMSTechnologies = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="relative mx-auto my-[80px] flex w-full max-w-[1200px] flex-col gap-[45px] px-[20px] desktop:my-[170px] desktop:px-[80px] max-desktop:h-[280px]">
      <h2 className={`head-1 absolute bottom-0 text-gainsboro`}>
        техн
        <wbr />
        оло
        <wbr />
        гии
      </h2>

      <ul className="max-desktop:mt-auto relative z-10 grid grid-cols-2 gap-[19px] desktop:grid-cols-3">
        {emsCards.map((card) => (
          <li
            key={card.id}
            className={` flex h-[149px] flex-col rounded-[25px] bg-[#FFFFFF] bg-opacity-30 p-[20px] desktop:h-[177px] desktop:p-[30px] desktop:cursor-pointer
              desktop:hover:translate-y-[-10px] duration-500 desktop:hover:bg-opacity-100
              ${
              card.id === 1 ? "desktop:col-start-2" : ""
            }`}
          >
            {" "}
            <div className="flex flex-col desktop:flex-row desktop:items-center justify-between">
              <span
                className="text-5 mb-[10px] desktop:mb-0 rounded-[24px] border-[1px] border-[#808080] px-[4px] py-[1.5px] text-[#808080] opacity-30">
                Скорая помощь
              </span>
              <EmsLogo width="20" height="20" />
            </div>
            <p className="mob-button desktop:head-5 mt-auto max-desktop:tracking-[-0.7px] max-desktop:break-words">{isDesktop? card.title : card.mobileTitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

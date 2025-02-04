import { cardiacSurgeryCards, perfusionCards } from "@/utils/constants";

import { MobileLogo } from "../ui/icons/MobileLogo";
import { CardiacSurgeryLogo } from "@/components/ui/icons/CardiacSurgeryLogo";



export const CardiacSurgeryTechnologies = () => {
  return (
    <div className="relative mx-auto mt-[80px] flex w-full max-w-[1200px] flex-col gap-[45px] px-[20px] desktop:mt-[185px] desktop:px-[80px]">
      <h2 className={`head-1 absolute bottom-[-40px] text-gainsboro`}>
        техн
        <wbr />
        оло
        <wbr />
        гии
      </h2>

      <ul className="relative z-10 grid grid-cols-2 gap-[19px] desktop:grid-cols-3">
        {cardiacSurgeryCards.map((card) => (
          // <li key={card.id} className="backdrop-blur-[40px] bg-[#FFFFFF]">
          <li
            key={card.id}
            className={` flex h-[149px] flex-col rounded-[25px] bg-[#FFFFFF] bg-opacity-30 p-[20px] desktop:h-[177px] desktop:p-[30px] desktop:cursor-pointer
              desktop:hover:translate-y-[-10px] duration-500 desktop:hover:bg-opacity-100
              ${
              card.id === 3 ? "desktop:col-start-2" : ""
            }`}
          >
            {" "}
            <div className="flex flex-col desktop:flex-row desktop:items-center justify-between">
              <span
                className="text-5 mb-[10px] desktop:mb-0 rounded-[24px] border-[1px] border-[#808080] px-[4px] py-[1.5px] text-[#808080] opacity-75">
                Кардиохирургия
              </span>
              <CardiacSurgeryLogo width="32" height="18" />
            </div>
            <p className="mob-button desktop:head-5 mt-auto max-desktop:tracking-[-0.7px]">{card.title}</p>
            {card.text && <p className="max-desktop:text-5 desktop:text-[18px] desktop:leading-[24px] mt-[5px] desktop:mt-[10px]">{card.text}</p>}
          </li>
          // </li>
        ))}
      </ul>
    </div>
  );
};

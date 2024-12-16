import React from "react";
import { perfusionCards } from "../../utils/constants";
import { MobileLogo } from "../icons/MobileLogo";

export const PerfusionTechnologies = () => {
  return (
    <div className="mx-auto mt-[80px] flex h-[750px] w-full max-w-[1440px] flex-col gap-[45px] px-[20px]">
      <h2 className={`mob-head-1 text-gainsboro`}>технологии</h2>

      <ul className="grid grid-cols-2 gap-[19px]">
        {perfusionCards.map((card) => (
          <li className="flex h-[149px] flex-col justify-between rounded-[25px] bg-white p-[20px]">
            <div className="flex items-center justify-between">
              <span className="text-5 rounded-[24px] border-[1px] border-[#8080804D] px-[4px] py-[1.5px] text-[#8080804D]">
                Перфузия
              </span>
              <MobileLogo width="20" height="18" />
            </div>
            <p className="mob-button">{card.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

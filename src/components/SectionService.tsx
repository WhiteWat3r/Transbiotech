import React from "react";
import bgThird from "../assets/bg/bg-third.png";

export const SectionService = () => {
  return (
    <div className="relative w-full min-h-[750px] flex flex-col">
      <img src={bgThird} alt="" className="" />
      <div className="px-[20px]">
        <p className="text-[#929292] geologica-text text-[27px] leading-[27px] mt-[40px] mb-[15px]">
          {"Отдельное направление нашей\u00A0работы —"}
          <p className="text-[#565656]">сервис.</p>
        </p>

        <p className="text-[#565656] text-[14px] leading-[17px] mb-[25px]">
          Мы предоставляем сервисное
          <p className="font-semibold">
            обслуживание ко всей поставляемой нами продукции.
          </p>
        </p>
        <button
          className="flex justify-center items-center text-[#FFFFFF] bg-[#90882B] 
        rounded-[45px] text-[13px] leading-[28px] font-medium px-[14px]"
        >
          подробнее
        </button>
      </div>
    </div>
  );
};

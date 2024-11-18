import React from "react";
import bgThird from "../assets/bg/bg-third.png";

export const SectionService = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col desktop:flex-row">
      <img
        src={bgThird}
        alt=""
        className="max-h-[450px] object-cover desktop:h-screen desktop:max-h-full desktop:w-[50%]"
      />

      <div className="flex flex-col px-[20px] desktop:justify-center desktop:px-[45px]">
        <p className="geologica-text mb-[15px] mt-[40px] text-[27px] leading-[27px] text-[#929292] desktop:text-[56px] desktop:leading-[57px]">
          {"Отдельное направление нашей\u00A0работы\u00A0—"}
          <span className="block text-[#565656]">сервис.</span>
        </p>

        <p className="mb-[25px] text-[14px] leading-[17px] text-[#565656] desktop:mb-[35px] desktop:text-[22px] desktop:leading-[22px]">
          Мы предоставляем сервисное
          <span className="block font-semibold">
            обслуживание ко всей поставляемой нами продукции.
          </span>
        </p>
        <div>
          <button className="flex items-center justify-center rounded-[45px] bg-[#90882B] px-[14px] text-[13px] font-medium leading-[28px] text-[#FFFFFF] transition-all duration-500 hover:bg-[#90882B] hover:text-[#FFFFFF] desktop:h-[38px] desktop:bg-[white] desktop:text-[18px] desktop:leading-[22px] desktop:text-[#212121] desktop:hover:translate-y-[-10px]">
            подробнее
          </button>
        </div>
      </div>
    </div>
  );
};

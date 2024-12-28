import React from "react";

import backTable from "@/assets/products/back-table-main.png";
import text from "@/assets/products/back-table-text.svg";
import textDesktop from "@/assets/products/back-table-text-desktop.svg";
import useBreakpoint from "@/hooks/useBreakpoint";

export const BackTableMain = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="mx-auto w-full max-w-[1440px] px-[20px] pt-[80px] desktop:px-[80px] desktop:py-[95px]">
      <div className="flex w-full flex-col desktop:mb-[172px] desktop:flex-row">
        <div className="relative w-full desktop:mt-[12px]">
          <img
            src={backTable}
            alt=""
            className="relative z-10 ml-auto w-[375px] desktop:ml-0 desktop:mr-auto desktop:w-[500px]"
          />

          <img
            src={isDesktop ? textDesktop : text}
            alt=""
            className="absolute top-0 ml-[-20px] min-w-[375px] desktop:min-w-[800px]"
          />
        </div>

        <div className="mb-[80px] mt-[15px] desktop:mb-[50px] desktop:ml-auto desktop:mt-auto desktop:max-w-[422px]">
          <h2 className="mob-head-2 desktop:head-4 mb-[15px] whitespace-pre-wrap text-grey-2 desktop:mb-[25px]">{`стол\nтрансплантолога\nBack-Table 1.0`}</h2>
          <p className="mob-text-3 desktop:text-4 text-grey-2">{`Аппарат предназначен для организации искусственного кровообращения для повышения эффективности оказания помощи в реаниматологии, трансплантологии, онкологии, кардиологии.`}</p>
        </div>
      </div>
    </div>
  );
};

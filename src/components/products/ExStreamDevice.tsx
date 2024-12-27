import React from "react";
import device from "@/assets/products/ex-stream-device.png";
import shadow from "@/assets/products/shadow.png";
import shadowDesktop from "@/assets/products/shadow-desktop.png";

import text from "@/assets/products/ex-stream-text.svg";
import textDesktop from "@/assets/products/ex-stream-text-desktop.svg";

import useBreakpoint from "@/hooks/useBreakpoint";

export const ExStreamDevice = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col desktop:px-[80px]">
      <div className="relative mt-[86px] w-full desktop:mt-[232px]">
        <img
          src={device}
          alt=""
          className="absolute right-0 top-0 z-20 w-[375px] desktop:left-[13%] desktop:top-[-6px] desktop:w-[585px]"
        />
        {!isDesktop && (
          <img
            src={
              // isDesktop ? shadowDesktop :
              shadow
            }
            alt=""
            className="absolute right-0 top-[33px] z-10 h-[409px] w-[130px] desktop:right-[33%] desktop:h-[700px]"
          />
        )}
        <img src={isDesktop ? textDesktop : text} alt="" />

        <div className="mt-[140px] w-full px-[20px] desktop:ml-auto desktop:mt-[65px] desktop:w-[352px]">
          <h2 className="mob-head-2 desktop:head-4 mb-[15px] whitespace-pre-wrap text-grey-2 desktop:mb-[25px]">{`аппарат\nEx-Stream`}</h2>
          <p className="mob-text-3 desktop:text-4 mb-[80px] text-grey-2">{`Аппарат предназначен для организации искусственного кровообращения для повышения эффективности оказания помощи\nв реаниматологии, трансплантологии, онкологии, кардиологии.`}</p>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import bgSecond from "../assets/bg/bg-second.png";

export const SectionPromo = () => {
  return (
    <div className="relative w-full min-h-[680px] flex">
      {/* <span className="w-full h-[100px] backdrop-blur-[20px]  absolute top-[-170px] left-0"></span> */}
      <img
        src={bgSecond}
        alt="asd"
        className="w-full cover absolute top-[-120px] left-0 z-[-1]"
        style={{maskImage: 'linear-gradient(to bottom, transparent, black 90px, black)'}}
      />

      <span className="px-[30px] geologica-text text-[27px] leading-[27px] text-[#E9E9E9] text-center mt-[380px]">
        {"четыре направления\u00A0– одна задача"}
      </span>
    </div>
  );
};
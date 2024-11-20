import React from "react";
import bgSecond from "../assets/bg/bg-second.png";

export const SectionPromo = () => {
  return (
    <div
      className="relative z-10 flex min-h-screen w-full items-center justify-center bg-one-task-bg bg-cover bg-center 400px:bg-second-desktop-bg"
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 90px, black)",
        // backgroundPosition: "center top -20px"
      }}
    >
      {/* <span className="w-full h-[100px] backdrop-blur-[20px]  absolute top-[-170px] left-0"></span> */}
      {/* <img
        src={bgSecond}
        alt="asd"
        className="w-full cover absolute left-0 z-[-1]"
        style={{maskImage: 'linear-gradient(to bottom, transparent, black 90px, black)'}}
      /> */}

      <span className="geologica-text flex flex-col px-[30px] text-center text-[27px] leading-[27px] text-platinum desktop:ml-auto desktop:mr-[77px] desktop:max-w-[350px] desktop:gap-[40px] desktop:text-start desktop:text-[46px] desktop:leading-[40px]">
        {"четыре направления\u00A0–"}
        <p className="text-[white]">{" одна задача"}</p>
      </span>
    </div>
  );
};

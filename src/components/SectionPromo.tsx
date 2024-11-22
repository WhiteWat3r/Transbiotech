import React, { useRef } from "react";
import bgSecond from "../assets/bg/bg-second.png";
import useIntersection from "../hooks/useIntersection";

export const SectionPromo = () => {
  const sectionRef = useRef(null);

  const { isVisible, hasAnimated } = useIntersection(sectionRef, {
    threshold: 0.8,
  });

  console.log("isVisible", isVisible);

  return (
    <div
      className={`relative z-10 flex h-[750px] w-full items-center justify-center bg-one-task-bg bg-cover bg-center transition-all duration-500 400px:bg-second-desktop-bg desktop:h-[1080px] ${
        hasAnimated ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 90px, black)",
        // backgroundPosition: "center top -20px"
      }}
      ref={sectionRef}
    >
      <div className="desktop:px-40px mx-auto flex w-full max-w-[1440px] justify-end px-[40px]">
        <div
          className={`geologica-text flex flex-col text-center text-[27px] leading-[27px] tracking-tighter before:px-[30px] desktop:ml-auto desktop:mr-[77px] desktop:max-w-[350px] desktop:gap-[40px] desktop:text-start desktop:text-[46px] desktop:leading-[40px]`}
        >
          <span
            className={`text-platinum transition-opacity duration-300 ${hasAnimated ? "opacity-100" : "opacity-0"}`}
          >
            {"четыре направления\u00A0–"}
          </span>
          <p className="text-[white]">{" одна задача"}</p>
        </div>
      </div>
    </div>
  );
};

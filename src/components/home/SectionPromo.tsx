import { useRef } from "react";

import bg from "@/assets/images/home/second-desktop.png";
import useIntersection from "@/hooks/useIntersection";

export const SectionPromo = () => {
  const sectionRef = useRef(null);

  const { isVisible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  return (
    <div
      className={`relative z-10 flex h-[750px] w-full items-center justify-center  desktop:h-screen`}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 90px, black)",
        // backgroundPosition: "center top -20px"
      }}
      ref={sectionRef}
    >
      <img
        src={bg}
        alt=""
        className={`absolute left-0 top-0 h-full w-full object-cover transition-all duration-1000 ${
          isVisible ? "animate-slideIn" : "animate-slideOut"
        }`}
      />
      <div className="desktop:px-40px relative z-10 mx-auto flex w-full max-w-[1200px] justify-end px-[40px]">
        <div
          className={`geologica-text flex flex-col text-center text-[27px] leading-[27px] tracking-tighter before:px-[30px] desktop:ml-auto desktop:mr-[77px] desktop:max-w-[350px] desktop:gap-[40px] desktop:text-start desktop:text-[46px] desktop:leading-[40px]`}
        >
          <span
            className={`text-platinum transition-opacity duration-300`}
          >
            {"четыре направления\u00A0–"}
          </span>
          <p className="text-[white]">{" одна задача"}</p>
        </div>
      </div>
    </div>
  );
};

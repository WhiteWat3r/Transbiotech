import { DeviceInfo } from "@/components/ui/DeviceInfo";
import perfusionEcmo from "@/assets/perfusion/perfusion-ecmo.png";
import useBreakpoint from "@/hooks/useIsMobile";
import { useRef } from "react";
import useIntersection from "@/hooks/useIntersection";

const ecmoAdvayanges = [
  "работа от аккумулятора не менее пяти часов, что позволяет обеспечить безопасную и бесперебойную перфузию вне стационара и при транспортировке",
  "простота работы в экстренной ситуации благодаря понятному интерфейсу",
  "подготовка к работе менее,\u00A0чем\u00A0за\u00A0десять\u000Aминут",
  "возможность применения в сантранспорте",
  "повышенная ударо-  и влагозащищенность",
];

export const ECMOAdvantages = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  const sectionRef = useRef(null);

  const { isVisible } = useIntersection(sectionRef, {
    threshold: 0.7,
  });

  return (
    <div
      ref={sectionRef}
      className="relative flex w-full flex-col overflow-hidden bg-gainsboro"
    >
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pb-[44px] desktop:pt-[43px]">
        {/* {isDesktop ? ( */}
          <div className="flex flex-col gap-[15px] desktop:gap-[45px]">
            <span className="mob-head-4 desktop:text-2 max-w-[170px] text-grey-2 opacity-50">
              преимущества методики
            </span>
            <ul className={"flex flex-col gap-[25px] desktop:gap-[18px] uppercase"}>
              {ecmoAdvayanges.map((advantage, index) => (
                <li
                  key={index}
                  className={`mob-head-5 desktop:text-3 relative w-[276px]  desktop:w-[430px] text-indigo ${index > 1 ? "desktop:ml-auto desktop:text-end" : " "} ${index === 2 ? "desktop:mt-[160px]" : " "}`}
                >
                  <p className={"whitespace-pre-wrap"}>{advantage}</p>
                  <span
                    className={`mt-[1px] block h-[1px] bg-indigo transition-all desktop:mt-[3px] ${isVisible ? "animate-flashing-border" : "opacity-0"}`}
                  />
                </li>
              ))}
            </ul>
          </div>
        {/* // )
        //  : (
        //   <DeviceInfo advantages={ecmoAdvayanges} marginLeft={false} />
        // )} */}
      </div>
      <img
        src={perfusionEcmo}
        alt=""
        className="relative left-[15%] z-20 ml-auto mt-[-160px] h-[588px] min-w-[492px] desktop:absolute desktop:bottom-0 desktop:left-[50%] desktop:h-[709px] desktop:w-[594px] desktop:translate-x-[-50%]"
      />
    </div>
  );
};

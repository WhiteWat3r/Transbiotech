import { DeviceInfo } from "@/components/ui/DeviceInfo";
import perfusionEcmo from "@/assets/perfusion/perfusion-ecmo.png";
import useBreakpoint from "@/hooks/usIsMobile";

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

  return (
    <div className="relative flex w-full flex-col overflow-hidden bg-gainsboro">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pb-[44px] desktop:pt-[43px]">
        {isDesktop ? (
          <div className="flex flex-col gap-[45px]">
            <span className="mob-head-4 desktop:text-2 max-w-[170px] text-grey-2 opacity-50">
              преимущества методики
            </span>
            <ul className={"uppercase flex flex-col gap-[18px]"}>
              {ecmoAdvayanges.map((advantage, index) => (
                <li
                  key={index}
                  className={`desktop:text-3 relative text-indigo w-[430px] ${index > 1 ? "text-end ml-auto": " "} ${index === 2 ? "mt-[160px] " : " "}`}
                >
                  <p
                  className={'whitespace-pre-wrap'}
                  >
                    {advantage}
                  </p>
                  <span
                    className={` mt-[1px] block h-[1px] bg-indigo desktop:mt-[3px]`}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <DeviceInfo advantages={ecmoAdvayanges} marginLeft={false} />
        )}
      </div>
      <img
        src={perfusionEcmo}
        alt=""
        className="relative z-20 ml-auto left-[15%] h-[588px] min-w-[492px] mt-[-160px] desktop:absolute desktop:bottom-0 desktop:w-[594px] desktop:h-[709px] desktop:translate-x-[-50%] desktop:left-[50%]"
      />
    </div>
  );
};

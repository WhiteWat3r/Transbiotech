import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import useBreakpoint from "@/hooks/useBreakpoint";

import abbott from "../../assets/images/arrhythmology/distance-monitoring/abbott.png";
import spiralDesktop from "../../assets/images/arrhythmology/distance-monitoring/spiral-desktop.png"

export const ArrhythmologyDistanceMonitoring = () => {
  const { isDesktop } = useBreakpoint();

  const logos = [
    abbott
  ];

  return (
    <div className="relative flex w-full flex-col bg-titian">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] pt-[10px] pb-[60px] desktop:px-[20px] desktop:pt-[85px] desktop:pb-[90px] desktop:pl-[345px]">
        <img src={spiralDesktop} alt={""} className={"desktop:absolute desktop:top-[50px] desktop:left-0 max-w-[180px] desktop:max-w-[280px]"} />

        <div className={"flex flex-col relative w-full"}>
          <SectionNumber number={3} />

          <p
            className={`geologica-text text-[32px] leading-[32px] font-medium tracking-[-0.2px] text-gainsboro desktop:head-2`}>
            технология
            <span className="text-white block">дистанционного мониторинга</span>
          </p>

          <div
            className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
            {(logos).map((logo, index) => (
              <img alt={""} src={logo} key={index} className={"h-[38px] max-desktop:h-[25px]"} />
            ))}
          </div>

          <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
            <div className="desktop:w-[775px]">
              <DeviceDescription
                titleColorClassName={"gainsboro"}
                maxWidth={"desktop:w-[511px]"}
                textColorClassName={"white"}
                description={{
                  mainText:
                    "Имплантируемый кардиомонитор (ИКМ) – малоинвазивный диагностический прибор для выявления нарушений ритма сердца.",
                }}
              />
            </div>
            <div className="desktop:w-[775px]">
              <DeviceAdvantages
                titleColorClassName={"gainsboro"}
                colorClassName={"white"}
                listClassName={"desktop:ml-[78px] max-desktop:max-w-[513px] max-desktop:ml-auto"}
                advantages={[
                  "миниатюрный корпус, что делает его незаметным со стороны",
                  "Непрерывный мониторинг (до 2х лет)",
                  "Точное обнаружение аритмий, таких как брадикардия, пауза и фибрилляция предсердий (ФП)",
                  "удобный способ передачи данных врачу через мобильное приложение",
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

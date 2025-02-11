import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import useBreakpoint from "@/hooks/useBreakpoint";

import abbott from "../../assets/images/arrhythmology/technology-of-cardio/abbott.png";
import spiralDesktop from "../../assets/images/arrhythmology/radio-frequency/spiral-desktop.jpg"

export const ArrhythmologyRadioFrequency = () => {
  const { isDesktop } = useBreakpoint();

  const logos = [
    abbott
  ];

  return (
    <div className="relative flex w-full flex-col bg-white">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] pt-[10px] pb-[60px] desktop:px-[20px] desktop:pt-[85px] desktop:pb-[90px] desktop:pl-[345px]">
        <img src={spiralDesktop} alt={""} className={"desktop:absolute desktop:top-[10px] desktop:left-0 max-w-[320px]"} />

        <div className={"flex flex-col relative w-full"}>
          <SectionNumber number={1} />

          <p
            className={`geologica-text text-[32px] leading-[32px] font-medium tracking-[-0.2px] text-grey-1 desktop:head-2`}>
            radiofrequency
            ablation&nbsp;—
            <span className="text-black-default">технология радиочастотной
          абляции</span>
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
                maxWidth={"desktop:w-[511px]"}
                description={{
                  mainText:
                    "Искусственное кровообращение – это временное замещение газообменной функции легких и насосной функции сердца на время операции на сердце или аорте. Процедура обеспечивает адекватную перфузию всего организма и является «золотым стандартом» \nв кардиохирургии.",
                  additionalText: (
                    <span className="mt-[10px] block desktop:mt-[25px]">
                 Технология позволяет снизить травматичность оперативного вмешательства в условиях использования экстракорпорального контура. В технологии используется замкнутый контур с биологически совместимым покрытием, отсутствует контакт клеток крови с воздухом
и снижается объем разведения крови.
                  </span>)
                }}
              />
            </div>
            <div className="desktop:w-[775px]">
              <DeviceAdvantages
                colorClassName={"titian"}
                listClassName={"desktop:ml-[78px] max-desktop:max-w-[513px] max-desktop:ml-auto"}
                advantages={[
                  "возможность обнаружить и навсегда устранить источники аритмий",
                  "малоинвазивная процедура",
                  "быстрое восстановление после процедуры и возвращение к обычной жизни через\u00A0несколько дней"
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useHighlightedText } from "@/hooks/useScrollHighlight";

import { DeviceInfo } from "./ui/DeviceInfo";
import logo1 from "../../assets/images/cardio-surgery/cpb-logos/1.svg"
import logo2 from "../../assets/images/cardio-surgery/cpb-logos/2.svg"
import logo3 from "../../assets/images/cardio-surgery/cpb-logos/3.svg"
import logo4 from "../../assets/images/cardio-surgery/cpb-logos/4.svg"
import logo5 from "../../assets/images/cardio-surgery/cpb-logos/5.svg"
import logo6 from "../../assets/images/cardio-surgery/cpb-logos/6.svg"
import logo7 from "../../assets/images/cardio-surgery/cpb-logos/7.svg"



export const CardiacSurgeryCPB = () => {
  const { isDesktop } = useBreakpoint();

  const textContent = `MiECC — минимально инвазивное искусственное кровообращение`;

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
  ]

  const { highlightedText, elementRef } = useHighlightedText({ textContent });
  return (
    <div className="flex flex-col bg-white">
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col desktop:mt-[85px] desktop:flex-row desktop:gap-[50px] desktop:pr-[80px]">
        <div className="relative flex w-full flex-col px-[20px] pt-[40px] desktop:px-0 desktop:pt-0">
          <SectionNumber number={1} />

          <SectionTitle
            firstChapter={"CPB (cardiopulmonary bypass) – искусственное кровообращение"}
            className={"desktop:max-w-[863px] tracking-[-1.44px]"}
          />

          <div
            className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
            {(logos).map((logo, index) => (
              <img alt={""} src={logo} key={index} className={"max-desktop:h-[25px]"} />
            ))}
          </div>

          <DeviceInfo
            description={{
              mainText:
                "Искусственное кровообращение – это временное замещение газообменной функции легких и насосной функции сердца на время операции на сердце \n" +
                "или аорте. Процедура обеспечивает адекватную перфузию всего организма и является «золотым стандартом» в кардиохирургии.",
              additionalText: (
                  <span className="mt-[10px] block desktop:mt-[25px]">
                 Технология позволяет снизить травматичность оперативного вмешательства в условиях использования экстракорпорального контура. В технологии используется замкнутый контур с биологически совместимым покрытием, отсутствует контакт клеток крови с воздухом и снижается объем разведения крови.
                  </span>)
            }}
            descriptionMarginClass={'desktop:ml-[182px]'}
            maxWidth={"desktop:w-[597px]"}
          />
          <p
            ref={elementRef}
            className="mob-head-3 desktop:head-4 my-[50px] flex flex-wrap text-grey-2 desktop:my-[85px] desktop:max-w-[730px] desktop:ml-[300px]"
          >
            {highlightedText}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] px-[20px] max-desktop:pb-[45px] desktop:mb-[85px]">
        <DeviceInfo
          advantages={[
            "укорочение срока реабилитации пациента",
            "уменьшается необходимость использования донорской крови",
            "уменьшаются затраты&nbsp;на послеоперационное ведение пациента"
          ]}
          rowAdvantages={isDesktop}
          colorClassName={'greenish-yellow'}
          listClassName={'desktop:ml-[98px] max-desktop:ml-auto'}
        />
      </div>
    </div>
  );
};

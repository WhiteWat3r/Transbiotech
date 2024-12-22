import ecmoTransplantation from "@/assets/perfusion/ecmo-transplantation.png";
import ecmoTransplantationDesc from "@/assets/perfusion/ecmo-transplantation-desc.png";

import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LogosList } from "../components/LogosList";
import useBreakpoint from "@/hooks/useIsMobile";
import { useHighlightedText } from "@/hooks/useScrollHighlight";

export const EcmoTransplantation = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";
  const textContent = `В методике есть возможность реализовать «диагностическое» ЭКМО – оценить жизнеспособность донорских органов до их пересадки. Это открытие в трансплантологии.`;

  const { highlightedText, elementRef } = useHighlightedText({ textContent });
  return (
    <div className="flex flex-col">
      <div className="relative mx-auto mt-[80px] flex w-full max-w-[1440px] flex-col desktop:mt-[170px] desktop:flex-row desktop:gap-[50px] desktop:pr-[80px]">
        <img
          src={isDesktop ? ecmoTransplantationDesc : ecmoTransplantation}
          alt=""
          className="deskop:w-[578px] desktop:h-[603px]"
        />
        <div className="relative flex w-full flex-col px-[20px] pt-[40px] desktop:px-0 desktop:pt-0">
          <SectionNumber number={5} />

          <SectionTitle
            firstChapter={"ЭКМО"}
            secondChapter={`в трансплантации органов`}
          />
          <LogosList />
          <DeviceInfo
            description={{
              mainText:
                "Для использования методики в донорстве нами был создан перфузионный аппарат Ex-Stream и запатентована технология перфузии донорских органов. Протокол методики позволяет сохранить органы умершего человека для последующей трансплантации и таким образом спасти больше жизней пациентов, нуждающихся в пересадке органов.",
            }}
          />
          <p
            ref={elementRef}
            className="mob-head-3 desktop:head-4 my-[50px] flex flex-wrap text-grey-2 desktop:my-[85px] desktop:max-w-[895px]"
          >
            {highlightedText}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1440px] px-[20px] desktop:mb-[62px] desktop:px-[80px]">
        <DeviceInfo
          advantages={[
            "Оценка адекватности объемной перфузии внутренних органов",
            "Возможность изолированной перфузии печени и легкого",
            "Снижение рисков ишемического повреждения перфузируемых органов",
          ]}
          rowAdvantages={isDesktop}
        />
      </div>
    </div>
  );
};

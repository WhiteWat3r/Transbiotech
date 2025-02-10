import ecmoTransplantationDesc from "@/assets/images/perfusion/ecmo-transplantation-desc.png";
import ecmoTransplantation from "@/assets/images/perfusion/ecmo-transplantation.png";
import { DeviceInfo } from "@/components/cardiac-surgery/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useHighlightedText } from "@/hooks/useScrollHighlight";
import abbott from "@/assets/images/arrhythmology/technology-of-cardio/abbott.svg";

export const ArrhythmologyHeartResearch = () => {
  const { isDesktop } = useBreakpoint();

  const textContent = `Система EnSite™ Х создана с\u00A0целью предоставить мощный, надежный и эффективный инструмент для выполнения любых электрофизиологических процедур.`;

  const { highlightedText, elementRef } = useHighlightedText({ textContent });
  return (
    <div className="flex flex-col">
      <div
        className="relative mx-auto mt-[80px] flex w-full max-w-[1200px] flex-col desktop:mt-[85px] desktop:flex-row desktop:gap-[50px] desktop:pr-[80px]">
        <div className="relative flex w-full flex-col px-[20px] desktop:px-0">
          <SectionNumber number={2} />

          <SectionTitle
            firstChapter={"электрофизиологическое"}
            secondChapter={`исследование сердца`}
            className={"break-words"}
          />

          <div
            className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
            <img alt={""} src={abbott} className={"max-desktop:h-[25px]"} />
          </div>

          <DeviceInfo descriptionMarginClass={"desktop:ml-[158px]"} maxWidth={"desktop:w-[779px]"}
            description={{
              mainText:
                "Электрофизиологическое исследование сердца – это метод диагностики нарушений сердечного ритма \nи проводимости. С помощью электрофизиологического исследования можно точно обнаружить и\u00A0локализовать аномальные электрические активности в сердце, вызывающие аритмии.",
              additionalText: (<>
                <span className="mt-[10px] block desktop:mt-[25px]">
                 Высокоплотное картирование – передовая технология, создающая точную карту камер сердца пациента. Методика позволяет визуализировать паталогический путь электрического импульса, вызывающего тахиаритмию.
                  </span>

                <span className="mt-[10px] block desktop:mt-[25px]">
                 EnSite™ X – это система навигации, представляющая собой платформу<br/>3D-картирования нового поколения.
                  </span>
              </>)
            }}
          />
          <p
            ref={elementRef}
            className="mob-head-3 desktop:head-4 my-[50px] flex flex-wrap text-grey-2 desktop:my-[170px] desktop:max-w-[775px]"
          >
            {highlightedText}
          </p>
        </div>
      </div>
      <div className="mx-auto w-full max-w-[1200px] max-desktop:px-[20px] mb-[60px] desktop:mb-[88px]">
        <DeviceInfo
          colorClassName={"titian"}
          advantages={[
            "Снижение лучевой нагрузки на пациента",
            "уменьшение времени РЧА-воздействия",
            "",
            "повышение эффективности процедуры в целом",
            "сокращение вероятности возникновения осложнений",
            "возможность обнаружения\n и лечения сложных аритмий"
          ]}
          rowAdvantages={isDesktop}
          listClassName={"max-desktop:w-[276px] max-desktop:ml-auto desktop:grid desktop:grid-cols-3 desktop:ml-[96px]"}
        />
      </div>
    </div>
  );
};

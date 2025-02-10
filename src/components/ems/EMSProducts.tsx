import ecmoTransplantationDesc from "@/assets/images/perfusion/ecmo-transplantation-desc.png";
import ecmoTransplantation from "@/assets/images/perfusion/ecmo-transplantation.png";
import { DeviceInfo } from "@/components/cardiac-surgery/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useHighlightedText } from "@/hooks/useScrollHighlight";
import abbott from "@/assets/images/arrhythmology/technology-of-cardio/abbott.svg";

export const EMSProducts = () => {
  const { isDesktop } = useBreakpoint();

  const textContent = `В ассортименте представлены: специальная стойка для оборудования, столик трансплантолога Back-table, \nсистема крепежей и рейлингов, устройства для экстренного организации интенсивной терапии вне стационара.`;

  const { highlightedText, elementRef } = useHighlightedText({ textContent });
  return (
    <div className="flex flex-col">
      <div
        className="relative mx-auto mt-[80px] flex w-full max-w-[1200px] flex-col desktop:mt-[85px] desktop:flex-row desktop:gap-[50px] desktop:pr-[80px]">

        <div className="relative flex w-full flex-col items-start px-[20px] desktop:px-0">
          <p
            ref={elementRef}
            className="mob-head-3 desktop:head-4 flex flex-wrap text-grey-2 desktop:max-w-[1001px]"
          >
            {highlightedText}
          </p>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1200px] max-desktop:px-[20px] mt-[35px] desktop:mt-[85px] desktop:mb-[88px]">
        <DeviceInfo
          colorClassName={"purplish-pink"}
          advantages={[
            "Организация и\u00A0экономия пространства",
            "Оптимизация<br/>времени – у врача всё нужное под рукой<br/><br/>",
            "Безопасно для пациента и бригады скорой помощи<br/>при транспортировке<br/><br/>",
          ]}
          rowAdvantages={isDesktop}
          listClassName={"max-desktop:w-[276px] max-desktop:ml-auto desktop:grid desktop:grid-cols-3 desktop:ml-[96px]"}
        />
      </div>
    </div>
  );
};

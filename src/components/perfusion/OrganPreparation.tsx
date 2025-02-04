
import organPreparationDesk from "@/assets/images/perfusion/organ-preparation-desk.png";
import organPreparation from "@/assets/images/perfusion/organ-preparation.png";
import { DeviceAdvantages } from "@/components/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import { LogosList } from "./LogosList";


export const OrganPreparation = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="relative mt-[80px] flex w-full flex-col desktop:mt-0">
      <img
        src={isDesktop ? organPreparationDesk : organPreparation}
        // alt="desktop:w-[1037px]"
        className="mx-auto desktop:w-[1200px]"
      />
      <div className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pt-0">
        <SectionNumber number={7} />

        <SectionTitle
          firstChapter={"подготовка органов"}
          secondChapter={`к\u00A0трансплантации`}
        />
        <LogosList logos={["transbiotech", "energoArm"]} />

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[860px]">
            <DeviceDescription
              maxWidth={"desktop:w-[597px]"}
              description={{
                mainText:
                  "Наша задача – помочь организовать рабочее пространство во время операций. Для этого мы разработали удобное и эргономичное решение для подготовки органа к трансплантации – стол трансплантолога Back Table.",
              }}
            />
          </div>
          <div className="desktop:ml-auto desktop:w-[775px]">
            <DeviceAdvantages
              advantages={[
                "обеспечение гипотермической сохранности органа и непрерывной перфузии",
                "оптимальная высота и удобная рабочая зона для работы в четыре руки",
                "разграничение стерильной и нестерильной зон",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

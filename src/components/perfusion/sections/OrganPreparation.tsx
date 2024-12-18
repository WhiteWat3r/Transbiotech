import organPreparation from "@/assets/perfusion/organ-preparation.png";
import organPreparationDesk from "@/assets/perfusion/organ-preparation-desk.png";

import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";
import useBreakpoint from "@/hooks/usIsMobile";
import { DeviceAdvantages } from "@/components/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";

export const OrganPreparation = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint !== "mobile";
  return (
    <div className="relative mt-[80px] flex w-full flex-col desktop:mt-0">
      <img
        src={isDesktop ? organPreparationDesk : organPreparation}
        // alt="desktop:w-[1037px]"
         className="desktop:w-[1200px] mx-auto"
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pt-0">
        <SectionNumber number={7} />

        <SectionTitle
          firstChapter={"подготовка органов"}
          secondChapter={`к\u00A0трансплантации`}
        />
        <TransbiotechBiosoftList logos={["transbiotech", "energoArm"]} />

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

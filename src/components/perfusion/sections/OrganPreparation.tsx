import organpreparation from "@/assets/perfusion/organ-preparation.png";
import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";

export const OrganPreparation = () => {
  return (
    <div className="w-full relative flex flex-col  mt-[80px]">
      <img src={organpreparation} alt="" />
      <div className="relative mx-auto pt-[40px] flex w-full max-w-[1440px] flex-col px-[20px] desktop:px-[80px] ">
        <SectionNumber number={7} />

        <SectionTitle
          firstChapter={"подготовка органов"}
          secondChapter={`к\u00A0трансплантации`}
        />
        <TransbiotechBiosoftList logos={["transbiotech", "energoArm"]} />
        <DeviceInfo
          description={{
            mainText:
              "Наша задача – помочь организовать рабочее пространство во время операций. Для этого мы разработали удобное и эргономичное решение для подготовки органа к трансплантации – стол трансплантолога Back Table.",
          }}
          advantages={[
            "обеспечение гипотермической сохранности органа и непрерывной перфузии",
            "оптимальная высота и удобная рабочая зона для работы в четыре руки",
            "разграничение стерильной и нестерильной зон",
          ]}
        />
      </div>
    </div>
  );
};

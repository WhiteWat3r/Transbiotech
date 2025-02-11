import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import abbott from "@/assets/images/arrhythmology/distance-monitoring/abbott.png";
import { DeviceDescription } from "@/components/ui/DeviceDescription";


export const EMSWorkspace = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="relative flex w-full flex-col bg-purplish-pink">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] py-[40px] desktop:px-[80px] desktop:py-[85px]">
        <SectionNumber number={2} />

        <p
          className={`geologica-text text-[32px] leading-[32px] font-medium tracking-[-0.2px] text-platinum desktop:head-2`}>
          организация
          рабочего пространства
          <span className="text-white block">медицинского персонала</span>
        </p>

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          <img alt={""} src={abbott} className={"h-[38px] max-desktop:h-[25px]"} />
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[85px]">
          <div className="desktop:w-[868px]">
            <DeviceDescription titleColorClassName={"platinum"}  maxWidth={"desktop:ml-[157px] desktop:w-[509px]"} textColorClassName={"white"}

                               description={{
                                 mainText:
                                   "В скорой медицинской помощи дорога каждая секунда. Чтобы помочь врачам оптимизировать работу и сэкономить время, мы разработали удобные решения для организации рабочего пространства бригад интенсивной терапии и скорой помощи. Наши решения подходят \n для операционных, палат реанимации, машин скорой помощи и\u00A0даже\u00A0для\u00A0полевых условий.",
                               }}
            />
          </div>
        </div>
      </div>
    </div>
  )
    ;
};


import organPreparationDesk from "@/assets/images/perfusion/organ-preparation-desk.png";
import organPreparation from "@/assets/images/perfusion/organ-preparation.png";
import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import logo1 from "../../assets/images/cardio-surgery/pretez-logos/1.png"
import logo2 from "../../assets/images/cardio-surgery/pretez-logos/2.png"
import logo3 from "../../assets/images/cardio-surgery/pretez-logos/3.png"

export const CardiacSurgeryProtezHeart = () => {
  const { isDesktop } = useBreakpoint();

  const logos = [
    logo1,
    logo2,
    logo3
  ]

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pt-[85px] desktop:pb-[40px]">
        <SectionNumber number={4} />

        <SectionTitle
          firstChapter={"протезирование"}
          secondChapter={`клапапанов сердца`}
        />

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          {(logos).map((logo, index) => (
            <img alt={""} src={logo} key={index} className={"h-[38px] max-desktop:h-[25px]"} />
          ))}
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[864px]">
            <DeviceDescription
              maxWidth={"desktop:w-[597px]"}
              description={{
                mainText:
                  "Протезирование клапанов сердца позволяет восстановить функцию пораженного клапана путем замены на искусственный клапан. Операция проводится на открытом сердце в условиях искусственного кровообращения.Методика реализуется с помощью механических и биологических клапанов Abbott."
              }}
            />
          </div>
          <div className="desktop:ml-auto desktop:w-[775px]">
            <DeviceAdvantages
              colorClassName={'greenish-yellow'}
              listClassName={'desktop:ml-[96px] max-desktop:max-w-[276px] max-desktop:ml-auto'}
              advantages={[
                "выдающиеся гемодинамические характеристики",
                "надежность",
                "улучшенная тромборезистентность",
                "простота имплантации",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

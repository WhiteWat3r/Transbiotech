import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import useBreakpoint from "@/hooks/useBreakpoint";

import logo1 from "../../assets/images/cardio-surgery/cabg-logos/1.svg";
import logo2 from "../../assets/images/cardio-surgery/cabg-logos/2.svg";
import logo3 from "../../assets/images/cardio-surgery/cabg-logos/3.svg";
import logo4 from "../../assets/images/cardio-surgery/cabg-logos/4.svg";
import logo5 from "../../assets/images/cardio-surgery/cabg-logos/5.svg";
import menMobile from "../../assets/images/cardio-surgery/cabg-men-mobile.jpg";
import men from "../../assets/images/cardio-surgery/cabg-men.jpg";

export const CardiacSurgeryCABG = () => {
  const { isDesktop } = useBreakpoint();

  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5
  ];

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] pt-[40px] desktop:px-[80px] desktop:pt-[85px] desktop:pb-[40px]">
        <SectionNumber number={2} />

        <p
          className={`geologica-text text-[36px] leading-[36px] font-medium tracking-[-0.2px] text-grey-1 desktop:head-2`}>
          CABG —&nbsp;
          <span className="text-black-default">аортокоронарное шунтирование</span>
        </p>

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          {(logos).map((logo, index) => (
            <img alt={""} src={logo} key={index} className={"max-desktop:h-[25px]"} />
          ))}
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[864px]">
            <DeviceDescription
              maxWidth={"desktop:w-[597px]"}
              description={{
                mainText:
                  "CABG (Coronary Artery Bypass Graft) – аортокоронарное шунтирование (АКШ). АКШ – это операция по восстановлению кровоснабжения сердца. Во время выполнения АКШ кардиохирург формирует сосудистый шунт, дублирующий поврежденный участок коронарной артерии. Благодаря этому кровоснабжение происходит в обход области окклюзии.",
                additionalText: (
                  <span className="mt-[10px] block desktop:mt-[25px]">
                 Clampless surgery – это технология АКШ без искусственного кровообращения и без наложения поперечного и продольного зажимов. В методике используется стабилизатор тканей миокарда
и устройства для наложения проксимального шунта.
                  </span>)
              }}
            />
          </div>
          <div className="desktop:ml-auto desktop:w-[775px]">
            <DeviceAdvantages
              colorClassName={"greenish-yellow"}
              listClassName={"desktop:ml-[96px] max-desktop:max-w-[276px] max-desktop:ml-auto"}
              advantages={[
                "выдающиеся гемодинамические характеристики",
                "надежность",
                "улучшенная тромборезистентность",
                "простота имплантации"
              ]}
            />
          </div>

          <div className={"mt-[16px] h-[400px] w-full rounded-[45px] bg-cover bg-center"} style={{ backgroundImage: `url(${isDesktop ? men : menMobile})` }}>

          </div>
        </div>
      </div>
    </div>
  );
};

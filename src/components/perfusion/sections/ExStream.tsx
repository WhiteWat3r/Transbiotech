import bgMain from "@/assets/bg/ecmo-mobile-bg.png";
import bgMainDesc from "@/assets/bg/ex-stream-bg.png";

import exStream from "@/assets/perfusion/ex-stream.png";
import exStreamSecond from "@/assets/perfusion/ex-stream-second.png";
import exStreamThird from "@/assets/perfusion//ex-stream-third.png";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import { LogosList } from "../components/LogosList";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useScrollFrameBySteps } from "@/hooks/useScrollFrameByFrame";

const advantages = [
  {
    id: 1,
    title: "Скорость работы",
    text: "Ex-Stream позволяет быстро, надежно и безопасно подключить пациента к ЭКМО, в том числе при\u00A0ранспортировке и\u00A0в\u00A0экстренных ситуациях",
  },
  {
    id: 2,
    title: "Автономность",
    text: "Аппарат имеет все необходимое для проведения полноценного безопасного длительного ЭКМО, что подтверждено опытом использования в ведущих российских кардиохирургических клиниках.",
  },
  {
    id: 3,
    title: "Удобство",
    text: "Аппарат Ex-Stream имеет открытую систему расходных материалов – с\u00A0помощью совместимых центрифужных головок возможно использование оксигенаторов разных производителей.",
  },
];

export const ExStream = () => {
  const { isDesktop } = useBreakpoint();


  const frames = [exStream, exStreamSecond, exStreamThird];
  const { currentFrame, elementRef } = useScrollFrameBySteps(frames);

  return (
    <div  className="relative w-full">
      <img
        // ref={imgRef}
        src={isDesktop ? bgMainDesc : bgMain}
        alt="Transbiotech"
        className="absolute left-[50%] top-[256px] z-[2] translate-x-[-50%] object-contain desktop:top-[196px] 1440:w-full 1440:object-cover"

        // onLoad={handleImageLoad}
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[80px] desktop:px-[80px] desktop:py-[170px]">
        <SectionNumber number={3} />

        <SectionTitle
          firstChapter={"ЭКМО в лечении"}
          secondChapter={`сердечно\u2011легочной недостаточности`}
        />

        <LogosList logos={['transbiotech', 'biosoft']} />

        <div className="desktop:max-w-[775px]">
          <DeviceInfo
            description={{
              mainText:
                "Технология, известная в мире как ECLS, в России называется ЭКМО – экстракорпоральная мембранная оксигенация. Это один из видов искусственного кровообращения или перфузии, в котором пациенту протезируют функцию сердца и легких. Методика применяется в ситуации тяжелой сердечной и/или легочной недостаточности и часто является единственным способом спасения жизни.",
            }}
          />
        </div>
        <div  className="gap-[37px] mt-[50px] flex flex-col desktop:mb-[46px] desktop:mt-[85px] desktop:flex-row desktop:justify-between">
          <p className="head-5 desktop:head-4 text-grey-2 desktop:max-w-[480px]">
            {`Наша компания разработала и\u00A0вывела на\u00A0рынок`}{" "}
            <span className="text-black-default desktop:block">
              {`первый российский аппарат ЭКМО\u00A0–`}{" "}
            </span>{" "}
            <span className="text-indigo desktop:block">Ex-Stream. </span>
          </p>
<div className="h-[250px] desktop:h-auto">
          <img
            src={currentFrame}
            alt="Ex-Stream"
            className=" relative z-10 mb-[56px] transition-opacity duration-300 desktop:h-[322px] desktop:w-[500px]"
          />
</div>
        </div>
        <ul className="relative z-20 flex flex-col gap-[10px] desktop:flex-row desktop:gap-[21px]"  ref={elementRef }>
          {advantages.map((advantage) => (
            <li
              key={advantage.id}
              className="flex h-[230px] flex-col gap-[15px] rounded-[25px] bg-[#FFFFFF] p-[20px] desktop:h-[339px] desktop:w-full desktop:gap-[27px] desktop:p-[40px]"
            >
              <h3 className="mob-head-4 desktop:head-5 text-black-default">
                {advantage.title}
              </h3>
              <p className="mob-text-3 desktop:text-4">{advantage.text}</p>
              <div className="mt-auto flex h-[42px] w-[70px] items-center justify-end rounded-[41px] border border-indigo p-[4px]">
                <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-indigo text-indigo">
                  {advantage.id}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

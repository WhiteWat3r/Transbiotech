import bgMain from "@/assets/bg/ecmo-mobile-bg.png";

import exStream from "@/assets/perfusion/ex-stream.png";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";

const advantages = [
  {
    id: 1,
    title: "Скорость работы",
    text: "Ex-Stream позволяет быстро, надежно и безопасно подключить пациента к ЭКМО, в том числе при транспортировке и в экстренных ситуациях",
  },
  {
    id: 2,
    title: "Автономность",
    text: "Аппарат имеет все необходимое для проведения полноценного безопасного длительного ЭКМО, что подтверждено опытом использования в ведущих российских кардиохирургических клиниках.",
  },
  {
    id: 3,
    title: "Удобство",
    text: "Аппарат Ex-Stream имеет открытую систему расходных материалов – с помощью совместимых центрифужных головок возможно использование оксигенаторов разных производителей.",
  },
];

export const ExStream = () => {
  return (
    <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[80px]">
      <SectionNumber number={3} />

      <SectionTitle
        firstChapter={"ЭКМО в лечении"}
        secondChapter={`сердечно\u2011легочной недостаточности`}
      />

      <img
        // ref={imgRef}
        src={bgMain}
        alt="Transbiotech"
        className="absolute left-[50%] top-[256px] z-[2] translate-x-[-50%] object-contain"

        // onLoad={handleImageLoad}
      />
      <TransbiotechBiosoftList />

      <DeviceInfo
        description={{
          mainText:
            "Технология, известная в мире как ECLS, в России называется ЭКМО – экстракорпоральная мембранная оксигенация. Это один из видов искусственного кровообращения или перфузии, в котором пациенту протезируют функцию сердца и легких. Методика применяется в ситуации тяжелой сердечной и/или легочной недостаточности и часто является единственным способом спасения жизни.",
        }}
      />

      <p className="head-5 mb-[37px] mt-[50px] text-grey-2">
        {`Наша компания разработала и вывела на\u00A0рынок`}{" "}
        <span className="text-black-default">
          {`первый российский аппарат ЭКМО\u00A0–`}{" "}
        </span>{" "}
        <span className="text-indigo">Ex-Stream. </span>
      </p>
      <img src={exStream} alt="Ex-Stream" className="z-10 mb-[56px]" />

      <ul className="flex flex-col gap-[10px] relative z-20">
        {advantages.map((advantage) => (
          <li
            key={advantage.id}
            className="flex h-[230px] flex-col gap-[15px] rounded-[25px] bg-[#FFFFFF] p-[20px]"
          >
            <h3 className="mob-head-4 text-black-default">{advantage.title}</h3>
            <p className="mob-text-3">{advantage.text}</p>
            <div className="mt-auto flex h-[42px] w-[70px] justify-end rounded-[41px] border border-indigo p-[4px] items-center">
              <span className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-indigo text-indigo">
                {advantage.id}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

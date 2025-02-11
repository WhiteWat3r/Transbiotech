import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import abbott from "../../assets/images/arrhythmology/technology-of-cardio/abbott.png";


export const ArrhythmologyTechnologyOfCardio = () => {
  const { isDesktop } = useBreakpoint();


  const advantages = [
    { id: 1, title: "Снижение риска внезапной сердечной смерти" },
    { id: 2, title: "Улучшение качества жизни" },
    { id: 3, title: "Возможность оставаться физически активным без ощущения усталости и одышки." }
  ];

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] py-[40px] desktop:px-[80px] desktop:py-[85px]">
        <SectionNumber number={4} />


        <SectionTitle
          firstChapter={"технология"}
          secondChapter={`кардиостимуляции и\u00A0дефибриляции`}
          className={"max-w-[863px]"}
        />

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          <img alt={""} src={abbott} className={"h-[38px] max-desktop:h-[25px]"} />
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[868px]">
            <DeviceDescription
              maxWidth={"desktop:w-[605px]"}
              description={{
                mainText:
                  "Имплантация электрокардиостимулятора или кардиовертера-дефибриллятора, — жизненно важная медицинская процедура, предназначенная для поддержания нормального сердечного ритма. Устройство протезирует нормальную функцию водителя ритма сердца. Методика позволяет купировать неожиданно возникающие аритмии методом автоматической дефибриляции."
              }}
            />
          </div>

          <ul className="relative z-20 flex flex-col gap-[10px] desktop:flex-row desktop:gap-[21px]">
            {advantages.map((advantage) => (
              <li
                key={advantage.id}
                className="flex min-h-[230px] flex-col rounded-[25px] bg-[#FFFFFF] p-[20px] desktop:min-h-[247px] desktop:w-full desktop:p-[40px] desktop:pb-[25px]"
              >
                <h3 className="mob-head-4 desktop:head-5">
                  {advantage.title}
                </h3>
                <div
                  className="mt-auto flex h-[42px] w-[70px] items-center justify-end rounded-[41px] border border-titian p-[4px]">
                <span
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-titian text-titian">
                  {advantage.id}
                </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
    ;
};

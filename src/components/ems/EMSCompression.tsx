import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/cardiac-surgery/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import abbott from "../../assets/images/arrhythmology/technology-of-cardio/abbott.png";


export const EMSCompression = () => {
  const { isDesktop } = useBreakpoint();


  const advantages = [
    { id: 1, title: "Возможность быстро начать сердечно-легочную реанимацию \nв\u00A0любых условиях" },
    { id: 2, title: "Возможность продолжительной компрессии сердца" },
    { id: 3, title: "Возможность работы \nбез\u00A0электропитания" },
    { id: 4, title: "Удобство\n в\u00A0хранении\n и\u00A0транспортировке" }
  ];

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] py-[40px] pb-[80px] desktop:px-[80px] desktop:pb-[85px]">
        <SectionNumber number={1} />

        <SectionTitle
          firstChapter={"технология механической"}
          secondChapter={`компрессии сердца`}
          className={"max-w-[870px]"}
        />

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          <img alt={""} src={abbott} className={"h-[38px] max-desktop:h-[25px]"} />
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[85px]">
          <div className="desktop:w-[868px]">
            <DeviceDescription descriptionMarginClass={"desktop:ml-[145px]"}
              description={{
                mainText:
                  "Технология позволяет провести сердечно-легочную реанимацию \n в любых условиях — как в стационаре или машине скорой помощи, \n так\u00A0и\u00A0на\u00A0улице.",
                additionalText: (
                  <span className="mt-[10px] block desktop:mt-[25px]">
                Методика представляет собой продолжительный закрытый массаж сердца с помощью кардиомассажера. Аппарат самостоятельно производит механическую компрессию сердца и таким образом освобождает руки медиков для других задач.
                  </span>)
              }}
            />
          </div>

          <ul className="relative z-20 flex flex-col gap-[10px] desktop:flex-row desktop:gap-[21px]">
            {advantages.map((advantage) => (
              <li
                key={advantage.id}
                className="flex min-h-[177px] flex-col rounded-[25px] bg-[#FFFFFF] p-[20px] desktop:min-h-[247px] desktop:w-full desktop:py-[40px] desktop:px-[30px] desktop:pb-[25px]"
              >
                <h3 className="mob-head-4 desktop:text-3">
                  {advantage.title}
                </h3>
                <div
                  className="mt-auto flex h-[42px] w-[70px] items-center justify-end rounded-[41px] border border-purplish-pink p-[4px]">
                <span
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-purplish-pink text-purplish-pink">
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

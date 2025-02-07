import { DeviceAdvantages } from "@/components/../components/cardiac-surgery/ui/DeviceAdvantages";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/useBreakpoint";

import angitecLogo from "../../assets/images/logos/angiteq.svg";


export const CardiacSurgeryVascularProtheses = () => {
  const { isDesktop } = useBreakpoint();


  const advantages = [
    { id: 1, title: "Низкий риск послеоперационных осложнений" },
    { id: 2, title: "Высокая биологическая совместимость" },
    { id: 3, title: "Лёгкое и комфортное формирование амостамоза" }
  ];

  return (
    <div className="relative flex w-full flex-col">
      <div
        className="relative mx-auto flex w-full max-w-[1200px] flex-col px-[20px] py-[40px] desktop:px-[80px] desktop:py-[85px]">
        <SectionNumber number={3} />

        <SectionTitle
          firstChapter={"vascular protheses —"}
          secondChapter={`протезирование сосудов`}
          className={"max-w-[863px]"}
        />

        <div
          className="mb-[26px] mt-[15px] flex justify-start gap-[10px] desktop:mb-[38px] desktop:mt-[27px] desktop:gap-[19px] desktop:max-w-[756px] flex-wrap">
          <img alt={""} src={angitecLogo} className={"max-desktop:h-[25px]"} />
        </div>

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[883px]">
            <DeviceDescription
              maxWidth={"desktop:w-[597px]"}
              description={{
                mainText:
                  "Основная цель сосудистого протезирования — заменить поврежденную артерию на искусственный протез или укрепить её стенку. Технология используется при аневризмах и других заболеваниях сосудов. Сосудистые протезы или графты (grafts) также используются для доступа к сосудистому руслу при гемодиализе и для восстановления сосудов после травм.",
                additionalText: (<>
                <span className="mt-[10px] block desktop:mt-[25px]">
                 Технология изготовления сосудов Angiteq и Sealgraft заключается в особом переплетении нитей, специальном покрытии и способе его нанесения, разработанном в научном центре «Сколково».
                  </span>

                    <span className="mt-[10px] block desktop:mt-[25px]">
                 Технология проводится с помощью протезов российского производителя Angiteq, что обеспечивает надежность и регулярность поставок.
                  </span>
                  </>
                )
              }}
            />
          </div>

          <ul className="relative z-20 flex flex-col gap-[10px] desktop:flex-row desktop:gap-[21px]">
            {advantages.map((advantage) => (
              <li
                key={advantage.id}
                className="flex h-[230px] flex-col gap-[15px] rounded-[25px] bg-[#FFFFFF] p-[20px] desktop:h-[247px] desktop:w-full desktop:gap-[27px] desktop:p-[40px]"
              >
                <h3 className="mob-head-4 desktop:text-3 text-greenish-yellow">
                  {advantage.title}
                </h3>
                <div
                  className="mt-auto flex h-[42px] w-[70px] items-center justify-end rounded-[41px] border border-greenish-yellow p-[4px]">
                <span
                  className="flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-greenish-yellow text-greenish-yellow">
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

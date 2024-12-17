import iabp from "@/assets/bg/iabp.png";
import arrowMobile from "@/assets/perfusion/arrow-mobile.svg";
import arrow from "@/assets/perfusion/arrow.svg";
import getingeMobile from "@/assets/perfusion/getinge-mobile.svg";
import getinge from "@/assets/perfusion/getinge.svg";
import insightraMobile from "@/assets/perfusion/insightra-mobile.svg";
import insightra from "@/assets/perfusion/insightra.svg";
import { SectionTitle } from "@/components/ui/SectionTitle";
import useBreakpoint from "@/hooks/usIsMobile";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";

const iABPDAdvantages = [
  "снижение риска развития серьезных коронарных осложнений у пациента",
  "оптимизация времени перед использованием заместительных технологий",
];

const companies = [
  { id: 1, descImg: insightra, mobileImg: insightraMobile, alt: "insightra" },
  { id: 2, descImg: getinge, mobileImg: getingeMobile, alt: "getinge" },
  { id: 3, descImg: arrow, mobileImg: arrowMobile, alt: "arrow" },
];
const description = {
  mainText:
    "Внутриаортальная баллонная контрпульсация уменьшает нагрузку на сердце и улучшает коронарный кровоток в ситуации риска развития острой сердечной недостаточности. Разгрузочный эффект достигается с помощью быстрого спадения баллона перед началом систолы...",
  additionalText: (
    <>
      {` Наполнение баллона перед диастолой увеличивает коронарный кровоток, что
      улучшает перфузию миокарда.`}
      <span className="mt-[10px] block">
        Методика позволяет разгрузить сердце и разорвать порочный круг
        изменений, которые могут привести к инфаркту миокарда и к развитию
        острой сердечной недостаточности.
      </span>
    </>
  ),
};

export const IABPInfo = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint !== "mobile";

  return (
    <div className="mx-auto my-[80px] flex w-full max-w-[1440px] flex-col">
      <div className="relative">
        <span className="absolute left-[0] top-[50%] h-[250px] w-full translate-y-[-50%] bg-white" />
        <img src={iabp} alt="О нас" className="relative z-20 px-[95px]" />
      </div>
      <div className="flex w-full flex-col px-[20px]">
        <SectionNumber number={1} />

        <SectionTitle
          firstChapter={"внутриаортальная баллонная"}
          secondChapter={"контрпульсация"}
        />

        <ul className="mb-[26px] mt-[15px] flex justify-between">
          {companies.map((company) => (
            <li key={company.id}>
              <img
                src={isDesktop ? company.descImg : company.mobileImg}
                alt={company.alt}
              />
            </li>
          ))}
        </ul>
        <DeviceInfo advantages={iABPDAdvantages} description={description} />
      </div>
    </div>
  );
};

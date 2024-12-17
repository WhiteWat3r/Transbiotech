import ecmoTransplantation from "@/assets/perfusion/ecmo-transplantation.png";
import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";

export const EcmoTransplantation = () => {
  return (
    <div className="w-full relative flex flex-col  mt-[80px]">
      <img src={ecmoTransplantation} alt="" />
      <div className="relative mx-auto pt-[40px] flex w-full max-w-[1440px] flex-col px-[20px] desktop:px-[80px] ">
        <SectionNumber number={5} />

        <SectionTitle
          firstChapter={"ЭКМО"}
          secondChapter={`в трансплантации органов`}
        />
        <TransbiotechBiosoftList />
        <DeviceInfo
          description={{
            mainText:
              "Для использования методики в донорстве нами был создан перфузионный аппарат Ex-Stream и запатентована технология перфузии донорских органов. Протокол методики позволяет сохранить органы умершего человека для последующей трансплантации и таким образом спасти больше жизней пациентов, нуждающихся в пересадке органов.",
          }}
        />
        <p className="mob-head-3 my-[50px] text-grey-2">
          В методике есть возможность реализовать «диагностическое» ЭКМО –
          оценить жизнеспособность донорских органов до их пересадки. Это
          открытие в трансплантологии.
        </p>
        <DeviceInfo
          advantages={[
            "Оценка адекватности объемной перфузии внутренних органов",
            "Возможность изолированной перфузии печени и легкого",
            "Снижение рисков ишемического повреждения перфузируемых органов",
          ]}
        />
      </div>
    </div>
  );
};

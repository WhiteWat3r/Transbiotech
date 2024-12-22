import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LogosList } from "../components/LogosList";
import { DeviceDescription } from "@/components/ui/DeviceDescription";
import { DeviceAdvantages } from "@/components/ui/DeviceAdvantages";

export const EcmoEndovascularSupport = () => {
  return (
    <div className="relative mt-[40px] w-full bg-white">
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[40px] desktop:px-[80px] desktop:py-[85px]">
        <SectionNumber number={6} />

        <SectionTitle
          firstChapter={`ЭКМО-поддержка`}
          secondChapter={`эндоваскулярных вмешательств`}
        />
        <LogosList />

        <div className="z-20 flex flex-col gap-[25px] desktop:gap-[45px]">
          <div className="desktop:w-[775px]">
            <DeviceDescription
              description={{
                mainText:
                  "ЭКМО-поддержка при эндоваскулярных вмешательствах позволяет значительно снизить риск возникновения экстренной ситуации. Плановое чрескожное подключение ЭКМО может быть наиболее эффективным методом превентивной поддержки гемодинамики пациентов во время эндоваскулярных вмешательств высокого риска. Технология выполняется на аппарате нашего производства – перфузионном устройстве Ex-Stream.",
              }}
            />
          </div>
          <div className="desktop:ml-auto desktop:w-[775px]">
            <DeviceAdvantages
              advantages={[
                "Оценка адекватности объемной перфузии внутренних органов",
                "Возможность изолированной перфузии печени и легкого",
                "Снижение рисков ишемического повреждения перфузируемых органов",
              ]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

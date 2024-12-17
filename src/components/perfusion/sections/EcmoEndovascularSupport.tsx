import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "@/components/ui/SectionNumber";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";

export const EcmoEndovascularSupport = () => {
  return (
    <div className="w-full relative mt-[40px] bg-white">
      <div className="relative mx-auto py-[40px] flex w-full max-w-[1440px] flex-col px-[20px] desktop:px-[80px] ">
        <SectionNumber number={6} />

        <SectionTitle
          firstChapter={`ЭКМО-\nподдержка`}
          secondChapter={`эндоваскулярных вмешательств`}
        />
        <TransbiotechBiosoftList />
        <DeviceInfo
          description={{
            mainText:
              "ЭКМО-поддержка при эндоваскулярных вмешательствах позволяет значительно снизить риск возникновения экстренной ситуации. Плановое чрескожное подключение ЭКМО может быть наиболее эффективным методом превентивной поддержки гемодинамики пациентов во время эндоваскулярных вмешательств высокого риска. Технология выполняется на аппарате нашего производства – перфузионном устройстве Ex-Stream.",
          }}
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

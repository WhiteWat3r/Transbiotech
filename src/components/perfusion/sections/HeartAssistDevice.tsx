import bgMain from "@/assets/bg/perfusion-mobile.png";
import bgMainDesc from "@/assets/bg/perfusion-desktop.png";

import biosoft from "@/assets/perfusion/biosoft.svg";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import useBreakpoint from "@/hooks/usIsMobile";

export const HeartAssistDevice = () => {
  const breakpoint = useBreakpoint();
  const isDesktop = breakpoint === "desktop";

  return (
    <div className="bg-white w-full relative">
            <img
        // ref={imgRef}
        src={isDesktop ?bgMainDesc : bgMain}
        alt="Transbiotech"
        className="absolute left-[50%] z-[2] translate-x-[-50%] object-contain desktop:top-[314px]"
        // onLoad={handleImageLoad}
      />
    <div className="mx-auto flex w-full max-w-[1440px] flex-col  px-[20px] py-[40px] desktop:px-[80px] desktop:py-[84px] relative">
      <SectionNumber number={2} />

      <SectionTitle
        firstChapter={"искусственный\n"}
        secondChapter={`желудочек\u00A0сердца`}
      />
      <img
        src={biosoft}
        alt="Биософт-M"
        className="mb-[26px] mt-[15px] w-[111px] desktop:mb-[40px] desktop:mt-[25px] desktop:w-[170px]"
      />

      <div className="desktop:max-w-[883px]">
        <DeviceInfo
          maxWidth={"desktop:w-[620px]"}
          description={{
            mainText:
              "VAD —​ имплантируемый насос, заменяющий работу желудочков​ сердца. Технология используется для поддержки или замещения функции желудочков сердца у пациентов с тяжелыми формами сердечной недостаточности.",
            additionalText: (
              <>
                {` Как результат – стабильная гемодинамика.`}
                <span className="mt-[10px] block desktop:mt-[25px]">
                  VAD используется как устройство для сохранения жизни пациента
                  на период ожидания трансплантации сердца. Использование
                  нательных модулей управления и модуля электропитания позволяет
                  пациенту сохранять мобильность.
                </span>
                <span className="mt-[10px] block desktop:mt-[25px]">
                  Технология проводится с помощью аппарата российского
                  производителя Дона-М, что обеспечивает надежность и
                  регулярность поставок.{" "}
                </span>
              </>
            ),
          }}
        />
      </div>
      <p className="mob-head-3 my-[50px] text-grey-2 desktop:head-4 desktop:my-[85px] desktop:max-w-[895px]">
        {`Технология VAD с помощью Stream Cardio – первый и единственный в\u00A0мире
        универсальный комплекс для\u00A0механической поддержки насосной функции
        левого и правого желудочков.`}
      </p>

      <DeviceInfo
        advantages={[
          "качественный и\u00A0надёжный насос",
          "легкий аккумулятор обеспечивает комфорт и безопасность пациента",
          "используется и для левого, и для правого желудочка, а также для обоих одновременно",
        ]}
        rowAdvantages={isDesktop}
      />
    </div>
    </div>
  );
};

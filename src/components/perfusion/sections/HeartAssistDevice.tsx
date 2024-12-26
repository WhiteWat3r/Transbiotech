import bgMain from "@/assets/bg/perfusion-mobile.png";
import bgMainDesc from "@/assets/bg/perfusion-desktop.png";

import { SectionTitle } from "@/components/ui/SectionTitle";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import useBreakpoint from "@/hooks/useBreakpoint";
import { useHighlightedText } from "@/hooks/useScrollHighlight";
import { LogosList } from "../components/LogosList";

export const HeartAssistDevice = () => {
  const { isDesktop } = useBreakpoint();


  const textContent = `Технология VAD с помощью Stream Cardio – первый и единственный в\u00A0мире
  универсальный комплекс для\u00A0механической поддержки насосной функции
  левого и правого желудочков.`;

  const { highlightedText, elementRef } = useHighlightedText({ textContent });

  return (
    <div className="relative w-full bg-white">
      <img
        // ref={imgRef}
        src={isDesktop ? bgMainDesc : bgMain}
        alt="Transbiotech"
        className="absolute left-[50%] translate-x-[-50%] object-contain desktop:top-[314px]"
        // onLoad={handleImageLoad}
      />
      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[40px] desktop:px-[80px] desktop:py-[84px]">
        <SectionNumber number={2} />

        <SectionTitle
          firstChapter={"искусственный\n"}
          secondChapter={`желудочек\u00A0сердца`}
        />

        <LogosList logos={["biosoft"]} />
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
                    VAD используется как устройство для сохранения жизни
                    пациента на период ожидания трансплантации сердца.
                    Использование нательных модулей управления и модуля
                    электропитания позволяет пациенту сохранять мобильность.
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
        <p
          ref={elementRef}
          className="mob-head-3 desktop:head-4 my-[50px] flex flex-wrap text-grey-2 desktop:my-[85px] desktop:max-w-[895px]"
        >
          {highlightedText}
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

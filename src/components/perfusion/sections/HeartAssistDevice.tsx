import bgMain from "@/assets/bg/perfusion-mobile.png";
import biosoft from "@/assets/perfusion/biosoft.svg";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { DeviceInfo } from "../../ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";

export const HeartAssistDevice = () => {
  // const breakpoint = useBreakpoint();
  // const isDesktop = breakpoint !== "mobile";

  return (
    <div className="mx-auto flex w-full max-w-[1440px] flex-col bg-white px-[20px] py-[40px]">
      <SectionNumber number={2} />

      <SectionTitle
        firstChapter={"искусственный"}
        secondChapter={`желудочек сердца`}
      />
      <img
        src={biosoft}
        alt="Биософт-M"
        className="mb-[26px] mt-[15px] w-[111px]"
      />
      <img
        // ref={imgRef}
        src={bgMain}
        alt="Transbiotech"
        className="absolute left-[50%] z-[2] translate-x-[-50%] object-contain"
        // onLoad={handleImageLoad}
      />
      <DeviceInfo
        description={{
          mainText:
            "VAD —​ имплантируемый насос, заменяющий работу желудочков​ сердца. Технология используется для поддержки или замещения функции желудочков сердца у пациентов с тяжелыми формами сердечной недостаточности.",
          additionalText: (
            <>
              {` Как результат – стабильная гемодинамика.`}
              <span className="mt-[10px] block">
                VAD используется как устройство для сохранения жизни пациента на
                период ожидания трансплантации сердца. Использование нательных
                модулей управления и модуля электропитания позволяет пациенту
                сохранять мобильность.
              </span>
              <span className="mt-[10px] block">
                Технология проводится с помощью аппарата российского
                производителя Дона-М, что обеспечивает надежность и регулярность
                поставок.{" "}
              </span>
            </>
          ),
        }}
      />

      <p className="mob-head-3 my-[50px] text-grey-2">
        Технология VAD с помощью Stream Cardio – первый и единственный в мире
        универсальный комплекс для механической поддержки насосной функции
        левого и правого желудочков.
      </p>

      <DeviceInfo
        advantages={[
          "качественный и надёжный насос",
          "легкий аккумулятор обеспечивает комфорт и безопасность пациента",
          "используется и для левого,  и для правого желудочка,  а также для обоих одновременно",
        ]}
      />
    </div>
  );
};

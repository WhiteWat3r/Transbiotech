import React from "react";
import useBreakpoint from "../../hooks/usIsMobile";
import bgMain from "../../assets/bg/perfusion-mobile.png";

import biosoft from "../../assets/perfusion/biosoft.svg";
import { DeviceInfo } from "../ui/DeviceInfo";

export const HeartAssistDevice = () => {
  // const breakpoint = useBreakpoint();
  // const isDesktop = breakpoint !== "mobile";

  return (
    <div className="mx-auto py-[40px] flex w-full max-w-[1440px] flex-col px-[20px] bg-white">
      <span className="mob-head-1 mb-[25px] text-gainsboro">2</span>
      <p className="geologica-text text-[36px] leading-[36px] tracking-[-0.2px] text-grey-1">
        искусственный{" "}
        <span className="block text-black-default">желудочек</span>
        <span className="block text-black-default">сердца</span>
      </p>
      <img
        src={biosoft}
        alt="Биософт-M"
        className="mb-[26px] mt-[15px] w-[111px]"
      />
      <img
        // ref={imgRef}
        src={bgMain}
        alt="Задний фон"
        className="absolute left-[50%] z-[2] translate-x-[-50%] object-contain"

        // onLoad={handleImageLoad}
      />
      <DeviceInfo
        description={{
          mainText:
            "VAD —​ имплантируемый насос, заменяющий работу желудочков​ сердца. Технология используется для поддержки или замещения функции желудочков сердца у пациентов с тяжелыми формами сердечной недостаточности... ",
          additionalText: (
            <>
              Как результат – стабильная гемодинамика.
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

      <p className="head-5 my-[50px] text-grey-2">
        Технология VAD с помощью Stream Cardio – первый и единственный в мире
        универсальный комплекс для механической поддержки насосной функции
        левого и правого желудочков.
      </p>

      <DeviceInfo
        advantages={[
          "снижение риска развития серьезных коронарных осложнений у пациента",
          "оптимизация времени перед использованием заместительных технологий",
        ]}
      />
    </div>
  );
};

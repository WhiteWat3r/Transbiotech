import perfusion4 from "@/assets/perfusion/perfusion-4.png";

import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";
import { SectionTitle } from "@/components/ui/SectionTitle";

export const ECMOHeartFailure = () => {
  return (
    <div className="relative flex w-full flex-col desktop:flex-row">
      <img
        src={perfusion4}
        alt="ЭКМО при внезапной сердечной смерти"
        className="w-[75%] desktop:absolute desktop:left-[-95px] desktop:top-[188px] desktop:h-[484px] desktop:w-[564px]"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-[20px] py-[40px] desktop:ml-auto desktop:self-end desktop:px-[80px] desktop:py-0 desktop:pb-[170px]">
        <div className="flex flex-col desktop:ml-auto desktop:max-w-[775px]">
          <SectionNumber number={4} />

          <SectionTitle
            firstChapter={"ЭКМО при\u00A0внезапной"}
            secondChapter={`сердечной смерти`}
          />

          <TransbiotechBiosoftList />
          <DeviceInfo
            description={{
              mainText:
                "Технология позволяет протезировать функцию сердца и лёгких в случае острой остановки кровообращения. Метод используется у пациентов с остановкой сердечной деятельности для возобновления и поддержания кровообращения в организме у пациентов с остановкой сердца.",
              additionalText: (
                <>
                  <span className="mt-[10px] block desktop:mt-[25px]">
                    Процедура выполняется специализированной ЭКМО-командой в
                    условиях стационарного отделения скорой медицинской помощи
                    или специализированной бригадой скорой медицинской помощи на
                    выезде.
                  </span>
                  <span className="mt-[10px] block desktop:mt-[25px]">
                    Технология выполняется на аппарате нашего производства –
                    перфузионном устройстве Ex-Stream.
                  </span>
                </>
              ),
            }}
          />
        </div>
      </div>
    </div>
  );
};

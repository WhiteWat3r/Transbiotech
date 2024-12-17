import perfusion4 from "@/assets/perfusion/perfusion-4.png";
import { DeviceInfo } from "@/components/ui/DeviceInfo";
import { SectionNumber } from "../../ui/SectionNumber";
import { TransbiotechBiosoftList } from "../components/TransbiotechBiosoftList";

export const ECMOHeartFailure = () => {
  return (
    <div className="w-full">
      <img
        src={perfusion4}
        alt="ЭКМО при внезапной сердечной смерти"
        className="w-[75%]"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col px-[20px] py-[40px]">
        <SectionNumber number={4} />

        <p className="geologica-text text-[36px] leading-[36px] tracking-[-0.4px] text-grey-1">
          {`ЭКМО при\u00A0внезапной`}
          <span className="block tracking-[-1px] text-black-default">{`сердечной смерти`}</span>
        </p>
        <TransbiotechBiosoftList />
        <DeviceInfo
          description={{
            mainText:
              "Технология позволяет протезировать функцию сердца и лёгких в случае острой остановки кровообращения. Метод используется у пациентов с остановкой сердечной деятельности для возобновления и поддержания кровообращения в организме у пациентов с остановкой сердца.",
            additionalText: (
              <>
                <span className="mt-[10px] block">
                  Процедура выполняется специализированной ЭКМО-командой в
                  условиях стационарного отделения скорой медицинской помощи или
                  специализированной бригадой скорой медицинской помощи на
                  выезде.
                </span>
                <span className="mt-[10px] block">
                  Технология выполняется на аппарате нашего производства –
                  перфузионном устройстве Ex-Stream.
                </span>
              </>
            ),
          }}
        />
      </div>
    </div>
  );
};

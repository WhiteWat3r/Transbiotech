import { DeviceInfo } from "@/components/ui/DeviceInfo";
import perfusionEcmo from '@/assets/perfusion/perfusion-ecmo.png'

export const ECMOAdvantages = () => {
  return (
    <div className="w-full relative flex flex-col bg-gainsboro overflow-hidden">
    <div className="relative mx-auto pt-[40px] flex w-full max-w-[1440px] flex-col px-[20px] desktop:px-[80px] ">
      <DeviceInfo
        advantages={[
          "работа от аккумулятора не менее пяти часов, что позволяет обеспечить безопасную и бесперебойную перфузию вне стационара и при транспортировке",
          "простота работы в экстренной ситуации благодаря понятному интерфейсу",
          "подготовка к работе менее, чем за десять минут",
          "возможность применения в сантранспорте",
          "повышенная ударо-  и влагозащищенность"
        ]}
        marginLeft={false}
      />
    </div>
    <img src={perfusionEcmo} alt="" className="w-[85%] ml-auto mt-[-160px] relative z-20"/>

    </div>
  );
};

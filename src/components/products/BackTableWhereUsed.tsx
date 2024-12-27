import React from "react";
import { ProductSlider } from "./ProductSlider";
import { DeviceDescription } from "../ui/DeviceDescription";
import tube from "@/assets/products/tube.png";

const backTableDeviceDescription = {
  mainText: `Комплект стола весит 36 кг и выдерживает суммарную нагрузку до 150 кг. На стол можно размещать дополнительное навесное оборудование.`,
  additionalText: (
    <>
      <br />
      <br />
      {`Стол оснащен 4-мя сдвоенными колесами с ножными рычагами тормоза, которые обеспечивают удобство перемещения и надежную фиксацию стола на месте.`}
    </>
  ),
};

export const BackTableWhereUsed = () => {
  return (
    <div className="relative mx-auto mb-[170px] desktop:mb-0">
      <img src={tube} alt="" className="absolute" />

      <div className="flex w-full max-w-[1440px] flex-col px-[20px] 1200:flex-row-reverse 1200:gap-[72px] 1200:px-[80px] 1200:pt-[50px]">
        <ProductSlider type={"back-table"} />
        <div className="flex flex-col desktop:min-w-[438px]">
          <p className="mob-head-3 desktop:head-4 mb-[18px] mt-[31px] desktop:mb-[25px] desktop:mt-[142px]">
            основные характеристики
          </p>
          <DeviceDescription
            maxWidth="w-full"
            noTitle
            description={backTableDeviceDescription}
          />
        </div>
      </div>
    </div>
  );
};

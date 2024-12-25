import React from "react";

import backTable from "@/assets/products/back-table-main.png";
import text from "@/assets/products/back-table-text.svg";
import { DeviceDescription } from "../ui/DeviceDescription";
import { ProductSlider } from "./ProductSlider";

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

export const BackTableMain = () => {
  return (
    <div className="mx-auto w-full max-w-[1440px]">
      <div className="relative mt-[86px] h-[540px] w-full">
        <img
          src={backTable}
          alt=""
          className="absolute right-0 top-0 z-20 w-[375px]"
        />

        <img src={text} alt="" />
      </div>

      <div className="mb-[102px] mt-[40px] w-full px-[20px]">
        <h2 className="mob-head-2 mb-[15px] whitespace-pre-wrap text-grey-2">{`стол трансплантолога\nBack-Table 1.0`}</h2>

        <p className="mob-text-3 mb-[80px] text-grey-2">{`Аппарат предназначен для организации искусственного кровообращения для повышения эффективности оказания помощи в реаниматологии, трансплантологии, онкологии, кардиологии.`}</p>
        <ProductSlider type={"back-table"} />
        <p className="mob-head-3 mb-[18px] mt-[31px]">
          основные характеристики
        </p>
        <DeviceDescription
          maxWidth="w-full"
          noTitle
          description={backTableDeviceDescription}
        />
      </div>
    </div>
  );
};

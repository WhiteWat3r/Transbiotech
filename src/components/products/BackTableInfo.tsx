import React from "react";
import BackTable from "@/assets/products/back-table-tooltips.png";
import { Tooltip } from "../ui/Tooltip";

export const BackTableInfo = () => {
  return (
    <div className="w-full bg-gainsboro pb-[82px] pt-[40px] desktop:pt-[94px] desktop:pb-[145px]">
      <div className="relative flex w-full flex-col gap-[31px] px-[20px] tablet:w-[413px] tablet:mx-auto">
        <img
          src={BackTable}
          alt={`Back table`}
          className="h-auto w-full object-contain "
        />

        <Tooltip text="Инфузионная стойка" top="7%" left="39%" />
        <Tooltip text="Стол трансплантолога" top="40%" left="50%" />
        <Tooltip
          text="Дополнительный универсальный столик"
          top="46%"
          left="18%"
          textLeft="250%"
          maxWidth="240px"
        />
        <Tooltip text="Рабочая кювета" top="53%" left="55%" />
        <Tooltip
          text="Краник для слива избытка жидкости"
          top="58%"
          left="62%"
          maxWidth="190px"
        />

        <Tooltip
          text="Зажимной винтовой держатель"
          top="57%"
          left="41%"
          maxWidth="223px"
        />

        <Tooltip
          text="Универсальный держатель для дополнительного оборудования"
          top="57%"
          left="20%"
          maxWidth="335px"
          textLeft="400%"
        />

        <Tooltip text="Полнотелый рейлинг с крепежом" top="72%" left="41%" />

        <Tooltip
          text="Колеса со встроенными тормозами"
          top="85%"
          left="41%"
          maxWidth="244px"
        />
      </div>
    </div>
  );
};

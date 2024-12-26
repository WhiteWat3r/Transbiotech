import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import exStream from "@/assets/perfusion/ex-stream.png";
import grad from "@/assets/products/grad-border.svg";

import backTable from "@/assets/products/back-table.png";
import { MoreButton } from "../ui/MoreButton";
import useBreakpoint from "@/hooks/useBreakpoint";

const products = [
  {
    id: 1,
    name: `аппарат\nEx-Stream`,
    desc: "Первый российский аппарат ЭКМО",
    onClick: () => {},
    img: exStream,
    sx: "w-[200px] desktop:w-[280px] desktop:mt-[100px] desktop:mr-[35px]",
  },
  {
    id: 2,
    name: `Back-Table 1.0`,
    desc: "Стол трансплантолога",
    onClick: () => {},
    img: backTable,
    sx: "w-[170px] desktop:w-[181px] desktop:mb-[8px]",
  },
];

export const ProductsMain = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="mt-[5px] flex w-full flex-col px-[20px] desktop:mt-[38px] desktop:px-[80px] max-w-[1440px] mx-auto">
      <SectionTitle firstChapter={"продукты"} />
      <ul className="mt-[70px] flex w-full flex-col gap-[30px] desktop:mt-0 desktop:flex-row">
        {products.map((product) => (
          <li
            className="relative mx-auto flex w-full max-w-[370px] flex-col gap-[10px] px-[25px]
             pb-[30px] desktop:max-w-[510px] desktop:px-[40px] desktop:pb-[60px]"
            key={product.id}
          >
            <img src={grad} alt="" className="absolute bottom-0 right-0" />
            <img
              src={product.img}
              alt={product.name}
              className={`self-center ${product.sx}`}
            />
            <p className="mob-head-3 mt-[22px] whitespace-pre-wrap desktop:head-4">
              {product.name}
            </p>
            <p className="mob-text-3-1 mb-[14px] whitespace-pre-wrap text-grey-2 desktop:text-2 desktop:mb-[17px]">
              {product.desc}
            </p>
            <MoreButton type={"ghost "} />
          </li>
        ))}
      </ul>
    </div>
  );
};

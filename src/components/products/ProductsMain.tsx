import React from "react";
import { SectionTitle } from "../ui/SectionTitle";
import exStream from "@/assets/perfusion/ex-stream.png";
import grad from "@/assets/products/grad-border.svg";

import backTable from "@/assets/products/back-table.png";
import { MoreButton } from "../ui/MoreButton";

const products = [
  {
    id: 1,
    name: `аппарат\nEx-Stream`,
    desc: "Первый российский аппарат ЭКМО",
    onClick: () => {},
    img: exStream,
    width: 200,
  },
  {
    id: 2,
    name: `Back-Table 1.0`,
    desc: "Стол трансплантолога",
    onClick: () => {},
    img: backTable,
    width: 117,
  },
];

export const ProductsMain = () => {
  return (
    <div className="mt-[5px] flex h-[825px] w-full flex-col px-[20px]">
      <SectionTitle firstChapter={"продукты"} />
      <ul className="mt-[70px] flex w-full flex-col gap-[30px]">
        {products.map((product) => (
          <li className="relative mx-auto flex w-full max-w-[370px] flex-col gap-[10px] px-[25px] pb-[30px]" key={product.id}>
            <img src={grad} alt="" className="absolute right-0 bottom-0"/>
            <img
              src={product.img}
              alt="Ex-Stream"
              className={`self-center`}
              style={{ width: `${product.width}px` }}
            />
            <p className="mob-head-3 mt-[22px] whitespace-pre-wrap">
              {product.name}
            </p>
            <p className="mob-text-3-1 mb-[14px] whitespace-pre-wrap text-grey-2">
              {product.desc}
            </p>
            <MoreButton type={"ghost "} />
          </li>
        ))}
      </ul>
    </div>
  );
};

import { useRef } from "react";

import exStream from "@/assets/images/perfusion/ex-stream.png";
import backTable from "@/assets/images/products/back-table.png";
import { BackTableInfo } from "@/components/products/BackTableInfo";
import { BackTableMain } from "@/components/products/BackTableMain";
import { BackTableWhereUsed } from "@/components/products/BackTableWhereUsed";
import { ExStreamDesc } from "@/components/products/ExStreamDesc";
import { ExStreamDevice } from "@/components/products/ExStreamDevice";
import { ExStreamWhereUsed } from "@/components/products/ExStreamWhereUsed";
import { ProductAdvantages } from "@/components/products/ProductAdvantages";
import { ProductsMain } from "@/components/products/ProductsMain";
import { ProductSwiperWithTooltips } from "@/components/products/ProductSwiperWithTooltips";

export const Products = () => {
  const products = [
    {
      id: 1,
      name: `аппарат\nEx-Stream`,
      desc: "Первый российский аппарат ЭКМО",
      onClick: () => scrollToSection(exStreamRef),
      img: exStream,
      sx: "w-[200px] desktop:w-[280px] desktop:mt-[100px] desktop:mr-[35px]",
    },
    {
      id: 2,
      name: `Back-Table 1.0`,
      desc: "Стол трансплантолога",
      onClick: () => scrollToSection(backTableRef),
      img: backTable,
      sx: "w-[170px] desktop:w-[181px] desktop:mb-[8px]",
    },
  ];

  const exStreamRef = useRef(null);
  const backTableRef = useRef(null);

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <ProductsMain products={products} />
      <div ref={exStreamRef}>
        <ExStreamDevice />
      </div>
      <ExStreamWhereUsed />
      <ProductAdvantages type={"Ex\u2011Stream"} />
      <ProductSwiperWithTooltips />
      <ExStreamDesc />
      <div ref={backTableRef}>
        <BackTableMain />
      </div>
      <BackTableWhereUsed />
      <ProductAdvantages type={"Back-Table 1.0"} />
      <BackTableInfo />
    </>
  );
};

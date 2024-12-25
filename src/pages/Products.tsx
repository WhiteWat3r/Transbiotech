import { BackTableMain } from "@/components/products/BackTableMain";
import { ExStreamDesc } from "@/components/products/ExStreamDesc";
import { ExStreamDevice } from "@/components/products/ExStreamDevice";
import { ProductAdvantages } from "@/components/products/ProductAdvantages";
import { ProductSwiperWithTooltips } from "@/components/products/ProductSwiperWithTooltips";
import { ProductsMain } from "@/components/products/ProductsMain";

export const Products = () => {
  return (
    <>
      <ProductsMain />
      <ExStreamDevice />
      <ProductAdvantages type={'Ex-Stream'}/>
      <ProductSwiperWithTooltips />
      <ExStreamDesc />
      <BackTableMain />
      <ProductAdvantages type={'Back-Table 1.0'}/>
    </>
  );
};

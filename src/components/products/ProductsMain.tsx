import { SectionTitle } from "../ui/SectionTitle";
import grad from "@/assets/products/grad-border.svg";

import { MoreButton } from "../ui/MoreButton";
import useBreakpoint from "@/hooks/useBreakpoint";

export const ProductsMain = ({
  products,
}: {
  products: {
    id: number;
    name: string;
    onClick: () => void;
    img: string;
    sx: string;
    desc: string;
  }[];
}) => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="mx-auto mt-[5px] flex w-full max-w-[1440px] flex-col px-[20px] desktop:mt-[38px] desktop:px-[80px]">
      <SectionTitle firstChapter={"продукты"} />
      <ul className="mt-[70px] flex w-full flex-col gap-[30px] desktop:mt-0 desktop:flex-row">
        {products.map((product) => (
          <li
            className="relative mx-auto flex w-full max-w-[370px] flex-col gap-[10px] px-[25px] pb-[30px] desktop:max-w-[510px] desktop:px-[40px] desktop:pb-[60px]"
            key={product.id}
          >
            <img
              src={grad}
              alt=""
              className="pointer-events-none absolute bottom-0 right-0"
            />
            <img
              src={product.img}
              alt={product.name}
              className={`self-center ${product.sx}`}
            />
            <p className="mob-head-3 desktop:head-4 mt-[22px] whitespace-pre-wrap">
              {product.name}
            </p>
            <p className="mob-text-3-1 desktop:text-2 mb-[14px] whitespace-pre-wrap text-grey-2 desktop:mb-[17px]">
              {product.desc}
            </p>
            <MoreButton type={"ghost "} onClick={product.onClick} />
          </li>
        ))}
      </ul>
    </div>
  );
};

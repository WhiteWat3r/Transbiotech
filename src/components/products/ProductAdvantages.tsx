import advantagePic from "@/assets/products/advantage-pic.png";
import advantageTable from "@/assets/products/table-advantage.png";
import advantageTableDesl from "@/assets/products/advantage-pic-desk.png";


import { backTableAdvantages, exStreamAdvantages } from "@/utils/constants";
import useBreakpoint from "@/hooks/useBreakpoint";

export const ProductAdvantages = ({
  type,
}: {
  type: "Back-Table 1.0" | "Ex-Stream";
}) => {
  const isExStream = type === "Ex-Stream";
  const advantages = isExStream ? exStreamAdvantages : backTableAdvantages;
const {isDesktop} = useBreakpoint()

  return (
    <div className="w-bull relative mx-auto mb-[80px] max-w-[1440px] px-[20px] desktop:mt-[155px] desktop:px-[80px]">
      <p className="mob-head-1 absolute top-0 tracking-[-1px] text-gainsboro desktop:top-auto desktop:bottom-0">
        преимущества {`${type}`}
      </p>
      <ul className="relative z-20 flex flex-col gap-[10px] pt-[75px] desktop:flex-row desktop:flex-wrap desktop:gap-[20px]">
        {advantages.map((adv,) => {
          return adv.id === 99 && isExStream ? (
            <li
              key={8}
              className={`${isExStream ? "h-[250px]" : "h-[130px]"} desktop:h-[307px] desktop:w-[245px]`}
            >
              <img src={isDesktop ? advantageTableDesl :advantagePic} alt="" className="desktop:h-full" />
            </li>
          ) : (adv.id === 7 && !isExStream) ? (
            <li
              key={7}
              className={`h-[250px] mb-[60px] desktop:h-[307px] desktop:w-[245px]`}
            >
              <img src={advantageTable} alt="" />
            </li>
          ) : (
            <li
              className={`flex ${isExStream ? "h-[250px]" : "h-[130px]"} flex-col rounded-[25px] bg-white p-[20px] desktop:h-[307px] desktop:w-[245px] desktop:px-[28px] desktop:pt-[40px]`}
              key={adv.id}
            >
              <h3 className="mob-head-4 desktop:text-2 text-black-default">{adv.title}</h3>
              {isExStream && (
                <p className="mob-text-3-1 desktop:text-5 mt-[15px] text-grey-2">
                  {adv.text}
                </p>
              )}
              <span className="text-4 flex h-[34px] mt-auto w-[34px] items-center justify-center rounded-[50%] border border-indigo text-indigo desktop:mb-[10px]">
                {adv.id}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

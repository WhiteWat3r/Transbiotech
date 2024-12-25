import advantagePic from "@/assets/products/advantage-pic.png";
import advantageTable from "@/assets/products/table-advantage.png";

import { backTableAdvantages, exStreamAdvantages } from "@/utils/constants";

export const ProductAdvantages = ({
  type,
}: {
  type: "Back-Table 1.0" | "Ex-Stream";
}) => {
  const isExStream = type === "Ex-Stream";
  const advantages = isExStream ? exStreamAdvantages : backTableAdvantages;
  return (
    <div className="w-bull relative mx-auto mb-[80px] max-w-[1440px] px-[20px]">
      <p className="mob-head-1 absolute top-0 tracking-[-1px] text-gainsboro">
        преимущества {`${type}`}
      </p>
      <ul className="relative z-20 flex flex-col gap-[10px] pt-[75px]">
        {advantages.map((adv, index) => {
          return index === 4 && isExStream ? (
            <li
              key={8}
              className={`${isExStream ? "h-[250px]" : "h-[130px]"} `}
            >
              <img src={advantagePic} alt="" />
            </li>
          ) : (adv.id === 7 && !isExStream) ? (
            <li
              key={7}
              className={`${isExStream ? "h-[250px]" : "h-[130px]"} `}
            >
              <img src={advantageTable} alt="" />
            </li>
          ) : (
            <li
              className={`flex ${isExStream ? "h-[250px]" : "h-[130px]"} flex-col rounded-[25px] bg-white p-[20px]`}
              key={adv.id}
            >
              <h3 className="mob-head-4">{adv.title}</h3>
              {isExStream && (
                <p className="mob-text-3-1 mt-[15px] text-grey-2">
                  {adv.text}
                </p>
              )}
              <span className="text-4 flex h-[34px] mt-auto w-[34px] items-center justify-center rounded-[50%] border border-indigo text-indigo">
                {adv.id}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import advantageTableDesl from "@/assets/images/products/advantage-pic-desk.png";
import advantagePic from "@/assets/images/products/advantage-pic.png";
import advantageTable from "@/assets/images/products/table-advantage.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { backTableAdvantages, exStreamAdvantages } from "@/utils/constants";

export const ProductAdvantages = ({
  type,
}: {
  type: "Back-Table 1.0" | "Ex\u2011Stream";
}) => {
  const isExStream = type === "Ex\u2011Stream";
  const advantages = isExStream ? exStreamAdvantages : backTableAdvantages;
  const { isDesktop } = useBreakpoint();

  return (
    <div className={`w-bull relative mx-auto mb-[80px] max-w-[1200px] px-[20px] ${isExStream  ? 'desktop:mt-[150px] desktop:pb-[243px]': "desktop:mt-[155px] desktop:pb-[235px]"}  desktop:px-[80px] `}>
      <p className="mob-head-1 absolute top-0 tracking-[-1px] text-gainsboro desktop:bottom-[90px] desktop:top-auto desktop:head-1">
        преимущества {`${type}`}
      </p>
      <ul className="relative z-20 grid grid-cols-1 desktop:grid-cols-4 gap-[10px] pt-[75px] desktop:flex-row desktop:flex-wrap desktop:gap-[20px] justify-between">
        {advantages.map((adv) => {
          return adv.id === 99 && isExStream ? (
            <li
              key={8}
              className={` h-[250px]  desktop:h-[307px] `}
            >
              <img
                src={isDesktop ? advantageTableDesl : advantagePic}
                alt=""
                className="h-full w-full object-cover rounded-[25px]"
              />
            </li>
          ) : adv.id === 7 && !isExStream ? (
            <li
              key={7}
              className={`mb-[60px] h-[250px] desktop:h-[257px] desktop:mb-0 desktop:col-span-2`}
            >
              <img src={advantageTable} alt="" className="h-full object-cover rounded-[25px] w-full" />
            </li>
          ) : (
            <li
              className={`flex ${isExStream ? "h-[250px] desktop:h-[307px]" : "h-[130px] desktop:h-[257px]"} flex-col rounded-[25px] bg-white p-[20px]  desktop:px-[28px] desktop:pt-[40px]`}
              key={adv.id}
            >
              <h3 className="mob-head-4 desktop:text-2 text-black-default">
                {adv.title}
              </h3>
              {isExStream && (
                <p className="mob-text-3-1 desktop:text-5 mt-[15px] text-grey-2">
                  {adv.text}
                </p>
              )}
              <span className="text-4 mt-auto flex h-[34px] w-[34px] items-center justify-center rounded-[50%] border border-indigo text-indigo desktop:mb-[10px]">
                {adv.id}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

import { perfusionCards } from "@/utils/constants";
import { MobileLogo } from "../../icons/MobileLogo";

export const PerfusionTechnologies = () => {
  return (
    <div className="relative mx-auto mt-[80px] flex w-full max-w-[1440px] flex-col gap-[45px] px-[20px] desktop:mt-[185px] desktop:px-[80px]">
      <h2 className={`head-1 absolute bottom-[-40px] text-gainsboro`}>
        техн
        <wbr />
        оло
        <wbr />
        гии
      </h2>

      <ul className="relative z-10 grid grid-cols-2 gap-[19px] desktop:grid-cols-3">
        {perfusionCards.map((card) => (
          // <li key={card.id} className="backdrop-blur-[40px] bg-[#FFFFFF]">
          <li
            key={card.id}
            className={` flex h-[149px] flex-col justify-between rounded-[25px] bg-[#FFFFFF] bg-opacity-30 p-[20px] desktop:h-[177px] desktop:p-[30px] 
              desktop:hover:translate-y-[-10px] duration-500 desktop:hover:bg-opacity-100
              ${
              card.id === 7  ? "desktop:col-start-2" : ""
            }`}
          >
            {" "}
            <div className="flex items-center justify-between">
              <span className="text-5 rounded-[24px] border-[1px] border-[#8080804D] px-[4px] py-[1.5px] text-[#8080804D]">
                Перфузия
              </span>
              <MobileLogo width="20" height="18" />
            </div>
            <p className="mob-button desktop:head-5">{card.text}</p>
          </li>
          // </li>
        ))}
      </ul>
    </div>
  );
};

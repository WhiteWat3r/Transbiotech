import bgMain from "@/assets/images/arrhythmology/arrhythmology-main.png";
import bgMainDesktop from "@/assets/images/arrhythmology/arrhythmology-main.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { mainSectionButtons } from "@/utils/constants";

export const ArrhythmologyMain = () => {
  const { isDesktop, breakpoint } = useBreakpoint();

   const cardiacSectionButtons = [
    { id: 1, text: "Инфо" },
    { id: 2, text: "Технологии" },
    { id: 3, text: "Сопровождение" },
  ];

  return (
    <div
      className={`relative mt-[-75px] h-[700px] w-full overflow-x-clip bg-titian bg-cover text-white desktop:h-[650px]`}
    >
      <div
        className="relative z-30 mx-auto flex h-full w-full max-w-[1200px] flex-col gap-[15px] px-5 desktop:gap-[25px] desktop:px-[80px]">
        <img
          src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
          alt="Transbiotech"
          className="absolute right-[-275px] top-[35px] z-[2] object-contain desktop:right-[-350px] desktop:top-[-168px] h-[550px] desktop:h-[140%] max-w-none max-desktop:animate-arrhythmology-main-mobile desktop:animate-arrhythmology-main"
        />

        <h1 className="z-1 mob-head-2 desktop:head-1-1 z-30 mt-auto">
          Аритмология
        </h1>
        <ul
          className="flex gap-[10px] text-[12px] font-semibold leading-[14.4px] desktop:gap-[20px] desktop:text-[18px] desktop:font-medium desktop:leading-[21.6px]">
          {cardiacSectionButtons.map((btn) => (
            <li key={btn.id}>
              <button
                className={`geologica-text flex h-[22px] items-center justify-center rounded-[20px] border border-gainsboro text-gainsboro px-[8px] tracking-tighter desktop:h-[38px] desktop:rounded-[63px] desktop:px-[16px] ${btn.id == 1 ? "bg-white text-titian" : ""} `}
              >
                {btn.text}
              </button>
            </li>
          ))}
        </ul>

        <div className={"flex flex-col desktop:flex-row mb-[73px] mt-[10px] desktop:mb-[100px] desktop:mt-[15px]"}>
          <p
            className="mob-text-3 desktop:text-4 max-w-[274px] text-platinum  desktop:max-w-[333px]">
            {`Работа над восстановлением сердечного ритма.`}
          </p>
        </div>
      </div>
    </div>
  );
};

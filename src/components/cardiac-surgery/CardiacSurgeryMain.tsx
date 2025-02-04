import bgMainDesktop from "@/assets/images/cardio-surgery/cardio-surgery.png";
import bgMain from "@/assets/images/cardio-surgery/cardio-surgery-mobile.png";
import useBreakpoint from "@/hooks/useBreakpoint";
import { mainSectionButtons } from "@/utils/constants";

export const CardiacSurgeryMain = () => {
  const { isDesktop, breakpoint } = useBreakpoint();

  // const imgRef = useRef<HTMLImageElement | null>(null);

  // const { sectionHeight, handleImageLoad } = useSectionSizeFromImageHeight(
  //   imgRef,
  //   isDesktop,
  // );

   const cardiacSectionButtons = [
    { id: 1, text: "Инфо" },
    { id: 2, text: "Продукция" },
    { id: 3, text: "Сопровождение" },
  ];

  return (
    <div
      className={`relative mt-[-75px] h-[700px] w-full overflow-x-clip bg-greenish-yellow bg-cover text-white desktop:h-[650px]`}
      // style={{
      //   height: isDesktop ? `${sectionHeight}px` : "750px",
      // }}
    >
      <img
        // ref={imgRef}
        src={breakpoint !== "mobile" ? bgMainDesktop : bgMain}
        alt="Transbiotech"
        className="absolute right-0 top-0 z-[2] object-contain desktop:right-[-150px] desktop:top-[125px] desktop:h-[85%]"
        // onLoad={handleImageLoad}
      />

      <div
        className="relative z-30 mx-auto flex h-full w-full max-w-[1200px] flex-col gap-[15px] px-5 desktop:gap-[25px] desktop:px-[80px]">
        <h1 className="z-1 mob-head-2 desktop:head-1-1 z-30 mt-auto">
          Кардиохирургия
        </h1>
        <ul
          className="flex gap-[10px] text-[12px] font-semibold leading-[14.4px] desktop:gap-[20px] desktop:text-[18px] desktop:font-medium desktop:leading-[21.6px]">
          {cardiacSectionButtons.map((btn) => (
            <li key={btn.id}>
              <button
                className={`geologica-text flex h-[22px] items-center justify-center rounded-[20px] border border-gainsboro text-gainsboro px-[8px] tracking-tighter desktop:h-[38px] desktop:rounded-[63px] desktop:px-[16px] ${btn.id == 1 ? "bg-white text-greenish-yellow" : ""} `}
              >
                {btn.text}
              </button>
            </li>
          ))}
        </ul>

        <div className={"flex flex-col desktop:flex-row mb-[73px] mt-[10px] desktop:mb-[100px] desktop:mt-[15px]"}>
          <p
            className="mob-text-3 desktop:text-4 max-w-[274px] text-platinum  desktop:max-w-[333px]">
            {`Лечение острых и хронических заболеваний сердечно-сосудистой системы.`}
          </p>

          <p
            className="mt-[10px] desktop:mt-0 desktop:ml-[20px] mob-text-3 desktop:text-4 desktop:text-4  max-w-[274px] text-platinum  desktop:max-w-[422px]">
            {`Развиваем технологии\u00A0искусственного кровообращения, минимально инвазивного экстракорпорального кровообращения, внутриаортальной балонной контрпульсации, аортокоронарного шунтирования 
и\u00A0сосудистых протезов.`}
          </p>
        </div>
      </div>
    </div>
  );
};

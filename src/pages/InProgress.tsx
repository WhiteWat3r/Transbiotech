import inProgressImg from "@/assets/images/in-progress/in-progress-img.png";
import inProgressDesk from "@/assets/images/in-progress/in-progress-desk.png";

import useBreakpoint from "@/hooks/useBreakpoint";

export const InProgress = () => {
  const { isDesktop } = useBreakpoint();

  return (
    <div className="relative mt-[-75px] h-[698px] bg-platinum desktop:h-[820px]">
      <img
        src={isDesktop ? inProgressDesk : inProgressImg}
        alt=""
        className="absolute left-[50%] z-[1] mt-[-75px] h-[calc(100%+75px)] w-full translate-x-[-50%] object-cover desktop:mt-0 desktop:h-full"
      />
      <h2 className="mob-head-2 desktop:head-2 absolute bottom-[80px] left-[20px] z-20 max-w-[490px] text-white desktop:left-[80px]">
        {`страница в\u00A0разработке`}
      </h2>
    </div>
  );
};

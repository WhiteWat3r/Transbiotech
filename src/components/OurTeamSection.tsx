import { TeamSwiper } from "./TeamSwiper";

export const OurTeamSection = () => {
  return (
    <div className="relative flex min-h-screen w-full flex-col px-[20px] desktop:px-[80px]">
      <div className="mt-[115px] flex flex-col desktop:mt-[21vh] desktop:flex-row desktop:justify-between">
        <h2 className="geologica-text text-[32px] font-medium leading-[22px] text-[#565656] desktop:text-[72px] desktop:leading-[65px]">
          команда
        </h2>

        <div className="mb-[42px] mt-[20px] max-w-[217px] self-end text-[14px] leading-[17px] text-[#929292] desktop:mb-[50px] desktop:mt-0 desktop:max-w-[44vw] desktop:text-[22px] desktop:leading-[26px] desktop:text-[#808080]">
          <p className="mb-[20px] desktop:mb-[28px]">
            Transbiotech — это дружная команда единомышленников.
          </p>
          <p className="">
            Нас всех объединяют единые{" "}
            <span className="rounded-[30px] border-[1px] border-[#6A78C1] px-[8px]">{`цели\u00A0и\u00A0ценности`}</span>
          </p>
        </div>
      </div>

      <TeamSwiper />
    </div>
  );
};

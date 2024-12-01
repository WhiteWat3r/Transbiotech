import { TeamSwiper } from "./TeamSwiper";

export const OurTeamSection = () => {
  return (
    <div className="relative flex min-h-[750px] desktop:min-h-[800px] flex-col px-[20px] desktop:px-[80px] z-30 mx-auto w-full max-w-[1440px]">
      <div className="mt-[115px] flex flex-col desktop:mt-[21vh] desktop:flex-row desktop:justify-between">
        <h2 className="geologica-text text-[32px] font-medium leading-[22px] text-grey-1 desktop:text-[72px] desktop:leading-[65px]">
          команда
        </h2>

        <div className="mb-[42px] mt-[20px] max-w-[217px] self-end text-[14px] leading-[17px] text-[#808080] desktop:mb-[50px] desktop:mt-0 desktop:max-w-[510px] desktop:text-[22px] desktop:leading-[26px] desktop:text-grey-2">
          <p className="">
            Transbiotech — это дружная команда единомышленников. 
            <span className="font-semibold">
            {" "}Нас всех объединяют единые{" "}
            {`цели\u00A0и\u00A0ценности`}
          </span>
          </p>

        </div>
      </div>

      <TeamSwiper />
    </div>
  );
};

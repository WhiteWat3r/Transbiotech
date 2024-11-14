import React from "react";
import bg from "../assets/bg/about-us-bg.png";
import bubble from "../assets/bubble.png";

const achievements = [
  {
    id: 1,
    title:
      "11 лет — официальный дистрибьютор ведущих зарубежных производителей",
  },
  {
    id: 2,
    title:
      "В 2022 создали и вывели на рынок первый российский аппарат ЭКМО Ex-Stream",
  },
  {
    id: 3,
    title:
      "В 2022 году запатентовали уникальную технологию применения аппарта Ex-Stream в донорстве",
  },
  {
    id: 4,
    title: "В 2024 году вышли на международный рынок",
  },
];

export const AboutUsSection = () => {
  return (
    <div className="relative w-full min-h-[750px] flex flex-col px-[20px]">
      <img
        src={bg}
        alt="О нас"
        className="w-full h-full cover absolute top-0 left-0 z-[1]"
      />
      <img
        src={bubble}
        alt=""
        className="h-[190px] absolute top-[510px] left-0"
      />

      <h2 className="text-[#565656] geologica-text font-medium text-[32px] leading-[22px] mt-[115px] mb-[40px]">
        о нас
      </h2>

      <ul className="w-full flex flex-col gap-[30px]">
        {achievements.map((item) => (
          <li className="border-solid border-t-[2px] border-[#92929280] flex justify-between relative">
            <span className="w-[10px] h-[10px] bg-[#929292] rounded-[50%] absolute top-[-6px] z-2" style={{left: item.id === 1 ? '0' :`${item.id * 60}px`}}/>
            <span className=" text-[#92929280] font-medium geologica-text text-[60px] leading-[72px]">0{item.id}</span>
            <p className="max-w-[217px] text-[#6A78C1] text-[14px] leading-[17px] font-semibold uppercase mt-[20px]">{item.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

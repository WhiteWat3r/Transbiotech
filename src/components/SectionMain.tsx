import { CSSProperties } from "react";
import bgMain from "../assets/bg/bg-main.png";

const buttons = [
  {
    id: 1,
    text: "перфузия",
    color: "#6A78C1",
  },
  {
    id: 2,
    text: "кардиология",
    color: "#90882B",
  },
  {
    id: 3,
    text: "аритмология",
    color: "#E04918",
  },
  {
    id: 4,
    text: "скорая помощь",
    color: "#EA7A92",
  },
];

export const SectionMain = () => {
  return (
    <div className="relative w-full min-h-[750px]">
      <img
        src={bgMain}
        alt="asd"
        className="w-full h-full cover absolute top-[-120px] left-0 z-[1]"
      />
      <div className="w-full h-full px-5 relative z-[2]">
        <div className="text-[14px] leading-[16px] text-[#565656] max-w-[218px] ml-auto mb-[200px]">
          <p className="">
            {
              "Первый российский дистрибьютор медицинского оборудования, разработавший аппарат\u00A0ЭКМО."
            }
          </p>
          <p className="font-semibold">
            {"Мы —\u00A0компания, готовая предложить большее."}
          </p>
        </div>

        <ul className="flex flex-wrap gap-[10px] max-w-[240px] mb-[20px]">
          {buttons.map((btn, index) => (
            <li key={btn.id}>
              <button
                className={`h-[30px] text-[#212121] rounded-[45px] px-[11px] geologica-text text-[12px] font-medium 
                  bg-white animate-glow`}
                style={
                  {
                    animationDelay: `${index * 0.6}s`,
                    "--btn-color": btn.color,
                  } as CSSProperties
                }
              >
                {btn.text}
              </button>
            </li>
          ))}
        </ul>

        <h1 className="text-[46px] leading-[44px] text-[#565656] geologica-text font-semibold">
          Transbiotech. Продлевая жизнь
        </h1>
      </div>
    </div>
  );
};
